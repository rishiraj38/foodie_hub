import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import ResturantMenu from "./components/ResturantMenu";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import About from "./components/About";
import Cart from "./components/Cart";
import Contact from "./components/Contact";
import Error from "./components/Error";
import { Provider } from "react-redux";
import appStore from "./utlis/appStore";
import ProccedToPay from "./components/ProceedToPay";
import { inject } from "@vercel/analytics";
import Login from "./components/Login";
inject();
const AppLayout = () => {
  return (
    <Provider store={appStore}>
      <div className="app">
        <Header />
        <Outlet />
      </div>
    </Provider>
  );
};
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/",
        element: <Login />,
      },
      {
        path: "/body",
        element: <Body />,
      },
      {
        path: "/resturant/:resid",
        element: <ResturantMenu />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/proceedtopay",
        element: <ProccedToPay />
      }
    ],
    errorElement: <Error />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
