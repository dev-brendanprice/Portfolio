import { Snow } from './snowflakes.js';

export function configureTheme(themeType = 'Default') {

    // Check if theme selection is for winter
    if (themeType === 'Winter') {
        document.getElementById('santaHat').style.display = 'block'; // Show Santa Hat
        Snow(); // Snowflakes - "Falling Snow" effect
        return;
    };
    
    return;
};