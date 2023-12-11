import React from "react";
import "./style.css";
import { User } from "@phosphor-icons/react";

type Props = {
  size: number;
  src?: string;
};

function Avatar({ src, size }: Props) {
  return (
    <div
      style={{ minWidth: size, minHeight: size, width: size, height: size }}
      className="avatar"
    >
      {/* {src ? (
        <Image src={src} height={300} width={300} alt="avatar" />
      ) : (
        <User size={size / 2.5} />
      )} */}
    </div>
  );
}

export default Avatar;
