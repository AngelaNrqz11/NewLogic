import { useState } from "react";

import { Menu } from "antd";
import { MailOutlined, AppstoreOutlined } from "@ant-design/icons";
import { useHistory } from "react-router";

import "./less/_main-dir.scss";

const Header = () => {
  const [current, setCurrent] = useState("mail");
  const history = useHistory();

  const handleClick = (e: any) => {
    console.log(e);
    if (e.key === "home") {
      history.push("/");
    }

    if (e.key === "consent") {
      history.push("/consent");
    }
  };

  return (
    <div className="header">
      {" "}
      <Menu onClick={handleClick} selectedKeys={[current]} mode="horizontal">
        <Menu.Item key="home" icon={<AppstoreOutlined />}>
          Home
        </Menu.Item>
        <Menu.Item key="consent" icon={<MailOutlined />}>
          Consent
        </Menu.Item>
      </Menu>
    </div>
  );
};

export default Header;
