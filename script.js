const produtos = [
    {
        id: 1,
        name: "Lenovo idepad 3",
        price: 2312.11,
        imageUrl: "assets/note1.png",
        category: "Produtividade"
    },
    {
        id: 2,
        name: "Lenovo idepad 3i",
        price: 2612.11,
        imageUrl: "assets/note2.png",
        category: "Produtividade"
    },
    {
        id: 3,
        name: "Acer nitro 5",
        price: 3512.11,
        imageUrl: "assets/note3.png",
        category: "Gamer"
    },
    {
        id: 4,
        name: "HP 360",
        price: 1912.11,
        imageUrl: "assets/note4.png",
        category: "Produtividade"
    },
    {
        id: 5,
        name: "Lenovo idepad 1",
        price: 2212.11,
        imageUrl: "assets/note5.png",
        category: "Produtividade"
    },
    {
        id: 6,
        name: "Dell Alienware 3",
        price: 6112.11,
        imageUrl: "assets/note6.png",
        category: "Gamer"
    },
    {
        id: 7,
        name: "Samsung Book Go",
        price: 3012.11,
        imageUrl: "assets/note7.png",
        category: "Produtividade"
    },
    {
        id: 8,
        name: "Asus Gigarock Aorus",
        price: 2812.11,
        imageUrl: "assets/note8.png",
        category: "Produtividade"
    }
];

const productContainer = document.querySelector(".productContainer");


function carregarProdutos(){
    produtos.forEach( (produto) => {
        const productCard = document.createElement("div");
        productCard.className = "productCard";
        productCard.innerHTML = `
            <img src="${produto.imageUrl}" alt="">
                <div class="productInfo">
                    <div>
                        <div>
                            <span>${produto.category}</span>
                            <h3>${produto.name}</h3>
                            <span>R$ ${produto.price}</span>
                        </div>

                        <button onclick="addToCart(${produto.id})">
                            <img src="assets/icons/cart.svg" alt="">
                        </button>
                    </div>
                </div>
        `;

        productContainer.appendChild(productCard);
    })
}

function addToCart(produtoId){
    // Busca o produto na lista de produtos
    const produto = produtos.find(p => p.id == produtoId);


    if(produto){
        // Pega o carrinho no sessionStorage
        const carrinho = JSON.parse(sessionStorage.getItem("carrinho")) || [];

        // Adiiona o produto no carrinho
        carrinho.push(produto);

        // Adciona o carrinho modificado no sessionStorage
        sessionStorage.setItem("carrinho", JSON.stringify(carrinho));

        
        alert(`O produto ${produto.name} foi adicionando ao carrinho!`);
    }
    atualizarContadorProdutos();
}

function atualizarContadorProdutos(){
    const carrinho =  JSON.parse(sessionStorage.getItem("carrinho")) || [];
    const qtd = carrinho.length;

    const contador = document.querySelector(".productCount");

    contador.innerText = qtd;
    contador.style.display = qtd > 0 ? "flex" : "none";

}
window.onload = () => {
    carregarProdutos();
    atualizarContadorProdutos();
    
}