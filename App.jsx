import Navbar from "./components/navbar";
// import SideBar from "./components/SideBar"; 
import Inbox from "./components/Inbox";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Body from "./components/Body";
import Mail from "./components/Mail";
import SendMail from "./components/SendMail"; // <-- Add this line
// import store from "./redux/store"; 
import Login from "./components/Login";
import { useSelector } from "react-redux";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Body />,
    children: [
      {
        path: "/",
        element: <Inbox />
      },
      {
        path: "/mail/:id",
        element: <Mail />
      }
    ]
  }
])

function App() {
  const {user} = useSelector(store=>store.appSlice);
  return (
    <>      <div className="bg-[#F6F8FC] h-screen w-screen overflow-hidden">
      {
        !user ? (
          <Login />
        ) : (
          <>
            <Navbar />
            <RouterProvider router={router} />
            <div className="absolute w-[30%] bottom-0 right-20 z-10">
              <SendMail />
            </div>
          </>
        )
      }


    </div>
    </>

  );
}

export default App
