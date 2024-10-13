//! Variaveis
const limpar = document.getElementById('limpar');
const salvar = document.getElementById('salvar');
const form = document.getElementById('form');

// ! Eventos 
document.querySelectorAll('input').forEach((input)=>{
    input.addEventListener('blur', (ev)=>{
        ev.currentTarget.style.borderColor = '#00001a'
        ev.currentTarget.nextElementSibling.innerHTML = ''
    })
})

limpar.addEventListener('click', (e)=>{
    e.preventDefault()
    document.querySelectorAll('input').forEach((item)=>{
        item.value = ''
        item.style.borderColor = '#00001a'
        item.nextElementSibling.innerHTML = ''
    })
})


form.addEventListener('submit', (e)=>{
    e.preventDefault();
    let teste = validateForm();
    
    if(teste){
        const newGames = updateListGames()
        localStorage.setItem('games', JSON.stringify(newGames.reverse()));
        renderCards(JSON.parse(localStorage.getItem('games')))
    }

})

// ! Funcoes

function updateListGames(){
    const inputs = document.querySelectorAll('input');
    const jogos = JSON.parse(localStorage.getItem('games'));
    const key = jogos.length + 1;

    let newJogo = {};
    newJogo.id = key;

    inputs.forEach(input => {
        if (input.name === 'preco')
            newJogo[input.name] = parseFloat(input.value);
        else{
            newJogo[input.name] = input.value;
        }
    }); 
    jogos.push(newJogo)

    return jogos
}

function validateForm(){
    const inputs = document.querySelectorAll('input');

    for (valor of inputs){
        if(valor.value === ''){
            valor.style.borderColor = 'red'
            valor.nextElementSibling.innerHTML = 'Preencha o campo vazio.'
            return false
        }else if(valor.name === 'src'){
            if(!valor.value.includes('https://')){
                valor.style.borderColor = 'red'
                valor.nextElementSibling.innerHTML = 'O link da imagem deve ser do tipo: https://'
                return false
            }
        }
        
    }
    return true
}


document.body


