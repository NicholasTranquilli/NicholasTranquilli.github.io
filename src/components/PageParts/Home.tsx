import React, { useRef, useState, useEffect } from 'react'
import { MWSScreenBox, MWSScreenBoxOrientation as Orientation } from "@/components/MWSScreenBox";
import { MWSResponsiveH1, MWSResponsiveH3, MWSResponsiveH4, MWSResponsiveText, MWSResponsiveCaption, MWSResponsiveSubtext } from "@/components/MWSResponsiveText";
import Image from "next/image";
import { Lobster } from "@/components/Lobster";
import { Canvas, useThree, useFrame, ThreeElements } from '@react-three/fiber'
import { useGLTF, useTexture, Center, Decal, Text3D, OrbitControls, Environment, MeshReflectorMaterial } from '@react-three/drei'
import { div } from 'framer-motion/client';

export default function Home() {
  var linkImgSize = 25;  
  return (
    <>
      {/* Lobster Background Layer */}
      {/* <MWSScreenBox
        orientation={Orientation.vertical}
        containerStyle="absolute z-[-1]"
        section1={
          <Canvas className="flex-1" style={{ background: "transparent" }} camera={{ position: [0, 0, 100], zoom: 100 }}>
            <Lobster useVelocity rotation={RandRotationXYZ()} direction={[0, 0]} scale={RandRange(0.01, 0.04)} position={ScreenRangeXYZ()} />
            <Environment preset="sunset" />
          </Canvas>
        }
      /> */}

      {/* Home Layer */}
      <MWSScreenBox
        orientation={Orientation.vertical}
        centerSections={false}
        headerStyle="absolute flex flex-row pt-4 w-full justify-center items-center text-center"
        height="h-[50vh]"
        header={
          <ul className="flex flex-row items-center justify-items-center text-center min-w-fit w-[50%] p-1">
            {/* <li className="min-w-fit flex-1 px-2"><a href=""><MWSResponsiveH4>// About</MWSResponsiveH4></a></li> */}
            {/* <li className="min-w-fit flex-1 px-2"><a href=""><MWSResponsiveH4>// Interests</MWSResponsiveH4></a></li> */}
            {/* <li className="min-w-fit flex-1 px-2"><a href=""><MWSResponsiveH4>// Hobbies</MWSResponsiveH4></a></li> */}
            {/* <li className="min-w-fit flex-1 px-2"><a href=""><MWSResponsiveH4>// Projects</MWSResponsiveH4></a></li> */}
          </ul>
        }
        section1Style="justify-center items-end text-center"
        section1={
          <div>
            <MWSResponsiveH1> Nicholas Tranquilli </MWSResponsiveH1>
            <div className="flex flex md:flex-row items-left md:items-center justify-left md:justify-center pt-2">
              <a className="flex-1 flex flex justify-center p-3 md:p-0" href="https://github.com/NicholasTranquilli">
                <Image className="mx-2" style={{ whiteSpace: 'nowrap', display: 'inline' }} width={linkImgSize} height={linkImgSize} src="/resources/github.svg" alt="..."></Image>
                <MWSResponsiveH4>Github</MWSResponsiveH4>
              </a>
              <a className="flex-1 flex justify-center p-3 md:p-0" href="https://www.linkedin.com/in/nicholas-tranquilli/">
                <Image className="mx-2" style={{ whiteSpace: 'nowrap', display: 'inline' }} width={linkImgSize} height={linkImgSize} src="/resources/linkedin.svg" alt="..."></Image>
                <MWSResponsiveH4>LinkedIn</MWSResponsiveH4>
              </a>
              <a className="flex-1 flex justify-center p-3 md:p-0" href="Emailto:nicholast@my.ccsu.edu">
                <Image className="mx-2" style={{ whiteSpace: 'nowrap', display: 'inline' }} width={linkImgSize} height={linkImgSize} src="/resources/email.svg" alt="..."></Image>
                <MWSResponsiveH4>Email</MWSResponsiveH4>
              </a>
            </div>
          </div>
        }
      />
    </>
  )
}