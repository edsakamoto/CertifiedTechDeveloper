let inputComentarioReference = document.querySelector('#inputComentario');
let btnSubmitReference = document.querySelector('#btnSubmit');
let mainContentReference = document.querySelector('.mainContent')

btnSubmitReference.addEventListener('click',function(event){
    event.preventDefault();    
    mainContentReference.innerHTML += `
    <div class="item">
        <p>${inputComentarioReference.value}</p>
    </div>
    `
    let comentarioSalvo = {
        texto: inputComentarioReference.value
    };
    localStorage.setItem('comentario',JSON.stringify(comentarioSalvo))

})
//localStorage.getItem('comentario');

