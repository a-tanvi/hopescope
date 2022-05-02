import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { axiosInstance } from "../../config";
import "./sidebar.css";

export default function Sidebar() {
  const [cats, setCats] = useState([]);

  useEffect(() => {
    const getCats = async () => {
      const res = await axiosInstance.get("/categories");
      setCats(res.data);
    };
    getCats();
  }, []);
  return (
    <div className="sidebar">
      <div className="sidebarItem">
        <span className="sidebarTitle">ABOUT US</span>
        <img
          src="https://media.istockphoto.com/photos/woman-holding-cardboard-donation-box-full-with-folded-clothes-picture-id1283154274?b=1&k=20&m=1283154274&s=170667a&w=0&h=mRo4KK4xrtw35D6eU59EbKAFilGmtkAWD-ncYJqEw-c="
          alt=""
        />
        <p>
        The Main Purpose of our website is to help the people who lost their close ones in corona 
        era and now don’t have any earning member. People in need can come and post thier blogs 
        and people who are capable enough can donate.
        </p>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle"></span>
        <ul className="sidebarList">
          {cats.map((c) => (
            <Link to={`/?cat=${c.name}`} className="link">
            <li className="sidebarListItem">{c.name}</li>
            </Link>
          ))}
        </ul>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">FOLLOW US</span>
        <div className="sidebarSocial">
          <i className="sidebarIcon fab fa-facebook-square"></i>
          <i className="sidebarIcon fab fa-twitter-square"></i>
          <i className="sidebarIcon fab fa-pinterest-square"></i>
          <i className="sidebarIcon fab fa-instagram-square"></i>
        </div>
      </div>
    </div>
  );
}
