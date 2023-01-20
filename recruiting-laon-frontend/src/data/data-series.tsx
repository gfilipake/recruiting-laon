import { IMedia } from "models/media";

export function getSeries(serieId: number): IMedia | undefined {
  const medias: IMedia[] = [
    {
      id: 7,
      title: "Sharp Objects",
      title_portuguese: "Objetos Cortantes",
      poster_url:
        "https://br.web.img3.acsta.net/r_1280_720/pictures/18/06/11/14/45/2909588.jpg",
      trailer_url: "https://www.youtube.com/watch?v=3C6YVcwtSLY",
      year: 2018,
      synopsis:
        "Recém-saída de um hospital psiquiátrico, a repórter Camille Preaker tem um desafio pela frente: retornar à sua cidade natal para investigar o brutal assassinato de uma menina e o desaparecimento de outra.",
      actors: [
        {
          id: 14,
          name: "Eliza Scanlen",
        },
        {
          id: 15,
          name: "Chris Messina",
        },
      ],
      awards: [],
      directors: [{ id: 7, name: "Jean-Marc Vallée" }],
      ratings: [{ id: 7, value: 8.1, evalutoe: "IMDb" }],
      serie: {
        id: 1,
        serie_ranking: 1,
        episodes: 8,
      },
      genres: [{ id: 1, name: "Drama" }],
    },
    {
      id: 8,
      title: "Outsider",
      title_portuguese: "Outsider",
      poster_url:
        "https://i0.wp.com/lugarnenhum.net/wp-content/uploads/2019/12/the-outsider.jpg?fit=600%2C889&ssl=1",
      trailer_url: "https://www.youtube.com/watch?v=eNDKWr3Xmjk",
      year: 2020,
      synopsis:
        "O corpo de um menino de onze anos é encontrado abandonado no parque de Flint City, brutalmente assassinado. Testemunhas e impressões digitais apontam o criminoso como uma das figuras mais conhecidas da cidade ― Terry Maitland, treinador da Liga Infantil de beisebol, professor de inglês, casado e pai de duas filhas.",
      actors: [
        {
          id: 16,
          name: "Matt Dillon",
        },
        {
          id: 17,
          name: "C. Thomas Howell",
        },
        {
          id: 18,
          name: "Ralph Macchio",
        },
      ],
      awards: [],
      directors: [{ id: 8, name: "Martin Pieter Zandvliet" }],
      ratings: [{ id: 8, value: 7.7, evalutoe: "IMDb" }],
      serie: {
        id: 2,
        serie_ranking: 2,
        episodes: 10,
      },
      genres: [{ id: 2, name: "Crime" }],
    },
    {
      id: 9,
      title: "The Crown",
      title_portuguese: "The Crown",
      poster_url:
        "https://cdn.shopify.com/s/files/1/0549/5835/8762/products/W_992.jpg?v=1641658623",
      trailer_url: "https://www.youtube.com/watch?v=dFZC-_T_irA",
      year: 2016,
      synopsis:
        "Em The Crown, a filha do rei George VI (Jared Harris), Elizabeth II (Claire Foy) sempre soube que não teria uma vida comum. Após a morte do seu pai em 1952, ela dá seus primeiros passos em direção ao trono inglês, a começar pelas audiências semanais com os primeiro-ministros. Ela assume a coroa com apenas 25 anos de idade, mas com grandes compromissos vêm grandes responsabilidades. A pressão das obrigações com a coroa afetam completamente sua vida pessoal e Elizabeth precisa colocar suas prioridades em ordem para cumprir suas funções como rainha da Inglaterra. Ao decorrer dos anos, Elizabeth II ganha experiência e passa a reinar com certa facilidade, aprendendo o que é necessário para ser líder da monarquia britânica. Enquanto sua família cresce, ela e seu marido, príncipe Phillip (Matt Smith) exigem deles uma imagem exemplar para a população inglesa, colocando os interesses da coroa sempre em primeiro lugar.",
      actors: [
        {
          id: 19,
          name: "Claire Foy",
        },
        {
          id: 20,
          name: "Matt Smith",
        },
      ],
      awards: [
        { id: 8, name: "Prêmio Globo de Ouro: Melhor Série Dramática de TV" },
      ],
      directors: [
        { id: 9, name: "Stephen Daldry" },
        { id: 10, name: "Philip Martin" },
        { id: 11, name: "Julian Jarrold" },
        { id: 12, name: "Benjamin Caron" },
      ],
      ratings: [{ id: 9, value: 8.6, evalutoe: "IMDb" }],
      serie: {
        id: 3,
        serie_ranking: 3,
        episodes: 50,
      },
      genres: [{ id: 1, name: "Drama" }],
    },
    {
      id: 10,
      title: "Chernobyl",
      title_portuguese: "Chernobyl",
      poster_url:
        "https://br.web.img2.acsta.net/r_1280_720/pictures/19/04/29/08/21/1692162.jpg?coixp=45&coiyp=73",
      trailer_url: "https://www.youtube.com/watch?v=s9APLXM9Ei8",
      year: 2019,
      synopsis:
        "Chernobyl conta a história da explosão que aconteceu na Usina Nuclear que dá nome ao título. Em 1986, na Ucrânia, o acidente dizimou dezenas de pessoas e acabou por se tornar o maior desastre nuclear da história. Enquanto o mundo lamentava o ocorrido, o cientista Valery Legasov (Jared Harris), a física Ulana Khomyuk (Emily Watson) e o vice-presidente do Conselho de Ministros Boris Shcherbina (Stellan Skarsgård) tentam descobrir as causas do acidente. Depois do devastador acidente, todos que tiveram contato direto com a radiação da usina sofreram terríveis efeitos colaterais desenvolvendo quemaduras e feridas por todo o corpo. Entre eles, o bombeiro Vasily (Adam Nagaitis), um dos primeiros a chegar no local do acidente. Sua esposa grávida, Lyudmilla (Jessie Buckley), também é exposta a altos níveis de radiação quando finalmente encontra o marido no hospital, em isolamento. Valery e Ulana enfrentam pessoas extremamente poderosas na tentativa de expor a negligência e descuido por trás do acidente.",
      actors: [
        {
          id: 21,
          name: "Jared Harris",
        },
        {
          id: 22,
          name: "Stellan Skarsgård",
        },
        {
          id: 23,
          name: "Jessie Buckley",
        },
      ],
      awards: [
        {
          id: 7,
          name: "Prêmio Emmy do Primetime: Melhor Minissérie",
        },
      ],
      directors: [{ id: 13, name: "Johan Renck" }],
      ratings: [{ id: 10, value: 9.4, evalutoe: "IMDb" }],
      serie: {
        id: 4,
        serie_ranking: 4,
        episodes: 5,
      },
      genres: [{ id: 9, name: "Tragédia" }],
    },
    {
      id: 11,
      title: "CLARICE",
      title_portuguese: "CLARICE",
      poster_url:
        "https://br.web.img3.acsta.net/pictures/22/02/15/16/42/1194979.jpg",
      trailer_url: "https://www.youtube.com/watch?v=c_4HZlFX_WM",
      year: 2021,
      synopsis:
        "Um mergulho profundo na história pessoal e desconhecida da agente do FBI Clarice Starling, enquanto ela volta ao trabalho para perseguir assassinos em série e predadores sexuais e navega no mundo político de altos riscos de Washington, DC.",
      actors: [
        {
          id: 24,
          name: "Rebecca Breeds",
        },
        {
          id: 25,
          name: "Michael Cudlitz",
        },
      ],
      awards: [],
      directors: [],
      ratings: [{ id: 11, value: 6.6, evalutoe: "IMDb" }],
      serie: {
        id: 5,
        serie_ranking: 5,
        episodes: 13,
      },
      genres: [{ id: 2, name: "Crime" }],
    },
    {
      id: 12,
      title: "Ozark",
      title_portuguese: "Ozark",
      poster_url:
        "https://m.media-amazon.com/images/M/MV5BODIyNzk5NDg5M15BMl5BanBnXkFtZTgwMTE5NjA5MjI@._V1_.jpg",
      trailer_url: "https://www.youtube.com/watch?v=99Yf1j6p9_Q",
      year: 2017,
      synopsis:
        "Marty (Jason Bateman) e Wendy (Laura Linney) vivem uma séria crise conjugal, aproximando o texto da realidade do espectador. O fato de Marty lavar dinheiro para traficantes de drogas é um detalhe, algo que tinha mais relações com seu parceiro de negócios do que com ele próprio.",
      actors: [
        {
          id: 26,
          name: "Jason Bateman",
        },
        {
          id: 27,
          name: "Laura Linney",
        },
        {
          id: 28,
          name: "Julia Garner",
        },
      ],
      awards: [
        {
          id: 9,
          name: "Prêmio do Sindicato dos Atores: Melhor Ator em Série Dramática",
        },
      ],
      directors: [
        { id: 13, name: "Jason Bateman" },
        { id: 14, name: "Amanda Marsalis" },
      ],
      ratings: [{ id: 12, value: 8.5, evalutoe: "IMDb" }],
      serie: {
        id: 6,
        serie_ranking: 6,
        episodes: 44,
      },
      genres: [
        { id: 1, name: "Drama" },
        { id: 10, name: "Suspense" },
        { id: 2, name: "Crime" },
      ],
    },
  ];

  const selectedSerie = medias.find((item) => item.serie!.id === serieId);

  return selectedSerie;
}
