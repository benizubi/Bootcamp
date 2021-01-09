let input = prompt('What Would You Like To Do');
const allList = ['Collect Chicken Eggs', 'Clean Litter Box'];

// so here we runnnig that if input is not the same as quit then run these code, if it is quit the game
while (input !== 'quit' && input !== 'q') {
    if (input === 'list') {
        // here I'm setting it if the user types list, then it will log out the list
        console.log('*********')
        for (let i = 0; i < allList.length; i++) {
            console.log(`${i} : ${allList[i]}`);
            // So here it's doing the calcutlation and listing everything so the {i} returns the list of indexs numbers as well as its corresponding value
        }
        console.log('*********')
    } else if (input === 'new') {
        const newTodo = prompt("OK now enter new todo")
        allList.push(newTodo);
        // so whatever the results is for this, we decided to add it to the array, like listed above
        console.log(`${newTodo} Added To The List!`)
        // here we're telling back the console the exact value u just stored in the array is successful 
    } else if (input === 'delete') {
        const indexString = parseInt(prompt('Ok, enter an index to delete'));
        // using prompt to ask what do u want to delete
        // so basically the prompt result is a string, and we use parseint to convert it to a interger
        // so we can use the interger value to allocate the right index of for delete when using splice 

        if (!Number.isNaN(indexString)) {
            // here we're pringting out our choice and now we want to remove the index value on the matching array index
            const deleted = allList.splice(indexString, 1);
            // splice allows us to delete so we'll start deleting something based on what the index chocen instead of it being hard coded like splice(0,1) or something
            // the number 1 presents how many items we want deleted.
            console.log(`OK, deleted ${deleted[0]} `);
            // notifing what we deleted and prints 
        } else {
            console.log('Unkown index')
        }
    }
    input = prompt('What Would You Like To Do');

}
console.log('Youve Quit Now');
