import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";

interface IHeaderProps {
  rightSideText: "ENTRAR" | "CADASTRAR";
  windowSize: string;
}

export const AuthHeader = (props: IHeaderProps) => {
  const { rightSideText, windowSize } = props;
  const { state } = useLocation();
  const navigate = useNavigate();
  const [linkTo] = useState<string>(
    rightSideText === "CADASTRAR" ? "/register" : "/login"
  );

  const renderGoBackArrow = () => {
    const returnTo: any = (state?.goBackRoute as boolean) ? -1 : linkTo;

    return (
      <Container
        onClick={() => navigate(returnTo)}
        style={{ width: "fit-content" }}
        className="d-flex align-items-center mx-0 px-0 cursor-pointer"
      >
        <Container
          style={{ width: 32, height: 32 }}
          className={`d-flex bg-transparent justify-content-center align-items-center border border-gray-400 rounded-circle user-select-none mx-0 px-0`}
        >
          <FontAwesomeIcon
            color="white"
            height={10.37}
            width={10.67}
            icon={faArrowLeft}
          />
        </Container>
        <span className="semibold-16 ms-3 mw-100">VOLTAR</span>
      </Container>
    );
  };

  const renderLogo = () => (
    <Navbar.Brand
      style={windowSize === "xs" ? {} : { marginLeft: "-4.4rem" }}
      className={`${
        windowSize === "xs" ? "" : "position-absolute start-50"
      } cursor-pointer user-select-none me-0 py-0 px-0`}
    >
      <Link className="d-flex" to={"/"}>
        <img alt="company-logo" src="/images/logo-laon.svg" />
      </Link>
    </Navbar.Brand>
  );

  const renderRightSide = () => (
    <Nav className="ml-auto flex-row">
      <Nav.Item>
        <Link className="text-decoration-none cursor-pointer" to={linkTo}>
          <span className="semibold-16 mw-100 text-white">{rightSideText}</span>
        </Link>
      </Nav.Item>
    </Nav>
  );

  return (
    <header style={{ height: "96px" }}>
      <Navbar
        className="h-100 border-bottom border-gray-300"
        bg="light"
        expand="lg"
      >
        <Container className="position-relative justify-content-between">
          {renderGoBackArrow()}
          {renderLogo()}
          {windowSize !== "xs" && renderRightSide()}
        </Container>
      </Navbar>
    </header>
  );
};
