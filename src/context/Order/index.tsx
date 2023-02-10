import {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";
import { IProduct } from "../../interfaces/IProduct";
import { IAddress } from "../../interfaces/IAddress";
import { IPaymentMethod } from "../../interfaces/IPaymentMethod";
import { CoffeesContext } from "../Coffees";

interface IOrderContext {
  products: IProduct[];
  address: IAddress;
  payment: IPaymentMethod;
  increaseProduct: (coffeeID: string) => void;
  decreaseProduct: (coffeeID: string) => void;
  quantityOfProduct: (coffeeID: string) => number;
  productsQuantity: () => number;
  selectedProductsList: () => IProduct[];
  removeProduct: (coffeeID: string) => void;
  deliveryFee: number;
  totalAmmountProducts: () => number;
}

interface IOrderContextProps {
  children: ReactNode;
}

export const OrderContext = createContext({} as IOrderContext);

export function OrderContextProvider({ children }: IOrderContextProps) {
  const [products, setProducts] = useState<IProduct[]>([]);
  const [address, setAddress] = useState<IAddress>({} as IAddress);
  const [payment, setPayment] = useState<IPaymentMethod>({} as IPaymentMethod);

  const { coffees } = useContext(CoffeesContext);

  const deliveryFee = 7.55;

  function increaseProduct(coffeeID: string) {
    const product = products.find((product) => product.coffeeID === coffeeID);
    if (product) {
      product.quantity += 1;
      setProducts([...products]);
    } else {
      setProducts([...products, { coffeeID, quantity: 1 }]);
    }
  }

  function decreaseProduct(coffeeID: string) {
    const product = products.find((product) => product.coffeeID === coffeeID);
    if (product) {
      if (product.quantity > 1) {
        product.quantity -= 1;
        setProducts([...products]);
      } else {
        setProducts(
          products.filter((product) => product.coffeeID !== coffeeID)
        );
      }
    }
  }

  function removeProduct(coffeeID: string) {
    setProducts(products.filter((product) => product.coffeeID !== coffeeID));
  }

  function quantityOfProduct(coffeeID: string) {
    const product = products.find((product) => product.coffeeID === coffeeID);
    return product ? product.quantity : 0;
  }

  function productsQuantity() {
    return products.reduce((acc, product) => acc + product.quantity, 0);
  }

  function selectedProductsList() {
    return products.map((product) => {
      const coffee = coffees.find((coffee) => coffee.id === product.coffeeID);
      if (coffee) {
        return {
          coffeeID: coffee.id,
          title: coffee.title,
          price: coffee.price,
          quantity: product.quantity,
          image: coffee.image,
        };
      }
    }) as IProduct[];
  }

  function totalAmmountProducts() {
    return products.reduce(
      (acc, product) =>
        acc +
        coffees.find((coffee) => coffee.id === product.coffeeID)!.price *
          product.quantity,
      0
    );
  }

  return (
    <OrderContext.Provider
      value={{
        products,
        address,
        payment,
        increaseProduct,
        decreaseProduct,
        quantityOfProduct,
        productsQuantity,
        selectedProductsList,
        removeProduct,
        deliveryFee,
        totalAmmountProducts,
      }}
    >
      {children}
    </OrderContext.Provider>
  );
}
