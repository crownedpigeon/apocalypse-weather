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
  }

  componentDidMount = () => {
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

    return weatherSVG[600];
  }
}

export default WeatherDisplay;
