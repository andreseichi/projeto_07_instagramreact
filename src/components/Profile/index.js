export function Profile({ srcProfile, nick, name }) {
  return (
    <div className="perfil">
      <a href="#perfil">
        <img className="perfil-foto" src={srcProfile} alt="" />
      </a>
      <div className="perfil-info">
        <a className="perfil-nick" href="#perfil-nick">
          {nick}
        </a>
        <p className="perfil-nome">{name}</p>
      </div>
    </div>
  );
}
