import React from "react";

import './header.css'

import { Link } from "react-router-dom";

import { data } from './data';

export default function Header() {
  return (
    <div className="page_header_container">
      {data.map((item) => {
        return <div className="header_item">
          <Link to={item.link} className="header_link">
            <div>{item.icon}</div>
            <div>{item.text}</div>
          </Link>
        </div>
      })}
    </div>
  );
}