"use client";

import Image from "next/image";
import * as THREE from 'three'
import React, { useRef, useState } from 'react'
import { Canvas, useThree, useFrame, ThreeElements } from '@react-three/fiber'
import { extend, Object3DNode } from '@react-three/fiber'
import { Font, FontLoader } from 'three/addons/loaders/FontLoader.js';
import { TextGeometry } from 'three/addons/geometries/TextGeometry.js';
import { error } from "console";
import { useGLTF, useTexture, Center, Decal, Text3D, OrbitControls, Environment, MeshReflectorMaterial } from '@react-three/drei'
import { update } from "three/examples/jsm/libs/tween.module.js";
import { Lobster } from "../components/Lobster";
import { tree } from "next/dist/build/templates/app-page";

export default function App() {
  var linkImgSize = 20;
  return (
    <div className="flex min-h-screen justify-center items-center ">
    <div className="text-center">
      <div className="text-6xl">Nicholas Tranquilli</div>
      <div className="flex justify-center text-center text-2xl my-3">
        <div className="flex-1">
          <a href="https://github.com/NicholasTranquilli">
            <Image className="mx-2" style={{whiteSpace:'nowrap', display:'inline'}} width={linkImgSize} height={linkImgSize} src="/resources/github.svg" alt="..."></Image>
            Github
          </a>
        </div>
        <div className="flex-1">
          <a href="https://www.linkedin.com/in/nicholas-tranquilli/">
            <Image className="mx-2" style={{whiteSpace:'nowrap', display:'inline'}} width={linkImgSize} height={linkImgSize} src="/resources/linkedin.svg" alt="..."></Image>
            LinkedIn
          </a>
        </div>
        <div className="flex-1">
          <a href="Emailto:nicholast@my.ccsu.edu">
            <Image className="mx-2" style={{whiteSpace:'nowrap', display:'inline'}} width={linkImgSize} height={linkImgSize} src="/resources/email.svg" alt="..."></Image>
            Email
          </a>
        </div>
      </div>
    </div>
    </div>
  )
}