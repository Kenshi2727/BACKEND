fetch('https://jsonplaceholder.typicode.com/todos/1',{method: 'GET',
                                                     })
.then(response => response.json())
.then(data => console.log(data))

async function getData(){
    const response = await fetch('https://jsonplaceholder.typicode.com/todos/1') //returns a promise
    const data = await response.json() //returns a json object so that js compiler can read it
    console.log(data)
}

getData() //calling the function