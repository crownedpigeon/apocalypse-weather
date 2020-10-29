import React, { useEffect } from "react";
import { ReactComponent as Acid } from "../icons/acid.svg";
import { ReactComponent as Blood } from "../icons/blood.svg";
import { ReactComponent as Cold } from "../icons/cold.svg";
import { ReactComponent as Miasma } from "../icons/miasma.svg";
import { ReactComponent as Radiation } from "../icons/radiation.svg";
import { ReactComponent as Sun } from "../icons/sun.svg";
import { ReactComponent as Unnatural } from "../icons/unnatural.svg";
import { TimelineMax } from "gsap";

const WeatherDisplay = ({ weather }) => {
  const weatherSVG = {
    200: <Radiation></Radiation>,
    300: <Blood></Blood>,
    500: <Acid></Acid>,
    600: <Cold></Cold>,
    700: <Unnatural></Unnatural>,
    800: <Sun></Sun>,
    900: <Miasma></Miasma>
  };

  useEffect(() => {
    const getAnimation = weather => {
      switch (weather) {
        case 200: {
          return new TimelineMax({
            repeat: -1,
            yoyo: true
          })
            .fromTo(
              ".flash",
              0.5,
              {
                opacity: 0
              },
              { opacity: 1, ease: "Bounce.easeOut" }
            )
            .fromTo(
              ".radiation-storm",
              0.5,
              { x: 0, y: 0 },
              { x: -5, y: 5, ease: "Elastic.easeOut" },
              "-=.5"
            );
        }

        case 300:
        case 500: {
          return new TimelineMax({ repeat: -1 }).fromTo(
            ".raindrop",
            1,
            {
              opacity: 1,
              y: 0,
              scale: 1
            },
            {
              scale: 0.4,
              stagger: 0.1,
              y: 30,
              opacity: 0
            }
          );
        }

        case 600: {
          return new TimelineMax({ repeat: -1 })
            .from(".wind", 1, {
              opacity: 0,
              x: -20
            })
            .to(".wind", 0.5, {
              opacity: 1,
              x: 0
            })
            .from(
              ".snow",
              {
                opacity: 0,
                x: -5,
                delay: 0.5,
                rotation: 180,
                transformOrigin: "50% 50%"
              },
              0
            );
        }

        case 700: {
          return new TimelineMax({ repeat: -1 })
            .to(".spaceship", 1, {
              rotate: 5,
              transformOrigin: "50% 50%"
            })
            .to(".spaceship", 1, {
              rotate: -5,
              transformOrigin: "50% 50%"
            })
            .to(
              ".light",
              {
                opacity: 1,
                stagger: 0.2
              },
              0
            )
            .to(
              ".light",
              {
                opacity: 0,
                stagger: 0.2
              },
              0.2
            );
        }

        case 800: {
          return new TimelineMax({ repeat: -1, yoyo: true })
            .to(".rays", 1, {
              scale: 1.2,
              transformOrigin: "50% 50%"
            })
            .to(
              ".sun",
              {
                scale: 1.1,
                transformOrigin: "50% 50%"
              },
              0
            );
        }

        default:
        case 900: {
          return new TimelineMax({
            repeat: -1,
            yoyo: true,
            paused: true
          })
            .set(".dark", {
              opacity: 0,
              x: 20
            })
            .to(".dark", 2, {
              x: 0,
              opacity: 1,
              ease: "ease.out"
            })
            .from(
              ".wind",
              2,
              {
                x: -20,
                opacity: 0,
                ease: "ease.out"
              },
              0
            );
        }
      }
    };

    weather.id && getAnimation(weather.id).play();
  }, [weather]);

  return <div>{weatherSVG[weather.id]}</div>;
};

export default WeatherDisplay;
