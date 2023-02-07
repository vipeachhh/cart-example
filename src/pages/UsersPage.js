import React, { useState } from "react";
import SwapiHero from "../components/CarsItem";
import users from "../db/users_db";

function UsersPage() {
  let [selectedHero, setSelectedHero] = useState(users[0].first_name);
  let [input, setInput] = useState("");

  function searchHero(event) {
    const { value } = event.target;
    setInput(value.toLowerCase());
  }

  return (
    <div className="App">
      <div>
        <input onChange={searchHero} placeholder="Hero name:" />
      </div>
      {users
        .filter((item) => item.first_name.toLowerCase().includes(input))
        .map(({ first_name: name }) => {
          return (
            <SwapiHero
              onClick={() => setSelectedHero(name)}
              key={name}
              name={name}
            ></SwapiHero>
          );
        })}

      <div style={{ color: "green" }}>Selected hero: {selectedHero}</div>
      <div>{input}</div>
    </div>
  );
}

export default UsersPage;
