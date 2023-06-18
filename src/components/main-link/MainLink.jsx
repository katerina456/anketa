import React from "react";
import folder from '../../icons/folder.svg';
import classes from "./style.module.css"

function MainLink({link, title}) {

  return (
    <div className={classes.MainLink}>
        <img src={folder} alt="" />
        <a className={classes.MainLinkA} href={link} target="blank">{title}</a>
    </div>
  );
}

export default MainLink;