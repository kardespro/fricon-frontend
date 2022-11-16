/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  async redirects() {
        return [
            {
                source: '/invite',
                destination: 'https://discord.com/oauth2/authorize?client_id=1035448764384681984&permissions=8',
                permanent: true
            },
            {
                source: '/discord',
                destination: 'https://discord.gg/kJKmuszF32',
                permanent: true
            }
        ];
    }
}

export default nextConfig
