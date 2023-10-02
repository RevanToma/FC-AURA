import { GlobalStyles } from "./theme/GlobalStyles";
import { Suspense, lazy } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "./routes/Home/Home";
import VortexSpinner from "./components/common/Vortex/Vortex";
import ProtectedRoute from "./components/helpers/ProtectedRoute";
import AccountSettings from "./routes/AccountSettings/AccountSettings";
import ChangeEmail from "./routes/AccountSettings/ChangeEmail/ChangeEmail";
import ChangePassowrd from "./routes/AccountSettings/ChangePassword/ChangePassword";
import ChangeProfileInfo from "./routes/AccountSettings/ChangeProfileInfo/ChangeProfileInfo";
const SignUp = lazy(() => import("./routes/Signup/Signup"));
const Signin = lazy(() => import("./routes/Signin/Signin"));

function App() {
  return (
    <>
      <GlobalStyles />
      <BrowserRouter>
        <Suspense fallback={<VortexSpinner />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route
              path="signup"
              element={<ProtectedRoute component={SignUp} />}
            />
            <Route
              path="signin"
              element={<ProtectedRoute component={Signin} />}
            />
            <Route path="account/*">
              <Route index element={<AccountSettings />} />
              <Route path="changeEmail" element={<ChangeEmail />} />
              <Route path="changePassword" element={<ChangePassowrd />} />
              <Route path="ChangeProfileInfo" element={<ChangeProfileInfo />} />
            </Route>
          </Routes>
        </Suspense>
      </BrowserRouter>
    </>
  );
}

export default App;
