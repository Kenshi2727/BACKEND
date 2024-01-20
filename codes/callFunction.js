const person1 = {  
    firstName: 'John',
    lastName: 'Doe',
}

const person2 = {   
   fullName: function(city,country) {     
       console.log(`${this.firstName } ${this.lastName} lives in ${city},${country}`); //this refers to current object(here person2)
       //like person2.firstName + person2.lastName(this is not a good practice)
}
}
// person2.fullName.call(person1,'Oslo','Norway') 
// person2.fullName.apply(person1,['Oslo','Norway']) //parametrs are passed as array

const bound=person2.fullName.bind(person1) 
bound('Oslo','Norway') //bind returns a function and we can call it later
bound('lahore','pakistan') 
bound('karachi','Sindhudesh')
