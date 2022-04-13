let deckId = ''

fetch(`https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1`)
    .then(res => res.json()) // parse response as JSON
    .then(data => {
    console.log(data)
    deckId = data.deck_id
    })
    .catch(err => {
        console.log(`error ${err}`)
    });


document.querySelector('button').addEventListener('click', drawTwo)

function drawTwo(){

  const url = `https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=2`


  fetch(url)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        console.log(data)
        document.querySelector('#card0').src = data.cards[0].image
        document.querySelector('#card1').src = data.cards[1].image
        let player1Val = convertToNum(data.cards[0].value)
        let player2Val = convertToNum(data.cards[1].value)
        if(player1Val > player2Val){
            document.querySelector('h3').innerText = 'Player 1 Wins'
        }else if(player1Val < player2Val){
            document.querySelector('h3').innerText = 'Player 2 Wins'
        }else{
            document.querySelector('h3').innerText = 'Time for War!'
            document.querySelector('button').removeEventListener('click', drawTwo)
            document.querySelector('button').addEventListener('click', warTime)
        }
        let tableRef = document.querySelector('.reset')
        for(let i = 0; i <= cards.images.length; i++)
        {
            tableRef.delete(i)
        }
      })
      .catch(err => {
          console.log(`error ${err}`)
      });
}

function convertToNum(val){
    if(val === 'ACE'){
        return 14
    }else if(val === 'KING'){
        return 13
    }else if(val === 'QUEEN'){
        return 12
    }else if(val === 'JACK'){
        return 11
    }else{
        return Number(val)
    }
}

function warTime(){

fetch(`https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=8`)
    .then(res => res.json()) // parse response as JSON
    .then(data => {
        console.log(data)
        document.querySelector('#card0').src = data.cards[0].image
        document.querySelector('#card1').src = data.cards[1].image
        document.querySelector('#card2').src = data.cards[2].image
        document.querySelector('#card3').src = data.cards[3].image
        document.querySelector('#card4').src = data.cards[4].image
        document.querySelector('#card5').src = data.cards[5].image
        document.querySelector('#card6').src = data.cards[6].image
        document.querySelector('#card7').src = data.cards[7].image
        let player1Val = convertToNum(data.cards[6].value)
        let player2Val = convertToNum(data.cards[7].value)
        if(player1Val > player2Val){
            document.querySelector('h3').innerText = 'Player 1 Wins'
            document.querySelector('button').removeEventListener('click', warTime)
            document.querySelector('button').addEventListener('click', drawTwo)
        }else if(player1Val < player2Val){
            document.querySelector('h3').innerText = 'Player 2 Wins'
            document.querySelector('button').removeEventListener('click', warTime)
            document.querySelector('button').addEventListener('click', drawTwo)
        }else{
            document.querySelector('h3').innerText = 'Time for War AGAIN!'
        }
    })
    .catch(err => {
        console.log(`error ${err}`)
    });
}

//removeEventListener