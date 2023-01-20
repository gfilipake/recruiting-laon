import { useEffect } from "react";
import { useNavigate, useOutletContext } from "react-router-dom";

export const PrivateWrapper = ({ children }: { children: JSX.Element }) => {
  const navigate = useNavigate();
  const [auth] = useOutletContext<any>();

  useEffect(() => {
    if (auth === null) {
      navigate("/login");
    }
  }, []);

  if (auth !== null) {
    return children;
  }

  return <></>;
};
