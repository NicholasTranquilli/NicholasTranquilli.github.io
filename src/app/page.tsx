"use client";

import React, { useRef, useState, useEffect } from 'react'
import { MWSScreenBox, MWSScreenBoxOrientation as Orientation } from "@/components/MWSScreenBox";
import { MWSResponsiveH1, MWSResponsiveH3, MWSResponsiveText, MWSResponsiveCaption, MWSResponsiveSubtext } from "@/components/MWSResponsiveText";
import Projects from "@/components/PageParts/Projects";
import AboutMe from "@/components/PageParts/AboutMe";
import Home from "@/components/PageParts/Home";

export default function App() {
  return (
    <div> 
      {/* Home Screen */}
      <Home/>

      {/* Terminal (Cascadia Code or Consolas font) */}
      <AboutMe />

      {/* Projects */}
      <Projects />

      {/*  */}
    </div >
  )
}
