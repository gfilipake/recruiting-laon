import { Outlet } from "react-router-dom";
import { Header } from "components/layout/header/header";
import { Footer } from "components/layout/footer/footer";
import Container from "react-bootstrap/esm/Container";

function App() {
  return (
    <div className="d-flex flex-column">
      <Container
        style={{ zIndex: "-5", height: "378px" }}
        fluid
        className="position-absolute px-0 bg-gray-200"
      />
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}

export default App;
