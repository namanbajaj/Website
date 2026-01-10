import React from "react";
import { Link } from "react-router-dom";

export default function Languages() {
  return (
    <section id='Languages'>
      <div className='l_t_header'>
        <h1>
          Languages and Technologies
        </h1>
      </div>

      <Link to="/tools" className='btn go_to_projects_link'>Check out the languages and tools I've used!</Link>
    </section >
  )
}