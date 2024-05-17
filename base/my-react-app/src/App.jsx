import Header from './Header.jsx';
import Footer from './Footer.jsx';
import Food from './Food.jsx';
import Card from './Card/Card.jsx';
import Student from './Student.jsx';

function App() {
  return (
    <div>
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
