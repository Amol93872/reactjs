import "./App.css";
import About from "./compoents/About";
import Home from "./compoents/Home";
import { Login } from "./compoents/Login";
import Nav from "./compoents/Nav";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <>
          <Nav />
          <Home />
        </>
      ),
    },
    {
      path: "/login",
      element: (
        <>
          {" "}
          <Nav />
          <Login />
        </>
      ),
    },
    {
      path: "/about",
      element: (
        <>
          {" "}
          <Nav />
          <About />
        </>
      ),
    },
  ]);
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
