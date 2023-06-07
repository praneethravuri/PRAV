document.addEventListener("DOMContentLoaded", function () {
  var headerHtml = `
  <header id="header-space">
  <a href="./index.html" id="main-title">PRAV</a>
  <nav>
      <ul class="nav-links">
          <li class="menu-items"><a href="#header-space">Home</a></li>
          <li class="menu-items"><a href="#about">About Me</a></li>
          <li class="menu-items"><a href="#skills-tools">Skills & Tools</a></li>
          <li class="menu-items"><a href="#">Projects</a></li>
          <li class="menu-items"><a href="#">Resume</a></li>
          <li class="menu-items"><a href="#">Contact</a></li>
      </ul>
  </nav>
</header>
    `;

  var body = document.querySelector("body");
  body.innerHTML = headerHtml + body.innerHTML;
});