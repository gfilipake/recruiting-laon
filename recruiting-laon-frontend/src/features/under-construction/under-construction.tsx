import { faPersonDigging } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Container from "react-bootstrap/esm/Container";

export const UnderConstruction = () => (
  <Container
    className="d-flex flex-column justify-content-center align-items-center text-center"
    style={{ height: "calc(100vh - 208px)" }}
    fluid
  >
    <FontAwesomeIcon
      color="white"
      className="h-25"
      width={300}
      icon={faPersonDigging}
    />
    <h1 className="semibold-40 mt-3">Página em Construção!</h1>
    <h2 className="semibold-12 mt-2 text-gray-500">Esta página não pertencia ao desafio!</h2>
  </Container>
);
