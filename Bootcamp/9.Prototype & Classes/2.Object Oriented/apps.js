// OBject Oriented //
// const navColor = new Color('carrot', [230, 126, 34]);
// const logoColor = new Color('emerald', [46, 204, 113]);
// Factory Functions//
function rgb(r, g, b) {
    return `rgb ${r},${g},${b}`;

}
// hex(255, 100, 25);
// rgb(255, 100, 25)
// // "#ff6419"
// // "rgb(255,100,25)"

function makeColor(r, g, b) {
    const color = {};
    color.r = r;
    color.g = g;
    color.b = b;
    color.rgb = () => {
        const { r, g, b } = this;
        // this refers back to the color object as its on the left after the dot. e.g  color.rgb so this is reference to whats on the left
        return `rgb(${r},${g},${b})`
    };
    color.hex = function hex(r, g, b) {
        return '#' + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
    }
    // the code above is from stackoverflow that generates rgb colors
    return color;

}
const fireColor = makeColor(35, 255, 150);
fireColor.hex();

// Constructor Funcntion //