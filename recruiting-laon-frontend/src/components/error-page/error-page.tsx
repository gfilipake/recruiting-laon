import { Header } from "components/layout/header/header";
import { Footer } from "components/layout/footer/footer";
import Container from "react-bootstrap/esm/Container";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

export const ErrorPage = () => {
  const navigate = useNavigate();

  const renderGoBackArrow = () => (
    <Container
      onClick={() => navigate("/")}
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

  return (
    <div className="d-flex flex-column">
      <Header />
      <Container
        style={{ zIndex: "-5", height: "378px" }}
        fluid
        className="position-absolute px-0 bg-gray-200 mb-5"
      />
      <Container className="d-flex flex-column align-items-center mt-5">
        <h1>Erro 404!</h1>
        <h2>Página indisponível!</h2>
        {renderGoBackArrow()}
      </Container>
    </div>
  );
};
