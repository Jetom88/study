import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      나는 main
      <br />
      <br />
      안녕
      <br />
      <br />
      <h3>기능 구현 연습</h3>
      <Link to="/login">custom hook</Link>
      <br />
      <Link to="/comp">tab</Link>
      <br />
      <Link to="/list">list</Link>
    </div>
  );
};

export default Home;
