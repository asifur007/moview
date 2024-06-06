/** @type {import('next').NextConfig} */
// const nextConfig = {};

export const images = {
  remotePatterns: [
    {
      protocol: "https",
      hostname: "image.tmdb.org",
      //port: '',
      pathname: "**",
    },
  ],
};

//export default nextConfig;
