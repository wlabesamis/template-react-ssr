import React from 'react';

export default ({ staticContext = {} }) => {
    staticContext.status = 200;
    return <h1>This is Home page</h1>;
};
