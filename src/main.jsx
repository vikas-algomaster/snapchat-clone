import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import App from "./App";
import "./index.css";
import store from "./app/store";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Preview from "./preview";
import WebCamCapture from "./webCamCapture";
import Chats from "./chats";
import ChatView from "./ChatView";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <WebCamCapture />,
      },
      {
        path: "preview",
        element: <Preview />,
      },
      {
        path: "chats",
        element: <Chats />,
      },
      {
        path: "/chats/view",
        element: <ChatView />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
