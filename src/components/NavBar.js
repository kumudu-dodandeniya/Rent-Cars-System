import React from "react";
import { Link } from "react-router-dom";
import HomeIcon from "@mui/icons-material/Home";
import { Nav, Navbar } from "react-bootstrap";

const NavBar = () => {
  return (
    // <nav className="border-b-2 bg-zinc-800 text-center fixed z-10 top-0 w-full  font-bold text-lg text-white h-20 ">
    //   <ul className="mt-2">
    //     <Link to="/">
    //       <li className=" inline-block  pt-4 pb-4 translate-x-8 float-left text-red-700 cursor-pointer">
    //         <HomeIcon fontSize="large"/>
    //       </li>
    //     </Link>
    //     <li className="text-2xl inline-block pt-4 pb-4 translate-x-14 float-left text-sky-700 cursor-pointer">
    //       <Link to="/dashbord">DASHBOARD</Link>
    //     </li>
    //     <li className="inline-block pt-4 pb-4 -translate-x-16 ">
    //       <Link
    //         to="/create"
    //         className="pl-6 pr-8 hover:text-lime-500 hover:bg-gray-700 py-2 hover:py-2 px-4 hover:px-4 hover:rounded-full  duration-500"
    //       >
    //         Create
    //       </Link>
    //     </li>
    //     <li className="inline-block pt-4 pb-4 -translate-x-16">
    //       <Link
    //         to="/display"
    //         className="pl-6 pr-8 hover:text-lime-500 hover:bg-gray-700 py-2 hover:py-2 px-4 hover:px-4 hover:rounded-full  duration-500"
    //       >
    //         Display
    //       </Link>
    //     </li>
    //     <li className="inline-block pt-4 pb-4 -translate-x-16">
    //       <Link
    //         to="/report"
    //         className="pl-6 pr-8 hover:text-lime-500 hover:bg-gray-700 py-2 hover:py-2 px-4 hover:px-4 hover:rounded-full  duration-500"
    //       >
    //         Report
    //       </Link>
    //     </li>
    //   </ul>
    // </nav>
    <Navbar bg="dark" variant="dark">
      <div class="container-fluid">
        <Navbar.Brand>
          <img
            src={"images/img.png"}
            style={{ width: "100px", height: "100px" }}
            width="30"
            height="30"
            className="d-inline-block align-top"
          />
        </Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="/">Home</Nav.Link>

          <Nav.Link href="/create">Add</Nav.Link>
          <Nav.Link href="/display">Sales Details</Nav.Link>
          <Nav.Link href="/report">Generate report</Nav.Link>
        </Nav>
      </div>
    </Navbar>
  );
};

export default NavBar;
