import { Storie } from '../Storie';

export function Stories() {
  const stories = [
    {
      src: './assets/images/dog-ufpa-pixelado-spotify.png',
      name: 'andre_seichi',
    },
    { src: './assets/images/meowed.png', name: 'meowed' },
    { src: './assets/images/barked.png', name: 'barked' },
    {
      src: './assets/images/nathanwpylestrangeplanet.png',
      name: 'nathanwpylestrangeplanet',
    },
    { src: './assets/images/wawawiwacomicsa.png', name: 'wawawiwacomicsa' },
    { src: './assets/images/respondeai.png', name: 'respondeai' },
    { src: './assets/images/filomoderna.png', name: 'filomoderna' },
    { src: './assets/images/memeriagourmet.png', name: 'memeriagourmet' },
    { src: './assets/images/memeriagourmet.png', name: 'memeriagourmet' },
  ];

  return (
    <div class="stories">
      {stories.map((storie) => (
        <Storie src={storie.src} name={storie.name} key={storie.name} />
      ))}

      <div class="next-stories">
        <ion-icon name="chevron-forward-circle"></ion-icon>
      </div>
    </div>
  );
}
