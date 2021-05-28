This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/zeit/next.js/tree/canary/packages/create-next-app).

## Into

ReactJS/NextJS + Jest/Cypress + Storybook + Commitizen + TailwindCSS and please check `package.json` for details.

## Deploy on ZEIT Now

The easiest way to deploy your Next.js app is to use the [ZEIT Now Platform](https://zeit.co/) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

## Installation

Clone this repo to your machine, then cd into the repo and run
`yarn or npm install` . How you proceed after that depends on what you want to do:

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Working

You can start editing the page by modifying `src/pages/index.js` and for component `src/components/`.
. The page auto-updates as you edit the file.

## Building

To build the app as a stand alone executable, run `yarn build or npm run build`
for more Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/zeit/next.js/) - your feedback and contributions are welcome!

## Testing

ALWAYS WRITE TESTS FOR YOU CODE. Define them inside component.test.js, placed alongside your component (or util file). As you develop, always have a terminal open in which you run npm run test to run the test runner in watch mode. We use Jest for unit and snapshot tests and combine it with Enzyme for interaction tests. For easy function mocking and spying, we use Sinon.JS.

## Coding Style

This repo follows the StandardJS Style. To ensure this, a pre-commit hook is run that uses lint-staged first reformats staged files using Prettier (mainly for line-length) and then runs standard --fix on the reformatted code. This ensures that all code that gets committed reads in as similar a way as possible.
In addition, the usage of an editor extension like vscode-standardjs is recommended.

## Last But not least

Be happy and spread happiness
Keep Rocking\
Musa
