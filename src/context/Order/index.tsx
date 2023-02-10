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
  addProduct: (coffeeID: string) => void;
  removeProduct: (coffeeID: string) => void;
  quantityOfProduct: (coffeeID: string) => number;
  totalPriceQuantity: (coffeeID: string) => number;
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

  function addProduct(coffeeID: string) {
    const product = products.find((product) => product.coffeeID === coffeeID);
    if (product) {
      product.quantity += 1;
      setProducts([...products]);
    } else {
      setProducts([...products, { coffeeID, quantity: 1 }]);
    }
  }

  function removeProduct(coffeeID: string) {
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

  function quantityOfProduct(coffeeID: string) {
    const product = products.find((product) => product.coffeeID === coffeeID);
    return product ? product.quantity : 0;
  }

  function totalPriceQuantity(coffeeID: string) {
    const product = products.find((product) => product.coffeeID === coffeeID);
    const coffee = coffees.find((coffee) => coffee.id === coffeeID);
    if (product && coffee) {
      return product.quantity * coffee.price;
    }
    return 0;
  }

  return (
    <OrderContext.Provider
      value={{
        products,
        address,
        payment,
        addProduct,
        removeProduct,
        quantityOfProduct,
        totalPriceQuantity,
      }}
    >
      {children}
    </OrderContext.Provider>
  );
}
