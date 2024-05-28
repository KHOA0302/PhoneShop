import routes from "~/config/routes";
import Home from "~/Pages/Home";
import PhoneDetails from "~/Pages/PhoneDetails";

const publicRoutes = [
  { path: routes.home, component: Home },
  { path: routes.details, component: PhoneDetails },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
