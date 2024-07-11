class Button {
    constructor(name, price_usd, symbol, id) {
        this.name = name;
        this.price_usd = price_usd;
        this.symbol = symbol;
        this.id = id;
    }

    render() {
        const allCards = document.querySelector("#allCards");
        const card = document.createElement("div");
        card.classList = "card col-3 m-2";
        card.innerHTML = ` <img src="https://files.coinmarketcap.com/static/widget/coins_legacy/64x64/${this.id}.png" class="card-img-top"
            alt="...">
            
            <div class="card-body">
            <h5 class="card-title">${this.name}</h5>
            <p class="card-text">Price: ${this.price_usd}</p>
            <button class="btn btn-primary">Symbol</button>
            </div>`;
        const btn = card.querySelector('button');
        btn.addEventListener('click', () => {
            alert(`My symbol is: ${this.symbol}`);
        });
        allCards.append(card);
    }
}