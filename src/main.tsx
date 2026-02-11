import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home/index.tsx";
import Contact from "./pages/Contacts/index.tsx";
import Volunteer from "./pages/Volunteer/index.tsx";

const router = createBrowserRouter([
  { path: "/", element: <Home /> },
  { path: "/contact", element: <Contact /> },
  { path: "/beavolunteer", element: <Volunteer /> },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
