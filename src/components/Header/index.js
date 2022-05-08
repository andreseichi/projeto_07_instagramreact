export function Header() {
  return (
    <header class="header">
      <nav class="nav">
        <div class="logo">
          <a class="logo-instagram" href="#logo">
            <ion-icon name="logo-instagram"></ion-icon>
          </a>
          <div class="separator"></div>
          <a class="logo-nome" href="#logo-nome">
            <img src="./assets/images/logo.png" alt="" />
          </a>
        </div>

        <div class="pesquisar">
          <input type="text" placeholder="Pesquisar" />
        </div>

        <div class="links">
          <a class="link" href="#mensagem">
            <ion-icon name="paper-plane-outline"></ion-icon>
          </a>
          <a class="link" href="#descobrir">
            <ion-icon name="compass-outline"></ion-icon>
          </a>
          <a class="link" href="#curtidas">
            <ion-icon name="heart-outline"></ion-icon>
          </a>
          <a class="link" href="#perfil">
            <ion-icon name="person-outline"></ion-icon>
          </a>
        </div>
      </nav>

      <nav class="nav-mobile">
        <a class="logo-instagram" href="#logo">
          <ion-icon name="logo-instagram"></ion-icon>
        </a>
        <a class="logo-nome" href="#logo-nome">
          <img src="./assets/images/logo.png" alt="" />
        </a>

        <a class="link" href="#mensagem">
          <ion-icon name="paper-plane-outline"></ion-icon>
        </a>
      </nav>
    </header>
  );
}
