




fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then(response => response.json())
    .then(json => console.log(json))


// console.log('Explore API');

// const person={
//     name:'selim',
//     fruit:'dalim',
//     dish:'halim',
//     friends:['alim','kolim','lamim'],
//     isRich:false,
//     money:34000
// }
// console.log(person);



// //JSON --> JS Object with notation
// //JSON.stringify() --> convert JS object to JSON
// //JSON.parse() --> convert JSON to JS object
// const personJSON=JSON.stringify(person);
// console.log(personJSON);
// const personObj=JSON.parse(personJSON);
// console.log(personObj);