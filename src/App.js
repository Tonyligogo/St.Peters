import './App.css';
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';
import Home from './pages/home/Home';
import Events from './pages/events/Events';
import Youth from './pages/Ministries/Youth/Youth';
import Children from './pages/Ministries/Children/Children ';
import Kama from './pages/Ministries/Kama/Kama';
import MothersUnion from './pages/Ministries/MU/MothersUnion';
import PraiseTeam from './pages/Ministries/PraiseTeam/PraiseTeam';
import Choir from './pages/Ministries/Choir/Choir';


function App() {
  const Layout = () => {
    return (
      <div>
          <Navbar/>
          <div>
          {/* style={{marginBlockStart:'70px'}} */}
          <Outlet />
          </div>
          <Footer/>
      </div>
    );
  };
  const router = createBrowserRouter(
    [
      {
        path: "/",
        element: <Layout />,
        children: [
          {
            path: "/",
            element: <Home />,
          },
          {
            path: "/events",
            element: <Events />,
          },
          {
            path: "/ministries",
            children: [
              {
                path: "/ministries/youth-ministry",
                element: <Youth />,
              },
              {
                path: "/ministries/children-ministry",
                element: <Children/>,
              },
              {
                path: "/ministries/Kama",
                element: <Kama />,
              },
              {
                path: "/ministries/MothersUnion",
                element: <MothersUnion />,
              },
              {
                path: "/ministries/PraiseTeam",
                element: <PraiseTeam />,
              },
              {
                path: "/ministries/Choir",
                element: <Choir />,
              },
            ],
          },
          {
            path: "/get-involved",
            // element: <GetInvolved />,
          },
        ],
      },
    ]
  );

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
