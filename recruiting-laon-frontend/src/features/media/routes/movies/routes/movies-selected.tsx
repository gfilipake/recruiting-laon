import { IMedia } from "models/media";
import { useState } from "react";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { Button } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { useTimeCalculator } from "utils/use-time-calculator";
import { useWindowWide } from "utils/use-window-wide";
import { getMovie } from "data/data-movies";

export const MoviesSelected = () => {
  const windowWide = useWindowWide();
  const params = useParams();

  const [selectedMediaMovie] = useState<IMedia>(getMovie(Number(params.id!))!);

  const renderLeftSide = () => (
    <Col className="d-none d-md-block px-0" style={{ maxWidth: "306px" }}>
      <img
        className=" d-flex h-100 w-100 px-0 user-select-none"
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
    <Col
      style={
        windowWide === "xs"
          ? { position: "relative", paddingTop: "413px" }
          : { marginLeft: "6.375rem" }
      }
      className={windowWide === "xs" ? "" : "ps-0"}
    >
      {windowWide === "xs" && (
        <img
          style={{
            height: "413px",
            position: "absolute",
            top: 0,
            left: 0,
            WebkitMaskImage:
              "linear-gradient(0deg, rgba(31, 29, 47, 0) 0%, #1F1D2F 100%)",
            maskImage:
              "linear-gradient(0deg, rgba(31, 29, 47, 0) 0%, #1F1D2F 100%);",
          }}
          className="mx-0 px-0 w-100"
          src={selectedMediaMovie.poster_url}
        />
      )}
      {renderMovieTopSection()}
      {renderSynopsisSection()}
      <Row style={{ marginTop: "2.5rem" }}>
        {renderActorSection()}
        {renderAwardsSection()}
      </Row>
      <Row style={{ marginTop: "2.5rem" }}>
        {renderDirectorsSection()}
        {renderRatingsSection()}
      </Row>
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

  const renderSynopsisSection = () => (
    <Row style={{ marginTop: "4.5rem" }} className="mx-0">
      {renderGenericBottomSection("Sinopse", selectedMediaMovie.synopsis!)}
    </Row>
  );

  const renderActorSection = () => {
    const actors = selectedMediaMovie.actors ?? [];
    const formattedActors =
      actors.length > 0
        ? `${actors.map((item) => item.name).join(", ")} e outros.`
        : "-";

    return (
      <Col md={6} xs={12}>
        {renderGenericBottomSection("Elenco", formattedActors)}
      </Col>
    );
  };

  const renderAwardsSection = () => {
    const awards = selectedMediaMovie.awards ?? [];
    const formattedAwards =
      awards.length > 0
        ? `${awards.map((item) => item.name).join(", ")} e outros.`
        : "-";

    return (
      <Col
        style={windowWide === "xs" ? { marginTop: "2.5rem" } : {}}
        md={6}
        xs={12}
      >
        {renderGenericBottomSection("Prêmios", formattedAwards)}
      </Col>
    );
  };

  const renderDirectorsSection = () => {
    const directors = selectedMediaMovie.directors ?? [];
    const formattedDirectors =
      directors.length > 0
        ? `${directors.map((item) => item.name).join(", ")}`
        : "-";

    return (
      <Col md={6} xs={12}>
        {renderGenericBottomSection("Diretor", formattedDirectors)}
      </Col>
    );
  };

  const renderRatingsSection = () => {
    const ratings = selectedMediaMovie.ratings ?? [];
    const formattedRatings =
      ratings.length > 0
        ? `${ratings
            .map((item) => `${item.evalutoe!}: ${item.value!}`)
            .join(", ")}`
        : "-";

    return (
      <Col
        style={windowWide === "xs" ? { marginTop: "2.5rem" } : {}}
        md={6}
        xs={12}
      >
        {renderGenericBottomSection("Avaliações", formattedRatings)}
      </Col>
    );
  };

  const renderGenericBottomSection = (title: string, answer: string) => (
    <>
      <h2
        style={{ lineHeight: "24px" }}
        className="semibold-16 text-color-white px-0"
      >
        {title}
      </h2>
      <hr style={{ opacity: 1 }} className="border-gray-300 mt-0" />
      <span
        style={{ lineHeight: "24px" }}
        className="regular-16 px-0 text-gray-500"
      >
        {answer ?? "-"}
      </span>
    </>
  );

  return (
    <Container
      style={windowWide === "xs" ? {} : { marginTop: 56, marginBottom: 208 }}
    >
      <Row>
        {renderLeftSide()}
        {renderRightSide()}
      </Row>
    </Container>
  );
};
