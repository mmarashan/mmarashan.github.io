/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
    // @see https://nextjs.org/docs/pages/building-your-application/deploying/static-exports
    output: 'export',
    images: {
        unoptimized: true,
    },
   
    // Optional: Change links `/me` -> `/me/` and emit `/me.html` -> `/me/index.html`
    // trailingSlash: true,
   
    // Optional: Prevent automatic `/me` -> `/me/`, instead preserve `href`
    // skipTrailingSlashRedirect: true,
   
    // Optional: Change the output directory `out` -> `dist`
    distDir: 'build',

    webpack5: true,
    webpack: (config) => {
      config.resolve.fallback = { fs: false };
  
      return config;
    },
  }
   
  module.exports = nextConfig