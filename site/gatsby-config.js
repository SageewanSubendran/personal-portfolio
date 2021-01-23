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
        showThemeLogo: true,
        theme: "classic",
      },
    },
  ],
}
