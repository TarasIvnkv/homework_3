importantWords = confirm(`Tell me three most important words 💚`);

if(importantWords === true){

    firstWord = prompt(`Enter first word`, `i`);

    while(firstWord === null || !firstWord){
        firstWord = prompt(`Enter first word`);
    }

    validation = prompt(`
        Choose one of validations type:
            1. uppercase
            2. lowercase
            3. capitalize
    `, `1`);

    uppercase = `1`;
    lowercase = `2`;
    capitalize = `3`;

    while(
        validation == null || 
        !validation || 
        (validation != uppercase &&
        validation != lowercase &&
        validation != capitalize)){

        validation = prompt(`
        Choose one of validations type:
            1. uppercase
            2. lowercase
            3. capitalize
        `)
    }

    if(validation === uppercase){
        firstWord = firstWord.toUpperCase();
    }else if(validation === lowercase){
        firstWord = firstWord.toLowerCase();
    }else if(validation === capitalize){
        firstWord = firstWord[0].toUpperCase() + firstWord.slice(1).toLowerCase();
    }

    secondWord = prompt(`Enter second word`, `love`);

    while(secondWord === null || !secondWord){
        secondWord = prompt(`Enter second word`);
    }
    
    validation = prompt(`
        Choose one of validations type:
            1. uppercase
            2. lowercase
            3. capitalize
    `, `2`);

    while(
        validation == null || 
        !validation || 
        (validation != uppercase &&
        validation != lowercase &&
        validation != capitalize)){

        validation = prompt(`
        Choose one of validations type:
            1. uppercase
            2. lowercase
            3. capitalize
        `)
    }

    if(validation === uppercase){
        secondWord = secondWord.toUpperCase();
    }else if(validation === lowercase){
        secondWord = secondWord.toLowerCase();
    }else if(validation === capitalize){
        secondWord = secondWord[0].toUpperCase() + secondWord.slice(1).toLowerCase();
    }

    thirdWord = prompt(`Enter third word`, `you`);

    while(thirdWord === null || !thirdWord){
        thirdWord = prompt(`Enter third word`);
    }

    validation = prompt(`
    Choose one of validations type:
        1. uppercase
        2. lowercase
        3. capitalize
    `, `3`);

    while(
        validation == null || 
        !validation || 
        (validation != uppercase &&
        validation != lowercase &&
        validation != capitalize)){

        validation = prompt(`
        Choose one of validations type:
            1. uppercase
            2. lowercase
            3. capitalize
        `)
    }

    if(validation === uppercase){
        thirdWord = thirdWord.toUpperCase();
    }else if(validation === lowercase){
        thirdWord = thirdWord.toLowerCase();
    }else if(validation === capitalize){
        thirdWord = thirdWord[0].toUpperCase() + thirdWord.slice(1).toLowerCase();
    }

    console.log(`${firstWord} ${secondWord} ${thirdWord}!`);
}