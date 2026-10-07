This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Professional pages and SEO

The site presents James Thang as an iOS specialist, SwiftUI instructor, and technical author, with React Native and coding-agent experience as supporting capabilities. Portfolio entries live in `src/Pages/HomePage/projects.js`. Professional page content and verified book/course links live in `src/Pages/Professional/content.js`; shared metadata and Person identity live in `src/siteMetadata.js`.

English is the main professional language. `/about` and `/swiftui-training` have genuine Vietnamese versions at `/vi/about` and `/vi/swiftui-training`, with reciprocal hreflang. The consulting, books, product walkthroughs, and learning notes link back to the same author identity. New content should use accurate facts and evidence; update dates only when content changes.

`npm run build` compiles the app and runs `scripts/prerender-home.cjs`. It renders public pages into route-specific `build/<route>/index.html` files, adds distinct metadata and appropriate JSON-LD, and generates `sitemap.xml` and `404.html`. The browser hydrates the same React tree. The build checks local links, image references, headings on professional pages, and reciprocal translations. The local-storage expense tool stays on a client shell.

Deploy the **complete `build/` directory**. For hosts that support `_redirects`, real generated files take priority, `/cost-tracking` uses `/spa.html`, and unknown routes return `/404.html` with HTTP 404. On other hosts configure these behaviors explicitly. Do not use a blanket HTTP-200 rewrite to the homepage. Test trailing slash normalization on your host; canonical URLs omit trailing slashes except the root.

Netlify automatically deploys when a PR merges into `master`, using the existing hosting configuration. After deployment, verify initial HTML for the homepage, `/about`, `/vi/about`, `/vola`, and `/case-studies/vola`; verify `/sitemap.xml` is XML and a random missing route returns HTTP 404. Submit the sitemap in Google Search Console and Bing Webmaster Tools using the owner accounts. Review actual crawler access in hosting logs.

The research rationale and observational measurement plan are in `docs/ai-visibility-brand-plan.md`. Search indexing and AI citations depend on the platforms; accessible HTML and factual content do not guarantee inclusion.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
