import PropTypes from "prop-types";
import logo from "../assets/logo.svg";

const Logo = ({ classNames = "" }) => {
  return <img src={logo} className={classNames} alt="Princy-logo" />;
};

Logo.propTypes = {
  classNames: PropTypes.string,
};

export default Logo;
