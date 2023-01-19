import Container from "react-bootstrap/Container";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { Link, useNavigate } from "react-router-dom";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { IMedia } from "models/media";
import { usePreventDefault } from "utils/use-prevent-default";
import { MediaCards } from "components/media-cards/media-cards";

interface IHomeCardItemsProps {
  title: string;
  linkTo: string;
  cardItems: IMedia[];
}

export const HomeCardItems = (props: IHomeCardItemsProps) => {
  const { title, linkTo, cardItems } = props;
  const navigate = useNavigate();

  const renderHeader = () => (
    <Container className="d-flex flex-row justify-content-between align-items-center px-0">
      <h2
        style={{ lineHeight: "20px" }}
        className="semibold-16 my-0 text-gray-500"
      >
        {title}
      </h2>
      <Container
        style={{ width: 32, height: 32 }}
        className={`d-flex bg-transparent justify-content-center align-items-center border border-gray-400 rounded-circle cursor-pointer user-select-none mx-0`}
        onClick={(e) =>
          usePreventDefault(e, () =>
            navigate(linkTo, { state: { goBackRoute: true } })
          )
        }
        href={linkTo}
        as="a"
      >
        <FontAwesomeIcon
          color="white"
          height={10.37}
          width={10.67}
          icon={faArrowRight}
        />
      </Container>
    </Container>
  );

  const renderCards = () => (
    <MediaCards
      mediaCards={cardItems}
      cardExtraClasses={"mb-4 mb-md-0 px-xs-0"}
      linkPrefix={`${linkTo}/`}
    />
  );

  return (
    <Container style={{ marginTop: "2.875rem" }} className="px-0">
      {renderHeader()}
      {renderCards()}
    </Container>
  );
};
