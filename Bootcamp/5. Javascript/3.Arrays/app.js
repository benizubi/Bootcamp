let colors = ['rad', 'orange', 'yallow'];
// above here we have created an array called colors and if we want to change the content on that array
// you can this this method below.

colors[0] = 'red';
colors[2] = 'Yellow';
// so here i wanted to change the color from rad to red and access using 0 beccause that's the first indexed value

// You can add on to the existing area for example colors[10] = indigo is one way to perfrom that
colors[10] = 'indigo';
// because there was only 3 options value for colors 10th will place the value to the 10th indexed so
// because from 4-9 we haven't specified what they are, they become empty strings with undefined output.

// Push
// you can also add elements using the push methods for a single item or multiple, for example:
colors.push('black', 'white');
// so what's happening here is the push function will be added to the ending of the array following the order and expanding the array content

// Pop
// Pop basically removes the last character from the array and it returns the last element in the array.
colors.pop();

// Shift
// shift is like pop, but it insteads removes the first line in the array and returns the value back for example:
colors.shift()

// Unshift
// Unshift behaves like a push, but instead it adds to the start for example:
colors.unshift('VIP')