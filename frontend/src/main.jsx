// main.jsx is the entry point for the frontend.
// import React from 'react';
import ReactDOM from 'react-dom/client';
import Youtube from './Youtube';

// const reactElement = {
//   type: 'a',
//   props: {
//     href: 'https://google.com',
//     target: '_blank',
//   },
//   children: 'Click me to go to Google!',
// };

function MyApp() {
  const username = 'Fer';
  return (
    <div>
      <h1>Vite React App {2 + 2}</h1>
      <h1>Vite React App {username}</h1>
      <Youtube />
    </div>
  );
}

// const AnotherElement = (
//   <a href="http://google.com" target="_blank">
//     Visit Google
//   </a>
// );

// const areactElement = React.createElement(
//   'a',
//   {
//     href: 'https://google.com',
//     target: '_blank',
//   },
//   'Click me to go to Google!',
// );

ReactDOM.createRoot(document.getElementById('root')).render(
  <MyApp />

  // AnotherElement

  // reactElement

  // areactElement
);
