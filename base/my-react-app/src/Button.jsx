// click events

function Button () {
  let count = 0;
  const handleClick = (e) => {
    count++;
    console.log(count);
  }

  return (
    <button onClick={
      (e) => handleClick(e)
    }>
      Count: {count}
    </button>
  );
}

export default Button;