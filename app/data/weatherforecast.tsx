
export type typeForeCast = {
    day: string,
    temperature: string,
    image: any
}

const Forecast:typeForeCast[] = [
  {
    day: "Monday",
    temperature: "23°",
    image: require("../assets/images/windy.png")
  },
  {
    day: "Tuesday",
    temperature: "43°",
    image: require("../assets/images/sunny.png"),
  },
  {
    day: "Wednesday",
    temperature: "13°",
    image: require("../assets/images/heavey-rain.png"),
  },
  {
    day: "Thursday",
    temperature: "22°",
    image: require("../assets/images/snowing.png"),
  },
  {
    day: "Friday",
    temperature: "25°",
    image: require("../assets/images/windy.png"),
  },
  {
    day: "Saturday",
    temperature: "23°",
    image: require("../assets/images/sunny-rainy.png"),
  },
  {
    day: "Sunday",
    temperature: "33°",
    image: require("../assets/images/sunny.png"),
  },
];

export default Forecast;