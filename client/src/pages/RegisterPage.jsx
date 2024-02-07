import { Form, Input, message } from "antd";
import "../styles/RegisterStyles.css";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

function RegisterPage() {
  const navigate = useNavigate();

  // form handler
  const onFinishHandler = async (values) => {
    try {
      const res = await axios.post("/api/v1/user/register", values);

      console.log(res);
      if (res.data.success) {
        message.success("register successfully");
        navigate("/login");
      } else {
        message.error(res.data.message);
      }
    } catch (error) {
      console.log(error);
      message.error("Something Went wrong");
    }
  };
  return (
    <>
      <div className="form-container">
        <Form layout="vertical" onFinish={onFinishHandler}>
          <h1>Register Form</h1>
          <Form.Item label="Name" name="name">
            <Input type="text" required />
          </Form.Item>
          <Form.Item label="Email" name="email">
            <Input type="email" required />
          </Form.Item>
          <Form.Item label="Password" name="password">
            <Input type="password" required autoComplete="current-password" />
          </Form.Item>
          <Link to="/login" className="mx-2">
            Already a user Login Here
          </Link>
          <button className="btn btn-primary" type="submit">
            Register
          </button>
        </Form>
      </div>
    </>
  );
}

export default RegisterPage;
