import { Header } from './components/Header';
import { Stories } from './components/Stories';

export function App() {
  return (
    <>
      <Header />

      <main class="conteudo">
        <div class="conteudo-esquerda">
          <Stories />

          <div class="posts">
            <div class="post">
              <header class="post-header">
                <div class="post-perfil">
                  <a href="">
                    <img
                      class="post-perfil-foto"
                      src="./assets/images/dog-ufpa-pixelado-spotify.png"
                      alt=""
                    />
                  </a>
                  <a class="post-perfil-nick" href="">
                    andre_seichi
                  </a>
                </div>

                <ion-icon name="ellipsis-horizontal-outline"></ion-icon>
              </header>

              <img
                class="post-foto"
                src="./assets/images/dog-ufpa-pixelado-spotify.png"
                alt=""
              />

              <footer class="post-footer">
                <div class="icones">
                  <div class="icones-esquerda">
                    <ion-icon name="heart-outline"></ion-icon>
                    <ion-icon name="chatbubble-outline"></ion-icon>
                    <ion-icon name="paper-plane-outline"></ion-icon>
                  </div>
                  <div class="icones-direita">
                    <ion-icon name="bookmark-outline"></ion-icon>
                  </div>
                </div>

                <div class="curtidas">
                  <img
                    class="curtida-perfil"
                    src="./assets/images/respondeai.png"
                    alt=""
                  />
                  <p>
                    Curtido por <span>respondeai</span> e
                    <span>outras 101.523 pessoas</span>
                  </p>
                </div>

                <div class="comentarios">
                  <div class="comentario-post-autor">
                    <a class="comentario-perfil-nick" href="">
                      andre_seichi
                    </a>
                    <span class="comentario-mensagem">
                      This is dog da UFPA 🐕
                    </span>
                  </div>
                  <div class="mais-comentarios">
                    Ver todos os 75 comentários
                  </div>

                  <div class="comentario">
                    <div class="comentario-perfil">
                      <a class="comentario-perfil-nick" href="">
                        respondeai
                      </a>
                      <span class="comentario-mensagem">nice</span>
                    </div>
                    <ion-icon name="heart-outline"></ion-icon>
                  </div>

                  <div class="comentario">
                    <div class="comentario-perfil">
                      <a class="comentario-perfil-nick" href="">
                        andre_seichi
                      </a>
                      <span class="comentario-mensagem">oiiiiiiiiii</span>
                    </div>
                    <ion-icon name="heart-outline"></ion-icon>
                  </div>

                  <time class="tempo-atras">há 1 dia</time>
                </div>
              </footer>

              <div class="adicionar-comentario">
                <ion-icon name="happy-outline"></ion-icon>
                <input type="text" placeholder="Adicione um comentário..." />
                <p class="publicar-comentario">Publicar</p>
              </div>
            </div>

            <div class="post">
              <header class="post-header">
                <div class="post-perfil">
                  <a href="">
                    <img
                      class="post-perfil-foto"
                      src="./assets/images/barked.png"
                      alt=""
                    />
                  </a>
                  <a class="post-perfil-nick" href="">
                    barked
                  </a>
                </div>

                <ion-icon name="ellipsis-horizontal-outline"></ion-icon>
              </header>

              <img class="post-foto" src="./assets/images/dog.png" alt="" />

              <footer class="post-footer">
                <div class="icones">
                  <div class="icones-esquerda">
                    <ion-icon name="heart-outline"></ion-icon>
                    <ion-icon name="chatbubble-outline"></ion-icon>
                    <ion-icon name="paper-plane-outline"></ion-icon>
                  </div>
                  <div class="icones-direita">
                    <ion-icon name="bookmark-outline"></ion-icon>
                  </div>
                </div>

                <div class="curtidas">
                  <img
                    class="curtida-perfil"
                    src="./assets/images/adorableanimals.png"
                    alt=""
                  />
                  <p>
                    Curtido por <span>adorableanimals</span> e
                    <span>outras 641.710 pessoas</span>
                  </p>
                </div>

                <div class="comentarios">
                  <div class="comentario-post-autor">
                    <a class="comentario-perfil-nick" href="">
                      barked
                    </a>
                    <span class="comentario-mensagem">🐕</span>
                  </div>
                  <div class="mais-comentarios">
                    Ver todos os 18 comentários
                  </div>

                  <div class="comentario">
                    <div class="comentario-perfil">
                      <a class="comentario-perfil-nick" href="">
                        respondeai
                      </a>
                      <span class="comentario-mensagem">nice</span>
                    </div>
                    <ion-icon name="heart-outline"></ion-icon>
                  </div>

                  <div class="comentario">
                    <div class="comentario-perfil">
                      <a class="comentario-perfil-nick" href="">
                        andre_seichi
                      </a>
                      <span class="comentario-mensagem">oiiiiiiiiii</span>
                    </div>
                    <ion-icon name="heart-outline"></ion-icon>
                  </div>

                  <time class="tempo-atras">há 1 dia</time>
                </div>
              </footer>

              <div class="adicionar-comentario">
                <ion-icon name="happy-outline"></ion-icon>
                <input type="text" placeholder="Adicione um comentário..." />
                <p class="publicar-comentario">Publicar</p>
              </div>
            </div>

            <div class="post">
              <header class="post-header">
                <div class="post-perfil">
                  <a href="">
                    <img
                      class="post-perfil-foto"
                      src="./assets/images/meowed.png"
                      alt=""
                    />
                  </a>
                  <a class="post-perfil-nick" href="">
                    meowed
                  </a>
                </div>

                <ion-icon name="ellipsis-horizontal-outline"></ion-icon>
              </header>

              <img
                class="post-foto"
                src="./assets/images/gato-telefone.png"
                alt=""
              />

              <footer class="post-footer">
                <div class="icones">
                  <div class="icones-esquerda">
                    <ion-icon name="heart-outline"></ion-icon>
                    <ion-icon name="chatbubble-outline"></ion-icon>
                    <ion-icon name="paper-plane-outline"></ion-icon>
                  </div>
                  <div class="icones-direita">
                    <ion-icon name="bookmark-outline"></ion-icon>
                  </div>
                </div>

                <div class="curtidas">
                  <img
                    class="curtida-perfil"
                    src="./assets/images/respondeai.png"
                    alt=""
                  />
                  <p>
                    Curtido por <span>respondeai</span> e
                    <span>outras 742.179 pessoas</span>
                  </p>
                </div>

                <div class="comentarios">
                  <div class="comentario-post-autor">
                    <a class="comentario-perfil-nick" href="">
                      meowed
                    </a>
                    <span class="comentario-mensagem">gatinho</span>
                  </div>
                  <div class="mais-comentarios">Ver todos os 6 comentários</div>

                  <div class="comentario">
                    <div class="comentario-perfil">
                      <a class="comentario-perfil-nick" href="">
                        respondeai
                      </a>
                      <span class="comentario-mensagem">nice</span>
                    </div>
                    <ion-icon name="heart-outline"></ion-icon>
                  </div>

                  <div class="comentario">
                    <div class="comentario-perfil">
                      <a class="comentario-perfil-nick" href="">
                        andre_seichi
                      </a>
                      <span class="comentario-mensagem">oiiiiiiiiii</span>
                    </div>
                    <ion-icon name="heart-outline"></ion-icon>
                  </div>

                  <time class="tempo-atras">há 1 dia</time>
                </div>
              </footer>

              <div class="adicionar-comentario">
                <ion-icon name="happy-outline"></ion-icon>
                <input type="text" placeholder="Adicione um comentário..." />
                <p class="publicar-comentario">Publicar</p>
              </div>
            </div>

            <div class="post">
              <header class="post-header">
                <div class="post-perfil">
                  <a href="">
                    <img
                      class="post-perfil-foto"
                      src="./assets/images/meowed.png"
                      alt=""
                    />
                  </a>
                  <a class="post-perfil-nick" href="">
                    ursinho
                  </a>
                </div>

                <ion-icon name="ellipsis-horizontal-outline"></ion-icon>
              </header>

              <video class="post-foto" muted autoplay loop>
                <source src="./assets/videos/video.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>

              <footer class="post-footer">
                <div class="icones">
                  <div class="icones-esquerda">
                    <ion-icon name="heart-outline"></ion-icon>
                    <ion-icon name="chatbubble-outline"></ion-icon>
                    <ion-icon name="paper-plane-outline"></ion-icon>
                  </div>
                  <div class="icones-direita">
                    <ion-icon name="bookmark-outline"></ion-icon>
                  </div>
                </div>

                <div class="curtidas">
                  <img
                    class="curtida-perfil"
                    src="./assets/images/respondeai.png"
                    alt=""
                  />
                  <p>
                    Curtido por <span>respondeai</span> e
                    <span>outras 1.319 pessoas</span>
                  </p>
                </div>

                <div class="comentarios">
                  <div class="comentario-post-autor">
                    <a class="comentario-perfil-nick" href="">
                      ursinho
                    </a>
                    <span class="comentario-mensagem">um urso ae</span>
                  </div>
                  <div class="mais-comentarios">
                    Ver todos os 15 comentários
                  </div>

                  <div class="comentario">
                    <div class="comentario-perfil">
                      <a class="comentario-perfil-nick" href="">
                        respondeai
                      </a>
                      <span class="comentario-mensagem">nice</span>
                    </div>
                    <ion-icon name="heart-outline"></ion-icon>
                  </div>

                  <div class="comentario">
                    <div class="comentario-perfil">
                      <a class="comentario-perfil-nick" href="">
                        andre_seichi
                      </a>
                      <span class="comentario-mensagem">belo urso</span>
                    </div>
                    <ion-icon name="heart-outline"></ion-icon>
                  </div>

                  <time class="tempo-atras">há 6 horas</time>
                </div>
              </footer>

              <div class="adicionar-comentario">
                <ion-icon name="happy-outline"></ion-icon>
                <input type="text" placeholder="Adicione um comentário..." />
                <p class="publicar-comentario">Publicar</p>
              </div>
            </div>
          </div>
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
