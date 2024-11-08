
// Lower fall rate = faster fall speed
let snow_fall_rate = 5,
    snow_amount_per_tick = 150;

export let timeoutFunction;

export function Snow() {

    let snowflake = document.createElement('div'),
        size = (Math.random() * 10) + 5,
        randomLayer = Math.floor(Math.random() * 10);

    // Set snowflake attributes
    snowflake.className = 'flake';
    snowflake.style.width = size + 'px';
    snowflake.style.height = size + 'px';
    snowflake.style.position = 'fixed';
    snowflake.style.zIndex = randomLayer;
    snowflake.style.left = Math.random() * window.innerWidth + 'px';
    snowflake.style.top = '-20px';
    snowflake.style.borderRadius = '50%';
    snowflake.style.background = 'white';
    snowflake.style.pointerEvents = 'none';

    // Randomize snowflake blur
    if (Math.random() < .5) {
        snowflake.style.filter = 'blur(3px)';
    } else {
        snowflake.style.filter = 'blur(1px)';
    };

    // Randomize snowflake fall speed, within a range
    if (Math.random < .5) {
        snowflake.style.transition = snow_fall_rate * .75 + 's';
    } else {
        snowflake.style.transition = snow_fall_rate + 's';
    };

    snowflake.style.transitionTimingFunction = 'ease-in';
    document.body.appendChild(snowflake);

    setTimeout(() => {
        let flakes = document.querySelectorAll('.flake'),
            flake = flakes[flakes.length - 1],
            flake_loc = flake.getBoundingClientRect();

        flake.style.top = '105%';
        if (Math.random() < .5) {
            flake.style.left = flake_loc.left - 150 + 'px';
        } else {
            flake.style.left = flake_loc.left + 150 + 'px';
        };

    }, 10);

    let flakes = document.getElementsByClassName('flake');
    for(let i=0; i < flakes.length; i++) {
        if(flakes[i].getBoundingClientRect().top > window.innerHeight) {
            flakes[i].remove();
        };
    };

    // Remove flake after a calculated time with opacity fade out transition
    setTimeout(() => { 

        snowflake.remove();

        for (let v of document.getElementsByClassName('flake')) {
            v.style.opacity = 0.1;
        };

    }, snow_fall_rate * 1_000);

    // Spawn a flake every ${snow_amount_per_tick}ms
    timeoutFunction = setTimeout(() => { Snow() }, snow_amount_per_tick);
};