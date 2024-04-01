import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { RouterProvider } from "react-router-dom";
import { router } from "./routes";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="desktop:max-w-[400px] desktop:mx-auto relative flex h-dvh overflow-hidden">
        <RouterProvider router={router} />
      </div>
    </QueryClientProvider>
  );
}

export default App;
