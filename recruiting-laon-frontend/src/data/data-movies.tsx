import { IMedia } from "models/media";

export function getMovie(movieId: number): IMedia | undefined {
  const medias: IMedia[] = [
    {
      id: 1,
      title: "Promising young woman",
      title_portuguese: "Bela vingança",
      poster_url:
        "https://universoreverso.com.br/wp-content/uploads/2021/01/bela-vinganca-poster.jpg",
      trailer_url: "https://www.youtube.com/watch?v=i4o8zysEr-A",
      year: 2020,
      synopsis:
        "Nada na vida de Cassie é o que parece ser. Ela é perversamente inteligente, tentadoramente astuta e ainda vive uma vida dupla secreta à noite. Agora, um encontro inesperado está prestes a dar a Cassie a chance de corrigir os erros do passado.",
      actors: [
        {
          id: 1,
          name: "Carey Mulligan",
        },
        {
          id: 2,
          name: "Bo Burnham",
        },
        {
          id: 3,
          name: "Alison Brie",
        },
        {
          id: 3,
          name: "Laverne Cox",
        },
        {
          id: 4,
          name: "Jennifer Coolidge",
        },
      ],
      award: [
        {
          id: 1,
          name: "Oscar de Melhor Roteiro Original",
        },
        {
          id: 2,
          name: "Critics Choice Award de Melhor Atriz",
        },
      ],
      rating: [{ id: 1, value: 7.5, evalutoe: "IMDb" }],
      movie: {
        id: 1,
        movie_ranking: 1,
        duration_seconds: 6780,
      },
      genres: [
        { id: 1, name: "Drama" },
        { id: 2, name: "Crime" },
        { id: 3, name: "Thriller" },
      ],
    },
  ];

  const selectedMovie = medias.find((item) => item.movie!.id === movieId);

  return selectedMovie;
}
