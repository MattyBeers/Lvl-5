import React from 'react'

function App() {

  function extractUniqueCharacters(strings) {
    // Use filter to keep only unique characters
    const uniqueChars = strings
      .join('') //.join combines all strings into single string
      .split('')// converts the string into an array of charaters 
      .filter((char, index, array) => array.indexOf(char) === index);
  
    return uniqueChars;
  }
  
 
  const words = ['apple', 'banana', 'cherry'];
  const uniqueChars = extractUniqueCharacters(words);
  console.log(uniqueChars)
  
// This line defines a function named sortByProperty that takes two parameters: objects [{}'s](an array of objects) and propertyName (a string representing the property based on which sorting should be done).
  function sortByProperty(objects, propertyName) {
    
    return objects.slice().sort((a, b) => a[propertyName] - b[propertyName]);
    // slice method provides a way to create a copy of a portion of an array. When used without arguments (as in objects.slice()), it returns a shallow copy of the entire array...
    //. sort subtracts the a-b values making the order in ascending order 
  }
  
  const people = [
    { name: 'Alice', age: 30 },
    { name: 'Bob', age: 25 },
    { name: 'Charlie', age: 35 },
    { name: 'David', age: 28 },
  ];
  
  const sortedByAge = sortByProperty(people, 'age');
  console.log(sortedByAge);

  // In summary, the sortByProperty function takes an array of objects and a property name, creates a copy of the array, and sorts the copy based on the specified property. The example sorts the people array by age and prints the sorted result. The result will be an array of objects sorted in ascending order based on their 'age' property.
  /*
5 * 1 = 5
5 * 2 = 10
5 * 3 = 15
5 * 4 = 20
5 * 5 = 25
5 * 6 = 30
5 * 7 = 35
5 * 8 = 40
5 * 9 = 45
5 * 10 = 50 
*/
  function generateTable(number) {

    // need 1 thru 10 
    // * by any number needed 
    //console.log = 1 thru 10 

    for (let i =1; i <11 ; i++){
      console.log(`${i} * ${number} = ${i * number}`)
    }

  }
  generateTable(5)

  return (
    <div>
     <h1>Lvl 5  Mid Level Code Challenge </h1>
    </div>
  );
}

export default App
