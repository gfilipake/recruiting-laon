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
      awards: [
        {
          id: 1,
          name: "Oscar de Melhor Roteiro Original",
        },
        {
          id: 2,
          name: "Critics Choice Award de Melhor Atriz",
        },
      ],
      directors: [{ id: 1, name: "Emerald Fennell" }],
      ratings: [{ id: 1, value: 7.5, evalutoe: "IMDb" }],
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
    {
      id: 2,
      title: "Her",
      title_portuguese: "Ela",
      poster_url:
        "https://upload.wikimedia.org/wikipedia/en/4/44/Her2013Poster.jpg",
      trailer_url: "https://www.youtube.com/watch?v=hX09Kz7BAlU",
      year: 2013,
      synopsis:
        "O solitário escritor Theodore desenvolve uma relação de amor especial com o novo sistema operacional do seu computador. Surpreendentemente, ele acaba se apaixonando pela voz deste programa, uma entidade intuitiva e sensível chamada Samantha.",
      actors: [
        {
          id: 14,
          name: "Joaquin Phoenix",
        },
        {
          id: 15,
          name: "Spike Jonze",
        },
        {
          id: 5,
          name: "Scarlett Johansson",
        },
      ],
      awards: [
        {
          id: 1,
          name: "Oscar de Melhor Roteiro Original",
        },
      ],
      directors: [{ id: 6, name: "Spike Jonze" }],
      ratings: [{ id: 6, value: 8, evalutoe: "IMDb" }],
      movie: {
        id: 2,
        movie_ranking: 2,
        duration_seconds: 7560,
      },
      genres: [
        { id: 8, name: "Romance" },
        { id: 5, name: "Ficção científica" },
      ],
    },
    {
      id: 3,
      title: "A Quiet Place",
      title_portuguese: "Um Lugar Silencioso",
      poster_url:
        "https://br.web.img3.acsta.net/r_1280_720/pictures/18/03/01/20/26/0577579.jpg",
      trailer_url: "https://www.youtube.com/watch?v=8W6iMmhVDgE",
      year: 2018,
      synopsis:
        "Em uma fazenda nos Estados Unidos, uma família do Meio-Oeste é perseguida por uma entidade fantasmagórica assustadora. Para se protegerem, eles devem permanecer em silêncio absoluto, a qualquer custo, pois o perigo é ativado pela percepção do som.",
      actors: [
        {
          id: 11,
          name: "John Krasinski",
        },
        {
          id: 12,
          name: "Emily Blunt",
        },
        {
          id: 13,
          name: "Millicent Simmonds",
        },
      ],
      awards: [
        {
          id: 5,
          name: "Critics Choice Award: Melhor Filme de Ficção Científica/Terror",
        },
      ],
      directors: [{ id: 5, name: "John Krasinski" }],
      ratings: [{ id: 5, value: 7.5, evalutoe: "IMDb" }],
      movie: {
        id: 3,
        movie_ranking: 3,
        duration_seconds: 5400,
      },
      genres: [
        { id: 7, name: "Terror" },
        { id: 5, name: "Ficção científica" },
      ],
    },
    {
      id: 4,
      title: "Star Wars: The Rise of Skywalker",
      title_portuguese: "Star Wars: Episódio IX",
      poster_url:
        "https://img.elo7.com.br/product/original/294C1F8/poster-star-wars-a-ascensao-skywalker-lo01-tamanho-90x60-cm-quadro-star-wars.jpg",
      trailer_url: "https://www.youtube.com/watch?v=W0squnw6Jp8",
      year: 2019,
      synopsis:
        "Com o retorno do Imperador Palpatine, a Resistência toma a frente da batalha. Treinando para ser uma completa Jedi, Rey se encontra em conflito com passado e futuro, e teme pelas respostas que pode conseguir com Kylo Ren.",
      actors: [
        {
          id: 8,
          name: "Carrie Fisher",
        },
        {
          id: 9,
          name: "Mark Hamill",
        },
        {
          id: 10,
          name: "Daisy Ridley",
        },
      ],
      awards: [],
      directors: [{ id: 4, name: "J. J. Abrams" }],
      ratings: [{ id: 4, value: 6.5, evalutoe: "IMDb" }],
      movie: {
        id: 4,
        movie_ranking: 4,
        duration_seconds: 8520,
      },
      genres: [
        { id: 5, name: "Ficção científica" },
        { id: 6, name: "Ação" },
      ],
    },
    {
      id: 5,
      title: "Jojo Rabbit",
      title_portuguese: "Jojo Rabbit",
      poster_url:
        "https://br.web.img3.acsta.net/pictures/20/01/28/22/54/2304385.jpg",
      trailer_url: "https://www.youtube.com/watch?v=tL4McUzXfFI",
      year: 2020,
      synopsis:
        "Jojo é um garoto alemão solitário que descobre que sua mãe está escondendo uma garota judia no sótão. Ajudado apenas por seu amigo imaginário, Adolf Hitler, Jojo deve enfrentar seu nacionalismo cego enquanto a Segunda Guerra Mundial prossegue.",
      actors: [
        { id: 7, name: "Taika Waititi" },
        {
          id: 5,
          name: "Scarlett Johansson",
        },
      ],
      awards: [
        {
          id: 4,
          name: "Oscar de Melhor Roteiro Adaptado",
        },
      ],
      directors: [{ id: 3, name: "Taika Waititi" }],
      ratings: [{ id: 3, value: 7.9, evalutoe: "IMDb" }],
      movie: {
        id: 5,
        movie_ranking: 5,
        duration_seconds: 6480,
      },
      genres: [
        { id: 1, name: "Drama" },
        { id: 4, name: "Guerra" },
      ],
    },
    {
      id: 6,
      title: "Black Widow",
      title_portuguese: "Viúva Negra",
      poster_url:
        "https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/5f51f696241415.5eb2d19f8b3e1.png",
      trailer_url: "https://www.youtube.com/watch?v=ybji16u608U",
      year: 2021,
      synopsis:
        "Ao nascer, a Viúva Negra, então conhecida como Natasha Romanova, é entregue à KGB, que a prepara para se tornar sua agente suprema. Porém, o seu próprio governo tenta matá-la quando a União Soviética se desfaz.",
      actors: [
        {
          id: 5,
          name: "Scarlett Johansson",
        },
        {
          id: 6,
          name: "Florence Pugh",
        },
      ],
      awards: [
        {
          id: 3,
          name: "People's Choice Award: Filme Favorito",
        },
      ],
      directors: [{ id: 2, name: "Cate Shortland" }],
      ratings: [{ id: 2, value: 6.7, evalutoe: "IMDb" }],
      movie: {
        id: 6,
        movie_ranking: 6,
        duration_seconds: 7980,
      },
      genres: [
        { id: 6, name: "Ação" },
        { id: 5, name: "Ficção científica" },
      ],
    },
  ];

  const selectedMovie = medias.find((item) => item.movie!.id === movieId);

  return selectedMovie;
}
