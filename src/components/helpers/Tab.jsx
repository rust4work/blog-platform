import React from "react";
import NewPostIcon from "../../assets/pics/newPostIcon.svg";
import SettingsIcon from "../../assets/pics/settingsIcon.svg";
import ProfileIcon from "../../assets/pics/iconProfile.svg";

const tabVariants = {
  home: {
    icon: null, // без иконки
  },
  newpost: {
    icon: NewPostIcon,
  },
  settings: {
    icon: SettingsIcon,
  },
  profile: {
    icon: ProfileIcon,
  },
};

function Tab({ variant, children }) {
  const Icon = tabVariants[variant]?.icon;

  return (
    <button className="tab--wrapper">
      {Icon && <img src={Icon} alt={`${variant}-icon`} />}
      <span>{children}</span>
    </button>
  );
}

export default Tab;
