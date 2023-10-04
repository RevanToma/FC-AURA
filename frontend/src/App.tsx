import { GlobalStyles } from "./theme/GlobalStyles";
import { Suspense, lazy } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster } from "sonner";
import Home from "./routes/Home/Home";
import VortexSpinner from "./components/common/Vortex/Vortex";
import ProtectedRoute from "./components/helpers/ProtectedRoute";
import NavBar from "./components/NavBar/NavBar";

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
const Member = lazy(() => import("./routes/TeamMembers/Member/Member"));
const TeamMembers = lazy(() => import("./routes/TeamMembers/TeamMembers"));
function App() {
  return (
    <>
      <GlobalStyles />
      <BrowserRouter>
        <Suspense fallback={<VortexSpinner />}>
          <Routes>
            <Route path="/" element={<NavBar />}>
              <Route index element={<Home />} />
              <Route
                path="signup"
                element={<ProtectedRoute component={SignUp} />}
              />
              <Route
                path="signin"
                element={<ProtectedRoute component={Signin} />}
              />
              <Route path="teamMembers/" element={<TeamMembers />} />
              <Route path="teamMembers/:id" element={<Member />} />
            </Route>
            <Route path="account/*" element={<NavBar />}>
              <Route index element={<AccountSettings />} />
              <Route path="changeEmail" element={<ChangeEmail />} />
              <Route path="changePassword" element={<ChangePassword />} />
              <Route path="ChangeProfileInfo" element={<ChangeProfileInfo />} />
              <Route path="ChangeSkills" element={<ChangeSkills />} />
            </Route>
          </Routes>
          <Toaster
            position="top-center"
            richColors
            toastOptions={{
              style: {
                fontSize: "1.5rem",
                gap: "1rem",
              },
            }}
          />
        </Suspense>
      </BrowserRouter>
    </>
  );
}

export default App;
