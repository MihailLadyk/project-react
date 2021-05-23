import Dashboard from "./views/Dashboard/Dashboard";
import NotFound from "./views/NotFound/NotFound";
import RegisterView from "./views/RegisterView/RegisterView";
export const urls = {
  dashboard: "/",
  profile: "/profile",
  settings: "/settings",
  aboutUs: "/about-us",
  logout: "/logout",
  notFound: "/404",
  register: "/register",
  login: "/login",
};

export const routes = [
  {
    path: urls.register,
    exact: true,
    component: RegisterView,
    private: false,
    restricted: true,
  },
  {
    path: urls.dashboard,
    exact: true,
    component: Dashboard,
    private: false,
    restricted: false,
  },
  {
    path: urls.profile,
    exact: true,
    component: NotFound,
    private: true,
    restricted: true,
  },
  {
    path: urls.settings,
    exact: true,
    component: NotFound,
    private: false,
    restricted: true,
  },
  {
    path: urls.notFound,
    exact: true,
    component: NotFound,
    private: true,
    restricted: false,
  },
];
