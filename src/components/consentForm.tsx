import React from "react";
import { connect } from "react-redux";

const consentForm = (props: any) => {
  console.log("SUD SA REACt", props.route);
  return (
    <div>
      {props.route.language === "english" ? (
        <div style={{ display: "flex", justifyContent: "center" }}>
          Hello {props.route.username}! You understand that by using the site or
          site services, <br />
          you agree to be bound by this agreement. If you do not accept
          <br />
          this aggrement in its entirety, you must not access or use the <br />
          site or the site services.
          <br />
        </div>
      ) : (
        <div style={{ display: "flex", justifyContent: "center" }}>
          Bonjour {props.route.username}! Vous comprenez qu'en utilisant le site
          ou les services du site,
          <br />
          vous acceptez d'être lié par cet accord. Si vous n'acceptez pas
          <br />
          cet accord dans son intégralité, vous ne devez pas accéder ou utiliser
          le
          <br />
          site ou les services du site.
          <br />
        </div>
      )}
    </div>
  );
};

const mapStateToProps = (state: any) => {
  return {
    route: state.route,
  };
};
export default connect(mapStateToProps)(consentForm);
