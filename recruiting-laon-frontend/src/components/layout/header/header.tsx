import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faSearch } from "@fortawesome/free-solid-svg-icons";
import { Link, useLocation, useNavigate } from "react-router-dom";

interface IHeaderProps {
  hasLogin?: boolean;
}

export const Header = (props: IHeaderProps) => {
  const { hasLogin = true } = props;
  const { state } = useLocation();
  const navigate = useNavigate();
  console.log(state);

  const renderHeaderWithLogin = () => (
    <>
      {(state?.goBackRoute as boolean) && renderGoBackArrow()}
      {renderLogo()}
      {renderLoggedRightSide()}
    </>
  );

  const renderGoBackArrow = () => (
    <Container
      onClick={() => navigate(-1)}
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

  const renderLoggedRightSide = () => (
    <Nav className="ml-auto flex-row">
      <Nav.Item
        style={{ width: 32, height: 32 }}
        className="d-flex justify-content-center align-items-center border border-gray-400 rounded-circle cursor-pointer user-select-none"
      >
        <FontAwesomeIcon
          color="white"
          height={13.32}
          width={13.32}
          icon={faSearch}
        />
      </Nav.Item>
      <Nav.Item
        style={{ width: 32, height: 32 }}
        className="d-flex justify-content-center align-items-center bg-gray-400 rounded-circle ms-4 cursor-pointer user-select-none"
      >
        <span>S</span>
      </Nav.Item>
    </Nav>
  );

  const renderLogo = () => (
    <Navbar.Brand className="cursor-pointer user-select-none mx-0 py-0 px-0">
      <Link className="d-flex" to={"/"}>
        <img alt="company-logo" src="/images/logo-laon.svg" />
      </Link>
    </Navbar.Brand>
  );

  const renderHeaderWithoutLogin = () => <></>;

  return (
    <header style={{ height: "96px" }}>
      <Navbar
        className="h-100 border-bottom border-gray-300"
        bg="light"
        expand="lg"
      >
        <Container className="justify-content-between">
          {hasLogin ? renderHeaderWithLogin() : renderHeaderWithoutLogin()}
        </Container>
      </Navbar>
    </header>
  );
};
