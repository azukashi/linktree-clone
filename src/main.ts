import App from './App.svelte';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import '@fortawesome/fontawesome-free/js/all.min.css';
import {
  faGithub,
  faDiscord,
  faFacebook,
  faTwitter,
} from '@fortawesome/free-brands-svg-icons';
import { faPlayCircle } from '@fortawesome/free-solid-svg-icons';

const app = new App({
  target: document.body,
  props: {
    name: 'Gifaldy Azka',
    username: 'gifaldyazkaa',
    avatarUrl: 'https://avatars.githubusercontent.com/u/68645946?v=4',
    url: [
      {
        name: 'GitHub',
        url: 'https://github.com/gifaldyazkaa',
        icon: faGithub,
      },
      {
        name: 'Discord',
        url: 'https://discord.com/users/788260234409672754',
        icon: faDiscord,
      },
      {
        name: 'Facebook',
        url: 'https://facebook.com/falcxx',
        icon: faFacebook,
      },
      {
        name: 'Twitter',
        url: 'https://twitter.com/gifaldyazkaa',
        icon: faTwitter,
      },
      {
        name: 'AniList',
        url: 'https://anilist.co/user/gifaldyazkaa',
        icon: faPlayCircle,
      },
    ],
  },
});

export default app;
