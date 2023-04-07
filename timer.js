
import { printCount, printFinish } from './print.js';
import { Howl } from 'howler';
import { switchOff, switchOn } from './switch.js';
import Music from '../media/eralash.mp3';


function getBackTime(allSeconds) {
    let hours = Math.floor(allSeconds / 3600);
    if (allSeconds === 0) {
        clearInterval(interval);
        let sound = new Howl({
            src: [Music]
        });
        sound.play();
        printFinish('Время вышло!');
        switchOff();
    }

}, 1000);