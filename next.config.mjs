 /** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'cdn.lynnux.xyz',
                port: '',
                pathname: '/**',
            },
            {
                protocol: 'https',
                hostname: 'opengraph.githubassets.com',
                port: '',
                pathname: '/**'
            }
        ],
    },
};

export default nextConfig;
