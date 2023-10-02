import { GlobalStyles } from "./theme/GlobalStyles";
import { Suspense, lazy } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "./routes/Home/Home";
import VortexSpinner from "./components/common/Vortex/Vortex";
import ProtectedRoute from "./components/helpers/ProtectedRoute";

const SignUp = lazy(() => import("./routes/Signup/Signup"));
const Signin = lazy(() => import("./routes/Signin/Signin"));
const AccountSettings = lazy(
  () => import("./routes/AccountSettings/AccountSettings")
);
const ChangeEmail = lazy(
  () => import("./routes/AccountSettings/ChangeEmail/ChangeEmail")
);
const ChangePassword = lazy(
  () => import("./routes/AccountSettings/ChangePassword/ChangePassword")
);
const ChangeProfileInfo = lazy(
  () => import("./routes/AccountSettings/ChangeProfileInfo/ChangeProfileInfo")
);
const ChangeSkills = lazy(
  () => import("./routes/AccountSettings/ChangeSkills/ChangeSkills")
);
const TeamMembers = lazy(() => import("./routes/TeamMembers/TeamMembers"));
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
            <Route path="teamMembers" element={<TeamMembers />} />
            <Route path="account/*">
              <Route index element={<AccountSettings />} />
              <Route path="changeEmail" element={<ChangeEmail />} />
              <Route path="changePassword" element={<ChangePassword />} />
              <Route path="ChangeProfileInfo" element={<ChangeProfileInfo />} />
              <Route path="ChangeSkills" element={<ChangeSkills />} />
            </Route>
          </Routes>
        </Suspense>
      </BrowserRouter>
    </>
  );
}

export default App;
