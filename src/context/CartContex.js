import { createContext, useState } from "react";

export const CartContext = createContext();

export const CartContextProvider = ({ children }) => {
  const cartStorage = JSON.parse(window.localStorage.getItem("cartItems"));
  const [productsCart, setProductsCart] = useState(cartStorage || []);
  const [totalPrice, setTotalPrice] = useState(0);

  const setLocalStorage = (value) => {
    try {
      setProductsCart(value);
      window.localStorage.setItem("cartItems", JSON.stringify(value));
    } catch (error) {
      console.log(error);
    }
  };

  const getQuantity = () => {
    let quantity = 0;
    productsCart?.forEach((prod) => {
      quantity = quantity + prod?.quantity;
    });
    return quantity;
  };

  const clear = () => {
    setLocalStorage([]);
  };

  const removeItem = (itemId) => {
    const newList = productsCart?.filter((item) => item._id !== itemId);
    setLocalStorage(newList);
  };

  const getPrice = () => {
    const totalArray = productsCart?.map(
      (itemCart) => Number(itemCart?.price?.slice(1)) * itemCart.quantity
    );
    let total = 0;
    totalArray?.forEach((itemPrice) => {
      total = total + itemPrice;
    });
    setTotalPrice(total);
  };

  const getProduct = (id) => {
    return productsCart?.find((prod) => prod._id === id);
  };

  const isInCart = (id) => {
    return productsCart?.some((prod) => prod._id === id);
  };

  const addItem = (item, quantity) => {
    const newProduct = {
      ...item,
      quantity: quantity,
    };

    if (newProduct.quantity === 0) {
      removeItem(item._id);
    } else {
      if (!isInCart(item._id)) {
        setLocalStorage([...productsCart, newProduct]);
      } else {
        const newCartProducts = productsCart.map((prod) => {
          if (prod._id === item._id) {
            const newProduct = {
              ...prod,
              quantity: quantity,
            };
            return newProduct;
          } else {
            return prod;
          }
        });
        setLocalStorage(newCartProducts);
      }
    }
  };

  return (
    <CartContext.Provider
      value={{
        addItem,
        productsCart,
        removeItem,
        getQuantity,
        getPrice,
        isInCart,
        clear,
        totalPrice,
        getProduct,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
