import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <nav >
        <ul class="navbar bg-base-200">
          <li class="btn btn-ghost normal-case text-xl">
            <Link to="/">Lista</Link>
          </li>
          <li class="btn btn-ghost normal-case text-xl">
            <Link to="/Opcion2">Opcion2</Link>
          </li>
        </ul>
      </nav>

      <Outlet />
    </>
  )
};

export default Layout;
