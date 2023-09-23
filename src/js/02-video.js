// import Player from '@vimeo/player';
// const player = new Player('handstick', {
//     id: 19231868,
//     width: 640
// });

// player.on('play', function() {
//     console.log('played the video!');
// });

// const iframe = document.querySelector('iframe');
// const player = new Player(iframe);

// player.on('play', function() {
//     console.log('played the video!');
// });

// player.getVideoTitle().then(function(title) {
//     console.log('title:', title);
// });

import Player from '@vimeo/player';
import { throttle } from 'lodash';

const player = new Player(document.getElementById('vimeo-player'));

player.on('timeupdate', throttle(updateLocalTime, 1000));

function updateLocalTime(event) {
  const currentTime = event.seconds;
  localStorage.setItem('videoplayer-current-time', currentTime);
}

const storedTime = localStorage.getItem('videoplayer-current-time');

if (storedTime !== null) {
  player.setCurrentTime(Number(storedTime));
}