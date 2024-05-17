import React, {useState} from 'react';

function ColorPicker() {
  const [color, setColor] = useState("#FFFFFF");

  const handleColorChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setColor(event.target.value);
  }

  return (
    <div className="color-picker-container">
      <h1>Color Picker</h1>
      <div className="color-display" style={{backgroundColor: color}}>
        <p>Seleced Color: {color}</p>
      </div>
      <label>Select a color: </label>
      <input type="color" value={color} onChange={handleColorChange}></input>
    </div>
  );
}

export default ColorPicker;