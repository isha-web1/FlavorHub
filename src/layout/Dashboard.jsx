import { NavLink, Outlet } from "react-router-dom";
import {
  FaShoppingCart,
  FaWallet,
  FaCalendarAlt,
  FaHome,
  FaUtensils,
  FaBook,
  FaUsers,
} from "react-icons/fa";

const Dashboard = () => {
  return (
    <div className="drawer drawer-mobile ">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col items-center justify-center">
        <div className="p-4">
        <Outlet></Outlet>
        </div>
        <label
          htmlFor="my-drawer-2"
          className="btn btn-primary drawer-button lg:hidden"
        >
          Open drawer
        </label>
      </div>
      <div className="drawer-side bg-[#D1A054]">
        <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
        <ul className="menu p-4 w-80">
          <li>
            <NavLink to="/dashboard/home">
              <FaHome></FaHome> Admin Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/reservations">
              {" "}
              <FaUtensils></FaUtensils> Add Items
            </NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/history">
              <FaWallet></FaWallet> Manage Items
            </NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/history">
              <FaBook></FaBook> Manage Bookings
            </NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/allusers">
              <FaUsers></FaUsers> All Users
            </NavLink>
          </li>

          <li>
            <NavLink to="/dashboard/home">
              <FaHome></FaHome> User Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/reservations">
              <FaCalendarAlt></FaCalendarAlt> Reservations
            </NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/history">
              <FaWallet></FaWallet> Payment History
            </NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/cart">
              <FaShoppingCart></FaShoppingCart> My Cart
              <span className="badge inl badge-secondary">+0</span>
            </NavLink>
          </li>

          <div className="divider"></div>
          <li>
            <NavLink to="/">
              <FaHome></FaHome> Home
            </NavLink>{" "}
          </li>
          <li>
            <NavLink to="/menu"> Our Menu</NavLink>
          </li>
          <li>
            <NavLink to="/order/salad">Order Food</NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
