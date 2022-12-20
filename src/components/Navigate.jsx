import { Outlet } from "react-router-dom";

const Navigate = () => {
  return (
    <div>
      <h3>머리</h3>
      <Outlet />
      <footer>푸터</footer>
    </div>
  );
};

export default Navigate;
