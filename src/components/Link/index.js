export function Link({ href, text }) {
  return (
    <a className="link" href={href}>
      {text}
    </a>
  );
}
