import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { lazy, Suspense } from "react";
import Navbar from "./Components/Navbar";

const routes = [
  { path: "/", component: lazy(() => import("./pages/beranda")) },
  { path: "/lokasi", component: lazy(() => import("./pages/lokasi")) },
  { path: "/newsandpromo", component: lazy(() => import("./pages/newsandpromo")) },
  { path: "/faq", component: lazy(() => import("./pages/faqcustomer")) },
  { path: "/about", component: lazy(() => import("./pages/about")) },
  { path: "/login", component: lazy(() => import("./User_Account/login")) },
  { path: "/register", component: lazy(() => import("./User_Account/register")) },
];

// Pisah komponen biar bisa pakai useLocation (harus di dalam BrowserRouter)
function AppLayout() {
  const location = useLocation();

  const hideNavbarPaths = ["/login", "/register"];
  const showNavbar = !hideNavbarPaths.includes(location.pathname);

  return (
    <>
      {showNavbar && <Navbar />}

      <Suspense
        fallback={
          <div className="flex h-screen items-center justify-center bg-gray-50">
            <div className="flex flex-col items-center gap-5">
              <div className="h-12 w-12 animate-spin rounded-full border-4 border-gray-200 border-t-purple"></div>
              <p className="text-sm font-medium text-gray-600 tracking-wide">
                Loading...
              </p>
            </div>
          </div>
        }
      >
        <Routes>
          {routes.map(({ path, component: Component }) => (
            <Route key={path} path={path} element={<Component />} />
          ))}
        </Routes>
      </Suspense>
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <AppLayout />
    </BrowserRouter>
  );
}

export default App;