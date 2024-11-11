import { configureTheme } from './utils/configureTheme.js';

// Main entry point
function Main() {

    // Check the date and apply a theme based on the date (indexes at 0)
    // 11 = Winter (December), null = Default
    let dateMonthIndex = new Date().getMonth();
    if (dateMonthIndex === 10) {
        configureTheme('Winter');
    };

    configureTheme();
};

// Do main function after all DOM content has loaded
document.getElementById('DOMContentLoaded', Main());
