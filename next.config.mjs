/** @type {import('next').NextConfig} */
const nextConfig = {
  // 1. Dev Indicators (Jo 'N' badge hatane ke liye lagaya tha)
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
            value: 'DENY', // ✅ Ye add kiya (Hacking se bachane ke liye)
          },
          {
            key: 'Content-Security-Policy',
            value: "default-src 'self'; img-src 'self' https: data:; script-src 'self' 'unsafe-inline' 'unsafe-eval' https:;",
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