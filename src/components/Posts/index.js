import { Post } from '../Post';

export function Posts() {
  const posts = [
    {
      srcProfile: './assets/images/dog-ufpa-pixelado-spotify.png',
      nick: 'andre_seichi',
      videoPost: false,
      srcPost: './assets/images/dog-ufpa-pixelado-spotify.png',
      firstLikeProfile: './assets/images/respondeai.png',
      firstLikeNick: 'respondeai',
      likeAmount: 101.523,
      firstCommentNick: 'andre_seichi',
      firstComment: 'This is dog da UFPA 🐕',
      totalComments: 75,
      comments: [
        { nick: 'respondeai', comment: 'nice' },
        { nick: 'andre_seichi', comment: 'oiiiieee' },
      ],
      timePast: '1 dia',
    },
    {
      srcProfile: './assets/images/barked.png',
      nick: 'barked',
      videoPost: false,
      srcPost: './assets/images/dog.png',
      firstLikeProfile: './assets/images/adorableanimals.png',
      likeAmount: 641.71,
      firstCommentNick: 'barked',
      firstComment: '🐕',
      totalComments: 18,
      comments: [
        { nick: 'alguem', comment: 'fofo' },
        { nick: 'fulano', comment: 'cute dog' },
      ],
      timePast: '2 dias',
    },
    {
      srcProfile: '/assets/images/meowed.png',
      nick: 'ursinho',
      videoPost: true,
      srcPost: './assets/videos/video.mp4',
      firstLikeProfile: './assets/images/adorableanimals.png',
      likeAmount: 210.16,
      firstCommentNick: 'ursinho',
      firstComment: 'um urso ae',
      totalComments: 1348,
      comments: [
        { nick: 'alguem', comment: 'gostei do urso' },
        { nick: 'fulano', comment: 'urso selvagem' },
      ],
      timePast: '5 dias',
    },
  ];
  return (
    <div class="posts">
      {posts.map((post, index) => (
        <Post {...post} key={index} />
      ))}
    </div>
  );
}
