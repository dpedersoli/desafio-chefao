import AppRoutes from "./routes";
import AuthenticationProvider from "./providers/AutheticationContext";

function App() {
  return (
    <AuthenticationProvider>
      <div className="h-screen">
        <AppRoutes />
      </div>
    </AuthenticationProvider>
  );
}

export default App;
