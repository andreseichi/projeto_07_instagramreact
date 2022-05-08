import { Header } from './components/Header';
import { Stories } from './components/Stories';
import { Posts } from './components/Posts';

export function App() {
  return (
    <>
      <Header />

      <main class="conteudo">
        <div class="conteudo-esquerda">
          <Stories />
          <Posts />
        </div>

        <div class="conteudo-direita">
          <div class="sidebar">
            <div class="perfil">
              <a href="">
                <img
                  class="perfil-foto"
                  src="./assets/images/dog-ufpa-pixelado-spotify.png"
                  alt=""
                />
              </a>
              <div class="perfil-info">
                <a class="perfil-nick" href="">
                  andre_seichi
                </a>
                <p class="perfil-nome">Tashiro</p>
              </div>
            </div>

            <div class="sugestoes">
              <div class="sugestoes-info">
                <p class="sugestoes-voce">Sugestões para você</p>
                <a class="sugestoes-ver" href="">
                  Ver tudo
                </a>
              </div>

              <div class="sugestoes-perfils">
                <div class="sugestao">
                  <div class="sugestao-perfil">
                    <img
                      class="sugestao-perfil-foto"
                      src="./assets/images/badvibesmemes.png"
                      alt=""
                    />
                    <div class="sugestao-perfil-info">
                      <p class="sugestao-perfil-nick">bad.vibes.memes</p>
                      <p class="sugestao-perfil-detalhes">Segue você</p>
                    </div>
                  </div>

                  <div class="seguir">
                    <p>Seguir</p>
                  </div>
                </div>

                <div class="sugestao">
                  <div class="sugestao-perfil">
                    <img
                      class="sugestao-perfil-foto"
                      src="./assets/images/chibirdart.png"
                      alt=""
                    />
                    <div class="sugestao-perfil-info">
                      <p class="sugestao-perfil-nick">chibirdart</p>
                      <p class="sugestao-perfil-detalhes">Segue você</p>
                    </div>
                  </div>

                  <div class="seguir">
                    <p>Seguir</p>
                  </div>
                </div>

                <div class="sugestao">
                  <div class="sugestao-perfil">
                    <img
                      class="sugestao-perfil-foto"
                      src="./assets/images/razoesparaacreditar.png"
                      alt=""
                    />
                    <div class="sugestao-perfil-info">
                      <p class="sugestao-perfil-nick">razoesparaacreditar</p>
                      <p class="sugestao-perfil-detalhes">Novo no Instagram</p>
                    </div>
                  </div>

                  <div class="seguir">
                    <p>Seguir</p>
                  </div>
                </div>

                <div class="sugestao">
                  <div class="sugestao-perfil">
                    <img
                      class="sugestao-perfil-foto"
                      src="./assets/images/adorableanimals.png"
                      alt=""
                    />
                    <div class="sugestao-perfil-info">
                      <p class="sugestao-perfil-nick">adorableanimals</p>
                      <p class="sugestao-perfil-detalhes">Segue você</p>
                    </div>
                  </div>

                  <div class="seguir">
                    <p>Seguir</p>
                  </div>
                </div>

                <div class="sugestao">
                  <div class="sugestao-perfil">
                    <img
                      class="sugestao-perfil-foto"
                      src="./assets/images/smallcutecats.png"
                      alt=""
                    />
                    <div class="sugestao-perfil-info">
                      <p class="sugestao-perfil-nick">adorableanimals</p>
                      <p class="sugestao-perfil-detalhes">Segue você</p>
                    </div>
                  </div>

                  <div class="seguir">
                    <p>Seguir</p>
                  </div>
                </div>
              </div>
            </div>

            <div class="sobre">
              <div class="links-sobre">
                <a class="link" href="">
                  Sobre
                </a>
                <a class="link" href="">
                  Ajuda
                </a>
                <a class="link" href="">
                  Imprensa
                </a>
                <a class="link" href="">
                  API
                </a>
                <a class="link" href="">
                  Carreiras
                </a>
                <a class="link" href="">
                  Privacidade
                </a>
                <a class="link" href="">
                  Termos
                </a>
                <a class="link" href="">
                  Localizações
                </a>
                <a class="link" href="">
                  Contas mais relevantes
                </a>
                <a class="link" href="">
                  Hashtags
                </a>
                <a class="link" href="">
                  Idioma
                </a>
              </div>
              <div class="copyright">© 2021 INSTAGRAM DO FACEBOOK</div>
            </div>
          </div>
        </div>
      </main>

      <footer class="footer-mobile">
        <div class="footer-mobile-icones">
          <a href="">
            <ion-icon name="home"></ion-icon>
          </a>
          <a href="">
            <ion-icon name="search-outline"></ion-icon>
          </a>
          <a href="">
            <ion-icon name="add-circle-outline"></ion-icon>
          </a>
          <a href="">
            <ion-icon name="heart-outline"></ion-icon>
          </a>
          <a href="">
            <ion-icon name="person-outline"></ion-icon>
          </a>
        </div>
      </footer>
    </>
  );
}
