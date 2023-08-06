import PropTypes from "prop-types";
const Layout = ({ children }) => {
  return (
    <div className="layout">
      <div className="layout__container">{children}</div>
    </div>
  );
};
Layout.propTypes = {
  children: PropTypes.node.isRequired,
};
export default Layout;
