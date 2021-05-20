//Mostrar paragráfo do "paragrafo-remover";
document.querySelector('.linkRemoverConta').addEventListener('mousemove', ()=>{
    document.querySelector('.paragrafo-remover').style.display = 'flex';
});

//Remover paragráfo do "paragrafo-remover";
document.querySelector('.linkRemoverConta').addEventListener('mouseout', ()=>{
    document.querySelector('.paragrafo-remover').style.display = 'none';
});

//Remover conta logada
document.querySelector('.linkRemoverConta').addEventListener('click', ()=>{
    document.querySelector('.usuarios').style.display = 'none';
});
//Logar usuário
document.querySelector('.usuario').addEventListener('click', ()=>{
    document.querySelector('.modal-logado').style.display = 'flex';
});

document.querySelector('.fechar').addEventListener('click', () =>{
    document.querySelector('.modal-logado').style.display = 'none';
});

//Adicionar usuário 
document.querySelector('.adicionar').addEventListener('click',() => {
    document.querySelector('.modal-adicionar-usuario').style.display = 'flex';
});

//Fechar o modal adicionar usuário
document.querySelector('#fechar-modal-usuario').addEventListener('click',() => {
    document.querySelector('.modal-adicionar-usuario').style.display = 'none';
});