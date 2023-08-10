import type { GatsbyConfig } from "gatsby";

const config: GatsbyConfig = {
  siteMetadata: {
    title: `Brows Story`,
    description: ``,
    image: `/icon.png`,
    siteUrl: `https://leezon.gatsbyjs.io/`,
  },
  graphqlTypegen: true,
  plugins: [
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
  ],
};

export default config;
