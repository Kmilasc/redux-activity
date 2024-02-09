import { createReduxModule } from "hooks-for-redux";

const products = [
  {
      id: 1,
      alt: "Imagem de uma Fechadura Digital",
      name: "Fechadura Digital Samsung ",
      price: 1850,
      image: "https://images-americanas.b2w.io/produtos/80357534/imagens/fechadura-eletronica-biometrica-samsung-smart-home-shs-h705-touch-screen-e-rfid-card-com-cartao-de-proximidade/80357536_1_xlarge.jpg",

      category: "eletronics",
  },
  {
    id: 2,
    alt: "Imagem de um Som Automotivo",
    name: "Som Automotivo",
    price: 120,
    image: "https://cdn.awsli.com.br/600x450/1401/1401987/produto/103882770/2e48686506.jpg",
    category: "eletronics",
  },
  {
    id: 3,
    alt: "Imagem de um Fone De Ouvido Bluetooth",
    name: "Fone De Ouvido Bluetooth",
    price: 64,
    image: "https://images-americanas.b2w.io/produtos/5952894558/imagens/fone-de-ouvido-bluetooth-compativel-iphone-samsung-motorola/5952894558_1_large.jpg",
    category: "eletronics",
  },
  {
      id: 4,
      alt: "Imagem de uma Parafusadeira",
      name: "Parafusadeira",
      price: 248,
      image: "https://m.media-amazon.com/images/I/51TG7P2GrWS._AC_SX569_.jpg",

      category: "gear",
  },
  {
    id: 5,
    alt: "Imagem de um Jogo de Soquete",
    name: "Jogo de Soquete 46 Peças",
    price: 60,
    image: "https://m.media-amazon.com/images/I/81MzIgh8luL._AC_SX569_.jpg",
    category: "gear",
  },
  {
    id: 6,
    alt: "Imagem de uma Maleta De Ferramentas",
    name: "Maleta De Ferramentas",
    price: 136,
    image: "https://m.media-amazon.com/images/I/81pOCUtc+tL._AC_SX569_.jpg",
    category: "gear",
  },
  {
      id: 7,
      alt: "Imagem de um Vestido Com Cinto",
      name: "Vestido Com Cinto",
      price: 70,
      image: "https://m.media-amazon.com/images/I/61KFL4Y80WL._AC_SL1500_.jpg",

      category: "outfit",
  },
  {
    id: 8,
    alt: "Imagem de uma Jaqueta Couro",
    name: "Jaqueta Couro",
    price: 180,
    image: "https://m.media-amazon.com/images/I/61fetYhrxUL._AC_SL1000_.jpg",
    category: "outfit",
  },
  {
    id: 9,
    alt: "Imagem de uma Blusa",
    name: "Blusa meia manga",
    price: 30,
    image: "https://m.media-amazon.com/images/I/5148AbbmYzL._AC_SL1500_.jpg",
    category: "outfit",
  }
];

export const [useProductsStore, { applyFilter }, productsStore] = createReduxModule("products", {
  fullList: products,
  filteredList: products,
  currentFilter: "all",
}, {
  applyFilter: (state, category: string) => {
    if (category === "all") {
      return { ...state, filteredList: state.fullList, currentFilter: category };
    }

    return {
      ...state,
      filteredList: state.fullList.filter((product) => product.category === category),
      currentFilter: category,
    };
  },
});
