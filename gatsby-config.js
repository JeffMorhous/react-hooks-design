module.exports = {
  siteMetadata: {
    title: `Design and Code React Apps`,
    description: `Here I'll be learning about a bunch of fun React stuff from Meng To`,
    author: `@jeffmorhous`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/static/images`,
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
