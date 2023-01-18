import Container from "react-bootstrap/Container";
import { HomeCardItems } from "../components/home-card-items";

export const Home = () => {
  return (
    <Container className="px-0" style={{ paddingTop: 56, marginBottom: 208 }}>
      <h1 style={{ lineHeight: "48px" }} className="semibold-40 mb-0">
        Populares
      </h1>
      <HomeCardItems
        title="FILMES"
        linkTo="movies"
        cardItems={[
          {
            id: 1,
            imgUrl:
              "https://universoreverso.com.br/wp-content/uploads/2021/01/bela-vinganca-poster.jpg",
          },
          {
            id: 2,
            imgUrl:
              "https://upload.wikimedia.org/wikipedia/en/4/44/Her2013Poster.jpg",
          },
          {
            id: 3,
            imgUrl:
              "https://br.web.img3.acsta.net/r_1280_720/pictures/18/03/01/20/26/0577579.jpg",
          },
          {
            id: 4,
            imgUrl:
              "https://img.elo7.com.br/product/original/294C1F8/poster-star-wars-a-ascensao-skywalker-lo01-tamanho-90x60-cm-quadro-star-wars.jpg",
          },
          {
            id: 5,
            imgUrl:
              "https://br.web.img3.acsta.net/pictures/20/01/28/22/54/2304385.jpg",
          },
          {
            id: 6,
            imgUrl:
              "https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/5f51f696241415.5eb2d19f8b3e1.png",
          },
        ]}
      />
      <HomeCardItems
        title="SÉRIES"
        linkTo="series"
        cardItems={[
          {
            id: 1,
            imgUrl:
              "https://br.web.img3.acsta.net/r_1280_720/pictures/18/06/11/14/45/2909588.jpg",
          },
          {
            id: 2,
            imgUrl:
              "https://i0.wp.com/lugarnenhum.net/wp-content/uploads/2019/12/the-outsider.jpg?fit=600%2C889&ssl=1",
          },
          {
            id: 3,
            imgUrl:
              "https://cdn.shopify.com/s/files/1/0549/5835/8762/products/W_992.jpg?v=1641658623",
          },
          {
            id: 4,
            imgUrl:
              "https://br.web.img2.acsta.net/r_1280_720/pictures/19/04/29/08/21/1692162.jpg?coixp=45&coiyp=73",
          },
          {
            id: 5,
            imgUrl:
              "https://br.web.img3.acsta.net/pictures/22/02/15/16/42/1194979.jpg",
          },
          {
            id: 6,
            imgUrl:
              "https://m.media-amazon.com/images/M/MV5BODIyNzk5NDg5M15BMl5BanBnXkFtZTgwMTE5NjA5MjI@._V1_.jpg",
          },
        ]}
      />
    </Container>
  );
};
