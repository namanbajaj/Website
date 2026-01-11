import React from "react";
import Header from "../../Shared/Header/Header";
import Semester from "./components/Semester/Semester";
import Footer from "../../Shared/Footer/Footer";

export default function OMSCS() {
  return <>
    <Header />
    <Semester title='Spring 2026' />
    <Footer />
  </>
}