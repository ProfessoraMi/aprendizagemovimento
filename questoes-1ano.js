const QUESTOES = [
  {
    "v": 1,
    "s": "Português",
    "q": "Em uma crônica, qual informação está explícita no trecho: “Às sete horas, Ana abriu a biblioteca da escola”?",
    "o": [
      "Ana abriu a biblioteca às sete horas.",
      "Ana não gostava de ler.",
      "A biblioteca estava fechada há meses.",
      "Ana era professora."
    ],
    "a": 0,
    "e": "O horário e a ação aparecem diretamente no trecho."
  },
  {
    "v": 1,
    "s": "Português",
    "q": "Qual frase apresenta uma opinião?",
    "o": [
      "A escola tem três salas.",
      "A reunião começou às oito horas.",
      "A leitura é a atividade mais divertida da escola.",
      "A biblioteca fica no segundo andar."
    ],
    "a": 2,
    "e": "A expressão “mais divertida” apresenta um julgamento subjetivo."
  },
  {
    "v": 1,
    "s": "Português",
    "q": "Dois textos discutem o uso de celulares: um traz dados e outro narra uma experiência pessoal. O que é possível comparar?",
    "o": [
      "Somente a quantidade de palavras.",
      "As abordagens de um mesmo tema.",
      "A idade dos autores, obrigatoriamente.",
      "A cor das páginas."
    ],
    "a": 1,
    "e": "Textos de gêneros distintos podem abordar o mesmo assunto de maneiras diferentes."
  },
  {
    "v": 1,
    "s": "Português",
    "q": "Em uma enquete sobre transporte escolar, dois estudantes defendem soluções diferentes. O que isso revela?",
    "o": [
      "Uma única informação comprovada.",
      "Ausência de tema.",
      "Erro de interpretação.",
      "Opiniões distintas sobre o mesmo assunto."
    ],
    "a": 3,
    "e": "A identificação de pontos de vista diferentes é habilidade do volume 1."
  },
  {
    "v": 1,
    "s": "Português",
    "q": "Qual é a finalidade mais característica de um artigo de opinião?",
    "o": [
      "Defender um ponto de vista com argumentos.",
      "Registrar apenas falas de personagens.",
      "Listar palavras em ordem alfabética.",
      "Descrever regras de um jogo sem posicionamento."
    ],
    "a": 0,
    "e": "O artigo de opinião apresenta uma tese sustentada por argumentos."
  },
  {
    "v": 1,
    "s": "Português",
    "q": "Em “O ônibus chegou às 6h30 e os alunos entraram”, o que pode ser localizado sem inferência?",
    "o": [
      "O motorista estava atrasado.",
      "Todos estavam felizes.",
      "O ônibus chegou às 6h30.",
      "O ônibus era novo."
    ],
    "a": 2,
    "e": "A chegada às 6h30 é informação expressa diretamente."
  },
  {
    "v": 1,
    "s": "Matemática",
    "q": "Qual número fica mais à esquerda na reta numérica?",
    "o": [
      "−2",
      "3",
      "0",
      "−5"
    ],
    "a": 3,
    "e": "Na reta numérica, números menores ficam à esquerda; −5 é o menor."
  },
  {
    "v": 1,
    "s": "Matemática",
    "q": "Se 3 cadernos custam R$ 24, quanto custam 5 cadernos iguais?",
    "o": [
      "R$ 32",
      "R$ 40",
      "R$ 45",
      "R$ 48"
    ],
    "a": 1,
    "e": "Cada caderno custa R$ 8; cinco custam R$ 40."
  },
  {
    "v": 1,
    "s": "Matemática",
    "q": "Uma tabela mostra 12 livros na segunda, 15 na terça e 9 na quarta. Qual foi o total?",
    "o": [
      "36",
      "34",
      "27",
      "39"
    ],
    "a": 0,
    "e": "Somando 12 + 15 + 9, obtemos 36 livros."
  },
  {
    "v": 1,
    "s": "Matemática",
    "q": "A temperatura passou de −3 °C para 2 °C. Qual foi a variação?",
    "o": [
      "−1 °C",
      "2 °C",
      "5 °C",
      "6 °C"
    ],
    "a": 2,
    "e": "A variação é 2 − (−3) = 5 °C."
  },
  {
    "v": 1,
    "s": "Matemática",
    "q": "Uma receita para 2 pessoas usa 4 bananas. Para 6 pessoas, mantendo a proporção, quantas bananas?",
    "o": [
      "6",
      "8",
      "10",
      "12"
    ],
    "a": 3,
    "e": "Se a quantidade de pessoas triplica, a de bananas também: 4 × 3 = 12."
  },
  {
    "v": 1,
    "s": "Matemática",
    "q": "Uma tabela de dupla entrada organiza vendas por dia e por produto. Qual cruzamento permite localizar uma venda específica?",
    "o": [
      "O título com a fonte.",
      "A linha do dia com a coluna do produto.",
      "A última linha com a primeira linha.",
      "Duas colunas sem observar os rótulos."
    ],
    "a": 1,
    "e": "A célula na interseção de linha e coluna fornece o valor desejado."
  },
  {
    "v": 2,
    "s": "Português",
    "q": "A expressão “ficar de queixo caído” indica que alguém ficou:",
    "o": [
      "Com dor no rosto.",
      "Com muito sono.",
      "Muito surpreso.",
      "Sem conseguir falar por doença."
    ],
    "a": 2,
    "e": "A apostila usa essa expressão idiomática com sentido de surpresa."
  },
  {
    "v": 2,
    "s": "Português",
    "q": "Na frase “Joana perdeu o ônibus porque acordou tarde”, qual é a causa?",
    "o": [
      "Joana acordou tarde.",
      "Joana perdeu o ônibus.",
      "O ônibus estava vazio.",
      "Joana chegou cedo."
    ],
    "a": 0,
    "e": "Acordar tarde é o motivo indicado para perder o ônibus."
  },
  {
    "v": 2,
    "s": "Português",
    "q": "Em “Luís encontrou Pedro e lhe entregou o livro”, a palavra “lhe” retoma:",
    "o": [
      "O livro.",
      "O encontro.",
      "Luís.",
      "Pedro."
    ],
    "a": 3,
    "e": "O pronome “lhe” refere-se a Pedro, que recebeu o livro."
  },
  {
    "v": 2,
    "s": "Português",
    "q": "Qual elemento é comum à estrutura de uma narrativa?",
    "o": [
      "Tabela periódica.",
      "Personagens e enredo.",
      "Gráfico de setores.",
      "Fórmula matemática."
    ],
    "a": 1,
    "e": "Narrativas são organizadas por acontecimentos envolvendo personagens."
  },
  {
    "v": 2,
    "s": "Português",
    "q": "Em uma história em quadrinhos, as expressões faciais das personagens ajudam a:",
    "o": [
      "Construir sentidos junto às falas.",
      "Substituir todas as palavras por números.",
      "Determinar a quantidade de páginas.",
      "Impedir interpretações."
    ],
    "a": 0,
    "e": "A linguagem não verbal contribui para o sentido das HQs."
  },
  {
    "v": 2,
    "s": "Português",
    "q": "Na frase “Aquele teste foi moleza!”, “moleza” significa:",
    "o": [
      "Um material macio.",
      "Uma notícia triste.",
      "Algo fácil.",
      "Um objeto pesado."
    ],
    "a": 2,
    "e": "A expressão é usada figuradamente para indicar facilidade."
  },
  {
    "v": 2,
    "s": "Matemática",
    "q": "Uma turma registrou 8, 12 e 10 livros lidos em três meses. Qual mês teve mais livros?",
    "o": [
      "Primeiro.",
      "Segundo.",
      "Terceiro.",
      "Todos iguais."
    ],
    "a": 1,
    "e": "O segundo mês registra 12 livros, o maior valor."
  },
  {
    "v": 2,
    "s": "Matemática",
    "q": "Um terreno retangular mede 6 m por 4 m. Qual é seu perímetro?",
    "o": [
      "10 m",
      "20 m²",
      "24 m",
      "20 m"
    ],
    "a": 3,
    "e": "Perímetro é a soma dos quatro lados: 6 + 4 + 6 + 4 = 20 m."
  },
  {
    "v": 2,
    "s": "Matemática",
    "q": "Quanto vale (−7) + 12?",
    "o": [
      "5",
      "−5",
      "19",
      "−19"
    ],
    "a": 0,
    "e": "Ao somar 12 a −7, o resultado é 5."
  },
  {
    "v": 2,
    "s": "Matemática",
    "q": "Qual é o resultado de 2,75 + 1,50?",
    "o": [
      "3,25",
      "4,15",
      "4,25",
      "4,75"
    ],
    "a": 2,
    "e": "Alinhando as casas decimais, 2,75 + 1,50 = 4,25."
  },
  {
    "v": 2,
    "s": "Matemática",
    "q": "Uma compra de R$ 18,90 e outra de R$ 7,35 totalizam:",
    "o": [
      "R$ 25,15",
      "R$ 26,25",
      "R$ 26,15",
      "R$ 27,25"
    ],
    "a": 1,
    "e": "18,90 + 7,35 = 26,25."
  },
  {
    "v": 2,
    "s": "Matemática",
    "q": "No plano cartesiano, o ponto (3, −2) está:",
    "o": [
      "À esquerda e acima da origem.",
      "Sobre o eixo horizontal.",
      "À esquerda e abaixo da origem.",
      "À direita e abaixo da origem."
    ],
    "a": 3,
    "e": "Abscissa positiva: direita; ordenada negativa: abaixo."
  },
  {
    "v": 3,
    "s": "Português",
    "q": "Em um editorial, a tese é:",
    "o": [
      "A data em que o jornal foi impresso.",
      "A posição central defendida pelo texto.",
      "O nome de todos os entrevistados.",
      "Uma descrição neutra de personagens."
    ],
    "a": 1,
    "e": "A tese expressa o posicionamento que o editorial sustenta com argumentos."
  },
  {
    "v": 3,
    "s": "Português",
    "q": "Em uma fábula, quem participa dos acontecimentos e realiza ações?",
    "o": [
      "Os personagens.",
      "A editora.",
      "O índice.",
      "O rodapé."
    ],
    "a": 0,
    "e": "Personagens são elementos da narrativa."
  },
  {
    "v": 3,
    "s": "Português",
    "q": "Em “Marina comprou uma mochila. Ela era azul”, “ela” retoma:",
    "o": [
      "Marina.",
      "A loja.",
      "A mochila.",
      "A compra."
    ],
    "a": 2,
    "e": "O adjetivo “azul” e a concordância permitem retomar “mochila”."
  },
  {
    "v": 3,
    "s": "Português",
    "q": "No trecho “O chão estava molhado, pois havia chovido”, o que é consequência?",
    "o": [
      "A chuva.",
      "A previsão.",
      "A nuvem.",
      "O chão molhado."
    ],
    "a": 3,
    "e": "A chuva é a causa; o chão molhado é a consequência."
  },
  {
    "v": 3,
    "s": "Português",
    "q": "A pontuação “Você fez isso?!” pode sugerir:",
    "o": [
      "Somente uma enumeração.",
      "Surpresa ou indignação.",
      "Uma pausa de parágrafo.",
      "Uma citação formal."
    ],
    "a": 1,
    "e": "A combinação de interrogação e exclamação pode intensificar a reação."
  },
  {
    "v": 3,
    "s": "Português",
    "q": "Uma palavra com diferentes sentidos conforme o contexto é um caso de:",
    "o": [
      "Polissemia.",
      "Concordância nominal.",
      "Separação silábica.",
      "Pontuação."
    ],
    "a": 0,
    "e": "Polissemia é a possibilidade de uma palavra assumir diferentes sentidos."
  },
  {
    "v": 3,
    "s": "Matemática",
    "q": "Um objeto foi deslocado 4 unidades para a direita e 2 para cima. Saindo de (1,1), chega a:",
    "o": [
      "(−3,3)",
      "(5,−1)",
      "(5,3)",
      "(3,5)"
    ],
    "a": 2,
    "e": "Somam-se 4 à coordenada x e 2 à y: (5,3)."
  },
  {
    "v": 3,
    "s": "Matemática",
    "q": "O dobro de um número x, aumentado em 7, é representado por:",
    "o": [
      "x + 14",
      "2x + 7",
      "7x + 2",
      "2(x + 7)"
    ],
    "a": 1,
    "e": "O dobro é 2x; aumentado em 7 fica 2x + 7."
  },
  {
    "v": 3,
    "s": "Matemática",
    "q": "Um giro de um quarto de volta corresponde a:",
    "o": [
      "45°",
      "180°",
      "270°",
      "90°"
    ],
    "a": 3,
    "e": "Uma volta completa tem 360°; um quarto equivale a 90°."
  },
  {
    "v": 3,
    "s": "Matemática",
    "q": "Em um gráfico de linhas, uma subida entre dois pontos geralmente indica:",
    "o": [
      "Aumento do valor registrado.",
      "Redução obrigatória.",
      "Ausência de dados.",
      "Mudança da unidade de medida."
    ],
    "a": 0,
    "e": "Um segmento ascendente indica que o valor aumentou entre as observações."
  },
  {
    "v": 3,
    "s": "Matemática",
    "q": "Em uma tabela de população, uma cidade tem 12 mil habitantes e outra 18 mil. A diferença é:",
    "o": [
      "4 mil",
      "5 mil",
      "6 mil",
      "30 mil"
    ],
    "a": 2,
    "e": "18 mil − 12 mil = 6 mil habitantes."
  },
  {
    "v": 3,
    "s": "Matemática",
    "q": "Qual sólido possui uma planificação formada por seis quadrados congruentes?",
    "o": [
      "Cone.",
      "Cubo.",
      "Cilindro.",
      "Pirâmide triangular."
    ],
    "a": 1,
    "e": "O cubo possui seis faces quadradas congruentes."
  }
];
