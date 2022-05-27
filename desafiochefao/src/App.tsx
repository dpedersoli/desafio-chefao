import AppRoutes from "./Routes";
import AuthenticationProvider from "./providers/AutheticationContext";

function App() {
  return (
    <AuthenticationProvider>
      <div>
        <AppRoutes />
      </div>
    </AuthenticationProvider>
  );
}

export default App;
