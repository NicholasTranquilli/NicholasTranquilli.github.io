"use client";

import { MWSScreenBox, MWSScreenBoxOrientation as Orientation } from "@/components/MWSScreenBox";
import { MWSResponsiveH1, MWSResponsiveH3, MWSResponsiveText, MWSResponsiveCaption, MWSResponsiveSubtext } from "@/components/MWSResponsiveText";
import React, { useState } from "react";
import MWSTiltContainer from "@/components/MWSTiltContainer";
import Image from 'next/image';
import TypeAnimation, { ConsoleText } from "@/components/TypeAnimation";
import { Canvas, useThree, useFrame, ThreeElements } from '@react-three/fiber'
import { useGLTF, useTexture, Center, Decal, Text3D, OrbitControls, Environment, MeshReflectorMaterial } from '@react-three/drei'
import { Lobster } from "@/components/Lobster";

export default function AboutMe() {
  const [index, setIndex] = useState<number>(0);

  let consoleTextList = [
    { noblink: true, breakCount: 1, text: "Hey, I'm Nick.", typingSpeed: 20 },
    { noblink: true, breakCount: 2, text: "You probably ended up here because you're curious about who I am or what I do. Maybe you got a little lost, or you're wondering why half my repositories are branded with lobster... Anyway, welcome!", typingSpeed: 20 },
    { noblink: true, breakCount: 2, text: "I started programming at 14 after building my first computer. My first language was C++, messing around with basic console applications. Since then, I've worked with a wide range of languages, frameworks, and people. I've applied my skills across solo projects, small teams, and full-on production environments.", typingSpeed: 20 }, 
    { keepblink: true, breakCount: 1, pretext:"", text: "Here are a few things I've built…", typingSpeed: 20 }
  ]

  function consoleTextOnFinish() {
    setIndex((prev) => prev + 1);
  }

  return (
    <div className="w-full pt-[10%] min-h-screen flex items-center justify-center">
      {/* Terminal (Cascadia Code or Consolas font) */}
      <MWSTiltContainer className="p-[5%] w-full min-w-full h-fit drop-shadow-[15px_10px_5px_rgba(0,0,0,0.5)]" tiltScalar={3}>
        <div className="w-full flex items-center justify-center">
          <MWSScreenBox
            orientation={Orientation.vertical}
            centerSections={false}
            containerStyle="bg-black max-w-[1000px]"
            headerStyle="bg-[#1e1e1e] min-h-[5%] w-full"
            height="h-[50vh]"
            header={
              <div className="flex-row flex justify-between h-full px-2">
                <div className="flex-none flex-row flex items-center justify-center">
                  <Image
                    className="text-white mr-2"
                    src={"/resources/cmd.png"}
                    alt={">_"}
                    width={25}
                    height={25}
                  />
                  <MWSResponsiveText className="text-white">
                    Command Prompt
                  </MWSResponsiveText>
                </div>
                <div className="flex-none flex items-center justify-center">
                  <Canvas className="max-w-[25px] max-h-[25px]" style={{ background: "transparent" }} camera={{ position: [0, 0, 1], zoom: 100 }}>
                    <Lobster scale={0.0025} position={[0, 0, 0]} />
                    <Environment preset="sunset" />
                  </Canvas>
                </div>
              </div>
            }
            section1Style="p-2 min-w-fit max-w-[1000px] min-h-full max-h-[700px]"
            section1={
              <div className="font-sans text-white">
                <MWSResponsiveText>
                  {" Microsoft Windows [Version 10.0.19045.5247]"}
                </MWSResponsiveText>
                <MWSResponsiveText>
                  {"(c) Microsoft Corporation. All rights reserved. "}
                </MWSResponsiveText>
                <br />
                <MWSResponsiveText>
                  {
                    consoleTextList.map((consoleText, current_index) => {
                      return (
                        <>
                          <ConsoleText
                            key={current_index}
                            disableCursorOnFinish={consoleText.keepblink ? false : true}
                            startTyping={index === current_index}
                            onFinish={consoleTextOnFinish}
                            typingSpeed={consoleText.typingSpeed}
                            text={consoleText.text}
                            noBlink={consoleText.noblink ? true : false}
                          >
                            {consoleText.pretext}
                          </ConsoleText>
                          {Array.from({ length: consoleText.breakCount }, () => (<br />))}
                        </>
                      )
                    })
                  }
                </MWSResponsiveText>
              </div>
            }
          />
        </div>
      </MWSTiltContainer>
    </div>
  )
}