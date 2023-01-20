import { Outlet, useLocation } from "react-router-dom";
import { Header } from "components/layout/header/header";
import { Footer } from "components/layout/footer/footer";
import Container from "react-bootstrap/esm/Container";
import { useMemo, useState } from "react";
import { IAuth } from "models/view/auth";
import jwt_decode from "jwt-decode";

export function App() {
  const [auth, setAuth] = useState<IAuth | null>(null);
  const location = useLocation();
  const routesWithOwnLayout = useMemo(() => ["login", "register"], []);
  const hideLayout = !routesWithOwnLayout.some((item) =>
    location.pathname.includes(item)
  );

  if (auth === null) {
    const token = localStorage.getItem("token");

    if (typeof token === "string") {
      const decodeJWT: {
        id: number;
        name: string;
        expiration: number;
        email: string;
      } = jwt_decode(token);

      if (decodeJWT.expiration <= 0) {
        localStorage.removeItem("token");
      } else {
        setAuth({
          auth: true,
          token,
          user: {
            id: decodeJWT.id,
            name: decodeJWT.name,
            email: decodeJWT.email,
          },
        });
      }
    }
  }

  return (
    <div className="d-flex flex-column">
      {hideLayout && (
        <Container
          style={{ zIndex: "-5", height: "378px" }}
          fluid
          className="position-absolute px-0 bg-gray-200"
        />
      )}
      {hideLayout && <Header auth={auth} />}
      <Outlet context={[auth, setAuth]} />
      {hideLayout && <Footer />}
    </div>
  );
}
