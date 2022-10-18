# React okta aws demo

[![Lint, Build, Test](https://github.com/medly/medly-components/workflows/Lint,%20Build,%20Test/badge.svg)](https://github.com/medly/medly-components/actions?query=workflow%3A%22Lint%2C+Build%2C+Test%22)
[![react version](https://img.shields.io/badge/react-%5E17.0.2-blue)](https://www.npmjs.org/package/react)
[![styled-components version](https://img.shields.io/badge/styled--components-%5E5.3.1-blue)](https://www.npmjs.com/package/styled-components)
[![typescript version](https://img.shields.io/badge/types-TypeScript-blue?style=flat-square)](https://www.npmjs.com/package/typescript)

## Technology / Tools used 🛠

- 🔥 [React](https://github.com/facebook/react) - A JavaScript library for building user interfaces
- ⛑ [Typescript](https://www.typescriptlang.org/) - TypeScript is JavaScript with syntax for types
- 💥 [Babel](https://babeljs.io/) - Babel is a JavaScript compiler (from their website 😜)
- 💅 [Styled-components](https://www.styled-components.com) - Simply write css in js
- 🐐 [React-testing-library](https://github.com/kentcdodds/react-testing-library) - Testing Library to test your react components
- 🔐 [Okta](https://www.okta.com) - Authentication provider

## Overview of codebase

- `components`: Reuseable react components
- `constants`: Constants like api url
- `effects`: Custom react hooks
- `icons` : Listens to kinesis streams and stores data in Postgres database
- `routes` : Application routes
- `theme` : Overridden theme of medly-components/theme
- `utils` : Utility functions

## Local Setup

- Clone the repo
  - https - `git clone https://github.com/scalereal/okta-aws-react-app.git`
  - ssh - `git clone git@github.com:scalereal/okta-aws-react-app.git`
- Run `yarn` to install dependencies
- Run `yarn watch` to run locally and connect with dev env

**Note: The UI application runs on port `localhost:3001`**

## npm & yarn scripts

- With npm use `npm run <command>`
- With yarn use `yarn <command>`

- `dist` to build your project
- `dist:analyze` to analyze the bundle size
- `lint:css` to run the css lint
- `lint:ts` to run the ts lint
- `lint` to run both css & ts lint
- `test` to run tests and type check
- `test:update` to upgrate snapshots
- `test:watch` to watch tests
- `type-check` to run tsc to check types
- `test:jest` to run test only
- `test:compact` to list files with failed tests
- `watch` to run your project locally with connection to the dev env
- `clean` to delete dist, coverage folders

## Add .env file to run locally

- `APP_CLIENT_ID` okta client Id will get from okta app
- `AUTH_ISSUER` okta domain will get when we create okta account. add full url (eg. 'https://dev-00000.okta.com')
- `AWS_REGION`= aws s3 bucket region
- `AWS_ROLE_ARN`= aws role ARN will get from new role creation and by attaching new created policy
- `AWS_S3_BUCKET_NAME`= aws s3 bucket name

## Add above env variables to run on production
