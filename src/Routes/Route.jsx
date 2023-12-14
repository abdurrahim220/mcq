import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Home from "../pages/Home/Home";
import RecentTask from "../pages/RecentTask/RecentTask";
import ArchivedTask from "../pages/ArchivedTask/ArchivedTask";
import SocrateaseQuizzes from "../pages/SocrateaseQuizzes/SocrateaseQuizzes";
import Usage from "../pages/Usage/Usage";
import Billing from "../pages/Billing/Billing";
import Team from "../pages/Team/Team";
import Account from "../pages/Account";
import React, { Suspense } from "react";
import MainLoader from "../components/Loader/MainLoader";

const Main = React.lazy(() => import("../Layout/Main"));

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Suspense fallback={<MainLoader />}>
        <Main />
      </Suspense>
    ),
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/recent-tests",
        element: <RecentTask />,
      },
      {
        path: "/archived-tests",
        element: <ArchivedTask />,
      },
      {
        path: "/scoratease-quizzes",
        element: <SocrateaseQuizzes />,
      },
      {
        path: "/usages",
        element: <Usage />,
      },
      {
        path: "/billing",
        element: <Billing />,
      },
      {
        path: "/team",
        element: <Team />,
      },
      {
        path: "/account",
        element: <Account />,
      },
    ],
  },
]);

export default router;
