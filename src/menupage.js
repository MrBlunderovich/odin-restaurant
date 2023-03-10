//
export default function mainpage() {
  const mainContentDiv = document.createElement("div");
  mainContentDiv.innerHTML = `
  Webpack setup for this exercise included following steps:
  <li>
    Creating <em>package.json</em> file
  </li>
  <li>
    Installing <em>webpack</em>
  </li>
  <li>
    Setting mode: <em>'development'</em>
  </li>
  <li>
    Installing <em>style-loader</em> and <em>css-loader</em>
  </li>
  <li>
    Adding image processing (probably unnecessary in this case as bg image is loaded from the web)
  </li>
  <li>
    Installing <em>webpack-dev-server</em> and choosing what browser to open page in
  </li>
  <li>
    Adding <em>inline-source-map</em> to webpack config
  </li>
  <li>
    Running <em>git subtree push --prefix dist origin gh-pages</em> in terminal to deploy project on github-pages from non-standard 'dist' directory
  </li>
  <li>
    Running <em>npm run build</em> to create js bundle file in dist folder (somehow webpack-server runs ok without doing so)
  </li>

    `;

  return mainContentDiv;
}
