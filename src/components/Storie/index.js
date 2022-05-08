export function Storie({ src, name }) {
  return (
    <a class="storie" href="#storie">
      <div class="storie-perfil">
        <img
          class="storie-background"
          src="../../assets/images/stories_background.svg"
          alt=""
        />
        <img class="storie-foto" src={src} alt="" />
      </div>
      <p>{name}</p>
    </a>
  );
}
