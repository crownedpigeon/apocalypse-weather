const weatherTypes = {
  200: {
    name: "Radiation Storm",
    desc: "if the world hadn't already ended, you'd think its ending now",
    class: "radiation"
  },
  300: {
    name: "Blood Rain",
    desc: "safe to go out in, but sticky",
    class: "blood"
  },
  500: {
    name: "Acid Rain",
    desc: "burns through metal and flesh, find shelter",
    class: "acid"
  },
  600: {
    name: "Post-Nuclear Cold Front",
    desc:
      "soot blocks the sun, temperatures drop to freezing. beware of sudden blizzards.",
    class: "cold"
  },
  700: {
    name: "Unnatural Events",
    desc:
      "could be plague of locusts, zombies, or alien invasion. hard to tell.",
    class: "unnatural"
  },
  800: {
    name: "Solar Flare",
    desc:
      "its clear outside. far too clear. blindingly clear. burningly...clear.",
    class: "sun"
  },
  900: {
    name: "Dangerous Miasmas",
    desc: "clouds of bad air roam the earth and sky. don't let it touch you. ",
    class: "miasma"
  }
};

export default weatherTypes;
