//
export default function mainpage() {
  const mainContentDiv = document.createElement("div");
  mainContentDiv.innerHTML = `
<li>
  Here we have a page made as an excercise for a lesson on
  Javascript modules and Webpack.
</li>
<li>I probably should take some English lessons too.</li>
<li>
  At the top we have a navbar with three tabs, each of them displays
  different content.
</li>
<li>
  Those contents are written as three separate module files bundled
  by Webpack ang probably uglified into a disgusting mess.
</li>
  `;

  return mainContentDiv;
}
