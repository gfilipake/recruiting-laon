import Container from "react-bootstrap/Container";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { Link, useNavigate } from "react-router-dom";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

interface IHomeCardItemsProps {
  title: string;
  linkTo: string;
  cardItems: Array<{ id: number; imgUrl: string }>;
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
        onClick={() => navigate(linkTo, { state: { goBackRoute: true } })}
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
    <Container style={{ marginTop: "1rem" }}>
      <Row className="user-select-none" style={{ marginTop: "1rem" }}>
        {cardItems.map((item, index) => {
          const firstOrLastClass =
            index === 0 ? "ps-0" : index === cardItems.length - 1 ? "pe-0" : "";

          return (
            <Col
              style={{ maxHeight: "256px" }}
              key={`${title}-card-${item.id}`}
              className={`cursor-pointer grow mb-4 mb-md-0 px-xs-0 ${firstOrLastClass}`}
              md={2}
              xs={6}
            >
              <Link className="h-100 w-100" to={`${linkTo}/${item.id}`}>
                <img className="h-100 w-100" src={item.imgUrl} />
              </Link>
            </Col>
          );
        })}
      </Row>
    </Container>
  );

  return (
    <Container style={{ marginTop: "2.875rem" }} className="px-0">
      {renderHeader()}
      {renderCards()}
    </Container>
  );

  // const { title, mt } = props;

  // const renderHeader = () => (
  //   <Container className="d-flex flex-row justify-content-between align-items-center px-0">
  //     <h2 className="semibold-16 my-0 text-gray-500">{title}</h2>
  // <Container
  //   style={{ width: 32, height: 32 }}
  //   className={`d-flex bg-transparent justify-content-center align-items-center border border-gray-400 rounded-circle cursor-pointer user-select-none mx-0`}
  //   // onClick={(e) => openOnAnotherTab(e, href)}
  // >
  //   <FontAwesomeIcon
  //     color="white"
  //     height={10.37}
  //     width={10.67}
  //     icon={faArrowRight}
  //   />
  // </Container>
  //   </Container>
  // );

  // const renderCard = () => (
  //   <Card className="h-100 cursor-pointer px-0 py-0 border-0" as="a">
  //     <img
  //       className="h-100 w-100"
  //       src="https://universoreverso.com.br/wp-content/uploads/2021/01/bela-vinganca-poster.jpg"
  //     />
  //   </Card>
  // );

  // return (
  //   <Container style={{ marginTop: mt }} className="px-0">
  //     {renderHeader()}
  //     <Carousel className="mt-3" style={{ maxHeight: "264px" }}>
  //       {/* {carouselItems.map((item, index) => ( */}
  //       <Carousel.Item className="h-100">
  //         <Stack direction="horizontal" className="align-items-center" gap={4}>
  //           {renderCard()}
  //           {renderCard()}
  //           {renderCard()}
  //           {renderCard()}
  //           {renderCard()}
  //           {renderCard()}
  //         </Stack>
  //       </Carousel.Item>
  //       {/* ))} */}
  //     </Carousel>
  //   </Container>
  // );
};
