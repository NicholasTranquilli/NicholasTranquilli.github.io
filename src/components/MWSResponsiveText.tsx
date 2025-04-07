import React from "react";

interface MVSResponsiveTextProps {
  children: React.ReactNode;
  className?: string;
}

export function MWSResponsiveH1(props: MVSResponsiveTextProps) {
  return (
    <p
      className={`text-4xl md:text-5xl lg:text-6xl xl:text-7xl ${props.className}`}
    >
      {props.children}
    </p>
  );
}

export function MWSResponsiveH2(props: MVSResponsiveTextProps) {
  return (
    <p
      className={`text-2xl md:text-3xl lg:text-4xl xl:text-5xl ${props.className}`}
    >
      {props.children}
    </p>
  );
}

export function MWSResponsiveH3(props: MVSResponsiveTextProps) {
  return (
    <p
      className={`text-lg md:text-xl lg:text-2xl xl:text-3xl ${props.className}`}
    >
      {props.children}
    </p>
  );
}

export function MWSResponsiveH4(props: MVSResponsiveTextProps) {
  return (
    <p
      className={`text-sm sm:text-md md:text-lg lg:text-xl xl:text-2xl ${props.className}`}
    >
      {props.children}
    </p>
  );
}

export function MWSResponsiveCaption(props: MVSResponsiveTextProps) {
  return <p className={`text-xl ${props.className}`}>{props.children}</p>;
}

export function MWSResponsiveText(props: MVSResponsiveTextProps) {
  return <p className={`text-sm ${props.className}`}>{props.children}</p>;
}

export function MWSResponsiveSubtext(props: MVSResponsiveTextProps) {
  return <p className={`text-xs ${props.className}`}>{props.children}</p>;
}
