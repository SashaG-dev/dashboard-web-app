import {
  Route,
  createRoutesFromElements,
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom';
import GlobalStyles from './styles/GlobalStyles.ts';
import AppLayout from './components/AppLayout.tsx';
import Login from './pages/Login.tsx';
import { loginAction } from './features/authentication/UserLogin/UserLogin.tsx';
import { loader as loginLoader } from './features/authentication/LoginLayout/LoginLayout.tsx';
import SignUp from './pages/SignUp.tsx';
import { action as signUpAction } from './features/authentication/UserSignUp/UserSignUp.tsx';
import UserMenu from './features/menu/UserMenu/UserMenu.tsx';
import Home from './pages/Home.tsx';
import Tasks from './pages/Tasks.tsx';
import Notebook from './pages/Notebook.tsx';
import Focus from './pages/Focus.tsx';
import Settings from './pages/Settings.tsx';
import { settingsAction } from './features/settings/settingsAction.ts';
import { useAppSelector } from './hooks/hooks.ts';
import { updateDisplay } from './hooks/updateDisplay.ts';
import { authLoader } from './utils/helpers.ts';
import ForgotPassword from './pages/ForgotPassword.tsx';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<AppLayout />}>
      <Route
        path="login"
        element={<Login />}
        action={loginAction}
        loader={loginLoader}
      />
      <Route path="login/forgot-password" element={<ForgotPassword />} />
      <Route path="sign-up" element={<SignUp />} action={signUpAction} />
      <Route element={<UserMenu />}>
        <Route index element={<Home />} loader={authLoader} />
        <Route path="my-tasks" element={<Tasks />} loader={authLoader} />
        <Route path="notebook" element={<Notebook />} loader={authLoader} />
        <Route path="focus" element={<Focus />} />
        <Route
          path="stats"
          element={
            <main>
              <h1>Stats</h1>
            </main>
          }
          loader={authLoader}
        />
        <Route
          path="more"
          element={
            <main>
              <h1>More</h1>
            </main>
          }
          loader={authLoader}
        />
        <Route
          path="settings"
          element={<Settings />}
          loader={authLoader}
          action={settingsAction}
        />
      </Route>
    </Route>
  )
);

function App() {
  const { isOpen } = useAppSelector((state) => state.menu);
  const { darkMode, color } = useAppSelector((state) => state.user.userData);
  updateDisplay(darkMode, color);

  return (
    <>
      <GlobalStyles $navOpen={isOpen} $isDark={darkMode} />
      <RouterProvider router={router} />
    </>
  );
}

export default App;
