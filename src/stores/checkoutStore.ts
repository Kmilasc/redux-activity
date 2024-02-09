import { createReduxModule } from "hooks-for-redux";

interface IProductChekouted {
  idProduct: number;
  amount: number;
}

export const [useCheckoutStore, { addToCart }] = createReduxModule("checkout", [] as IProductChekouted[], {
  addToCart: (state, { idProduct, amount }: IProductChekouted) => {
    const isProdcutRanked = state.find((product) => product.idProduct === idProduct);

    if (isProdcutRanked) {
      return state.map((product) =>
        product.idProduct === idProduct ? { ...product, amount: product.amount + amount } : product
      );
    }

    return [...state, { idProduct, amount: 1 }];
  },
});
