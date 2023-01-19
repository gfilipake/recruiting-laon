import { MediaCards } from "components/media-cards/media-cards";
import { IMedia } from "models/media";
import { useState } from "react";
import Container from "react-bootstrap/Container";

export const Movies = () => {
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
      {
        id: 7,
        poster_url:
          "https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/5f51f696241415.5eb2d19f8b3e1.png",
        movie: {
          id: 7,
          movie_ranking: 7,
        },
      },
    ].sort((a, b) => a.movie.movie_ranking - b.movie.movie_ranking);
  });

  return (
    <Container className="px-0" style={{ paddingTop: 56, marginBottom: 208 }}>
      <h1 style={{ lineHeight: "48px" }} className="semibold-40 mb-0">
        Filmes
      </h1>
      <MediaCards
        mediaCards={mediaMovies}
        cardExtraClasses={"mb-4 pt-mt-0 px-xs-0"}
      />
    </Container>
  );
};
