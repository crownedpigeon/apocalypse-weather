import React from "react";
import { ReactComponent as Acid } from "../icons/acid.svg";
import { ReactComponent as Blood } from "../icons/blood.svg";
import { ReactComponent as Cold } from "../icons/cold.svg";
import { ReactComponent as Miasma } from "../icons/miasma.svg";
import { ReactComponent as Radiation } from "../icons/radiation.svg";
import { ReactComponent as Sun } from "../icons/sun.svg";
import { ReactComponent as Unnatural } from "../icons/unnatural.svg";
import { TweenLite } from "gsap";

class WeatherDisplay extends React.Component {
  componentDidMount = () => {
    TweenLite.to(".radiation", 2, { fill: "red" });
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

    return weatherSVG[200];
  }
}

export default WeatherDisplay;
