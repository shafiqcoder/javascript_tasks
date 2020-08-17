/* We will discuss following methods.
forEach
filter
map
sort 
reduce
*/
const companies=[
    {name: 'Company one', category:"Finance",start: 1981,end:2003},
    {name: 'Company two', category:"Retail",start: 1992,end:2008},
    {name: 'Company three', category:"Auto",start: 1999,end:2007},
    {name: 'Company four', category:"Retail",start: 1989,end:2010},
    {name: 'Company five', category:"Technology",start: 2009,end:2014},
    {name: 'Company six', category:"Finance",start: 1987,end:2010},
    {name: 'Company seven', category:"Auto",start: 1986,end:1996},
    {name: 'Company eight', category:"Technology",start: 2011,end:2016},
    {name: 'Company Nine', category:"Retail",start: 1981,end:1989},
];

const ages= [17,25,13,56,14,,36,33,5,28,12,34,21,10,30,22];
/* ------------------------------forEach----------------------------------

Its a nice and more elegent way to loop through an array rather than using for loop. It doesn't return back anything.
Comaprison of for loop and  forEach
/*
for (let i=0; i<companies.length; i++){
    console.log(companies[i]);
    console.log(companies[i].name);
}
*/
/*Take orignal array.
forEach takes call function. 
This is sync NOT async function. 
This function takes three arguments 1. iterator 2. index . 3. array  
*/
// companies.forEach(function(i,companies,index){
//     console.log(companies);
//     console.log(index);
//     console.log(i);
//     console.log(i.name);
// });

//--------------------------------------------------------------------//

/*
---------------------------------filter---------------------------------

it filters out an array with conditions
*/
// //Using for loop

//Get 21 and Older

// let canGoCollege=[];
// for (let i = 0;i<ages.length;i++){
//     if (ages[i]>18){
//         canGoCollege.push(ages[i]); 
//     };
// }
// console.log(canGoCollege);

//lets do same thing with filter
const canGoCollege=ages.filter(function(age){
    if(age >= 21){
        return true
    }
});
// console.log(canGoCollege)
//Make it better using arrow function-elegant, one liner
const canGoCollege_arrow_funcion= ages.filter(age => age >=21);
// console.log(canGoCollege_arrow_funcion);
// WOW! Same Result.

const retailComapanies= companies.filter(function (company){
    if (company.category==='Retail'){
        return true
    }
});

//Now with arrow function

const retailCompanies_arrow=companies.filter(company => company.category ==="Retail");
// console.log(retailCompanies_arrow)

// Get 80s Companies

const eightiesCompanies=companies.filter(company => (company.start >= 1980 && company.start < 1990));
// console.log(eightiesCompanies)
//-------------------------------------------------------------------//

//---------------------------------map---------------------------------

/*
Instead of just filtering an array we can create new array from current array.
*/
//Create array of company Names
 const companyNames=companies.map(function (company){
     return company.name;
 })
console.log( companyNames);//It returns new with names of all companies
const testMap=companies.map(function(company){
    return `${company.name}[${company.start}-${company.end}]`;
})
// console.log(testMap)
//With arrow function

const testMap_arrow=companies.map(company => (`${company.name}-[${company.start}-${company.end}]`));
// console.log(testMap_arrow)

const agesTimesTwo=ages.map(age => (age * 2));
// console.log(agesTimesTwo)
const ageMap=ages
.map(age => Math.sqrt(age))
.map(age => age *2);
// console.log(ageMap)
//--------------------------------------------------------------------//

//--------------------------------sort----------------------------------
/*The sort() method sorts the items of an array.

The sort order can be either alphabetic or numeric, and either ascending (up) or descending (down).

By default, the sort() method sorts the values as strings in alphabetical and ascending order.*/
//sorted companies by start year
// Note: This method changes the original array.
const sortedCompanies=companies.sort(function (a, b){
    if (a.start > b.start){
        return 1;
    }else{
        return -1;
    }
});
// console.log(sortedCompanies)
// Using arrow function
const sortedCompanies_arrow=companies.sort((a,b)=>(a.start > b.start ? 1 : -1));
// console.log(sortedCompanies_arrow)
/*Note: The conditional (ternary) operator is the only JavaScript operator that takes three operands: 
a condition followed by a question mark (?), then an expression to execute if the condition is truthy 
followed by a colon (:), and finally the expression to execute if the condition is falsy. 
This operator is frequently used as a shortcut for the if statement.*/
const sortAges=ages.sort((a,b)=>a-b);// for ascending a-b, for descending order b-a
// console.log(sortAges)
//---------------------------------------------------------------------//

//-----------------------------reduce------------------------------------//
/*
The reduce() method reduces the array to a single value.

The reduce() method executes a provided function for each value of the array (from left-to-right).

The return value of the function is stored in an accumulator (result/total).

Note: reduce() does not execute the function for array elements without values.

Note: this method does NOT change the original array.


*/

const ageSum =ages.reduce(function (total,age){
    return total+age;
},0); // total is initially zero.

// console.log(ageSum)

// Using arrow function

const ageSum_arrow= ages.reduce((total, age)=>total + age,0);
// console.log(ageSum_arrow)
//Get total years for all companies

const totalYears=companies.reduce(function (total,company){
    return total + (company.end-company.start);
},0);
// console.log(totalYears)
//Using arrow function
const totalYears_arrow=companies.reduce((total, company)=> total + (company.end-company.start),0);
// console.log(totalYears_arrow);

//Combine all methods
 
const combined= ages
.map(age=> age*2)
.filter(age=> age>=20)
.sort((a,b)=> a-b)
.reduce((a,b)=> a+b,0);

console.log(combined)

