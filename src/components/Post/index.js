export function Post(props) {
  return (
    <div className="post">
      <header className="post-header">
        <div className="post-perfil">
          <a href="#perfil">
            <img className="post-perfil-foto" src={props.srcProfile} alt="" />
          </a>
          <a className="post-perfil-nick" href="#perfil-nick">
            {props.nick}
          </a>
        </div>

        <ion-icon name="ellipsis-horizontal-outline"></ion-icon>
      </header>

      {props.videoPost ? (
        <video class="post-foto" muted autoPlay loop>
          <source src="./assets/videos/video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      ) : (
        <img className="post-foto" src={props.srcPost} alt="" />
      )}

      <footer className="post-footer">
        <div className="icones">
          <div className="icones-esquerda">
            <ion-icon name="heart-outline"></ion-icon>
            <ion-icon name="chatbubble-outline"></ion-icon>
            <ion-icon name="paper-plane-outline"></ion-icon>
          </div>
          <div className="icones-direita">
            <ion-icon name="bookmark-outline"></ion-icon>
          </div>
        </div>

        <div className="curtidas">
          <img className="curtida-perfil" src={props.firstLikeProfile} alt="" />
          <p>
            Curtido por <span>{props.firstLikeNick}</span> e
            <span> outras {props.likeAmount} pessoas</span>
          </p>
        </div>

        <div className="comentarios">
          <div className="comentario-post-autor">
            <a className="comentario-perfil-nick" href="#perfil-nick">
              {props.firstCommentNick}
            </a>
            <span className="comentario-mensagem">{props.firstComment}</span>
          </div>
          <div className="mais-comentarios">
            Ver todos os {props.totalComments} comentários
          </div>

          {props.comments?.map(({ nick, comment }) => (
            <div className="comentario" key={comment}>
              <div className="comentario-perfil">
                <a className="comentario-perfil-nick" href="#perfil-nick">
                  {nick}
                </a>
                <span className="comentario-mensagem">{comment}</span>
              </div>
              <ion-icon name="heart-outline"></ion-icon>
            </div>
          ))}

          <time className="tempo-atras">há {props.timePast}</time>
        </div>
      </footer>

      <div className="adicionar-comentario">
        <ion-icon name="happy-outline"></ion-icon>
        <input type="text" placeholder="Adicione um comentário..." />
        <p className="publicar-comentario">Publicar</p>
      </div>
    </div>
  );
}
