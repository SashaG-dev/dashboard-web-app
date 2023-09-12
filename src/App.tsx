import {
  Route,
  createRoutesFromElements,
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom';
import GlobalStyles from './styles/GlobalStyles.ts';
import UserMenu from './components/UserMenu/UserMenu.tsx';
import Home from './pages/Home.tsx';
import Tasks from './pages/Tasks.tsx';
import { useAppSelector } from './hooks/hooks.ts';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/">
      <Route element={<UserMenu />}>
        <Route index element={<Home />} />
        <Route path="my-tasks" element={<Tasks />} />
        <Route
          path="stats"
          element={
            <main>
              <h1>Stats</h1>
            </main>
          }
        />
        <Route
          path="notebook"
          element={
            <main>
              <h1>Notebook</h1>
            </main>
          }
        />
        <Route
          path="focus"
          element={
            <main>
              <h1>Focus</h1>
            </main>
          }
        />
        <Route
          path="more"
          element={
            <main>
              <h1>More</h1>
            </main>
          }
        />
        <Route
          path="settings"
          element={
            <main>
              <h1>Settings</h1>
            </main>
          }
        />
      </Route>
    </Route>
  )
);

function App() {
  const { isOpen } = useAppSelector((state) => state.menu);

  return (
    <>
      <GlobalStyles $navOpen={isOpen} />
      <RouterProvider router={router} />
    </>
  );
}

export default App;
