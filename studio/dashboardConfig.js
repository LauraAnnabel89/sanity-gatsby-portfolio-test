export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5ed4d30902b149e9f8b5916a',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-test-studio-5uwtqg7j',
                  apiId: 'eee87672-d8cd-44e0-8119-dff46f3dcd4d'
                },
                {
                  buildHookId: '5ed4d30987e8c771093a8abc',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-test-web-zauh2hks',
                  apiId: '7c29476c-0998-491d-bb49-31b0662a7758'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/LauraAnnabel89/sanity-gatsby-portfolio-test',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio-test-web-zauh2hks.netlify.app',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['sampleProject']},
      layout: {width: 'medium'}
    }
  ]
}
