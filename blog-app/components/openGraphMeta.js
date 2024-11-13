import React from 'react';
import { Helmet } from 'react-helmet';

export default function OpenGraphMeta({ title, description, url, image, siteName }){
  return (
    <Helmet>
      {/* OpenGraph metadata */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={image} />
      <meta property="og:type" content="website" />
      {siteName && <meta property="og:site_name" content={siteName} />}

      {/* Twitter metadata */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
    </Helmet>
  );
};