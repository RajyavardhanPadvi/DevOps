import withPlaiceholder from "@plaiceholder/next";

const nextConfig = {
    images: {
        remotePatterns: [
            { hostname: 'res.cloudinary.com', protocol: 'https', port: '' },
            { hostname: "avatars.githubusercontent.com" , protocol: 'https' , port: ''},
            { hostname:"example.com", protocol:"https", port: ''},
            { hostname:"imgak.mmtcdn.com", protocol:"https", port: ''}
        ]
    },
    webpack(config) {
        config.experiments = {
            ...config.experiments,
            topLevelAwait: true,
        }
        return config
    }
}

export default withPlaiceholder(nextConfig)