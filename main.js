// Find the submit button on our page.
const submitButton = document.querySelector('.submit');
//When it's clicked, launch `fizzBuzz`.
submitButton.onclick = fizzBuzz;

// Find the clear button on our page.
const clearButton = document.querySelector('.clear')
// When it's clicked, launch `clearResults`.
clearButton.onclick = clearResults;

function fizzBuzz(event) {
  // Make sure the page isn't reloaded when the user submits the form.
  event.preventDefault();

/*
  TODO: Call the function `clearResult`, which we have defined for you. You
  don't need to put anything in the parentheses to tell it what to clear, just
  call it--it knows what to do!
*/

  
  // TODO: Find the input box the user is typing in and put it in a variable.


  // TODO: Grab the text that was in that input when the submit button was pushed.
  // Save it to a variable.


  // TODO: Use the variable you saved in the above step to dive deeper into the
  // object and find the value the user has added there.
  

  /*
    TODO: Print out the Fizzbuzz pattern up to that input.
    Use the pre-defined `printValue` function below to print out each line,
    giving it the value you want to print.
    
    Essentially, you can use `printValue` the same way you would `console.log`,
    only it will write to the DOM instead of to the console.
    
    You can write your `while` loop however you want, but you MUST write it
    yourself for your own better comprehension. No copy-pasting, please!
  */


  /*
    Stretch goal TODO:
    Using the variable we saved above for the input box, clear its value.
    
    You might have to do a small bit of research for this, though you should be
    able to figure it out based on the fact that we can assign values to properties,
    just as we can to variables.

    This is a very useful feature, as it's an annoying and unexpected user
    experience to ask them to delete anything they've inputted previously before
    inputting something else.
  */

}

function printResult(value) {
  // Create a list item.
  const listItem = document.createElement('li');
  // Put its value as its contents.
  listItem.innerText = value;

  // Find the unordered list we've made into a results console.
  const list = document.querySelector('.list')
  // Append our list item to it.
  list.appendChild(listItem);
}

function clearResults(event) {
  // Make sure the page isn't reloaded when the user submits the form.
  event.preventDefault();
  
  // Find the unordered list we've made into a results console.
  const list = document.querySelector('.list')

  // Remove its list items.
  while(list.hasChildNodes()) {
    list.removeChild(list.firstChild);
  }
}