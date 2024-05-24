import Home from "~/Pages/Home";
import PhoneDetails from "~/Pages/PhoneDetails";

const publicRoutes = [
  { path: "/", component: Home },
  { path: "/details", component: PhoneDetails },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
