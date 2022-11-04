import React from "react";
import { Menu } from "antd";
import { HomeOutlined, BulbOutlined, FundOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import crypto from "../images/crypto.png";
const Navbar = () => {
  return (
    <div>
      <Menu
        theme="dark"
        mode="horizontal"
        style={{ padding: "1rem 0 0.5rem 0" }}
      >
        <div className="logo"> <img src={crypto} alt=""/><span>CRYPTOX</span> </div>
        <Menu.Item icon={<HomeOutlined />} key="1">
          <Link to="/">Home</Link>
        </Menu.Item>
        <Menu.Item icon={<FundOutlined />} key="2">
          <Link to="/cryptocurrencies">Cryptocurrencies</Link>
        </Menu.Item>
        <Menu.Item icon={<BulbOutlined />} key="3">
          <Link to="/news">News</Link>
        </Menu.Item>
      </Menu>
    </div>
  );
};

export default Navbar;
