const container = document.getElementById('container')

for (let num = 1; num <= 100; num++) {
    const table = document.createElement('div')
    table.classList.add('styletable')
    container.append(table)
    let result 

    if (num % 3 === 0 && num % 5 === 0) 
    {
       result='fizzbuzz'
       //console.log(result)
       table.innerHTML = result
       table.classList.add('bg-red')
    }

    else if (num % 3 === 0) 
    {
        result = 'fizz'
        //console.log(result);
        table.innerHTML = result
        table.classList.add('bg-green')

    }
    

    else if (num % 5 === 0) {
        result = 'buzz'
        //console.log(result);
        table.innerHTML = result
        table.classList.add('bg-orange')
    }

    else {
        result = num
        //console.log(result);
        table.innerHTML = result
        table.classList.add('bg-cornflowerblue')
    }

    console.log(result)

}






