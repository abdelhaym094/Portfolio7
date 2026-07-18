"use client";

import Particles from "@tsparticles/react";


export default function ParticlesBackground() {

  return (

    <Particles

      className="fixed inset-0 -z-10"

      options={{

        background: {
          color: {
            value: "#020617",
          },
        },


        fpsLimit: 120,


        particles: {

          number: {
            value: 70,
          },


          color: {
            value: "#facc15",
          },


          links: {

            enable: true,

            color: "#facc15",

            opacity: 0.3,

          },


          move: {

            enable: true,

            speed: 1,

          },


          size: {

            value: {

              min: 1,

              max: 3,

            },

          },


          opacity: {

            value: 0.5,

          },

        },


      }}

    />

  );

}