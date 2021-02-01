module.exports = {
  siteMetadata: {
    description: "Personal page of Sageewan Subendran",
    locale: "en",
    title: "Sageewan Subendran",
  },
  plugins: [
    {
      resolve: "@wkocjan/gatsby-theme-intro",
      options: {
        basePath: "/",
        contentPath: "content/",
        showThemeLogo: false,
        theme: "bright-green",
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `GatsbyJS`,
        short_name: `GatsbyJS`,
        start_url: `/`,
        display: `minimal-ui`,
        icon: `content/images/favicon.png`,
      },
    },
  ],
}
