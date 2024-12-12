import { NavLink, useLoaderData } from "react-router-dom";
import "./App.css";
import CoffeeCard from "./components/CoffeeCard";
import { useState } from "react";

function App() {
  const loadedCoffees = useLoaderData();

  const coffeesList = Array.isArray(loadedCoffees) ? loadedCoffees : [];

  const [coffeeList, setCoffeeList] = useState(coffeesList);

  return (
    <div className="m-20">
      <h1 className="text-green-300 font-semibold text-3xl">
        Hot Hot Colf Coffee: {loadedCoffees.length}
      </h1>

      <div className="grid md:grid-cols-2 gap-5">
        {coffeeList.map((coffee) => (
          <CoffeeCard
            key={coffee._id}
            coffee={coffee}
            coffeeList={coffeeList}
            setCoffeeList={setCoffeeList}
          ></CoffeeCard>
        ))}
      </div>
    </div>
  );
}

export default App;
