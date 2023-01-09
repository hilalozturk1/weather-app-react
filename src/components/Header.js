import { useState, useEffect } from "react";
import { useName } from "../context/NameContext";

function Header() {
  const [cities, setCities] = useState([]);
  const { name, setName } = useName();

  useEffect(() => {
    fetch(`https://turkiyeapi.cyclic.app/api/v1/provinces`)
      .then((response) => response.json())
      .then((data) => {
        setCities(data.data);
      });
  }, []);

  const handleChange = (e) => {
    console.log("city name", name);
    setName(e.target.value);
  };

  console.log(name);
  return (
    <div className="header">
      <select onChange={handleChange} className="select-box">
        {cities.map((item) => (
          <option value={item.name} key={item.id}>
            {item.name}
          </option>
        ))}
      </select>
    </div>
  );
}

export default Header;
