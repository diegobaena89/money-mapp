import { DashboardPage } from "./pages/Dashboard";
import { LoginPage } from "./pages/LoginPage";

function App() {
  const isAuthenticated = true;
  return <>{isAuthenticated ? <DashboardPage /> : <LoginPage />}</>;
}

export default App;
