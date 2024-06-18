import React from "react";
import ResumeTitle from "./ResumeTitle";
import { MdWork } from "react-icons/md";
import { GiGraduateCap } from "react-icons/gi";
import ResumeCard from "./ResumeCard";

const Education = () => {
  return (
    <div className="w-full grid grid-cols-9 px-6">
      <div className="col-span-9 md:col-span-4">
        <ResumeTitle title="Experience" icon={<MdWork />} />
        <ResumeCard
          badge="2024-Present"
          title="Frontend Web Developer"
          subTitle="Kodu Powered By Dhurina PVT. Ltd"
          des="I have one year of experience as a front-end developer at Kodu, where I specialized in creating responsive and user-friendly web applications. During my tenure, I worked extensively with HTML, CSS, JavaScript and ReactJs to build and maintain engaging interfaces. I collaborated closely with designers and back-end developers to implement features and ensure seamless user experiences. "
        />
        {/* <ResumeCard
          badge="2011 - 2012"
          title="Front-end Developer"
          subTitle="Google Inc."
          des="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum, itaque ipsa quae!"
        /> */}
        {/* <ResumeCard
          badge="2009 - 2010"
          title="Senior Developer"
          subTitle="ReactBD.com."
          des="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum, itaque ipsa quae!"
        /> */}
      </div>
      <div className="w-full h-full hidden lgl:flex justify-center items-center">
        <span className="w-[1px] h-full bg-zinc-800 inline-flex"></span>
      </div>
      <div className="col-span-9 md:col-span-4">
        <ResumeTitle title="Education" icon={<GiGraduateCap />} />
        <ResumeCard
          badge="2023 - 2024"
          title="Full-Stack Developer "
          subTitle="Hisar"
          des="Full-stack developers design and create websites and applications for various platforms!"
        />
        <ResumeCard
          badge="2020 - 2023"
          title="CDLU University"
          subTitle="Sirsa"
          des="Bachelor of Commerce!"
        />
        <ResumeCard
          badge="2019 - 2020"
          title="Shanti Niketan Public School"
          subTitle="Dhingsara (Fatehabad)"
          des="Sr. Secondary!"
        />
      </div>
    </div>
  );
};

export default Education;
