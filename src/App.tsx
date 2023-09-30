import { useEffect } from 'react';
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
import UserMenu from './features/menu/UserMenu/UserMenu.tsx';
import Home from './pages/Home.tsx';
import Tasks from './pages/Tasks.tsx';
import Notebook from './pages/Notebook.tsx';
import Focus from './pages/Focus.tsx';
import Settings from './pages/Settings.tsx';
import { DarkModeProvider } from './context/darkModeContext.tsx';
import { useAppSelector } from './hooks/hooks.ts';
import { requestAuth } from './api/apiAuth.ts';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<AppLayout />}>
      <Route
        path="login"
        element={<Login />}
        action={loginAction}
        loader={loginLoader}
      />
      <Route element={<UserMenu />}>
        <Route
          index
          element={<Home />}
          loader={async () => {
            await requestAuth();
            return null;
          }}
        />
        <Route
          path="my-tasks"
          element={<Tasks />}
          loader={async () => {
            await requestAuth();
            return null;
          }}
        />
        <Route
          path="notebook"
          element={<Notebook />}
          loader={async () => {
            await requestAuth();
            return null;
          }}
        />
        <Route path="focus" element={<Focus />} />
        <Route
          path="stats"
          element={
            <main>
              <h1>Stats</h1>
            </main>
          }
          loader={async () => {
            await requestAuth();
            return null;
          }}
        />
        <Route
          path="more"
          element={
            <main>
              <h1>More</h1>
            </main>
          }
          loader={async () => {
            await requestAuth();
            return null;
          }}
        />
        <Route
          path="settings"
          element={<Settings />}
          loader={async () => {
            await requestAuth();
            return null;
          }}
        />
      </Route>
    </Route>
  )
);

function App() {
  const { isOpen } = useAppSelector((state) => state.menu);
  const { darkMode } = useAppSelector((state) => state.user.userData);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('darkMode');
      document.documentElement.classList.remove('lightMode');
    }
    if (!darkMode) {
      document.documentElement.classList.add('lightMode');
      document.documentElement.classList.remove('darkMode');
    }
  }, [darkMode]);

  return (
    <DarkModeProvider darkMode={darkMode}>
      <>
        <GlobalStyles $navOpen={isOpen} />
        <RouterProvider router={router} />
      </>
    </DarkModeProvider>
  );
}

export default App;
