//
export default function mainpage() {
  const mainContentDiv = document.createElement("div");
  mainContentDiv.innerHTML = `
  Manuals used for setting up webpack can be found on webpack.js.org/guides in following sections:
  <li>
  Getting started
  </li>
  <li>
  Asset management
  </li>
  <li>
  Development
  </li>
    `;

  return mainContentDiv;
}
