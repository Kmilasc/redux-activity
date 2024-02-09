import { createReduxModule } from "hooks-for-redux";

interface IProductRanked {
  idProduct: number;
  likes: number;
}

export const [useRankingStore, { likeProduct }, rankingStore] = createReduxModule("ranking", [] as IProductRanked[], {
  likeProduct: (state, idProduct: number) => {
    const isProdcutRanked = state.find((product) => product.idProduct === idProduct);

    if (isProdcutRanked) {
      return state.map((product) =>
        product.idProduct === idProduct ? { ...product, likes: product.likes + 1 } : product
      );
    }

    return [...state, { idProduct, likes: 1 }];
  },
});
