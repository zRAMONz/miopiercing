body {
    background-color: #dffafa;
       background-size: 200% 500%;
    color: #303030;
    font-family: Arial, sans-serif;
    font-size: 35px;
}

.product {
    display: flex;
    flex-direction: row;
    margin-top: auto;
    margin-bottom: auto;
    margin: 15px 0 40px;
    padding: 15px 20px;
    background-color: #ffffff96;
    border-radius: 20px;
    min-height: 340px;
    
}
.product-details {
    flex-basis: 60%;
    display: flex;
    flex-direction: column;
      margin-left: 40px;
    justify-content: center;
}
.product img {
    width: 100%;
    max-width: 340px;
    height: auto;
    margin-bottom: 15px;
    border-radius: 60px;
}

.product h3 {
    color: #303030;
    margin-bottom: 35px;
    font-size: 35px;
    margin-top: 10px;
}

.colors {
    display: flex;
    flex-direction: column;
    align-content: flex-end;
    align-items: center;
    /* position: absolute; */
    /* right: 40px; */
    justify-content: center;
    min-width: 120px;
}

.colors .color {
    padding: 40px 12px;
    background-color: #444;
    border: none;
    color: #ddd;
    border-radius: 5px;
    cursor: pointer;
    margin: 10px;
    border: 2px solid #979797;
}


.sizes {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
}
.sizes[data-color="Natural"] {
    display: flex;
    flex-direction: row;
    align-items: center;
    max-width: 60%;
    justify-content: space-between;

}
.sizes .size {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 10px;
    align-items: flex-start;
    margin-right: -120px;
}

.sizes[data-color="Gold"] {
    display: none;
}
.sizes[data-color="Black"] {
    display: none;
}

.sizes h4 {
    margin-bottom: 5px;
    color: #000000;
    margin-top: 0px;
}

.sizes .measure {
    color: #000000;
}

#popup-add {
    display: block;
    margin-left: auto;
    font-size: 60px;
    background-image: linear-gradient(-180deg, #f7f7f7 0%, #ededed 100%);
    border-radius: .5rem;
    box-sizing: border-box;
    color: #000000;
    padding: 1rem 1.75rem;
    text-decoration: none;
    border: 1px;
    cursor: pointer;
    border: 2px solid #979797;

  }
#welcomePopup {
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: #dffafa;
    color: #303030
    z-index: 1000;
    padding: 10px;
    font-size: 30px;
}

#welcomePopup p {
    font-size: 2.5em;
    margin-bottom: 100px;
    text-align: center;
}

#welcomePopup .buttons {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
}

#welcomePopup button {
    margin: 10px;
    padding: 10px 20px;
    font-size: 60px;
    background-image: linear-gradient(-180deg, #f7f7f7 0%, #ededed 100%);
    border-radius: .5rem;
    box-sizing: border-box;
    color: #000000;
    padding: 1rem 1.75rem;
    text-decoration: none;
    border: 1px;
    cursor: pointer;
    width: 60%;
    border: 2px solid #979797;
}


button {
    margin: 10px;
    padding: 10px 20px;
    font-size: 60px;
    background-image: linear-gradient(-180deg, #f7f7f7 0%, #ededed 100%);
    border-radius: .5rem;
    box-sizing: border-box;
    color: #000000;
    padding: 1rem 1.75rem;
    text-decoration: none;
    border: 1px;
    cursor: pointer;
}

button.color {
    background-image: linear-gradient(-180deg, #f7f7f7 0%, #ededed 100%);
        border-radius: .5rem;
        box-sizing: border-box;
        color: #000000;
        display: flex;
        font-size: 40px;
        justify-content: center;
        padding: 1rem 1.75rem;
        text-decoration: none;
        width: 100%;
        border: 0;
        cursor: pointer;
        user-select: none;
        -webkit-user-select: none;
        touch-action: manipulation;
        border-radius: 10px;
      }

button.color:active {
    background-color: darkblue;
}

button.measure {
    background-color: green;
}

button.measure:active {
    background-color: darkgreen;
}

#popup {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    padding: 20px;
    background-color: #efffff;
    border: 1px solid black;
    z-index: 100;
    width: 90%;
    max-width: 100%; /* Defina um valor máximo desejado para evitar que o pop-up fique muito largo em telas grandes */
    
}

#popup-close {
    position: absolute;
    top: 10px;
    right: 10px;
    height: 90px;
    font-size: 50px;
    font-weight: bold;
    color: #000;
    background-color: transparent;
    border: none;
    cursor: pointer;
    border: 1px solid #5c5c5c;
}


#popup-close:active {
    background-color: darkred;
}
button:focus {
    background-color: purple;
}

button:focus:active {
    background-color: darkpurple;
}
header h1 {
    color: #303030;
    margin: 150px 0 200px;
    text-align: center;
}

#productList h2,
#purchaseSummary h2 {
    color: #005e5e;
    margin: 20px 40px;
}
button.color[data-color="Natural"] {
    background-color: #fff;
    color: #000;
    border-radius: 22px;
}

