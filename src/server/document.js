import serialize from 'serialize-javascript';

export default ({
    appString,
    js,
    styles,
    helmet,
    data
}) => `
    <!doctype html>
    <html>
    <head>
        <meta charset="UTF-8"/>
        <meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0"/>
        <meta http-equiv="X-UA-Compatible" content="ie=edge"/>
        
        ${styles}
        
        ${helmet.title.toString()}
        ${helmet.link.toString()}
    </head>
    <body>
    
      <div id="react-root">${appString}</div>
      
      ${js}
    <script>window.__ROUTE_DATA__ = ${serialize(data)}</script>  
    </body>
    
    </html>
`;
