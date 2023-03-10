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
import { PAYMENT_METHODS } from "../../utils/paymentMethods";

interface IOrderContext {
  products: IProduct[];
  address: IAddress;
  payment: IPaymentMethod;
  insertOrUpdateProduct: (coffeeID: string, quantity: number) => void;
  productsQuantity: () => number;
  increaseProduct: (coffeeID: string) => void;
  decreaseProduct: (coffeeID: string) => void;
  selectedProductsList: () => IProduct[];
  removeProduct: (coffeeID: string) => void;
  deliveryFee: number;
  totalAmmountProducts: () => number;
  fillAddress: (data: IAddress) => void;
  isProductsEmpty: () => boolean;
  selectPaymentMethod: (paymentMethodID: string) => void;
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

  function isProductsEmpty() {
    return products.length === 0;
  }

  function insertOrUpdateProduct(coffeeID: string, quantity: number) {
    const product = products.find((product) => product.coffeeID === coffeeID);
    if (product) {
      product.quantity += quantity;
      setProducts([...products]);
    } else {
      setProducts([...products, { coffeeID, quantity }]);
    }
  }

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

  function fillAddress(value: IAddress) {
    setAddress((prev) => ({ ...prev, ...value }));
  }

  function selectPaymentMethod(paymentMethodID: string) {
    const paymentMethod = PAYMENT_METHODS.find(
      (paymentMethod) => paymentMethod.id === paymentMethodID
    );
    if (paymentMethod) {
      setPayment(paymentMethod);
    }
  }

  return (
    <OrderContext.Provider
      value={{
        products,
        address,
        payment,
        insertOrUpdateProduct,
        productsQuantity,
        increaseProduct,
        decreaseProduct,
        selectedProductsList,
        removeProduct,
        deliveryFee,
        totalAmmountProducts,
        fillAddress,
        isProductsEmpty,
        selectPaymentMethod,
      }}
    >
      {children}
    </OrderContext.Provider>
  );
}
