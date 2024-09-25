import NavigationRoutes from "./routes/index"
import { GlobalStyles } from "./styles/GlobalStyles"
import { SidebarProvider } from "./context/sidebarContext";

export default function App() {
  return (
    <>
      <SidebarProvider>
        <NavigationRoutes />
        <GlobalStyles />
      </SidebarProvider>
    </>
  )
}
