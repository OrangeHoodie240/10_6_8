/*
        Question 1

    Object Destructuring 1
    What does the following code return/print?

    let facts = {numPlanets: 8, yearNeptuneDiscovered: 1846};
    let {numPlanets, yearNeptuneDiscovered} = facts;

    console.log(numPlanets); // ?
    console.log(yearNeptuneDiscovered); // ?


        Answer

    8
    1846

*/


/*
        Question 2

    Object Destructuring 2
    What does the following code return/print?

    let planetFacts = {
        numPlanets: 8,
        yearNeptuneDiscovered: 1846,
        yearMarsDiscovered: 1659
    };

    let {numPlanets, ...discoveryYears} = planetFacts;

    console.log(discoveryYears); // ?


        Answer 

    {yearNeptuneDiscovered: 1846, yearMarsDiscovered: 1659}
    
*/



/*
        Question 3

    Object Destructuring 3  
    What does the following code return/print?

    function getUserData({firstName, favoriteColor="green"}){
     return `Your name is ${firstName} and you like ${favoriteColor}`;
    }

    getUserData({firstName: "Alejandro", favoriteColor: "purple"}) // ?
    getUserData({firstName: "Melissa"}) // ?
    getUserData({}) // ?


        Answer 

    Your name is Alejandro and you like purple
    Your name is Melissa and you like green
    Your name is undefined and you like green
*/






/*
        Question 4
        
    What does the following code return/print?

    let [first, second, third] = ["Maya", "Marisa", "Chi"];

    console.log(first); // ?
    console.log(second); // ?
    console.log(third); // ?

        Answer
    
    Maya
    Marisa
    Chi
    
*/

/*
        Question 5
    What does the following code return/print?

    let [raindrops, whiskers, ...aFewOfMyFavoriteThings] = [
        "Raindrops on roses",
        "whiskers on kittens",
        "Bright copper kettles",
        "warm woolen mittens",
        "Brown paper packages tied up with strings"
    ]

    console.log(raindrops); // ?
    console.log(whiskers); // ?
    console.log(aFewOfMyFavoriteThings); // ?

        Answer 
    
    Raindrops on roses
    whiskers on kittens
    ["Bright copper kettles", "warm woolen mittens", "Brown paper packages tied with strings"]
*/



/*
        Question 6
    What does the following code return/print?

    let numbers = [10, 20, 30];
    [numbers[1], numbers[2]] = [numbers[2], numbers[1]]

    console.log(numbers) // ?

        Answer

    [10, 30, 20]
*/



/*
var obj = {
  numbers: {
    a: 1,
    b: 2
  }
};

var a = obj.numbers.a;
var b = obj.numbers.b;
*/


// ES2015 Version
const obj = {
    numbers: {
        a: 1,
        b: 2
    }
};
let {a, b} = obj.numbers; 


/*
var arr = [1, 2];
var temp = arr[0];
arr[0] = arr[1];
arr[1] = temp;
*/

// ES2015 Version
const arr = [1, 2];
[arr[1], arr[0]] = [...arr]; 



// raceResults Function
const raceResults = ([first, second, third, ...rest])=>{
    return {first, second, third, rest};
};