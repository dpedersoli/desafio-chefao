import { AppRoutes } from './routes'

function App() {

  return (
    <>
      <img className="flex flex-col mx-auto h-fit max-h-20 w-auto mb-28"
        src="src\images\logo-Daniel-Pedersoli.png"
        alt="BrandLogo"
      />
      <div className="min-h-screen flex justify-center items-center">
        <AppRoutes />
      </div>
    </>
  );
}

export default App;