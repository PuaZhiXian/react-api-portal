/** @type {import('next').NextConfig} */
const nextConfig = {}

module.exports = {
    async redirects() {
        console.log('redirecting')
        return [
            {
                source: '/',
                destination: '/sign/sign-in',
                permanent: true,
            },
        ]
    },
    async rewrites() {
        return [
            {
                source: '/sign/sign-in',
                destination: '/pages/sign',
            },
            {
                source: '/sign/forget',
                destination: '/pages/sign',
            },
            {
                source: '/sign/sign-up',
                destination: '/pages/sign',
            },
            {
                source: '/sign/reset',
                destination: '/pages/sign',
            }
        ]
    },
};
