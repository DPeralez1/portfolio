import React from "react";

export default function Footer() {
  return (
    <div className="py-5 text-center">
      <p className="text-sm mt-2 opacity-25">
        &copy; {new Date().getFullYear()} David Peralez. BioDigital Jazz Man!
      </p>
    </div>
  );
}
