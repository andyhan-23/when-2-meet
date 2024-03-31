import { RouterProvider } from "react-router-dom";
import { router } from "./routes";

function App() {
  return (
    <div className="h-dvh overflow-hidden relative desktop:max-w-[400px] desktop:mx-auto">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
