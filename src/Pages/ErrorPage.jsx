import errorSvg from "../assets/undraw_taken_re_yn20.svg";
import { useNavigate } from "react-router-dom";
import { Container } from "react-bootstrap";

const ErrorPage = ({ message, redirectPath, redirectLabel }) => {
  const navigate = useNavigate();

  return (
    <Container className="d-flex flex-column justify-content-center align-items-center text-center vh-100">
      <h1 className="display-4 text-danger">
        Uh oh Mission control we have a problem
      </h1>
      <p className="lead text-muted">{message}</p>
      <img
        src={errorSvg}
        alt="Error Illustration"
        className="img-fluid my-4"
        style={{ maxWidth: "350px", height: "auto" }}
      />
      <button
        className="btn btn-danger"
        onClick={() => navigate(redirectPath || "/")}
      >
        {redirectLabel || "Go Home"}
      </button>
    </Container>
  );
};

export default ErrorPage;
