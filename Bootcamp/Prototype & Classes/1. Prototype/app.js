// Prototypes// _proto__
// Is a property that references the array prototype so a prototype is a template object in this case, arrays
// which contains different type of methods every array will have access to but instead of defining it individually for every array, it does it together and contains all the methods 
// so array.length is a method, array.includes() which is a boolean to check if it contains something
// each array has a reference to that prototype
//  This can be found in other types of Javascript objects like document.body, so body will be the object and it will also contain methods pecific to this object, a protoype at the bottom 
// you need console.dir(...) so check these prototype methods 

// you can also create your own methods for example
// String.prototype.beni = () => { console.log('GO AWAY!!')}
//  const cat = ""
// so the String above is a type like an array is a type of ojbect so the beni part is going to be the method name and it will display it along with 
// cat.beni();
// so by calling the beni method here it's going to return whatever we had set on for beni
String.prototype.yell = () => {
    // yell is the name of the prototype method we created
    return `OMG!!! ${this.toUpperCase()}!!!! AGHHGHG`    // this refers to whatever is on the left and side and that is going to be a string.
};
// String are where all of the String prototypes methods are saved

Array.prototype.pop = () => {
    return `Sorry i want that element, i will never pop of it `
}
// so every time we call the pop method, it will always return this message as a String not an array


// A PROTOTYPE IS A Place to store things and use it later and will only return what's on the left if you use this.
// so _proto_ is just the reference and the prototype is acautlly the code here for String and Array that you can add onto 