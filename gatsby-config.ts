import type { GatsbyConfig } from "gatsby";

const config: GatsbyConfig = {
  siteMetadata: {
    title: `Brows Story`,
    description: ``,
    image: `/icon.png`,
    siteUrl: `localhost:8000`,
  },
  graphqlTypegen: true,
  plugins: [
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    "gatsby-transformer-remark",
    "gatsby-plugin-styled-components",
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [`Cinzel`, `Montserrat\:300,400,500,600,700`],
        display: "swap",
      },
    },

    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets/images`, // Ścieżka do folderu z plikami
      },
    },
  ],
};

export default config;
