import { createBrowserRouter, RouterProvider } from "react-router-dom";
import SignUpPage from "./pages/SignUpPage";
import LoginPage from "./pages/LoginPage";
import HomePage from "./pages/admin/HomePage";
import DefaultErrorPage from "./pages/errors/DefaultErrorPage";
import AdminLayout from "./pages/layouts/AdminLayout";
import DefaultLayout from "./pages/layouts/DefaultLayout";
import AuthLayout from "./pages/layouts/AuthLayout";
import UserListPage from "./pages/admin/User/UserListPage";
import UserAddPage from "./pages/admin/User/UserAddPage";
import UserUpdate from "./pages/admin/User/UserUpdatePage";
import UserHomePage from "./pages/user/HomePage";
import UserLayout from "./pages/layouts/UserLayout";
import SendMoneyPage from "./pages/user/SendMoneyPage";
import AllTransactionPage from "./pages/user/AllTransactionPage";
import UserTransactionPage from "./pages/admin/User/UserTransactionPage";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <DefaultLayout />,
      errorElement: <DefaultErrorPage />,
      children: [
        {
          // index: true,
          element: <AuthLayout />,
          children: [
            { index: true, element: <LoginPage /> },
            { path: "signup", element: <SignUpPage /> },
          ],
        },
        {
          path: "admin",
          element: <AdminLayout />,
          children: [
            { index: true, element: <HomePage /> },
            { path: "users/", element: <UserListPage /> },
            { path: "users/:id", element: <UserUpdate /> },
            { path: "users/:userId/transactions", element: <UserTransactionPage /> },
            { path: "users/new", element: <UserAddPage /> },
          ],
        },
        {
          path: "user",
          element: <UserLayout />,
          children: [
            { index: true, element: <UserHomePage /> },
            { path: "transfer", element: <SendMoneyPage /> },
            { path: "transactions", element: <AllTransactionPage /> },
          ],
        },
      ],
    },
  ], {basename: "/VaultApp/dist/"});
  return <RouterProvider router={router}></RouterProvider>;
};

export default App;
