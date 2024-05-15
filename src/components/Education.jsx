import React from "react";
import EducationItem from "./EducationItem";
import education from "../../data/education";
import Title from "./Title";
import { IoIosSchool } from "react-icons/io";

export default function Education() {
  return (
    <div className="flex flex-col md:flex-row justify-center my-20">
      <div className="w-full md:w-7/12">
        <Title>Education</Title>
        {education.map((item) => (
          <EducationItem
            year={item.year}
            name={item.name}
            degree={item.degree}
          />
        ))}
      </div>
    </div>
  );
}
