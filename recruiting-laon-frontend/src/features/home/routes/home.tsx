import { IMedia } from "models/media";
import { useState } from "react";
import Container from "react-bootstrap/Container";
import { HomeCardItems } from "../components/home-card-items";

export const Home = () => {
  const [mediaMovies] = useState<IMedia[]>(() => {
    return [
      {
        id: 1,
        poster_url:
          "https://universoreverso.com.br/wp-content/uploads/2021/01/bela-vinganca-poster.jpg",
        movie: {
          id: 1,
          movie_ranking: 1,
        },
      },
      {
        id: 2,
        poster_url:
          "https://upload.wikimedia.org/wikipedia/en/4/44/Her2013Poster.jpg",
        movie: {
          id: 2,
          movie_ranking: 2,
        },
      },
      {
        id: 3,
        poster_url:
          "https://br.web.img3.acsta.net/r_1280_720/pictures/18/03/01/20/26/0577579.jpg",
        movie: {
          id: 3,
          movie_ranking: 3,
        },
      },
      {
        id: 4,
        poster_url:
          "https://img.elo7.com.br/product/original/294C1F8/poster-star-wars-a-ascensao-skywalker-lo01-tamanho-90x60-cm-quadro-star-wars.jpg",
        movie: {
          id: 4,
          movie_ranking: 4,
        },
      },
      {
        id: 5,
        poster_url:
          "https://br.web.img3.acsta.net/pictures/20/01/28/22/54/2304385.jpg",
        movie: {
          id: 5,
          movie_ranking: 5,
        },
      },
      {
        id: 6,
        poster_url:
          "https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/5f51f696241415.5eb2d19f8b3e1.png",
        movie: {
          id: 6,
          movie_ranking: 6,
        },
      },
    ].sort((a, b) => a.movie.movie_ranking - b.movie.movie_ranking);
  });

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
        Populares
      </h1>
      <HomeCardItems title="FILMES" linkTo="movies" cardItems={mediaMovies} />
      <HomeCardItems title="SÉRIES" linkTo="series" cardItems={mediaSeries} />
    </Container>
  );
};
