// update array of objects in state

import {useState} from 'react';

function Car() {
  const [cars, setCars] = useState([]);
  const [carYear, setCarYear] = useState(new Date().getFullYear());
  const [carMake, setCarMake] = useState("");
  const [carModel, setCarModel] = useState("");

  const addCar = (event): void => {
    const newCar = {
      year: carYear,
      make: carMake,
      model: carModel
    }

    setCars(prevCars => [...prevCars, newCar]);
    setCarYear(new Date().getFullYear());
    setCarMake("");
    setCarModel("");
  }

  const removeCar = (index): void => {
    setCars(prevCars => 
      prevCars.filter((_, i) => i != index)
    );
  }

  const changeYear = (event): void => {
    setCarYear(event.target.value);
  }

  const changeMake = (event): void => {
    setCarMake(event.target.value);
  } 

  const changeModel = (event): void => {
    setCarModel(event.target.value);
  }


  // const changeYear = (event): void => {
  //   // use a spread operator to get all the properties of prevCar
  //   // JavaScript and TypeScript do not allow duplicate propertiy keys in a single object, hence, we can just use the spread operator, and then insert the property to change, even though it is inherently repeated, it will go with the last instance of the property
  //   setCar(prevCar => ({
  //     ...prevCar, 
  //     year: event.target.value}
  //   ));
  // }
  
  // const changeMake = (event): void => {
  //   setCar(prevCar => ({
  //     ...prevCar,
  //     make: event.target.value
  //   }));
  // }

  // const changeModel = (event): void => {
  //   setCar(prevCar => ({
  //     ...prevCar,
  //     model: event.target.value
  //   }));
  // }

  return (
    <div>
      <h2>List of cars</h2>
      <ul>
        {cars.map((car: object, index: number) => 
          <li key={index} onClick={() => removeCar(index)}>{car.year} {car.make} {car.model}</li>
        )}
      </ul>
      <input 
        type="number" 
        value={carYear} 
        onChange={changeYear}
        id="carYearInput"
      /><br />
      <input 
        type="text" 
        value={carMake} 
        onChange={changeMake}
        placeholder="Enter car make"
        id="carMakeInput"
      /><br />
      <input 
        type="text" 
        value={carModel} 
        onChange={changeModel}
        placeholder="Enter car model"
        id="carModelInput"
      /><br />
      <button onClick={addCar}>Add Car</button>
    </div>
  );
}

export default Car;