import { publish } from 'gh-pages';

publish(
 'build', // path to public directory
 {
  branch: 'gh-pages',
  repo: 'https://github.com/el3um4s/memento-sveltekit-and-github-pages.git', // Update to point to your repository
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