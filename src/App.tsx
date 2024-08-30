import "./App.css";
import { AuthProvider } from "./context";
import { UserProvider } from "./context/UserProvider";
import { AppRouter } from "./router/AppRouter";

function App() {
  return (
    <UserProvider>
      <AuthProvider>
        <AppRouter />
      </AuthProvider>
    </UserProvider>
  );
}

export default App;
