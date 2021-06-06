import Dashboard from "./views/Dashboard/Dashboard";
import NotFound from "./views/NotFound/NotFound";
import RegisterView from "./views/RegisterView/RegisterView";
import Settings from "./views/Settings/Settings";
import LoginView from "./views/LoginView/LoginView";
import ProfileView from "./views/ProfileView/ProfileView";
import AboutUs from "./views/AboutUS/AboutUs";

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
    path: urls.login,
    exact: true,
    component: LoginView,
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
    component: ProfileView,
    private: true,
    restricted: true,
  },
  {
    path: urls.settings,
    exact: true,
    component: Settings,
    private: false,
    restricted: false,
  },
  {
    path: urls.notFound,
    exact: true,
    component: NotFound,
    private: true,
    restricted: false,
  },
  {
    path: urls.aboutUs,
    exact: true,
    component: AboutUs,
    private: false,
    restricted: false,
  },
];
