let inputNameReference = document.querySelector('#inputName');
let inputSobrenomeReference = document.querySelector('#inputSobrenome');
let btnSubmitReference = document.querySelector('#btnSubmit');
let originalReference = document.querySelector('#original');
let trimReference = document.querySelector('#trim');
let toUpperCaseReference = document.querySelector('#toUpperCase');
let toLowerCaseReference = document.querySelector('#toLowerCase');
let concatReference = document.querySelector('#concat');
let replaceReference = document.querySelector('#replace');

btnSubmitReference.addEventListener('click',function(event){
    event.preventDefault();
    originalReference.innerHTML +=`Original:${inputNameReference.value} ${inputSobrenomeReference.value}    
    `
    trimReference.innerHTML +=`Trim:${inputNameReference.value.trim()} ${inputSobrenomeReference.value.trim()}  
    `
    toUpperCaseReference.innerHTML +=`toUpper:${inputNameReference.value.toUpperCase()} ${inputSobrenomeReference.value.toUpperCase()}  
    `
    toLowerCaseReference.innerHTML +=`toLower:${inputNameReference.value.toLowerCase()} ${inputSobrenomeReference.value.toLowerCase()}  
    `
    concatReference.innerHTML +=`Concat:${inputNameReference.value.concat(inputSobrenomeReference.value)} 
    `
    replaceReference.innerHTML +=`Replace:
    ${inputNameReference.value.replace(/a/i,'@').replace(/e/i,'3')} 
    ${inputSobrenomeReference.value.replace(/a/i,'@').replace(/e/i,'3')}  
    `
})