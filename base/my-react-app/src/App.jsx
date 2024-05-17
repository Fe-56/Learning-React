import Header from './Header.jsx';
import Footer from './Footer.jsx';
import Food from './Food.jsx';
import Card from './Card/Card.jsx';
import Student from './Student.jsx';
import UserGreeting from './UserGreeting.jsx';
import List from './List.jsx';
import Button from './Button.jsx';
import ProfilePicture from './ProfilePicture.jsx';
import MyComponent from './MyComponent.jsx';
import Counter from './Counter.jsx';
import Name from './Name.jsx';

function App() {
  const fruits = [
    {id: 1, name: "apple", calories: 95}, 
    {id: 2, name: "orange", calories: 45}, 
    {id: 3, name: "banana", calories: 105},
    {id: 4, name: "coconut", calories: 159},
    {id: 5, name: "pineapple", calories: 37}
  ];

  const vegetables = [
    {id: 1, name: "potato", calories: 110}, 
    {id: 2, name: "celery", calories: 15}, 
    {id: 3, name: "carrots", calories: 25},
    {id: 4, name: "corn", calories: 63},
    {id: 5, name: "brocolli", calories: 50}
  ];

  return (
    <div>
      <Name />
      <Counter />
      <MyComponent />
      <ProfilePicture />
      <Button />
      <List items={fruits} category="Fruits" />
      <List items={vegetables} category="Vegetable" />
      <UserGreeting isLoggedIn={true} username="fe-56" />
      <Header />
      <Student name="SpongeBob" age={30} isStudent={true} />
      <Student name="Patrick" age={42} isStudent={false} />
      <Student name="Squidward" age={50} isStudent={false} />
      <Student name="Sandy" age={27} isStudent={true} />
      <Student name="Larry" />
      <Card />
      <Card />
      <Card />
      <Food />
      <Footer />
    </div>
  );
}

export default App;
