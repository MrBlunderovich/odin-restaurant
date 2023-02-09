import Mainpage from "./mainpage";
import "./style.css";
//
const contentDiv = document.getElementById("content");
const content = `
<div class="container">
        <header class="header">
          <h1>Webpack Cafe</h1>
          <div class="nav">page1</div>
          <div class="nav">page2</div>
          <div class="nav">page3</div>
        </header>
        <main class="main">
          <div class="main-content">
          </div>
        </main>
        <footer class="footer">Photo from picsum.photos by Luke Chesser</footer>
      </div>
`;
contentDiv.innerHTML = content;
const mainContentDiv = document.querySelector(".main-content");

mainContentDiv.appendChild(Mainpage());
