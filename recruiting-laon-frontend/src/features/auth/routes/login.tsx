import { AuthHeader } from "../components/auth-header";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Button from "react-bootstrap/esm/Button";
import { useEffect, useState } from "react";
import { useNavigate, useOutletContext } from "react-router-dom";
import { useWindowWide } from "utils/use-window-wide";

export const Login = () => {
  const navigate = useNavigate();
  const [auth, setAuth] = useOutletContext<any>();
  const windowSize = useWindowWide();

  const [loginForm, setLoginForm] = useState<{
    email: string;
    password: string;
  }>({
    email: "",
    password: "",
  });
  const [loginErrors, setLoginErrors] = useState<{
    email: boolean | null;
    password: boolean | null;
  }>({ email: null, password: null });
  const [loginValidators] = useState({
    email: validateEmail,
    password: validatePassword,
  });
  const [calledApi, setCalledApi] = useState<boolean>(false);

  function validateEmail(value: string) {
    const regex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;

    return !regex.test(value);
  }

  function validatePassword(password: string) {
    return password.length < 5;
  }

  function validateAllFieldsAndSubmit() {
    const loginErrorsClone = { ...loginErrors };
    loginErrorsClone.email = validateEmail(loginForm.email);
    loginErrorsClone.password = validatePassword(loginForm.password);

    if (
      Object.keys(loginErrorsClone).some(
        (item) => loginErrorsClone[item as keyof typeof loginErrorsClone]
      )
    ) {
      setLoginErrors(loginErrorsClone);
      return;
    }

    // Just for testing
    setCalledApi(true);
    setAuth({
      auth: true,
      token: "tokenFromBackend",
      user: {
        id: 1,
        name: loginForm.email.split("@")[0],
        email: loginForm.email,
      },
    });
  }

  useEffect(() => {
    if (calledApi && auth !== null && auth.auth === true) {
      navigate("/");
    }
  }, [calledApi, auth]);

  const renderBoxHeader = () => (
    <>
      <h1 className="semibold-24 px-0">Entrar</h1>
      <span
        style={{ lineHeight: "24px" }}
        className="px-0 regular-16 text-gray-500"
      >
        Bem vindo(a) de volta!
      </span>
    </>
  );

  const renderForm = () => (
    <Form style={{ marginTop: "41px" }} className="px-0">
      <Form.Group className="mb-3">
        <Form.Control
          className="custom-form"
          type="email"
          value={loginForm.email}
          isInvalid={loginErrors.email === null ? false : loginErrors.email}
          isValid={loginErrors.email === null ? false : !loginErrors.email}
          placeholder="Email"
          onChange={(e) =>
            setLoginForm((prevState) => ({
              ...prevState,
              email: e.target.value,
            }))
          }
          onBlur={() =>
            setLoginErrors((prevState) => ({
              ...prevState,
              email: loginValidators.email(loginForm.email),
            }))
          }
        />
      </Form.Group>
      <Form.Group>
        <Form.Control
          type="password"
          placeholder="Senha"
          className="custom-form"
          isInvalid={
            loginErrors.password === null ? false : loginErrors.password
          }
          isValid={
            loginErrors.password === null ? false : !loginErrors.password
          }
          value={loginForm.password}
          onChange={(e) =>
            setLoginForm((prevState) => ({
              ...prevState,
              password: e.target.value,
            }))
          }
          onBlur={() =>
            setLoginErrors((prevState) => ({
              ...prevState,
              password: loginValidators.password(loginForm.password),
            }))
          }
        />
      </Form.Group>
      <Button
        style={{ height: 72, marginTop: "32px" }}
        className="w-100 px-0 py-0 bg-white cursor-pointer"
        variant="primary"
        onClick={validateAllFieldsAndSubmit}
      >
        <span className="semibold-16 text-black">Entrar</span>
      </Button>
    </Form>
  );

  return (
    <>
      <AuthHeader windowSize={windowSize} rightSideText="CADASTRAR" />
      <Container
        className="d-flex justify-content-center"
        style={
          windowSize === "xs"
            ? { marginTop: "2rem", padding: 0 }
            : { marginTop: "2rem" }
        }
        fluid
      >
        <Row
          style={
            windowSize === "xs"
              ? {
                  maxWidth: "588px",
                  padding: "0 20px",
                  backgroundColor: "unset",
                }
              : {
                  maxWidth: "588px",
                  padding: "5rem 6.375rem",
                  backgroundColor: "var(--bs-gray-200)",
                }
          }
          className="rounded w-100"
        >
          {renderBoxHeader()}
          {renderForm()}
          {windowSize === "xs" && <span className="text-center semibold-16 mt-3">CADASTRAR</span>}
        </Row>
      </Container>
    </>
  );
};
