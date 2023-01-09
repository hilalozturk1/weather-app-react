import { createContext, useContext, useState, useEffect } from "react";
import { useName } from "./NameContext";

const ResponseContext = createContext();

const ResponseContextProvider = ({ children }) => {
  const [res, setRes] = useState([]);
  const { name } = useName();

  useEffect(() => {
    handleFetchData();
    console.log("response context name", name);
  }, [name]);

  const handleFetchData = async () => {
    await fetch(
      `https://api.weatherapi.com/v1/forecast.json?key=9d3d987e91a646b086f91320230801&q=${name}&days=8`
    )
      .then((response) => response.json())
      .then((data) => {
        console.log("weatherapi", data);
        const arr = data;
        setRes(
          arr.forecast.forecastday.map((item, index) => ({
            description: data.forecast.forecastday[index].day.condition.text,
            icon: data.forecast.forecastday[index].day.condition.icon,
            date: new Date(data.forecast.forecastday[index].date).toString().slice(0, 3),
            max: data.forecast.forecastday[index].day.maxtemp_c,
            min: data.forecast.forecastday[index].day.mintemp_c,
          }))
        );
        console.log("res", res);
      });
  };

  const values = { res, setRes };
  return <ResponseContext.Provider value={values}>{children}</ResponseContext.Provider>;
};
const useResponseContext = () => useContext(ResponseContext);

export { useResponseContext, ResponseContextProvider };
