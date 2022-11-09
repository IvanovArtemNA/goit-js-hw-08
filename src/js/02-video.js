import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframeEl = document.querySelector('iframe');
const player = new Player(iframeEl);
const playerTime = localStorage.getItem('videoplayer-current-time');

const onPlayerPlayTime = throttle(({ seconds }) => {
  localStorage.setItem('videoplayer-current-time', seconds);
}, 1000);

// setItem(key, value) - створює новий, або оновлює вже існуючий запис у сховищі.

player.on('timeupdate', onPlayerPlayTime);

player.setCurrentTime(playerTime);
