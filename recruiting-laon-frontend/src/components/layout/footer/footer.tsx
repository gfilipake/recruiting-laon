import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import {
  faFacebook,
  faTwitter,
  faYoutube,
  IconDefinition,
} from "@fortawesome/free-brands-svg-icons";
import Nav from "react-bootstrap/Nav";
import { useMemo } from "react";
import { Link, useNavigate } from "react-router-dom";
import { usePreventDefault } from "utils/use-prevent-default";

interface IIcon {
  iconHeight: number;
  iconWidth: number;
  icon: IconDefinition;
  href: string;
}

export const Footer = () => {
  const navigate = useNavigate();

  const socialIcons: IIcon[] = useMemo(
    () => [
      {
        iconHeight: 7,
        iconWidth: 13.33,
        icon: faFacebook,
        href: "https://www.facebook.com/",
      },
      {
        iconHeight: 13.59,
        iconWidth: 11.51,
        icon: faTwitter,
        href: "https://www.twitter.com/",
      },
      {
        iconHeight: 13.33,
        iconWidth: 10.67,
        icon: faYoutube,
        href: "https://www.youtube.com/",
      },
    ],
    []
  );

  const renderLogo = () => (
    <Link to="/">
      <img
        className="cursor-pointer user-select-none"
        style={{ height: 40, width: 132 }}
        alt="company-logo"
        src="/images/logo-laon.svg"
      />
    </Link>
  );

  const renderNavLinks = () => (
    <Nav defaultActiveKey="/" as="ul">
      <Nav.Item as="li">
        <Nav.Link
          onClick={(e) => navigateAndCreateGoBackHistory(e, "/", false)}
          className="cursor-pointer ps-0"
          href="/"
        >
          Início
        </Nav.Link>
      </Nav.Item>
      <Nav.Item as="li">
        <Nav.Link
          onClick={(e) => navigateAndCreateGoBackHistory(e, "/login", true)}
          className="cursor-pointer"
          href="/login"
        >
          Entrar ou Cadastrar
        </Nav.Link>
      </Nav.Item>
      <Nav.Item as="li">
        <Nav.Link
          onClick={(e) => navigateAndCreateGoBackHistory(e, "/terms", true)}
          className="cursor-pointer"
          href="/terms"
        >
          Termos e Condições
        </Nav.Link>
      </Nav.Item>
      <Nav.Item as="li">
        <Nav.Link
          onClick={(e) => navigateAndCreateGoBackHistory(e, "/privacy", true)}
          className="cursor-pointer"
          href="/privacy"
        >
          Política de Privacidade
        </Nav.Link>
      </Nav.Item>
      <Nav.Item as="li">
        <Nav.Link
          onClick={(e) => navigateAndCreateGoBackHistory(e, "/help", true)}
          className="cursor-pointer pe-0"
          href="/help"
        >
          Ajuda
        </Nav.Link>
      </Nav.Item>
    </Nav>
  );

  const navigateAndCreateGoBackHistory = (
    e: React.MouseEvent<HTMLElement, MouseEvent>,
    href: string,
    goBackRoute: boolean
  ) => {
    usePreventDefault(e, () => navigate(href, { state: { goBackRoute } }));
  };

  const renderRowSocialIcons = () => (
    <Row className="me-0">
      {socialIcons.map((item, index) =>
        renderSocialIcon({ icon: item, index })
      )}
    </Row>
  );

  const renderSocialIcon = (props: { icon: IIcon; index: number }) => {
    const {
      icon: { iconHeight, iconWidth, icon, href },
      index,
    } = props;

    return (
      <Container
        style={{ width: 32, height: 32 }}
        className={`d-flex pointer justify-content-center align-items-center border border-gray-400 rounded-circle ${
          index > 0 ? "ms-3" : ""
        } cursor-pointer user-select-none`}
        key={`social-icon-${index}`}
        href={href}
        onClick={(e) => usePreventDefault(e, () => window.open(href, "_blank"))}
        as="a"
      >
        <FontAwesomeIcon
          color="white"
          height={iconHeight}
          width={iconWidth}
          icon={icon}
        />
      </Container>
    );
  };

  return (
    <footer
      className="d-none d-lg-block border-top border-gray-300 fixed-bottom bg-gray-100"
      style={{ height: "112px" }}
    >
      <Container className="d-flex justify-content-between align-items-center h-100">
        {renderLogo()}
        {renderNavLinks()}
        {renderRowSocialIcons()}
      </Container>
    </footer>
  );
};
