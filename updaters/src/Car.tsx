import {useState} from 'react';

function Car() {
  const [car, setCar] = useState({
    year: 2024,
    make: "Ford",
    model: "Mustang"
  });

  const changeYear = (event): void => {
    // use a spread operator to get all the properties of prevCar
    // JavaScript and TypeScript do not allow duplicate propertiy keys in a single object, hence, we can just use the spread operator, and then insert the property to change, even though it is inherently repeated, it will go with the last instance of the property
    setCar(prevCar => ({
      ...prevCar, 
      year: event.target.value}
    ));
  }
  
  const changeMake = (event): void => {
    setCar(prevCar => ({
      ...prevCar,
      make: event.target.value
    }));
  }

  const changeModel = (event): void => {
    setCar(prevCar => ({
      ...prevCar,
      model: event.target.value
    }));
  }

  return (
    <div>
      <p>Your favourite car is: {car.year} {car.make} {car.model}</p>
      <input type="number" value={car.year} onChange={changeYear} /><br />
      <input type="text" value={car.make} onChange={changeMake} /><br />
      <input type="text" value={car.model} onChange={changeModel} /><br />
    </div>
  );
}

export default Car;