import React from "react";
import PropTypes from "prop-types";

function Tab({ icon, children }) {
  return (
    <div className="tab--wrapper">
      {icon && <img src={icon} alt={`${children}-icon`} />}
      <span>{children}</span>
    </div>
  );
}

Tab.propTypes = {
  icon: PropTypes.string,
  children: PropTypes.node.isRequired,
};

export default Tab;
