const CardGame = (function () {
    console.log("go! go!");
    
    this.data = {
        ranks: ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'],
        suits: ['♥','♦','♠','♣'] 
      },
    
    this.cards = [];
    
    this.displayDeck = function () {
        let id = 1;        
  
        for( let s = 0; s < this.data.suits.length; s++ ) {
          for( let r = 0; r < this.data.ranks.length; r++ ) {
            let card = {
              id: id,   // it`s for future idea for Vue
              rank: this.data.ranks[r],
              suit: this.data.suits[s]
            }
            this.cards.push(card);
            id++;
          }
        }
        
        let deck = document.getElementById('deck');
        let itemTemplate = "";
       
        this.cards.forEach(function (item) {

                 switch  (item.suit) {
                    case '♥':
                    case  '♦':  
                      color = 'red';
                      break;
                    case '♠':
                    case '♠':
                      color = 'black';
                    break;  
                  }    


                itemTemplate += `<div class="flip-container wrapper"><div class="flipper"><div class="card card--back front">
                </div><div class="card back ${color}"><span class="card__suit card__suit--top">${item.suit}</span>
                <span class="card__number">${item.rank}</span>
                          <span class="card__suit card__suit--bottom">${item.suit}</span>
                        </div></div></div> `;
                
                 
            })            
        deck.innerHTML = itemTemplate;    
    }
    
    this.displayDeck();
    

})()

