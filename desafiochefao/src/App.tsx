import AppRoutes from './Routes'
import AuthenticationProvider from './providers/AutheticationContext'

function App() {

  return (
    <AuthenticationProvider>
      <div className="min-h-screen flex flex-col justify-center items-center">
        <AppRoutes />
      </div>
    </AuthenticationProvider>
  );
}

export default App;