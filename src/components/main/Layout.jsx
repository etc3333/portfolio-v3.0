import { Outlet } from "react-router-dom";
//import NavBar from '../sub/NavBar.jsx';

const Layout = () => {
  return (
    <>
      {/* <NavBar /> */}
      <Outlet />
    </>
  )
};

export default Layout;