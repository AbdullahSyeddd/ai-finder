/** @type {import('next').NextConfig} */
const nextConfig = {
  // 1. Dev Indicators
  devIndicators: {
    buildActivity: false,
    appIsrStatus: false,
  },

  // 2. Security Headers
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'Content-Security-Policy',
            // 👇 Yahan maine change kiya hai: 'connect-src' add kiya hai taake Google se baat ho sake
            value: "default-src 'self'; connect-src 'self' https://www.google-analytics.com https://analytics.google.com https://www.googletagmanager.com; img-src 'self' https: data:; script-src 'self' 'unsafe-inline' 'unsafe-eval' https:;",
          },
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff', 
          },
        ],
      },
    ];
  },
};

export default nextConfig;