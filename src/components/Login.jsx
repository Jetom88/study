import { useState } from "react";
import useBoolean from "../hook/useBoolean";
import useIsClient from "../hook/useIsClient";

const Login = () => {
  // const [value, setValue] = useState("");
  // const onChange = (e) => setValue(e.target.value);

  // const obj = { value, onChange };

  const { value, setValue, setTrue, setFalse, toggle } = useBoolean(false);
  const customToggle = () => setValue((x) => !x);

  const isClient = useIsClient();

  return (
    <>
      <div>
        나는 네비가 필요없는 로그인 페이지 <br />
        {/* <input {...obj} /> */}
        <br />
        <br />
        <p>
          Value is <code>{value.toString()}</code>
        </p>
        <button onClick={setTrue}>set true</button>
        <br />
        <button onClick={setFalse}>set false</button>
        <br />
        <button onClick={toggle}>toggle</button>
        <br />
        <button onClick={customToggle}>custom toggle</button>
      </div>
      <div>{isClient ? "client" : "server"}</div>
    </>
  );
};

export default Login;
