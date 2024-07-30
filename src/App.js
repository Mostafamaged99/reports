import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Candidates from "./components/Candidates/Candidates";
import Positions from "./components/Positions/Positions";
import Interviews from "./components/Interviews/Interviews";
import Layout from "./components/Layout/Layout";
import HiringRequests from "./components/HiringRequests/HiringRequests";
import Applications from "./components/Applications/Applications";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        { index: true, element: <Candidates /> },
        { path: "candidates", element: <Candidates /> },
        { path: "positions", element: <Positions /> },
        { path: "interviews", element: <Interviews /> },
        { path: "hiring-requests", element: <HiringRequests /> },
        { path: "applications", element: <Applications /> },
      ],
    },
  ]);

  return (
    <>
        <RouterProvider router={router} />
    </>
  );
}

export default App;
