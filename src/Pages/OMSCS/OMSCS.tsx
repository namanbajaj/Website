import React from "react";
import Header from "../../Shared/Header/Header";
import Footer from "../../Shared/Footer/Footer";
import Class from "./components/Class/Class";

import { classData } from './data/classes'

export default function OMSCS() {
  return <>
    <Header />
    {
      classData.map((item) => {
        return <Class className={item.className} url={item.url} summary={item.summary} techs={item.techs} projects={item.projects}/>;
      })
    }
    <Footer />
  </>
}