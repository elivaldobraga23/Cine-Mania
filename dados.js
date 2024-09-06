const filmes = [
    {
      titulo: "Homem de Ferro",
      genero: "Ação, Aventura, Ficção científica",
      sinopse: "Após ser sequestrado, um industrialista constrói uma armadura de alta tecnologia para escapar e, posteriormente, se tornar o super-herói Homem de Ferro.",
      anoLancamento: 2008,
      diretor: "Jon Favreau",
      ondeAssistir: "Disney+",
      tags: ["Super-herói", "Marvel", "Tecnologia"]
    },
    {
      titulo: "Os Vingadores",
      genero: "Ação, Aventura, Ficção científica",
      sinopse: "Os super-heróis da Marvel se unem para combater uma ameaça global liderada por Loki.",
      anoLancamento: 2012,
      diretor: "Joss Whedon",
      ondeAssistir: "Disney+",
      tags: ["Super-herói", "Marvel", "Equipe"]
    },
    {
      titulo: "Pantera Negra",
      genero: "Ação, Aventura, Drama",
      sinopse: "T'Challa, rei de Wakanda, deve defender seu trono contra inimigos internos e externos.",
      anoLancamento: 2018,
      diretor: "Ryan Coogler",
      ondeAssistir: "Disney+",
      tags: ["Super-herói", "Marvel", "Cultura Africana"]
    },
    {
      titulo: "Homem-Aranha: De Volta ao Lar",
      genero: "Ação, Aventura, Ficção científica",
      sinopse: "Peter Parker equilibra a vida de estudante e super-herói enquanto enfrenta o vilão Abutre.",
      anoLancamento: 2017,
      diretor: "Jon Watts",
      ondeAssistir: "Disney+",
      tags: ["Super-herói", "Marvel", "Juventude", "Homem Aranha"]
    },
    {
      titulo: "Guardiões da Galáxia",
      genero: "Ação, Aventura, Comédia",
      sinopse: "Um grupo de desajustados se une para proteger um artefato de poder e salvar a galáxia.",
      anoLancamento: 2014,
      diretor: "James Gunn",
      ondeAssistir: "Disney+",
      tags: ["Super-herói", "Marvel", "Comédia", "Espaço", "Guardioes da Galaxia"]
    },
    {
      titulo: "Thor: Ragnarok",
      genero: "Ação, Aventura, Comédia",
      sinopse: "Thor deve escapar do planeta Sakaar e impedir Hela de destruir Asgard.",
      anoLancamento: 2017,
      diretor: "Taika Waititi",
      ondeAssistir: "Disney+",
      tags: ["Super-herói", "Marvel", "Mitologia"]
    },
    {
      titulo: "Vingadores: Ultimato",
      genero: "Ação, Aventura, Ficção científica",
      sinopse: "Os Vingadores restantes unem forças para desfazer o caos causado por Thanos.",
      anoLancamento: 2019,
      diretor: "Anthony Russo, Joe Russo",
      ondeAssistir: "Disney+",
      tags: ["Super-herói", "Marvel", "Épico"]
    },
    {
      titulo: "A Origem",
      genero: "Ficção científica, Suspense",
      sinopse: "Um ladrão que invade sonhos é contratado para plantar uma ideia na mente de um CEO.",
      anoLancamento: 2010,
      diretor: "Christopher Nolan",
      ondeAssistir: "Netflix",
      tags: ["Ficção científica", "Mind-bending", "Suspense"]
    },
    {
      titulo: "Matrix",
      genero: "Ficção científica, Ação",
      sinopse: "Um hacker descobre que o mundo em que vive é uma simulação criada por máquinas.",
      anoLancamento: 1999,
      diretor: "Lana Wachowski, Lilly Wachowski",
      ondeAssistir: "HBO Max",
      tags: ["Ficção científica", "Cyberpunk", "Clássico"]
    },
    {
      titulo: "Interestelar",
      genero: "Ficção científica, Drama",
      sinopse: "Um grupo de astronautas viaja através de um buraco de minhoca em busca de um novo lar para a humanidade.",
      anoLancamento: 2014,
      diretor: "Christopher Nolan",
      ondeAssistir: "Amazon Prime Video",
      tags: ["Ficção científica", "Espaço", "Drama"]
    },
    {
      titulo: "O Senhor dos Anéis: A Sociedade do Anel",
      genero: "Aventura, Fantasia",
      sinopse: "Um hobbit recebe a missão de destruir um anel poderoso que ameaça a Terra Média.",
      anoLancamento: 2001,
      diretor: "Peter Jackson",
      ondeAssistir: "HBO Max",
      tags: ["Fantasia", "Aventura", "Épico"]
    },
    {
      titulo: "Pulp Fiction: Tempo de Violência",
      genero: "Crime, Drama",
      sinopse: "Várias histórias entrelaçadas de criminosos em Los Angeles.",
      anoLancamento: 1994,
      diretor: "Quentin Tarantino",
      ondeAssistir: "Amazon Prime Video",
      tags: ["Crime", "Cult", "Violência"]
    },
    {
      titulo: "Forrest Gump: O Contador de Histórias",
      genero: "Drama, Romance",
      sinopse: "Um homem simples com um coração puro vive momentos históricos dos EUA.",
      anoLancamento: 1994,
      diretor: "Robert Zemeckis",
      ondeAssistir: "Netflix",
      tags: ["Drama", "Inspirador", "Histórico"]
    },
    {
      titulo: "Parasita",
      genero: "Drama, Suspense",
      sinopse: "Uma família pobre se infiltra na vida de uma família rica, levando a consequências inesperadas.",
      anoLancamento: 2019,
      diretor: "Bong Joon-ho",
      ondeAssistir: "Amazon Prime Video",
      tags: ["Suspense", "Drama Social", "Oscar"]
    },
    {
      titulo: "O Poderoso Chefão",
      genero: "Crime, Drama",
      sinopse: "A história da ascensão e queda da família Corleone, uma das mais poderosas famílias da máfia nos Estados Unidos.",
      anoLancamento: 1972,
      diretor: "Francis Ford Coppola",
      ondeAssistir: "Paramount+",
      tags: ["Clássico", "Máfia", "Épico"]
    },
    {
      titulo: "O Cavaleiro das Trevas",
      genero: "Ação, Crime, Drama",
      sinopse: "Batman enfrenta o Coringa, um vilão anárquico que semeia o caos em Gotham City.",
      anoLancamento: 2008,
      diretor: "Christopher Nolan",
      ondeAssistir: "HBO Max",
      tags: ["Super-herói", "DC Comics", "Crime"]
    },
    {
      titulo: "Clube da Luta",
      genero: "Drama",
      sinopse: "Um homem descontente com sua vida cria um clube de luta clandestino com um vendedor de sabão.",
      anoLancamento: 1999,
      diretor: "David Fincher",
      ondeAssistir: "Amazon Prime Video",
      tags: ["Cult", "Psicológico", "Violência"]
    },
    {
      titulo: "Coringa",
      genero: "Drama, Crime, Suspense",
      sinopse: "A origem do vilão Coringa, mostrando como um comediante fracassado se torna o maior inimigo de Batman.",
      anoLancamento: 2019,
      diretor: "Todd Phillips",
      ondeAssistir: "HBO Max",
      tags: ["Crime", "Psicológico", "DC Comics"]
    },
    {
      titulo: "Blade Runner 2049",
      genero: "Ficção científica, Drama",
      sinopse: "Um novo blade runner descobre um segredo que pode mudar o que restou da sociedade.",
      anoLancamento: 2017,
      diretor: "Denis Villeneuve",
      ondeAssistir: "Netflix",
      tags: ["Ficção científica", "Neo-noir", "Futuro Distópico"]
    },
    {
      titulo: "O Grande Hotel Budapeste",
      genero: "Comédia, Drama",
      sinopse: "As aventuras de um concierge em um famoso hotel europeu durante o período entre as duas guerras mundiais.",
      anoLancamento: 2014,
      diretor: "Wes Anderson",
      ondeAssistir: "Amazon Prime Video",
      tags: ["Comédia", "Estilizado", "Histórico"]
    },
    {
      titulo: "A Lista de Schindler",
      genero: "Drama, História",
      sinopse: "A história real de Oskar Schindler, um empresário que salvou milhares de judeus durante o Holocausto.",
      anoLancamento: 1993,
      diretor: "Steven Spielberg",
      ondeAssistir: "Netflix",
      tags: ["História", "Holocausto", "Inspirador"]
    },
    {
      titulo: "O Silêncio dos Inocentes",
      genero: "Suspense, Crime",
      sinopse: "Uma jovem agente do FBI busca a ajuda de um prisioneiro psicopata para capturar outro assassino.",
      anoLancamento: 1991,
      diretor: "Jonathan Demme",
      ondeAssistir: "Amazon Prime Video",
      tags: ["Suspense", "Thriller", "Crime"]
    },
    {
      titulo: "O Labirinto do Fauno",
      genero: "Fantasia, Drama",
      sinopse: "Uma jovem garota encontra um mundo mágico e sombrio durante a Guerra Civil Espanhola.",
      anoLancamento: 2006,
      diretor: "Guillermo del Toro",
      ondeAssistir: "Netflix",
      tags: ["Fantasia", "Sombrio", "Guerra"]
    },
    {
      titulo: "Her",
      genero: "Ficção científica, Romance",
      sinopse: "Um homem desenvolve um relacionamento romântico com um sistema operacional inteligente.",
      anoLancamento: 2013,
      diretor: "Spike Jonze",
      ondeAssistir: "Amazon Prime Video",
      tags: ["Romance", "Ficção científica", "Tecnologia"]
    },
    {
      titulo: "O Grande Lebowski",
      genero: "Comédia, Crime",
      sinopse: "Um homem comum se vê envolvido em uma trama de sequestro e confusão após um erro de identidade.",
      anoLancamento: 1998,
      diretor: "Joel Coen, Ethan Coen",
      ondeAssistir: "HBO Max",
      tags: ["Comédia", "Cult", "Crime"]
    },
    {
      titulo: "O Exorcista",
      genero: "Horror, Suspense",
      sinopse: "A luta entre o bem e o mal quando uma jovem é possuída por uma entidade demoníaca.",
      anoLancamento: 1973,
      diretor: "William Friedkin",
      ondeAssistir: "HBO Max",
      tags: ["Horror", "Terror", "Suspense"]
    },
    {
      titulo: "A Rede Social",
      genero: "Drama, Biografia",
      sinopse: "A ascensão e os desafios enfrentados por Mark Zuckerberg ao criar o Facebook.",
      anoLancamento: 2010,
      diretor: "David Fincher",
      ondeAssistir: "Netflix",
      tags: ["Biografia", "Drama", "Tecnologia"]
    },
    {
      titulo: "La La Land",
      genero: "Musical, Romance",
      sinopse: "A história de amor entre uma aspirante a atriz e um músico de jazz em Los Angeles.",
      anoLancamento: 2016,
      diretor: "Damien Chazelle",
      ondeAssistir: "Netflix",
      tags: ["Musical", "Romance", "Drama"]
    },
    {
      titulo: "O Regresso",
      genero: "Ação, Aventura, Drama",
      sinopse: "Um caçador é deixado para morrer em uma expedição e luta pela sobrevivência para se vingar dos que o traíram.",
      anoLancamento: 2015,
      diretor: "Alejandro G. Iñárritu",
      ondeAssistir: "Amazon Prime Video",
      tags: ["Ação", "Sobrevivência", "Drama"]
    },
    {
      titulo: "Mad Max: Estrada da Fúria",
      genero: "Ação, Aventura, Ficção científica",
      sinopse: "Em um mundo pós-apocalíptico, Max se junta a uma guerreira para escapar de um tirano e sua gangue.",
      anoLancamento: 2015,
      diretor: "George Miller",
      ondeAssistir: "HBO Max",
      tags: ["Ação", "Pós-apocalíptico", "Ficção científica"]
    }
  ];

