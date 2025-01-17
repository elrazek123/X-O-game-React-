import logo from './logo.svg';
import './App.css';
import Layout from './components/layout/Layout';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Players from './components/players/PLyesrs';
import NotFoundPage from './components/notFoundPage/NotFound';
import Gaming from './components/game/Game';
const routes = createBrowserRouter([
  {
      path: "/",
      element: <Layout />,
      children: [
          {
              path: "",
              element: <Players />,
          },
          {
              path: ":playerOne/:playerTwo", // يجب أن يكون مطابقاً للصيغة المستخدمة
              element:<Gaming></Gaming>
          },
      ],
  },
  {
      path: "*",
      element: <NotFoundPage></NotFoundPage>,
  },
]);

function App() {
  return (
<RouterProvider router={routes}></RouterProvider>
  );
}

export default App;
