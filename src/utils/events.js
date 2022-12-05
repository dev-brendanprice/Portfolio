import { Snow, timeoutFunction } from "./snowflakes.js";

const log = console.log.bind(console);

export function configureEvents() {

    // Projects button click event
    // document.getElementById('projects').addEventListener('click', () => {

    //     // Stop the snow
    //     clearTimeout(timeoutFunction);

    //     let fubar = document.getElementById('mainContainer'),
    //         c = 0.25;

    //     setInterval(() => {
    //         log(c);
    //         document.getElementById('iconsContainer').style.gap += c;
    //         c += 0.25;
    //     }, 10);

    // });

    // // About Me button click event
    // document.getElementById('about').addEventListener('click', () => {
    //     log('About Me button clicked');
    // });
};