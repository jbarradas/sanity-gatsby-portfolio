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
                  buildHookId: '5e8636b5b8d73956f65ae0f0',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-studio-g5pgt4sv',
                  apiId: '1f2c7e5b-c1c2-4973-948f-a236c2bc017c'
                },
                {
                  buildHookId: '5e8636b56fc846ff32bd87cd',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-web-y3hqjouu',
                  apiId: '155dbf10-9138-4657-8899-29891e022662'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/jbarradas/sanity-gatsby-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio-web-y3hqjouu.netlify.com',
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
