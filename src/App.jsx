import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Layout from "./components/Layout";
import Error404 from "./pages/Error404";
import Home from "./pages/Home";
import Project from "./pages/Project";
import { projectRequest } from "./utils/projectRequest";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />

        <Route
          path="/project/:id"
          element={<Project />}
          loader={({ params }) => projectRequest(params.id)}
          errorElement={<Error404 />}
        />

        <Route path="*" element={<Error404 />} />
      </Route>
    )
  );

  return <RouterProvider router={router} />;
}

export default App;
