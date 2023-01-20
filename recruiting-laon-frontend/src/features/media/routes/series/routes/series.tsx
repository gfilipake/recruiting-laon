import { MediaCards } from "components/media-cards/media-cards";
import { IMedia } from "models/media";
import { useState } from "react";
import Container from "react-bootstrap/Container";

export const Series = () => {
  const [mediaSeries] = useState<IMedia[]>(() => {
    return [
      {
        id: 7,
        poster_url:
          "https://br.web.img3.acsta.net/r_1280_720/pictures/18/06/11/14/45/2909588.jpg",
        serie: {
          id: 1,
          serie_ranking: 1,
        },
      },
      {
        id: 8,
        poster_url:
          "https://i0.wp.com/lugarnenhum.net/wp-content/uploads/2019/12/the-outsider.jpg?fit=600%2C889&ssl=1",
        serie: {
          id: 2,
          serie_ranking: 2,
        },
      },
      {
        id: 9,
        poster_url:
          "https://cdn.shopify.com/s/files/1/0549/5835/8762/products/W_992.jpg?v=1641658623",
        serie: {
          id: 3,
          serie_ranking: 3,
        },
      },
      {
        id: 10,
        poster_url:
          "https://br.web.img2.acsta.net/r_1280_720/pictures/19/04/29/08/21/1692162.jpg?coixp=45&coiyp=73",
        serie: {
          id: 4,
          serie_ranking: 4,
        },
      },
      {
        id: 11,
        poster_url:
          "https://br.web.img3.acsta.net/pictures/22/02/15/16/42/1194979.jpg",
        serie: {
          id: 5,
          serie_ranking: 5,
        },
      },
      {
        id: 12,
        poster_url:
          "https://m.media-amazon.com/images/M/MV5BODIyNzk5NDg5M15BMl5BanBnXkFtZTgwMTE5NjA5MjI@._V1_.jpg",
        serie: {
          id: 6,
          serie_ranking: 6,
        },
      },
    ].sort((a, b) => a.serie.serie_ranking - b.serie.serie_ranking);
  });

  return (
    <Container style={{ marginTop: 56, marginBottom: 208 }}>
      <h1 style={{ lineHeight: "48px" }} className="semibold-40 mb-0">
        Séries
      </h1>
      <MediaCards
        mediaCards={mediaSeries}
      />
    </Container>
  );
};
