import React from "react";

export default function Class({ classlist }: { classlist: string[] }) {
  return (
    <section>
      {classlist.map((data) => (
        <div className="introtext"><h2>{data}</h2></div>
      ))}
    </section>
  );
}