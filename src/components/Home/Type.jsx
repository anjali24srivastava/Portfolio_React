import React from "react";
import Typewriter from "typewriter-effect";

const Type = () => {
    return (
        <Typewriter
          options={{
            strings: [
              "Innovative Full-Stack Engineer",
              "DevOps Practitioner",
              "Committed Open Source Contributor",
              "Effective Problem Solver",
              "Tech Community Leader"
            ],
            autoStart: true,
            loop: true,
            deleteSpeed: 50,
          }}
        />
      )
}

export default Type