"use client";

import Particles from "@tsparticles/react";


export default function ParticlesBackground() {

  return (

    <Particles

      className="fixed inset-0 -z-10"

      options={{

        fullScreen: {
          enable: true,
          zIndex: -10,
        },


        background: {
          color: {
            value: "#020617",
          },
        },


        fpsLimit: 60,


        detectRetina: true,



        particles: {


          number: {

            value: 40,

            density: {

              enable: true,

              area: 900,

            },

          },



          color: {

            value: "#facc15",

          },



          links: {


            enable: true,

            distance: 150,

            color:"#facc15",

            opacity:0.25,

            width:1,


          },



          move:{


            enable:true,

            speed:0.5,

            direction:"none",

            random:false,

            straight:false,


          },




          size:{


            value:{


              min:1,

              max:3,


            },


          },




          opacity:{


            value:0.45,


          },


        },



        responsive:[

          {

            maxWidth:768,


            options:{


              fpsLimit:40,


              particles:{


                number:{


                  value:20,


                },



                links:{


                  enable:false,


                },


              },


            },


          },


        ],


      }}


    />


  );

}