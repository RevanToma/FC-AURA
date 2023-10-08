import { GlobalStyles } from "./theme/GlobalStyles";
import { Suspense, lazy } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster } from "sonner";
import VortexSpinner from "./components/common/Vortex/Vortex";
import ProtectedRoute from "./components/helpers/ProtectedRoute";
import NavBar from "./components/NavBar/NavBar";
import Chat from "./routes/chat/Chat";

const SignUp = lazy(() => import("./routes/Signup/Signup"));
const Signin = lazy(() => import("./routes/Signin/Signin"));
const SetUp = lazy(() => import("./routes/Signup/SetUp/SetUp"));
const Dashboard = lazy(() => import("./Dashboard/Dashboard"));
const SetupPreview = lazy(
  () => import("./routes/Signup/SetUp/SetUpProfile/Preview")
);
const SetUpSkills = lazy(
  () => import("./routes/Signup/SetUp/SetUpProfile/SetUpSkills")
);
const Home = lazy(() => import("./routes/Home/Home"));

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
const MemberReview = lazy(
  () => import("./routes/Signup/SetUp/MemberReview/MemberReview")
);
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
                path="chat"
                element={<ProtectedRoute component={Chat} adminOnly={false} />}
              />
              <Route
                path="signup"
                element={
                  <ProtectedRoute component={SignUp} redirectIfAuthenticated />
                }
              />

              <Route
                path="setup-info"
                element={
                  <ProtectedRoute
                    component={SetUp}
                    preventIfProfileCompleted={true}
                  />
                }
              />
              <Route
                path="setup-skills"
                element={
                  <ProtectedRoute
                    component={SetUpSkills}
                    preventIfProfileCompleted={true}
                  />
                }
              />
              <Route
                path="preview"
                element={
                  <ProtectedRoute
                    component={SetupPreview}
                    preventIfProfileCompleted={true}
                  />
                }
              />
              <Route
                path="member-review"
                element={
                  <ProtectedRoute
                    component={MemberReview}
                    preventIfProfileCompleted={true}
                  />
                }
              />

              <Route
                path="signin"
                element={
                  <ProtectedRoute component={Signin} redirectIfAuthenticated />
                }
              />
              <Route path="teamMembers/" element={<TeamMembers />} />
              <Route path="teamMembers/:id" element={<Member />} />
            </Route>
            <Route path="account/*" element={<NavBar />}>
              <Route
                index
                element={<ProtectedRoute component={AccountSettings} />}
              />
              <Route
                path="changeEmail"
                element={<ProtectedRoute component={ChangeEmail} />}
              />
              <Route
                path="changePassword"
                element={<ProtectedRoute component={ChangePassword} />}
              />
              <Route
                path="ChangeProfileInfo"
                element={<ProtectedRoute component={ChangeProfileInfo} />}
              />
              <Route
                path="ChangeSkills"
                element={<ProtectedRoute component={ChangeSkills} />}
              />
              <Route
                path="dashboard"
                element={
                  <ProtectedRoute component={Dashboard} adminOnly={true} />
                }
              />
            </Route>

            <Route path="*" element={<h1>404</h1>} />
          </Routes>
          <Toaster
            position="top-center"
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
