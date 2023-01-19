import { IMedia } from "models/media";
import { useState } from "react";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { Button } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { getMovie } from "data/data-movies";
import { useTimeCalculator } from "utils/use-time-calculator";

export const MoviesSelected = () => {
  const params = useParams();

  const [selectedMediaMovie] = useState<IMedia>(getMovie(Number(params.id!))!);

  const renderLeftSide = () => (
    <Col className="px-0" style={{ maxWidth: "306px" }}>
      <img
        className="d-flex h-100 w-100 px-0 user-select-none"
        style={{ maxHeight: 448 }}
        src={selectedMediaMovie.poster_url}
      />
      <Button
        style={{ height: 56 }}
        className="mt-3 w-100 px-0 py-0 bg-white cursor-pointer"
        variant="primary"
        onClick={openTrailerUrl}
      >
        <span className="semibold-16 text-black">Assistir Trailer</span>
      </Button>
    </Col>
  );

  function openTrailerUrl() {
    window.open(selectedMediaMovie.trailer_url, "_blank");
  }

  const renderRightSide = () => (
    <Col style={{ marginLeft: "6.375rem" }} className="ps-0">
      {renderMovieTopSection()}
    </Col>
  );

  const renderMovieTopSection = () => {
    const genres = selectedMediaMovie.genres ?? [];

    return (
      <Row className="mx-0">
        <h1 className="px-0 semibold-40">
          {selectedMediaMovie.title_portuguese}
        </h1>
        {renderRowTitleAndAnswer("Título Original: ", selectedMediaMovie.title)}
        {renderRowTitleAndAnswer("Ano: ", selectedMediaMovie.year)}
        {renderRowTitleAndAnswer(
          "Duração: ",
          useTimeCalculator(selectedMediaMovie.movie?.duration_seconds)
        )}
        {genres.length > 0 && renderGenresTag()}
      </Row>
    );
  };

  const renderRowTitleAndAnswer = (
    title: string,
    answer: string | number | undefined
  ) => (
    <Row className={`d-flex text-gray-500 px-0 mx-0`}>
      <span style={{ lineHeight: "24px" }} className="semibold-16 px-0">
        {title}
        <span style={{ lineHeight: "24px" }} className="regular-16 px-0">
          {answer ?? "-"}
        </span>
      </span>
    </Row>
  );

  const renderGenresTag = () => (
    <Row className="justify-content-start pe-0" style={{ marginTop: "12px" }}>
      {selectedMediaMovie.genres!.map((item, index) => (
        <div
          style={{
            width: "fit-content",
            padding: "4px 20px",
            borderRadius: "32px",
            marginLeft: index === 0 ? "" : "8px",
          }}
          className="d-flex border border-gray-300"
          key={`genre-${item.id!}`}
        >
          <span className="regular-16">{item.name}</span>
        </div>
      ))}
    </Row>
  );

  return (
    <Container style={{ paddingTop: 56, marginBottom: 208 }}>
      <Row>
        {renderLeftSide()}
        {renderRightSide()}
      </Row>
    </Container>
  );
};
