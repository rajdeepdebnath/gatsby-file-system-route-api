require("dotenv").config()

module.exports = {
    plugins: [
      {
        resolve: `gatsby-source-contentful`,
        options: {
          spaceId: `f1vak80ez8so`,
          // Learn about environment variables: https://gatsby.dev/env-vars
          accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
        },
      },
      `gatsby-plugin-image`,
    ],
  }