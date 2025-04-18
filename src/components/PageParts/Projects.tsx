"use client";

import { MWSScreenBox, MWSScreenBoxOrientation as Orientation } from "@/components/MWSScreenBox";
import { MWSResponsiveH1, MWSResponsiveH3, MWSResponsiveText, MWSResponsiveCaption, MWSResponsiveSubtext } from "@/components/MWSResponsiveText";
import React from "react";
import MWSTiltContainer from "@/components/MWSTiltContainer";
import Image from 'next/image';
import { div } from "framer-motion/client";

// TODO: 3d room for each project would be cool

export default function Projects() {
  return (
    <>
      {/* lbgfx */}
      <MWSScreenBox
        orientation={Orientation.horizontal}
        height="h-[60vh]"
        section1={
          <div>
            <MWSTiltContainer className="min-w-full h-full drop-shadow-[15px_10px_5px_rgba(0,0,0,0.5)]" tiltScalar={4}>
              <div className="m-10 bg-white rounded-md">
                <div className="max-w-fit max-h-fit relative">
                  <Image className="" style={{ whiteSpace: 'nowrap', display: 'inline' }} width={500} height={500} layout="responsive"
                    objectFit="cover" src="/LobsterEngine.png" alt="..."></Image>
                  <div
                    className="absolute z-[1] top-0 left-0 w-full h-full bg-gradient-to-t from-red-900 to-red-100 opacity-50 rounded-md"
                  />

                  {/* GITHUB */}
                  <div className="absolute bottom-4 left-4 z-[1] flex flex-row">
                    <MWSResponsiveCaption className="underline flex-1 text-white font-bold pr-2">
                      <a href="https://github.com/NicholasTranquilli/lbgfx">
                        GitHub
                      </a>
                    </MWSResponsiveCaption>

                    {/* SKILLS */}
                    <div className="ml-1 bottom-4 right-4 flex flex-wrap text-center items-cetner justify-center max-w-[100%] min-h-fit">
                      <MWSResponsiveSubtext className="flex-1 bg-blue-300 rounded-xl max-w-fit px-[5px] m-1 max-h-fit">
                        C++
                      </MWSResponsiveSubtext>
                      <MWSResponsiveSubtext className="flex-1 bg-yellow-300 rounded-xl max-w-fit px-[5px] m-1 max-h-fit">
                        HLSL
                      </MWSResponsiveSubtext>
                      <MWSResponsiveSubtext className="flex-1 bg-green-300 rounded-xl max-w-fit px-[5px] m-1 max-h-fit">
                        DirectX
                      </MWSResponsiveSubtext>
                    </div>
                  </div>
                </div>
              </div>
            </MWSTiltContainer>
          </div>
        }
        section2={
          <div className="text-start bg-white p-10">
            <MWSResponsiveCaption>lbgfx (Lobster Graphics Framework)</MWSResponsiveCaption>
            <MWSResponsiveText className="pt-2">
              lbgfx is a from-scratch 3D Graphics Engine / Framework that I am currently developing in my free time.
              <br /> <br />
              lbgfx aims to use as few dependencies as possible while still being very capable.
              This framework utilizes a singleton-based design approach for modular development as well as improved end-user experience.
              <br /> <br />
              Visit the public GitHub to learn more about it!
            </MWSResponsiveText>
          </div>
        }
      />

      {/* WFPPacketInjector */}
      <MWSScreenBox
        orientation={Orientation.horizontal}
        swapSectionsOnResize={true}
        height="h-[60vh]"
        section2={
          <div>
            <MWSTiltContainer className="min-w-full h-full drop-shadow-[15px_10px_5px_rgba(0,0,0,0.5)]" tiltScalar={4}>
              <div className="m-10 bg-white rounded-md">
                <div className="max-w-fit max-h-fit relative">
                  <Image className="rounded-md" style={{ whiteSpace: 'nowrap', display: 'inline' }} width={500} height={500} layout="responsive"
                    objectFit="cover" src="/492KDriver.jpg" alt="..."></Image>
                  <div
                    className="absolute z-[1] top-0 left-0 w-full h-full bg-gradient-to-t from-blue-900 to-blue-100 opacity-50 rounded-md"
                  />

                  {/* GITHUB */}
                  <div className="absolute bottom-4 left-4 z-[1] flex flex-row">
                    <MWSResponsiveCaption className="underline flex-1 text-white font-bold pr-2">
                      <a href="https://github.com/NicholasTranquilli/WFPPacketInjector">
                        GitHub
                      </a>
                    </MWSResponsiveCaption>

                    {/* SKILLS */}
                    <div className="ml-1 bottom-4 right-4 flex flex-wrap text-center items-cetner justify-center max-w-[100%] min-h-fit">
                      <MWSResponsiveSubtext className="flex-1 bg-blue-300 rounded-xl max-w-fit px-[5px] m-1 max-h-fit">
                        C++
                      </MWSResponsiveSubtext>
                      <MWSResponsiveSubtext className="flex-1 bg-gray-300 rounded-xl max-w-fit px-[5px] m-1 max-h-fit">
                        Networking
                      </MWSResponsiveSubtext>
                      <MWSResponsiveSubtext className="flex-1 bg-red-300 rounded-xl max-w-fit px-[5px] m-1 max-h-fit">
                        Kernel
                      </MWSResponsiveSubtext>
                    </div>
                  </div>
                </div>
              </div>
            </MWSTiltContainer>
          </div>
        }
        section1={
          <div className="text-start bg-white p-10">
            <MWSResponsiveCaption>WFPPacketInjector</MWSResponsiveCaption>
            <MWSResponsiveText className="pt-2">
              WFPPacketInjector is a Windows kernel driver that allows for simple packet capture and modification over a specified port.
              <br /> <br />
              The driver was developed as a simple demonstration of how a "Man In The Middle" attack may work from the attacker's perspective.
              <br /> <br />
              The Kernel Driver utilizes WFP (Windows Filtering Platform) to capture and manipulate packets sent on a specific socket before they get sent out.
              A video demonstration of this driver in action, along with a detailed explanation of the concepts it represents, can be found on the project's GitHub page.
              <br /> <br />
              Visit the linked GitHub to see more details and steps for recreation!
            </MWSResponsiveText>
          </div>
        }
      />

      {/* SotfP */}
      <MWSScreenBox
        orientation={Orientation.horizontal}
        height="h-[60vh]"
        section1={
          <div>
            <MWSTiltContainer className="min-w-full h-full drop-shadow-[15px_10px_5px_rgba(0,0,0,0.5)]" tiltScalar={4}>
              <div className="m-10 bg-white rounded-md">
                <div className="max-w-fit max-h-fit relative">
                  <Image className="rounded-md" style={{ whiteSpace: 'nowrap', display: 'inline' }} width={500} height={500} layout="responsive"
                    objectFit="cover" src="/SotfP.png" alt="..."></Image>
                  <div
                    className="absolute z-[1] top-0 left-0 w-full h-full bg-gradient-to-t from-purple-900 to-red-100 opacity-50 rounded-md"
                  />

                  {/* GITHUB */}
                  <div className="absolute bottom-4 left-4 z-[1] flex flex-row">
                    <MWSResponsiveCaption className="underline flex-1 text-white font-bold pr-2">
                      <a href="https://github.com/NicholasTranquilli/SotfP">
                        GitHub
                      </a>
                    </MWSResponsiveCaption>

                    {/* SKILLS */}
                    <div className="ml-1 bottom-4 right-4 flex flex-wrap text-center items-cetner justify-center max-w-[100%] min-h-fit">
                      <MWSResponsiveSubtext className="flex-1 bg-blue-300 rounded-xl max-w-fit px-[5px] m-1 max-h-fit">
                        C++
                      </MWSResponsiveSubtext>
                      <MWSResponsiveSubtext className="flex-1 bg-yellow-300 rounded-xl max-w-fit px-[5px] m-1 max-h-fit">
                        Fonts
                      </MWSResponsiveSubtext>
                      <MWSResponsiveSubtext className="flex-1 bg-purple-300 rounded-xl max-w-fit px-[5px] m-1 max-h-fit">
                        Parsing
                      </MWSResponsiveSubtext>
                    </div>
                  </div>
                </div>
              </div>
            </MWSTiltContainer>
          </div>
        }
        section2={
          <div className="text-start bg-white p-10">
            <MWSResponsiveCaption>SotfP (Simple OTF Parser)</MWSResponsiveCaption>
            <MWSResponsiveText className="pt-2">
              SotfP is a from-scratch OTF file parser
              <br /> <br />
              I designed and developed this parser for two main purposes.
              The first being the prerequisite to font rendering for my from-scratch graphics library.
              The second reason, to make it an excellent education tool.
              <br /> <br />
              While there is quite a lot of documentation on the OTF format, I found it quite difficult to decipher for basic implementation use.
              Additionally, I failed to find an existing basic OTF parser, so I decided to create one.
              <br /> <br />
              This is a very useful tool for me both in education and implementation;
              however, I largely designed this to be an easy-to-follow repository geared towards learning about the OTF file format.
              <br /> <br />
              Visit the linked GitHub to check on current features and development!
            </MWSResponsiveText>
          </div>
        }
      />

      {/* ROS2 CCSU Project */}
      <MWSScreenBox
        orientation={Orientation.horizontal}
        swapSectionsOnResize={true}
        height="h-[60vh]"
        section2={
          <div>
            <MWSTiltContainer className="min-w-full h-full drop-shadow-[15px_10px_5px_rgba(0,0,0,0.5)]" tiltScalar={4}>
              <div className="m-10 bg-white rounded-md">
                <div className="max-w-fit max-h-fit relative">
                  <Image className="rounded-md" style={{ whiteSpace: 'nowrap', display: 'inline' }} width={500} height={500} layout="responsive"
                    objectFit="cover" src="/ROS2.png" alt="..."></Image>
                  <div
                    className="absolute z-[1] top-0 left-0 w-full h-full bg-gradient-to-t from-gray-900 to-rose-100 opacity-50 rounded-md"
                  />

                  <div className="absolute bottom-4 left-4 z-[1] flex flex-row">
                    {/* SKILLS */}
                    <div className="ml-1 bottom-4 right-4 flex flex-wrap text-center items-cetner justify-center max-w-[100%] min-h-fit">
                      <MWSResponsiveSubtext className="flex-1 bg-teal-300 rounded-xl max-w-fit px-[5px] m-1 max-h-fit">
                        ROS2
                      </MWSResponsiveSubtext>
                      <MWSResponsiveSubtext className="flex-1 bg-fuchsia-300 rounded-xl max-w-fit px-[5px] m-1 max-h-fit">
                        MoveIt2
                      </MWSResponsiveSubtext>
                      <MWSResponsiveSubtext className="flex-1 bg-orange-300 rounded-xl max-w-fit px-[5px] m-1 max-h-fit">
                        Linux
                      </MWSResponsiveSubtext>
                      <MWSResponsiveSubtext className="flex-1 bg-blue-300 rounded-xl max-w-fit px-[5px] m-1 max-h-fit">
                        C++
                      </MWSResponsiveSubtext>
                      <MWSResponsiveSubtext className="flex-1 bg-green-300 rounded-xl max-w-fit px-[5px] m-1 max-h-fit">
                        Python
                      </MWSResponsiveSubtext>
                    </div>
                  </div>
                </div>
              </div>
            </MWSTiltContainer>
          </div>
        }
        section1={
          <div className="text-start bg-white p-10">
            <MWSResponsiveCaption>ABB-1200 Movement and Simulation</MWSResponsiveCaption>
            <MWSResponsiveText className="pt-2">
              Worked with a team of 3 other developers on a course project for CCSU CS-498.
              <br /> <br />
              For this we had to research, test, and implement a method to move an ABB-1200 robot arm located in our University robotics lab.
              We were tasked to use modern libraries such as ROS2 and MoveIt2 to accomplish this goal.
              As a team, we created a simulated environment for the arm in RViz2.
              We developed several nodes (subscribers and publishers) in both Python and C++.
              <br /> <br />
              My main role in this team was programming the nodes for communicating with the Robot and transmitting data.
              I utilized both C++ and Python to build these nodes.
              <br /> <br />
              This project is to be completed by graduation (May 2025).
              After this project has concluded, I intend to tinker around with a personal implementation of this project to test compatibility with other robots and simulated environments. I plan to make these implementations public on my GitHub, however, this specific course project is not a publicly viewable repository.
            </MWSResponsiveText>
          </div>
        }
      />

      {/* Moth */}
      <MWSScreenBox
        orientation={Orientation.horizontal}
        height="h-[60vh]"
        section1={
          <div>
            <MWSTiltContainer className="min-w-full h-full drop-shadow-[15px_10px_5px_rgba(0,0,0,0.5)]" tiltScalar={4}>
              <div className="m-10 bg-white rounded-md">
                <div className="max-w-fit max-h-fit relative">
                  <Image className="rounded-md p-4" style={{ whiteSpace: 'nowrap', display: 'inline' }} width={500} height={500} layout="responsive"
                    objectFit="cover" src="/MOTH_Logo.png" alt="..."></Image>
                  <div
                    className="absolute z-[1] top-0 left-0 w-full h-full bg-gradient-to-t from-amber-900 to-yellow-100 opacity-50 rounded-md"
                  />
                  
                  {/* GITHUB */}
                  <div className="absolute bottom-4 left-4 z-[1] flex flex-row">

                    <MWSResponsiveCaption className="underline flex-1 text-white font-bold flex items-end pr-2">
                      <a className="whitespace-nowrap" href="https://mothdev.com">
                        Business Site
                      </a>
                    </MWSResponsiveCaption>

                    {/* SKILLS */}
                    <div className="ml-1 bottom-4 right-4 flex flex-wrap text-center items-cetner justify-center max-w-[100%] min-h-fit">
                      <MWSResponsiveSubtext className="flex-1 bg-yellow-300 rounded-xl max-w-fit px-[5px] m-1 max-h-fit">
                        Web
                      </MWSResponsiveSubtext>
                      <MWSResponsiveSubtext className="flex-1 bg-orange-300 rounded-xl max-w-fit px-[5px] m-1 max-h-fit">
                        NextJS
                      </MWSResponsiveSubtext>
                      <MWSResponsiveSubtext className="flex-1 bg-cyan-300 rounded-xl max-w-fit px-[5px] m-1 max-h-fit">
                        .NET
                      </MWSResponsiveSubtext>
                    </div>
                  </div>
                </div>
              </div>
            </MWSTiltContainer>
          </div>
        }
        section2={
          <div className="text-start bg-white p-10">
            <MWSResponsiveCaption>MOTH Development Services</MWSResponsiveCaption>
            <MWSResponsiveText className="pt-2">
              MOTH is a small company I started with 2 friends from CCSU.
              <br /> <br />
              MOTH develops software for small, medium, and large-sized businesses.
              As a team, we work together to develop software solutions to solve our clients' biggest problems.
              <br /> <br />
              This software can range anywhere from building and designing a website,
              inventory management systems with POS integration, cross-platform mobile applications,
              or any other custom solution our customer requires.
              <br /> <br />
              Check out our Business Website, linked in this section, to learn more or get in contact with us!
            </MWSResponsiveText>
          </div>
        }
      />
    </>
  )
}