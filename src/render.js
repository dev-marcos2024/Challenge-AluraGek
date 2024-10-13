const cards = document.getElementById('cards')
let listJogos = JSON.parse(localStorage.getItem('games'))

if (listJogos === null){
function addStage(){
       
        const data = listDeGames;
        localStorage.setItem('games', JSON.stringify(data))
        renderCards(data)
    }

    addStage()
    
}

function deleteCard(e){
    const key = e.getAttribute('key')
    const jogos = JSON.parse(localStorage.getItem('games'))
    const newJogos = jogos.filter(jogo => jogo.id !== parseInt(key))
    localStorage.setItem('games', JSON.stringify(newJogos))
    renderCards(newJogos)
}

function createCard(jogo){
    return(
        `<div class="card">
            <img src=${jogo.src} alt=${jogo.nome}>
            <p>${jogo.nome}</p>
            <div key=${jogo.id} class="card__preco" onclick="deleteCard(this)">
                <p>$ ${jogo.preco.toFixed(2)}</p>
                <div  class="btb__delet"><i class="bi bi-trash3-fill delet"></i></div>
            </div>
        </div>`
    )
}

function renderCards (list){
    
    cards.innerHTML = ''
    const listGames = list

    listGames.map((item)=>{
        let card = createCard(item)
        cards.innerHTML += card
    })
    
}

if (JSON.parse(localStorage.getItem('games')) !== null){
    renderCards(JSON.parse(localStorage.getItem('games')))
}


