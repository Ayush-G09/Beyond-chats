import { createBrowserRouter, Navigate } from "react-router-dom";
import Layout from "./views/Layout";
import ExploreChats from "./views/ExploreChats";
import BusinessLeads from "./views/BusinessLeads";
import ViewMindMap from "./views/ViewMindMap";
import ManageTeam from "./views/ManageTeam";
import ConfigureChatbot from "./views/ConfigureChatbot";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Navigate to="/chat" replace={true} />,
  },
  {
    path: "/chat",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <ExploreChats />,
      },
      {
        path: ":id",
        element: <ExploreChats />,
      },
    ],
  },
  {
    path: "/leads",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <BusinessLeads />,
      },
    ],
  },
  {
    path: "/mind-map",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <ViewMindMap />,
      },
    ],
  },
  {
    path: "/team",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <ManageTeam />,
      },
    ],
  },
  {
    path: "/config",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <ConfigureChatbot />,
      },
    ],
  },
]);
