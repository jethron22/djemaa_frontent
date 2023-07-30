import Navbar from "./components/navbar/Navbar"
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Home from "./pages/home/Home";
import Footer from "./components/navbar/footer/Footer";
import Djema from "./pages/djema/Djema";
import Djemas from "./pages/djemas/Djemas";
import MyOrders from "./pages/myOrders/MyOrders";
import MyDjemas from "./pages/myDjemas/MyDjemas";
import Addjema from "./pages/addDjema/Addjema";
import Messages from "./pages/messages/Messages";
import Message from "./pages/message/Message";
import "./app.scss"
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import {
  QueryClient,
  QueryClientProvider,

} from '@tanstack/react-query'




function App() {

  const queryClient = new QueryClient()

  const Layout = () => {
    return (

      <div className="app">
        <QueryClientProvider client={queryClient}>
          <Navbar />
          <Outlet />
          <Footer />
        </QueryClientProvider>
      </div>

    )
  }

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Home />
        },
        {
          path: "/djemas",
          element: <Djemas />
        },
        {
          path: "/djema/:id",
          element: <Djema />
        },
        {
          path: "/commandes",
          element: <MyOrders />
        },
        {
          path: "/my-djema",
          element: <MyDjemas />
        },
        {
          path: "/add-djemaa",
          element: <Addjema />
        },
        {
          path: "/messages",
          element: <Messages />
        },
        {
          path: "/message/:id",
          element: <Message />
        },


        {
          path: "/login",
          element: <Login />
        },

        {
          path: "/register",
          element: <Register />
        },

      ]


    },


  ])

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  )
}

export default App
