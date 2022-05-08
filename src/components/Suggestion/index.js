export function Suggestion({ srcProfile, nick, details }) {
  return (
    <div className="sugestao">
      <div className="sugestao-perfil">
        <img className="sugestao-perfil-foto" src={srcProfile} alt="" />
        <div className="sugestao-perfil-info">
          <p className="sugestao-perfil-nick">{nick}</p>
          <p className="sugestao-perfil-detalhes">{details}</p>
        </div>
      </div>

      <div className="seguir">
        <p>Seguir</p>
      </div>
    </div>
  );
}
