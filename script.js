let fan = document.getElementById("img");

function myFanOn() {
    fan.style.animationDuration = 3 + "s";
}

function myFanOff() {
    fan.style.animationDuration = 0 + "s";
}

function myFanSpeed1() {
    fan.style.animationDuration = 1 + "s";
}

function myFanSpeed2() {
    fan.style.animationDuration = 0.5 + "s";
}
function myFanSpeed3() {
    fan.style.animationDuration = 0.1 + "s";
}

```javascript
/**
 * These functions control the fan's rotation speed by modifying the CSS 'animationDuration' property.
 * - myFanOn(): Sets a slow rotation speed (3 seconds per cycle).
 * - myFanOff(): Stops the animation by setting the duration to 0.
 * - myFanSpeed1, 2, 3: Progressively increase the speed by decreasing the cycle duration (1s, 0.5s, and 0.1s).
 */
```