import React from "react";

import Frontend from "./_components/Frontend";
import Backend from "./_components/Backend";

import "./Skills.css";

const Skills = () => {
    return (
        <section className="skills section" id="skills">
            <h2 className="section__title">Skills</h2>
            <span className="section__subtitle">My Technical Level</span>

            <div className="skills__container contianer">
                <Frontend />
                <Backend />
            </div>
        </section>
    );
};

export default Skills;
