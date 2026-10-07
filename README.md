This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Homepage and SEO

The homepage presents James Thang's mobile development work, React Native skills, coding-agent experience, books, and course. Portfolio entries live in `src/Pages/HomePage/projects.js`; the displayed project count follows that list. Shared search metadata and profile structured data live in `src/siteMetadata.js`.

`npm run build` compiles the app and runs `scripts/prerender-home.cjs`. The script renders the actual homepage and footer into `build/index.html`, resolves production image filenames, adds the homepage canonical and ProfilePage/Person JSON-LD, and generates `build/sitemap.xml`. The browser hydrates this HTML. The build fails if the homepage metadata, project links, or image references are incomplete.

Deploy the complete `build/` directory. `build/spa.html` is the separate app shell for deep links; `public/_redirects` sends unmatched paths there while the existing root index is served normally. Hosts that do not support this redirects file must configure the same fallback to `/spa.html`, not `/index.html`, to avoid serving homepage content and its canonical on app URLs. The development server continues to use its normal React fallback.

After deployment, submit `https://www.jamesthang.com/sitemap.xml` in Google Search Console and inspect the homepage URL. App landing pages still render on the client; prerendering those pages with app-specific metadata is the next SEO improvement. Search rankings and rich-result display depend on search engines and are not guaranteed by markup.

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
