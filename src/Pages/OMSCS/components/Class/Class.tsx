import React from "react";

import "./class.css"

export default function Class({ classlist, urls }: { classlist: string[], urls: string[] }) {
  return (
    <section id="ClassItem">
      {classlist.map((data, index) => (
        <>
          <div className="introtext classintro"><h2>{data}</h2></div>
          <div className="class_data">
            <a className="btn" href={urls[index]} target="_blank">Class Link</a>
          </div>
          <br />
          <div className="introtext classitemintro"><h3>Summary</h3></div>
          <br />
          <div className="introtext classitemintro"><h3>Languages, Techs, & Tools</h3></div>
          <br />
          <div className="introtext classitemintro"><h3>Projects/Classwork</h3></div>
        </>
      ))}
    </section>
  );
}