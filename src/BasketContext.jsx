import { createContext, useState } from "react";

const addBasket = (item, setBasket, basket) => {
    const itemIndex = basket.findIndex(basketItem => basketItem.product.title === item.title);

    if (itemIndex !== -1) {
        const updatedBasket = basket.map((basketItem, index) =>
            index === itemIndex
                ? { ...basketItem, count: basketItem.count + 1 }
                : basketItem
        );
        setBasket(updatedBasket);
    } else {
        setBasket(prevBasket => [...prevBasket, { product: item, count: 1 }]);
    }
};

const removeBasket = (item, setBasket, basket) => {
    const itemIndex = basket.findIndex(basketItem => basketItem.product.title === item.title);
    const count = item.count;

    const updatedBasket = basket.map((basketItem, index) =>
        index === itemIndex
            ? { ...basketItem, count: basketItem.count - 1 }
            : basketItem
    );
    count === 1
        ? setBasket(prevBasket => prevBasket.filter(basketItem => basketItem.product.title !== item.product.title))
        : setBasket(updatedBasket)
};
const deleteProduct = (item, setBasket) => {
        setBasket(prevBasket => prevBasket.filter(basketItem => basketItem.product.title !== item.title))
};



export const BasketContext = createContext({
    basket: [],
    addBasket: () => { },
    removeBasket: () => { }
});


export const BasketProvider = ({ children }) => {
    const [basket, setBasket] = useState([]);

    return (
        <BasketContext.Provider value={{ basket, addBasket: (item) => addBasket(item, setBasket, basket), removeBasket: (item) => removeBasket(item, setBasket, basket), deleteProduct: (item) => deleteProduct(item, setBasket)}}>
            {children}
        </BasketContext.Provider>
    );
};
