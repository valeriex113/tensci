import { createBrowserRouter } from "react-router"
import { RootLayout } from "./RootLayout";
import { Home } from "./pages/home";
import { Publications } from "./pages/publications";
import { Proposal } from "./pages/proposal";
import { ExampleProps } from "./pages/example_prop";
import { ExamplePub } from "./pages/example_pub";
import { NotFoundPage } from "./NotFoundPage";
import { About } from "./pages/about";
import { Search } from "./pages/search";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    children: [
      { index: true, Component: Home },
      { path: "publications", Component: Publications },
      { path: "proposals", Component: Proposal },
      { path: "proposal/:id", Component: ExampleProps },
      { path: "publication/:id", Component: ExamplePub },
      { path: "*", Component: NotFoundPage },
      { path: "about", Component: About }, 
      { path: "search", Component: Search}
    ],
  },
]);