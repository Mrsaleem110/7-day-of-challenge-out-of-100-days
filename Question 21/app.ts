// *Question 21:* Think of something you could store in a TypeScript Object. Write a program that creates Objects containing these items.

// *Explain & TIP:* Objects in TypeScript can store various related data about a single entity. Think of an object as a container for characteristics of something, like a book or a car.
let car :{title:string;owner: string; modle:number;}={
    title:"toyota",
    owner:"Muhammad saleem",
    modle:2024,
}
console.log(`This is ${car.title} modle ${car.modle} whose owner is ${car.owner}. `)