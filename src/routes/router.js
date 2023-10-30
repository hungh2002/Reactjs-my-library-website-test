import { createBrowserRouter } from "react-router-dom";

import App from "./../App";
import ErrorPage from "./../pages/error-page.js";
import BookList from "./../pages/book-list.js";
import ArticleDetail from "./../pages/article-detail.js";
import AddBook from "./../pages/add-book.js";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <BookList />,
      },
      {
        path: "article-detail",
        element: <ArticleDetail />,
      },
      {
        path: "add-book",
        element: <AddBook />,
      },
    ],
  },
]);

export default router;
