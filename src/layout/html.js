import React from 'react';

import { renderToString } from 'react-dom/server';

export function Html(props) {
  const {
    metadata,
    component,
    script,
    state
  } = props;


  const content = component ? renderToString(component) : '';

  return (
    <html className="no-js" lang="en">

    <head>
      <meta charSet="utf-8" />
      <meta httpEquiv="x-ua-compatible" content="ie=edge" />

      <meta name="author" content="Hermanos Clever" />
      <meta name="description" content={ metadata ? metadata.description : 'Sin definir'} />
      <meta name="keywords" content={ metadata ? metadata.keywords : 'Sin definir'} />

      <meta property="og:title" content={ metadata ? metadata.title : 'Sin definir'} />
      <meta property="og:site_name" content="El Caso" />
      <meta property="og:description" content={ metadata ? metadata.description : 'Sin definir'} />
      <meta property="og:image" content={ metadata ? metadata.image : 'Sin definir'} />
      <meta property="og:type" content="website" />
      <meta property="og:locale" content="es_ES" />

      <meta property="og:image:width" content="714" />
      <meta property="og:image:height" content="865" />

      <title>{ metadata ? metadata.title : 'Sin definir'}</title>

      <meta name="viewport" content="width=device-width, initial-scale=1" />
      
      <link rel="apple-touch-icon" sizes="57x57" href="static/images/icon/apple-icon-57x57.png" />
      <link rel="apple-touch-icon" sizes="60x60" href="static/images/icon/apple-icon-60x60.png" />
      <link rel="apple-touch-icon" sizes="72x72" href="static/images/icon/apple-icon-72x72.png" />
      <link rel="apple-touch-icon" sizes="76x76" href="static/images/icon/apple-icon-76x76.png" />
      <link rel="apple-touch-icon" sizes="114x114" href="static/images/icon/apple-icon-114x114.png" />
      <link rel="apple-touch-icon" sizes="120x120" href="static/images/icon/apple-icon-120x120.png" />
      <link rel="apple-touch-icon" sizes="144x144" href="static/images/icon/apple-icon-144x144.png" />
      <link rel="apple-touch-icon" sizes="152x152" href="static/images/icon/apple-icon-152x152.png" />
      <link rel="apple-touch-icon" sizes="180x180" href="static/images/icon/apple-icon-180x180.png" />
      <link rel="icon" type="image/png" sizes="192x192"  href="static/images/icon/android-icon-192x192.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="static/images/icon/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="96x96" href="static/images/icon/favicon-96x96.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="static/images/icon/favicon-16x16.png" />
   
      <link rel="stylesheet" href="static/styles/styles.css" type="text/css"/>
      <link rel="stylesheet" href="static/styles/fonts.css" type="text/css"/>
      <base href="/" />
      {/* Place favicon.ico in the root directory */}

      {(() => {
        if (__DEV__ === false) {
          return false;
        }

        return (
          <link rel="icon" href="data:;base64,iVBORw0KGgo=" />
        );
      })()}
    </head>

    <body>
      <div id="root" dangerouslySetInnerHTML={{ __html: content }} />

      <script dangerouslySetInnerHTML={{ __html: `window.__INITIAL_STATE__ = ${JSON.stringify(state)};` }} />
      <script src={script} />
    </body>

    </html>
  );
}

export default Html;
