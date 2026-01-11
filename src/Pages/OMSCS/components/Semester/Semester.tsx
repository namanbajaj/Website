import React from "react";
import "./semester.css";
import Class from "../Class/Class";

export default function Semester({ title }: { title: string }) {
  return (
    <section id="Semester">
      <div className="introtext"><h1>{title}</h1></div>
      <Class classlist={['Computer Networks']} urls={['https://omscs.gatech.edu/cs-6250-computer-networks']} />
    </section>
  );
}