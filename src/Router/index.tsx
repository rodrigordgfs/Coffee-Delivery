import { Route } from "react-router";
import { Routes } from "react-router-dom";
import { DefaultLayout } from "../layouts/DefaultLayout";
import { Home } from "../pages/Home";
import { Checkout } from "../pages/Checkout";
import { Success } from "../pages/Success";
import { CoffeesContextProvider } from "../context/Coffees";
import { OrderContextProvider } from "../context/Order";

export function Router() {
  return (
    <CoffeesContextProvider>
      <OrderContextProvider>
        <Routes>
          <Route path="/" element={<DefaultLayout />}>
            <Route path="/" element={<Home />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/success" element={<Success />} />
          </Route>
        </Routes>
      </OrderContextProvider>
    </CoffeesContextProvider>
  );
}
