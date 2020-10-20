import React from "react";
import { ReactComponent as Acid } from "../icons/acid.svg";
import { ReactComponent as Blood } from "../icons/blood.svg";
import { ReactComponent as Cold } from "../icons/cold.svg";
import { ReactComponent as Miasma } from "../icons/miasma.svg";
import { ReactComponent as Radiation } from "../icons/radiation.svg";
import { ReactComponent as Sun } from "../icons/sun.svg";
import { ReactComponent as Unnatural } from "../icons/unnatural.svg";
import { TimelineLite } from "gsap";

class WeatherDisplay extends React.Component {
  constructor(props) {
    super(props);

    this.lightningFlash = null;
    this.stormShake = null;

    this.rainDrops = null;

    this.snow = null;

    this.spaceship = null;

    this.sun = null;
  }

  componentDidMount = () => {
    switch (this.props.weatherId) {
      case 200: {
        this.lightningFlash = new TimelineLite({ repeat: -1 })
          .to(".flash", 0.2, { opacity: 0 })
          .to(".flash", 0.2, { opacity: 1 })
          .to(".flash", 0.2, { opacity: 0 })
          .to(".flash", 0.2, { opacity: 1 })
          .to(".flash", 0.2, { opacity: 0 })
          .to(".flash", 1, { opacity: 0 });

        this.stormShake = new TimelineLite({ repeat: -1 })
          .to(".radiation-storm", 0.2, { y: 5, x: 2 })
          .to(".radiation-storm", 0.2, { y: 0, x: -2 });

        break;
      }
      case 300:
      case 500: {
        this.rainDrops = new TimelineLite({ repeat: -1 })
          .to(".dropOdd", 1.25, {
            scale: 0.5,
            y: 20,
            opacity: 0
          })
          .to(
            ".drop",
            {
              scale: 0.5,
              delay: 0.1,
              y: 20,
              opacity: 0
            },
            0
          );

        break;
      }

      case 600: {
        this.snow = new TimelineLite({ repeat: -1 })
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

        break;
      }

      case 700: {
        this.spaceship = new TimelineLite({ repeat: -1 })
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

        break;
      }

      default:
      case 800: {
        this.sun = new TimelineLite({ repeat: -1, yoyo: true })
          .to(".rays", 1, {
            scale: 1.2,
            transformOrigin: "50% 50%"
          })
          .to(
            ".sun",
            {
              scale: 1.1,
              transformOrigin: "50% 50%",
              fill: "#faf5ca"
            },
            0
          );
      }
    }
  };

  render() {
    const { weatherId } = this.props;

    const weatherSVG = {
      200: <Radiation></Radiation>,
      300: <Blood></Blood>,
      500: <Acid></Acid>,
      600: <Cold></Cold>,
      700: <Unnatural></Unnatural>,
      800: <Sun></Sun>,
      900: <Miasma></Miasma>
    };

    return weatherSVG[800];
  }
}

export default WeatherDisplay;
