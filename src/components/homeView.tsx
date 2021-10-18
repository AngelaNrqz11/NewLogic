import { useState, useEffect } from "react";
import { Form, Input, Button } from "antd";
import { Select } from "antd";
import { useHistory } from "react-router";

import "../components/less/_styles.scss";

//redux
import { connect } from "react-redux";
import { username, language } from "../actions";

const { Option } = Select;

const HomeView = (props: any) => {
  const [useLanguage, setUseLanguage] = useState("english");
  const [userName, setUsername] = useState("");
  const [languageDisplay, setLanguageDisplay] = useState(false);
  const [consentFormLang, setConsentFormLang] = useState("");
  const history = useHistory();

  useEffect(() => {
    props.username(userName);
    props.language(consentFormLang);
  }, [consentFormLang, userName, props]);

  const onFinish = (values: any) => {
    setLanguageDisplay(true);
    setConsentFormLang(useLanguage);
    setUsername(values.username);

    history.push("/consent");
  };

  const handleChange = (value: any) => {
    setUseLanguage(value);
  };

  return (
    <div>
      <div className="home-view">
        <Form
          name="basic"
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 16 }}
          initialValues={{ remember: true }}
          onFinish={onFinish}
          autoComplete="off"
        >
          <Form.Item
            label="Username"
            name="username"
            rules={[{ required: true, message: "Please input your username!" }]}
          >
            <Input />
          </Form.Item>

          <div style={{ marginBottom: "15px", marginLeft: "15px" }}>
            <label style={{ marginRight: "8px" }}>Language: </label>
            <Select
              defaultValue="english"
              style={{ width: 120 }}
              onChange={handleChange}
            >
              <Option value="english">English</Option>
              <Option value="french">French</Option>
            </Select>
          </div>
          <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
            <Button type="primary" htmlType="submit">
              Next
            </Button>
          </Form.Item>
        </Form>
      </div>

      {languageDisplay ? (
        consentFormLang === "english" ? (
          <div style={{ display: "flex", justifyContent: "center" }}>
            You understand that by using the site or site services, <br />
            you agree to be bound by this agreement. If you do not accept
            <br />
            this aggrement in its entirety, you must not access or use the{" "}
            <br />
            site or the site services.
            <br />
          </div>
        ) : (
          <div style={{ display: "flex", justifyContent: "center" }}>
            Vous comprenez qu'en utilisant le site ou les services du site,
            <br />
            vous acceptez d'être lié par cet accord. Si vous n'acceptez pas
            <br />
            cet accord dans son intégralité, vous ne devez pas accéder ou
            utiliser le
            <br />
            site ou les services du site.
            <br />
          </div>
        )
      ) : null}
    </div>
  );
};

export default connect(null, { username, language })(HomeView);
