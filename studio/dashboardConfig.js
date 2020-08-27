export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
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
                  buildHookId: '5f47803776a526a2d3cd3df0',
                  title: 'Sanity Studio',
                  name: 'nutritionist-sanity-nextjs-landing-pages-studio',
                  apiId: '3c2c6087-bc1f-46a4-96af-cccc9ea4910c'
                },
                {
                  buildHookId: '5f478037d0f5ffa43b9f270f',
                  title: 'Landing pages Website',
                  name: 'nutritionist-sanity-nextjs-landing-pages',
                  apiId: '58cf4206-5e7c-464a-b242-b9d9fc3f5534'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/Moayyad-Zakkar/nutritionist-sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://nutritionist-sanity-nextjs-landing-pages.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
