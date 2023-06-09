import { publish } from 'gh-pages';

publish(
 'build', // path to public directory
 {
  branch: 'gh-pages',
  repo: 'https://github.com/AsafAgranat/gh-pages', // Update to point to your repository
  user: {
   name: 'asaf agranat',
   email: 'asaf@duck.com'
  },
  dotfiles: true
  },
  () => {
   console.log('Deploy Complete!');
  }
);