// template literal
const navigation = document.querySelector('#navbar');
navigation.innerHTML += `
<header id="nav">

    <div class="nav-container">
      <a href="index.html"><img class="Logo" src="../assets/logo/smuknu_logo.png" alt="logo ModelIN"></a>

      <nav id="menu">
        <ul>
          <li><a href="index.html">Forside</a></li>
          <li><a href="produkter.html">Vores Produkter</a></li>
          <li><a href="sundhed.html">Spørg om sundhed</a></li>
          <li><a href="medlem.html">Bliv Medlem</a></li>
        </ul>
      </nav>

      <div onclick="menuShow()" id="burger">
        <svg id="burgermenu" viewBox="0 0 448 512" title="bars">
          <path d="M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z" />
        </svg>
      </div>
    </div>

  </header>
`

// burgermenu start
// functionen her i javascript fungere når on click på burgermenuen svg i index html så reagere
// og tilføjes classen "show" til navbaren
function menuShow() {
  document.querySelector("#menu").classList.toggle("show");
  }
  // burgermenu end