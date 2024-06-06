

function minhaFuncao() {
    const nome = document.getElementById('nome').value;
    const telefone = document.getElementById('telefone').value;
    
    if (nome === '' || telefone === '' || email === '') {
        alert("Preencha todos os campos");
    } else {
        alert("Entraremos em contato com você " + nome + " pelo telefone " + telefone);
    }

}