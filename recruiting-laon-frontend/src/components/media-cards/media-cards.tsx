import { IMedia } from "models/media";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { Link } from "react-router-dom";

interface IMediaCardsProps {
  mediaCards: IMedia[];
  cardExtraClasses?: string;
  linkPrefix?: string;
  xsSize?: number;
}

export const MediaCards = (props: IMediaCardsProps) => {
  const {
    mediaCards,
    linkPrefix = "",
    cardExtraClasses = "",
    xsSize = 6,
  } = props;

  return (
    <Row className="user-select-none" style={{ marginTop: "1rem" }}>
      {mediaCards.map((item) => {
        const mediaType =
          item.serie !== undefined && item.serie !== null ? "serie" : "movie";

        return (
          <Col
            style={{ maxHeight: "256px" }}
            key={`card-${item.id!}`}
            className={`cursor-pointer grow ${cardExtraClasses}`}
            md={2}
            xs={xsSize}
          >
            <Link
              className="h-100 w-100"
              to={`${linkPrefix}${item[mediaType]!.id!}`}
            >
              <img className="h-100 w-100" src={item.poster_url} />
            </Link>
          </Col>
        );
      })}
    </Row>
  );
};
