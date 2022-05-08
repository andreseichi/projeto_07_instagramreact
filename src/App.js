import { Header } from './components/Header';
import { Stories } from './components/Stories';
import { Posts } from './components/Posts';
import { Profile } from './components/Profile';
import { Suggestion } from './components/Suggestion';
import { Link } from './components/Link';

export function App() {
  const profile = {
    srcProfile: './assets/images/dog-ufpa-pixelado-spotify.png',
    nick: 'andre_seichi',
    name: 'Tashiro',
  };

  const suggestions = [
    {
      srcProfile: './assets/images/badvibesmemes.png',
      nick: 'bad.vibes.memes',
      details: 'Segue você',
    },
    {
      srcProfile: './assets/images/chibirdart.png',
      nick: 'chibirdart',
      details: 'Segue você',
    },
    {
      srcProfile: './assets/images/razoesparaacreditar.png',
      nick: 'razoesparaacreditar',
      details: 'Novo no Instagram',
    },
    {
      srcProfile: './assets/images/adorableanimals.png',
      nick: 'adorableanimals',
      details: 'Segue você',
    },
    {
      srcProfile: './assets/images/smallcutecats.png',
      nick: 'smallcutecats',
      details: 'Segue você',
    },
  ];

  const links = [
    {
      href: '#sobre',
      text: 'Sobre',
    },
    {
      href: '#ajuda',
      text: 'Ajuda',
    },
    {
      href: '#imprensa',
      text: 'Imprensa',
    },
    {
      href: '#api',
      text: 'Api',
    },
    {
      href: '#carreiras',
      text: 'Carreiras',
    },
    {
      href: '#privacidade',
      text: 'Privacidade',
    },
    {
      href: '#termos',
      text: 'Termos',
    },
    {
      href: '#localizações',
      text: 'Localizações',
    },
    {
      href: '#relevantes',
      text: 'Contas mais relevantes',
    },
    {
      href: '#hashtags',
      text: 'Hashtags',
    },
    {
      href: '#idioma',
      text: 'Idioma',
    },
  ];

  return (
    <>
      <Header />

      <main className="conteudo">
        <div className="conteudo-esquerda">
          <Stories />
          <Posts />
        </div>

        <div className="conteudo-direita">
          <div className="sidebar">
            <Profile {...profile} />

            <div className="sugestoes">
              <div className="sugestoes-info">
                <p className="sugestoes-voce">Sugestões para você</p>
                <a className="sugestoes-ver" href="#sugestoes">
                  Ver tudo
                </a>
              </div>

              <div className="sugestoes-perfils">
                {suggestions.map((suggestion) => (
                  <Suggestion key={suggestion.nick} {...suggestion} />
                ))}
              </div>
            </div>

            <div className="sobre">
              <div className="links-sobre">
                {links.map(({ href, text }) => (
                  <Link href={href} text={text} key={text} />
                ))}
              </div>
              <div className="copyright">© 2021 INSTAGRAM DO FACEBOOK</div>
            </div>
          </div>
        </div>
      </main>

      <footer className="footer-mobile">
        <div className="footer-mobile-icones">
          <a href="#home">
            <ion-icon name="home"></ion-icon>
          </a>
          <a href="#search">
            <ion-icon name="search-outline"></ion-icon>
          </a>
          <a href="#add">
            <ion-icon name="add-circle-outline"></ion-icon>
          </a>
          <a href="#like">
            <ion-icon name="heart-outline"></ion-icon>
          </a>
          <a href="#profile">
            <ion-icon name="person-outline"></ion-icon>
          </a>
        </div>
      </footer>
    </>
  );
}
