import { useState, useRef, useEffect } from "react";
import { useForm } from "react-hook-form";

const Register = () => {
  const [show, setShow] = useState(false);
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const onValid = (data) => console.log(data, "onvalid");
  const onInvalid = (data) => console.log(data, "onInvalid");

  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  return (
    <form onSubmit={handleSubmit(onInvalid, onValid)}>
      <input {...register("id", { required: "id 입력", minLength: 5, pattern: { message: "hello" } })} ref={inputRef} />
      {errors.id && errors.message}
      <br />
      <input {...register("password")} type={show ? "text" : "password"} />
      <br />
      <input type="submit" />
      <br />
      <br />
      <p>비밀번호</p>
      <button
        onClick={() => {
          setShow(!show);
        }}
      >
        {show ? "보이기" : "숨기기"}
      </button>
    </form>
  );
};

export default Register;
