import { createBrowserRouter } from "react-router-dom";

import App from './../App';
import ErrorPage from './../pages/error-page.js';
import Booklist from './../pages/book-list.js';
import ArticleDetail from './../pages/article-detail.js';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Booklist />,
      },
      {
        path: "article-detail",
        element: <ArticleDetail />,
      },
    ],
  },
]);

export default router;