const dotenv = require('dotenv');
const path = require('path');

dotenv.config();

const { spaceId, accessToken } = process.env;

module.exports = {
  siteMetadata: {
    title: 'Zachary Dominic Recordings',
    description:
      'Zachary started his love of music back in elementary school, when he discovered drumroll…. the violin. This quickly turned into a passion of all thing’s music related.',
    author: 'Matt Mahler',
    siteUrl: 'https://zacharydominicrecordings.com/',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Zachary Dominic`,
        short_name: `Zachary Dominic`,
        start_url: `/`,
        background_color: `#292929`,
        theme_color: `#292929`,
        // Enables "Add to Homescreen" prompt and disables browser UI (including back button)
        // see https://developers.google.com/web/fundamentals/web-app-manifest/#display
        display: `standalone`,
        icon: './src/images/ZDrecordingslogowhite.png',
        include_favicon: true, // Include favicon
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: path.join(__dirname, `src`, `images`),
      },
    },
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    'gatsby-plugin-styled-components',
    'gatsby-transformer-remark',
    {
      resolve: 'gatsby-source-contentful',
      options: {
        spaceId: 'q76lo926vdp8',
        accessToken: 'xbzS_-wA7I7IkROOVmmJjYKCgLZFOk4PCgRpKkZWFak',
      },
    },

    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [`Cormorant SC`, `Raleway`],
        display: 'swap',
      },
    },
    'gatsby-plugin-sass',
  ],
};
