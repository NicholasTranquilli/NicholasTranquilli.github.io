import React, { ReactNode, useEffect, useState } from "react";

export enum MWSScreenBoxOrientation {
  horizontal,
  vertical,
}

interface MWSScreenBoxProps {
  orientation: MWSScreenBoxOrientation;
  imageUrl?: string;
  containerStyle?: string;
  centerSections?: boolean;
  headerStyle?: string;
  header?: ReactNode;
  footerStyle?: string;
  footer?: ReactNode;
  section1Style?: string;
  section1?: ReactNode;
  section2Style?: string;
  section2?: ReactNode;
  swapOrientationAt?: number;
  swapSectionsOnResize?: boolean;
  height?: string;
}

export function MWSScreenBox(props: MWSScreenBoxProps) {
  let centerSections: boolean | undefined = props.centerSections;
  if (typeof centerSections == "undefined") centerSections = true;
  let swapSectionsOnResize: boolean | undefined = props.swapSectionsOnResize;
  if (typeof swapSectionsOnResize == "undefined") swapSectionsOnResize = false;

  const [shouldSwap, setShouldSwap] = useState<boolean>(false);

  const [orientation, setOrientation] = useState<MWSScreenBoxOrientation>(
    props.orientation
  );

  const updateOrientation = () => {
    if (
      window.innerWidth <
      (typeof props.swapOrientationAt != "undefined"
        ? props.swapOrientationAt
        : 768)
    ) {
      setOrientation(MWSScreenBoxOrientation.vertical);
      if (swapSectionsOnResize) {
        setShouldSwap(true);
      }
    } else {
      setOrientation(props.orientation);
      setShouldSwap(false);
    }
  };

  useEffect(() => {
    updateOrientation();

    window.addEventListener("resize", updateOrientation);

    return () => {
      window.removeEventListener("resize", updateOrientation);
    };
  }, []);

  return (
    <div
      className={`flex flex-col min-h-fit ${props.height ? props.height : "h-screen"} w-full ${props.imageUrl ? "bg-fixed bg-cover bg-center" : ""} ${props.containerStyle}`}
      style={{
        backgroundImage: props.imageUrl ? `url(${props.imageUrl})` : undefined,
      }}
    >
      <div
        className={`flex-none ${centerSections && "justify-center items-center text-center"} ${props.headerStyle}`}
      >
        {props.header}
      </div>
      <div
        className={`flex-1 flex ${orientation == MWSScreenBoxOrientation.vertical ? "flex-col" : ""} w-full`}
      >
        <div
          className={
            shouldSwap
              ? (props.section2
                ? `flex-1 flex ${centerSections ? "justify-center items-center text-center" : ""} ${props.section2Style}`
                : undefined)
              : (props.section1
                ? `flex-1 flex ${centerSections ? "justify-center items-center text-center" : ""} ${props.section1Style}`
                : undefined)
          }
        >
          {shouldSwap ? props.section2 : props.section1}
        </div>
        <div
          className={
            shouldSwap
            ? (props.section1
              ? `flex-1 flex ${centerSections ? "justify-center items-center text-center" : ""} ${props.section1Style}`
              : undefined)
            : (props.section2
              ? `flex-1 flex ${centerSections ? "justify-center items-center text-center" : ""} ${props.section2Style}`
              : undefined)
          }
        >
          {shouldSwap ? props.section1 : props.section2}
        </div>
      </div>
      <div
        className={`flex-none ${centerSections && "justify-center items-center text-center"} ${props.footerStyle}`}
      >
        {props.footer}
      </div>
    </div>
  );
}
