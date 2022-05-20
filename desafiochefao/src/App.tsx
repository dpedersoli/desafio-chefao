import { AppRoutes } from './routes'

function App() {

  return (
    <>
      <div className="min-h-screen flex flex-col justify-center items-center">
        {/* <img id="logoImage" className="flex mx-auto h-fit max-h-20 w-auto mb-12"
          src="src\images\logo-Daniel-Pedersoli.png"
          alt="BrandLogo"
        /> */}
        <AppRoutes />
      </div>
    </>
  );
}

export default App;