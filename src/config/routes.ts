import Home from "../pages/Home";
import DashBoard from "../pages/Dashboard";
import About from "../pages/About";
import Services from "../pages/Services";
import Contact from "../pages/Contact";


interface RouteType {
    path:string,
    component: () => JSX.Element,
    name:string,
    
}

const routes: RouteType[] = [
    {
      path:"",
      component: Home,
      name: "Home Screen",
    },
    {
      path: "/dashboard",
      component: DashBoard,
      name: "Dashboard",
    },
    {
      path:"/about",
      component: About,
      name: "About",
    },
    {
      path:"/services",
      component: Services,
      name: "Services",
    },
    {
      path:"/contact",
      component: Contact,
      name: "Contact",
    },
  ];

  export default routes


