// // OBject Oriented //
// // const navColor = new Color('carrot', [230, 126, 34]);
// // const logoColor = new Color('emerald', [46, 204, 113]);
// // Factory Functions//
// function rgb(r, g, b) {
//     return `rgb ${r},${g},${b}`;

// }
// // hex(255, 100, 25);
// // rgb(255, 100, 25)
// // // "#ff6419"
// // // "rgb(255,100,25)"

// function makeColor(r, g, b) {
//     const color = {};
//     color.r = r;
//     color.g = g;
//     color.b = b;
//     color.rgb = () => {
//         const { r, g, b } = this;
//         // this refers back to the color object as its on the left after the dot. e.g  color.rgb so this is reference to whats on the left
//         return `rgb(${r},${g},${b})`
//     };
//     color.hex = function hex(r, g, b) {
//         return '#' + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
//     }
//     // the code above is from stackoverflow that generates rgb colors
//     return color;

// }
// const fireColor = makeColor(35, 255, 150);
// fireColor.hex();

// // Constructor Funcntion//
// instead of using the method used above, instead we will use this method so that we can just create one objetcs and adapt it to other functions instead of making new objects for everything like Username1 

// function Color(r, g, b) {
//     this.r = r;
//     this.g = g;
//     this.b = b;
// }
// Color.prototype.rgb = function () {
//     const { r, g, b } = this;
//     return `rgb(${r},${g},${b})`;
// };
// Color.prototype.hex = function hex(r, g, b) {
//     return '#' + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
// }
// Color.prototype.rgba = function (a = 1.0) {
//     const { r, g, b } = this;
//     return `rgba(${r},${g},${b},${a})`;
//     // I used function istead of arrow as arrows behave different when this. is involved 
//     // this is more so for opacity so how bright or light the color based on decimal numbers
// }

// if you just run the code with the all the this. and it will return not defined
// the this method here behave different than any other times because this here represent the window object,
//  as there's color function does not have anything to its left, thus automatically refer to the window object unless you use the word new then it refers to the actually function
// so if i want to use the Color function then i will need to use the word 'new' for example:
// new Color(255, 4, 100)
// so this will create a new object for me based on the Color function pattern 
//      const color1 = new Color(40, 255, 60)
//      const color2 = new Color(1, 4, 5)
// by using new it basically allows us to use the function Color function and create multiple objects out of it, as the data get saved on the prototype and not directly tied to the object methods

// Also the prototpe here we have created two methods one called rgb, and the other is hex and when u use this and new like we have here, so we've basically set every color will have these two prototypes
// and creates only 1 copy of those methods as they are on the shared prototype object instead of being uniquely being defined.
// if i checked color1 === color2 it will return true because the object methods are stored in the same place prototype
// so document.body.style.backgroundColor = color1.rgba(0.7); i can use this method for all the others and it will work.

// Classes//
// when creating constructor functions or creating classes,we Capitalise the words
// when you use calss, you need to have a constructor, we dont call it back but it runs imediately when we run the code for e.g const c1 = new Color(255, 67, 89, 'tomatos')

class Color {
    constructor(r, g, b, colorName) {
        this.r = r;
        this.g = g;
        this.b = b;
        this.colorName = colorName;
    }
    innerRGB() {
        const { r, g, b } = this;
        return `(${r},${g},${b})`;
    }
    rgb() {
        return `rgb(${this.innerRGB()})`
    }
    rgba(a = 1.0) {

        return `rgba(${this.innerRGB()},${a})`;
    }
    hex() {
        const { r, g, b } = this;
        return '#' + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
    }
    // greet() {
    //     return `HELLO FROM ${this.colorName}!`;
    // }// greet here is a quicker way to create a method, and it is implementated in the class and don't need to to it through calling prototype. like the code above, instead it stores greet on the prototype like we did before same way as done before.
}
const c1 = new Color(255, 67, 89, 'tomato')
const c2 = new Color(255, 255, 255, 'white');

