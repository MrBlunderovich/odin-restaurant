import HomePage from "./homepage";
import MenuPage from "./menupage";
import ContactPage from "./contactpage";
import "./style.css";
//
const contentDiv = document.getElementById("content");
const content = `
<div class="container">
        <header class="header">
          <h1>Webpack Cafe</h1>
          <div data-destination="home" class="nav nav-home">Home</div>
          <div data-destination="menu" class="nav nav-menu">Menu</div>
          <div data-destination="contacts" class="nav nav-contacts">Contacts</div>
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
const navElements = document.querySelectorAll(".nav");
navElements.forEach((nav) => {
  nav.addEventListener("click", handleNavClick);
});
function handleNavClick(event, initialDestination) {
  let destination = "";
  if (event === undefined) {
    destination = initialDestination;
  } else {
    destination = event.target.dataset.destination;
  }
  navElements.forEach((nav) => {
    nav.classList.remove("active");
  });

  switch (destination) {
    case "home":
      mainContentDiv.innerHTML = "";
      mainContentDiv.appendChild(HomePage());
      document.querySelector(".nav-home").classList.add("active");
      break;
    case "menu":
      mainContentDiv.innerHTML = "";
      mainContentDiv.appendChild(MenuPage());
      document.querySelector(".nav-menu").classList.add("active");
      break;
    case "contacts":
      mainContentDiv.innerHTML = "";
      mainContentDiv.appendChild(ContactPage());
      document.querySelector(".nav-contacts").classList.add("active");
      break;

    default:
      break;
  }
}

mainContentDiv.appendChild(HomePage());
handleNavClick(undefined, "home");
