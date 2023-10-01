import { GlobalStyles } from "./theme/GlobalStyles";
import { Suspense, lazy } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AOS from "aos";
import Home from "./routes/Home/Home";
import VortexSpinner from "./components/common/Vortex/Vortex";
import ProtectedRoute from "./components/helpers/ProtectedRoute";
const SignUp = lazy(() => import("./routes/Signup/Signup"));
const Signin = lazy(() => import("./routes/Signin/Signin"));

function App() {
  AOS.init();
  return (
    <>
      <GlobalStyles />
      <BrowserRouter>
        <Suspense fallback={<VortexSpinner />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route
              path="/signup"
              element={<ProtectedRoute component={SignUp} />}
            />
            <Route
              path="/signin"
              element={<ProtectedRoute component={Signin} />}
            />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </>
  );
}

export default App;
