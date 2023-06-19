import React, { Component } from "react";

// Complete this Component
const ListItem = (props) => {

  const { id, name, link, icon, bgColor } = props.data;
  return (
    <div key={id}
      className="ListItem"
      style={{
        height: 30,
        backgroundColor: bgColor
}}
    >
      <img src={icon} alt={name} />
      <a href={link}>{name}</a>
    </div >
  );
};

export default ListItem;
