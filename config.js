const config = {
  gatsby: {
    pathPrefix: '/',
    siteUrl: 'https://hasura.io',
    gaTrackingId: null,
    trailingSlash: false,
  },
  header: {
    logo: 'https://graphql-engine-cdn.hasura.io/learn-hasura/assets/homepage/brand.svg',
    logoLink: 'https://hasura.io/learn/',
    title:
      "<a href='https://www.tslang.cn/docs/home.html'><img class='img-responsive' src='https://graphql-engine-cdn.hasura.io/learn-hasura/assets/homepage/learn-logo.svg' alt='Learn logo' /></a>",
    githubUrl: 'https://github.com/Huauauaa/typescript-reference',
    helpUrl: '',
    tweetText: '',
    social: `
      <li>
        <a href="https://twitter.com/Harvey27171313" target="_blank" rel="noopener">
          <div class="twitterBtn">
            <img src='https://graphql-engine-cdn.hasura.io/learn-hasura/assets/homepage/twitter-brands-block.svg' alt={'Twitter'}/>
          </div>
        </a>
      </li>
    `,
    links: [{ text: '', link: '' }],
    search: {
      enabled: false,
      indexName: '',
      algoliaAppId: process.env.GATSBY_ALGOLIA_APP_ID,
      algoliaSearchKey: process.env.GATSBY_ALGOLIA_SEARCH_KEY,
      algoliaAdminKey: process.env.ALGOLIA_ADMIN_KEY,
    },
  },
  sidebar: {
    forcedNavOrder: [
      '/introduction', // add trailing slash if enabled above
      '/codeblock',
    ],
    collapsedNav: [
      '/codeblock', // add trailing slash if enabled above
    ],
    links: [{ text: 'TypeScript', link: 'https://www.typescriptlang.org/' }],
    frontline: false,
    ignoreIndex: true,
    title:
      "<a href='https://www.typescriptlang.org/'>TypeScript</a><div class='greenCircle'></div><a href='https://www.typescriptlang.org/docs/handbook/intro.html'>Handbook</a>",
  },
  siteMetadata: {
    title: 'TypeScript',
    description: 'The TypeScript Handbook',
    ogImage: null,
    docsLocation: 'https://github.com/Huauauaa/typescript-reference/tree/master/content',
    favicon: 'https://www.typescriptlang.org/favicon-32x32.png?v=8944a05a8b601855de116c8a56d3b3ae',
  },
  pwa: {
    enabled: false, // disabling this will also remove the existing service worker.
    manifest: {
      name: 'Gatsby Gitbook Starter',
      short_name: 'GitbookStarter',
      start_url: '/',
      background_color: '#6b37bf',
      theme_color: '#6b37bf',
      display: 'standalone',
      crossOrigin: 'use-credentials',
      icons: [
        {
          src: 'src/pwa-512.png',
          sizes: `512x512`,
          type: `image/png`,
        },
      ],
    },
  },
};

module.exports = config;
