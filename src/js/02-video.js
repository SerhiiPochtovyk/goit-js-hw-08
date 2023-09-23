import Player from '@vimeo/player';

const iframe = document.querySelector('#vimeo-player');
const player = new Player(iframe);
const _ = require('lodash');

player.on(
  'timeupdate',
  _.throttle(data => {
    localStorage.setItem('videoplayer-current-time', data.seconds);
    console.log(data);
  }, 1000)
);

const savedTime = localStorage.getItem('videoplayer-current-time');
if (savedTime !== null) {
  player.setCurrentTime(savedTime);
}
