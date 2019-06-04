import React, { Component } from 'react';
import loadData from '../../helpers/loadData'

class Posts extends Component {
    constructor(props) {
        super(props);

        if (props.staticContext && props.staticContext.data) {
            this.state = {
                data: props.staticContext.data
            };
        } else {
            this.state = {
                data: []
            };
        }
    }

    componentDidMount() {
        setTimeout(() => {
            if (window.__ROUTE_DATA__) {
                this.setState({
                    data: window.__ROUTE_DATA__
                });
                delete window.__ROUTE_DATA__;
            } else {
                loadData('posts').then(data => {
                    this.setState({
                        data
                    });
                });
            }
        }, 0);
    }

    render() {
        const { data } = this.state;
        return <ul>{data.map(post => <li key={post.id}>{post.title}s</li>)}</ul>;
    }
}

export default Posts;
