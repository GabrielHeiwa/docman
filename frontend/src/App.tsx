import { createBrowserRouter, RouterProvider } from "react-router-dom"
import MainPage from "./pages/main"
import ReportsTable from "./pages/main/components/reports-table"

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainPage />
  },
  {
    path: "/table",
    element: <ReportsTable />
  }
])

function App() {

  return <RouterProvider router={router} />
}

export default App
