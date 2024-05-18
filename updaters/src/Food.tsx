import {useState} from 'react';

function Food() {
  const [foods, setFoods] = useState([
    "Apple",
    "Orange",
    "Banana"
  ]);

  const addFood = (event): void => {
    const newFood = document.getElementById("foodInput").value;
    document.getElementById("foodInput").value = "";
    setFoods(prevFoods => [...prevFoods, newFood]);
  }

  const removeFood = (index): void => {
    setFoods(foods.filter((_, i) => i != index));
  }

  return (
    <div className="foods">
      <h2>List of food:</h2>
      <ol>
        {foods.map((food, index) => 
          <li 
            key={index}
            onClick={() => removeFood(index)}
          >
            {food}
          </li>
        )}
      </ol>
      <input 
        type="text" 
        id="foodInput" 
        placeholder="Enter food name" 
      />
      <button onClick={addFood}>Add food!</button>
    </div>
  );
}

export default Food;