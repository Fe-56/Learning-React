// click events

function ProfilePicture () {
  const imageUrl = "https://d1m9vqlvl3fy94.cloudfront.net/user_image/attachment/4202/default_Vegeta-1.jpg";
  const handleClick = (e) => {
    e.target.style.display = "none";
  }

  return (
    <img 
      src={imageUrl}
      onClick={(e) => handleClick(e)}
    >
    </img>
  );
}

export default ProfilePicture;