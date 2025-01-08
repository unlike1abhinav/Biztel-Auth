# Biztel-Auth
Authentication Application

First setup basic frontend and backend

## Frontend Setup 

```bash
npm create vite@latest
```
Then follow the instructions given in terminal 




## Frontend Structure

```bash
src/
├── pages/
│   ├── Home.jsx
│   ├── Login.jsx
│   └── Signup.jsx
├── services/
│   └── api.js
├── layouts/
│   └── MainLayout.jsx
├── components/
│   └── Error.jsx
├── main.jsx
```



## Frontend Libraries

Install the following libraries using npm i for the project setup 

for routing

```bash
npm install react-router-dom
```

for styled components use material-ui

```bash
npm install @mui/material @emotion/react @emotion/styled
```
## main.jsx setup

Import react-router-dom and required pages for routing and create a proper routing 

```bash
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Login from "./pages/Login.jsx";
import Signup from "./pages/Signup.jsx";
import Mainlayout from "./Layouts/MainLayout.jsx";

const router = createBrowserRouter([
  {
    element: <Mainlayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/signup",
        element: <Signup />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
```
## MainLayout

/src/layouts/MainLayout.jsx

Setup the MainLayout from where we can navigate to different section we use <Outlet> from react-router-dom to have all the pages in it

```bash
import { Outlet } from 'react-router-dom'

const Mainlayout = () => {
  return (
    <div>
      <Outlet/>
    </div>
  )
}

export default Mainlayout
```

## Home Page Setup

src/pages/Home.jsx

Use <Link> from react-router-dom to navigate to Login and Signup and <Button> from @mui/material for using styled Button

```bash
import { Button } from "@mui/material";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="home">
      <Link to="/signup" className="nav">
        <Button variant="contained" size="large">
          Sign Up
        </Button>
      </Link>
      <Link to="/login" className="nav">
        <Button variant="contained" size="large" >
          Login
        </Button>
      </Link>
    </div>
  );
};

export default Home;
```
![App Screenshot](./screenshots/Home.png)