button.color[data-color="Gold"] {
    background-image: linear-gradient(-180deg, #fff2b3 0%, #ffed92 100%);
    color: #000;
    border-radius: 22px;
}

button.color[data-color="Black"] {
    background-image: linear-gradient(-180deg, #838383 0%, #444444 100%);
    color: #ffffff;
    border-radius: 22px;
}
button.color:focus {
    background-color: darkgray;
    color: #000;
}

button.color:focus:active {
    background-color: gray;
}
#total {
    color: #000000;
}

#purchaseSummary p {
    color: #000000;
    margin: 50px 40px;
}

.sizes h4 {
    color: #000;
}
#popup h2 {
    color: #000;
    margin-top: 80px;
}
.measure.selected {
    /* Aqui você pode definir os estilos CSS que fazem o botão parecer selecionado */
    background-color: #f00; /* por exemplo, isso fará com que o fundo do botão se torne vermelho */
}
.measure {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    flex-wrap: nowrap; /* Adicione essa linha para garantir que os itens não quebrem para a próxima linha */
}

.measure-quantity {
    width: 117px;
    height: 50px;
    margin-left: 10px;
    padding: 5px;
    border: 2px solid #000000;
    border-radius: 5px;
    margin: 15px;
}
#popup .popup-sizes {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    max-width: 90%;
    padding-bottom: 50px;
}
#popup .popup-sizes .sizes {
    width: 100%; /* ajuste este valor conforme necessário */
    max-width: 250px;
}
.measure {
    margin-bottom: 10px;
}
.product .sizes input {
    display: none;
}
.sizes[data-color="Gold"] {
    display: none;
}
@media (max-width: 600px) {
    .product {
        flex-direction: column;
        align-items: center;
    }
    .product img {
        width: 100%;
        max-width: 340px;
        height: auto;
        margin-bottom: 15px;
    }
    .product-name, .size h4, .measure, .color {
        font-size: 1.5em; /* Aumente o tamanho da fonte */
    }
    .color {
        padding: 10px;
        margin: 0 10px;
        background-color: #444;
        border: none;
        color: #ddd;
        border-radius: 5px;
        cursor: pointer;
        border: 1px solid #ccc; /* cinza claro */
    }
    
    .measure {
        background-color: green;
    }
    
    .measure-quantity {
        height: 50px; /* Aumente o tamanho do campo de quantidade */
    }
}
.measure-container {
    display: flex;
    align-items: center;
    justify-content: flex-end;

}
#copyButton {
    margin-left: 40px
}
#copyButton, #whatsappButton {
    font-size: 60px;
    background-image: linear-gradient(-180deg, #f7f7f7 0%, #ededed 100%);
    border-radius: .5rem;
    box-sizing: border-box;
    color: #000000;
    padding: 1rem 1.75rem;
    text-decoration: none;
    border: 1px;
    cursor: pointer;
    border: 2px solid #979797;
    margin-bottom: 120px;
  }

#popup-product-image {
    width: 230px;  /* ajuste a largura da imagem */
    height: 230px; /* ajuste a altura da imagem */
    object-fit: cover; /* manter a proporção da imagem enquanto preenche o espaço designado */
    margin-bottom: 20px; /* espaço abaixo da imagem */
}
.popup-header {
    display: flex;
    align-items: center;
    gap: 20px;
}

.popup-text {
    display: flex;
    flex-direction: column-reverse;
    margin-left: 20px;

}
.product-info {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}

.product-info img {
    margin-bottom: 10px; /* Ajuste este valor conforme necessário */
}
#popup input[type="number"] {
    font-size: 40px; /* ajuste este valor conforme necessário */
}
#cart {
    margin-left: 40px;
}
.popup-product-name {
    font-size: 50px;
    font-weight: bold;
    margin: 0;
}
.popup-color {
    font-size: 40px;
}
#cart div {
    margin-bottom: 10px;  
}
#cart p {
    display: flex;
    align-items: center;
    background: white;
    padding: 10px;
    margin-bottom: 10px;
    border-radius: 5px;
}

#cart p img {
    margin-right: 10px;
    width: 80px;
    height: 80px;
    display: block;
}

#cart p .product-info {
    flex: 1;
}

#cart p button {
    margin-left: auto;
    background-color: #000000;
    color: rgb(0, 0, 0);
    padding: 5px 10px;
    cursor: pointer;
}
header {
    display: flex;
    align-items: center;
    padding: 20px;
    flex-direction: column;
}

.whatsapp-container {
    display: flex;
    align-items: center;
    gap: 10px;
    justify-content: flex-end;
}

.whatsapp-container img {
    width: 100px;
    height: auto;
}

.whatsapp-container span {
    font-size: 28px; /* Ajuste o tamanho do texto */
    color: #000; /* Ajuste a cor do texto */
}

header img {
    width: 400px; /* Ajuste o tamanho do logo */
    height: auto;
}
#popup-logo {
    width: 80%;
    height: auto;
    display: block;
    margin: 0 auto; /* Centraliza o logo horizontalmente */
}
#popup, #welcomePopup {
    position: fixed; 
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%); 
    /* demais propriedades */
}
