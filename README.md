# :blue_car: rentalcars.com one page site

## Introduction

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

As this is a simple site and requires no routing, it was bootstrapped with create-react-app typescript template. If this was a more complex project, I would use NextJS and take advantage of the file based routing approach.

 [Styled Components](https://styled-components.com/docs/basics) was used for the styling of components.  [Emotion](https://emotion.sh/docs/introduction) could also have been used. This is my preference rather using large style sheets as its easy to keep track of specific styles for components, and prevents class name bugs. Other approches could have included [TailwindCSS](https://tailwindcss.com/docs/installation) or a UI framework such as [Chakra UI](https://chakra-ui.com/) or [MUI](https://github.com/mui/material-ui)

As this is a simple project,  [React Helmet](https://github.com/nfl/react-helmet) is used to control the metadata for SEO. Usually using Next.JS(https://nextjs.org/) or Gatsby would be a better approach.


## Local build and run

My package manager of choice is yarn, but NPM can also be used.

### Install packages

 Run `yarn` in install all packages in same directory as `package.json`

### Run locally

Run `yarn start` in same directory as `package.json`

Runs the app in development mode.
Open http://localhost:3000 to view it in the browser.

### Storybook 
To make exploring UI components easier for fellow developers, there is a [Storybook Instance](https://storybook.js.org/) in this project. This can be ran using the command `yarn storybook`. Open http://localhost:6006 to view it in the browser. 

## Deployment

This project is deployed to [https://kukulaka.github.io/](https://kukulaka.github.io).


## Project structure

The project structure follows [Atomic design structure](https://andela.com/insights/structuring-your-react-application-atomic-design-principles/). It is a good way of keeping UI components organised and makes components easier to find in larger projects. 

## Http Requests

[Axios](https://www.npmjs.com/package/axios) was used for Http requests. The base url for the search endpoint is stored in the env file. **Have included an example env in the repo, but this would not normally be pushed to the repo!**. The URL of this endpoint is

### To Do

- [ ] Basic setup of project including atomic structure and ensure components are in dev 
- [ ] Setup up linting rules (ESLINT and Prettier) and precommit hook
- [ ] Restructure project to make sure storybook def and tests are at component level
- [ ] Styling of components as per [Rental Cars Live site](https://rentalcars.com)
- [ ] Accessability considerations as per [a11y](https://reactjs.org/docs/accessibility.html)
- [ ] Tests for components
- [ ] SEO for page using React Helmet
- [ ] Fetch search data when 2 or more characters are entered and use endpoint https://www.rentalcars.com/FTSAutocomplete.do?solrIndex=fts_en&solrRows={numberRow}&solrTerm={searchTerm}



## Testing
These can be found in the relevent component. Tests can be run using yarn test and yarn test:watch. Jest to run tests and Enzyme for mocking. 

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance. This folder is also used for deployment to Github pages

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn deploy`

This deploys the project to [https://kukulaka.github.io/](https://kukulaka.github.io).

### `yarn storybook`
This runs the storbook instance at Open [http://localhost:6006](http://localhost:6006) to view it in the browser.

### `yarn lint` and `yarn format`
This runs linters to format code. This is also ran as a predeploy hook