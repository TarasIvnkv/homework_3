importantWords = confirm(`Tell me three most important words 💚`);

if(importantWords){

    countOfWords = 3;
    wordIndex = 1;
    finalString = ``;

    uppercase = `1`;
    lowercase = `2`;
    capitalize = `3`;

    while(wordIndex<=countOfWords){
        word = prompt(`Enter word #${wordIndex}`);
        while(word === null || word.replaceAll(` `, ``) === ``){
            word = prompt(`Enter word #${wordIndex}`);
        }

        do{
            validation = prompt(`
            Choose one of validations type:
                1. uppercase
                2. lowercase
                3. capitalize
        `);
        }while(
            validation == null
            || validation.replaceAll(` `,``) === ``
            || (validation.replaceAll(" ","").toLowerCase() != uppercase 
            && validation.replaceAll(" ","").toLowerCase() != lowercase 
            && validation.replaceAll(" ","").toLowerCase() != capitalize));


        if(validation === uppercase){
            word = word.toUpperCase();
        }else if(validation === lowercase){
            word = word.toLowerCase();
        }else if(validation === capitalize){
            word = word[0].toUpperCase() + word.slice(1).toLowerCase();
        }

        finalString += word;
        if(wordIndex === 3){
            finalString += `!`;
        }else{
            finalString += ` `;
        }

        wordIndex++;
    }
    console.log(finalString);
}