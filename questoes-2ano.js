const QUESTOES = [
  {
    "v": 1,
    "s": "Português",
    "q": "No trecho “Às 8h, os estudantes chegaram ao laboratório”, qual informação é explícita?",
    "o": [
      "O laboratório foi inaugurado.",
      "Os estudantes chegaram às 8h.",
      "Os estudantes estavam atrasados.",
      "O laboratório estava fechado."
    ],
    "a": 1,
    "e": "O horário da chegada está escrito diretamente no trecho."
  },
  {
    "v": 1,
    "s": "Português",
    "q": "Em um infográfico, onde o leitor pode localizar números e informações importantes?",
    "o": [
      "Somente no título.",
      "Apenas no rodapé.",
      "Em gráficos, legendas e textos curtos.",
      "Somente na assinatura do autor."
    ],
    "a": 2,
    "e": "Infográficos combinam recursos visuais e textos para comunicar dados."
  },
  {
    "v": 1,
    "s": "Português",
    "q": "Qual é uma finalidade central da notícia?",
    "o": [
      "Narrar uma história fictícia.",
      "Informar sobre acontecimentos de interesse público.",
      "Defender sempre uma opinião pessoal.",
      "Ensinar uma receita culinária."
    ],
    "a": 1,
    "e": "Notícias apresentam acontecimentos de forma informativa."
  },
  {
    "v": 1,
    "s": "Português",
    "q": "Em uma notícia, o lide costuma apresentar:",
    "o": [
      "Informações essenciais sobre o acontecimento.",
      "A bibliografia completa do jornalista.",
      "Uma moral obrigatória.",
      "A lista de personagens fictícios."
    ],
    "a": 0,
    "e": "O lide resume dados fundamentais do fato noticiado."
  },
  {
    "v": 1,
    "s": "Português",
    "q": "No conto “Lia perdeu a chave. Ela procurou no jardim”, o pronome “Ela” retoma:",
    "o": [
      "A chave.",
      "O jardim.",
      "Lia.",
      "O conto."
    ],
    "a": 2,
    "e": "O pronome pessoal retoma a personagem Lia."
  },
  {
    "v": 1,
    "s": "Português",
    "q": "Qual elemento integra a estrutura de uma narrativa?",
    "o": [
      "Enredo.",
      "Tabela periódica.",
      "Equação do segundo grau.",
      "Legenda cartográfica."
    ],
    "a": 0,
    "e": "Enredo é a sequência de acontecimentos de uma narrativa."
  },
  {
    "v": 1,
    "s": "Português",
    "q": "Qual alternativa apresenta um argumento que sustenta a tese “Ler diariamente é importante”?",
    "o": [
      "Ler é importante.",
      "Livros têm capas variadas.",
      "A leitura frequente amplia o vocabulário.",
      "A biblioteca abre às 7h."
    ],
    "a": 2,
    "e": "O desenvolvimento do vocabulário justifica a importância da leitura."
  },
  {
    "v": 1,
    "s": "Português",
    "q": "A frase “Nós vai amanhã” em diálogo de um personagem pode indicar:",
    "o": [
      "Um erro de impressão obrigatoriamente.",
      "Uma variedade linguística usada no contexto da fala.",
      "Ausência de qualquer significado.",
      "Uma expressão matemática."
    ],
    "a": 1,
    "e": "A variação linguística depende de fatores sociais e situacionais."
  },
  {
    "v": 1,
    "s": "Português",
    "q": "Qual gênero costuma refletir sobre situações do cotidiano, às vezes com humor?",
    "o": [
      "Crônica.",
      "Bula de remédio.",
      "Manual técnico.",
      "Ata de reunião."
    ],
    "a": 0,
    "e": "A crônica frequentemente retrata o cotidiano de forma reflexiva."
  },
  {
    "v": 1,
    "s": "Português",
    "q": "Ao identificar informação explícita, o leitor deve:",
    "o": [
      "Inventar a intenção do autor.",
      "Localizar dados diretamente presentes no texto.",
      "Ignorar as palavras do texto.",
      "Considerar apenas opiniões pessoais."
    ],
    "a": 1,
    "e": "Informação explícita aparece expressamente no texto."
  },
  {
    "v": 1,
    "s": "Matemática",
    "q": "Uma escola recebeu 125 livros pela manhã e 78 à tarde. Quantos livros recebeu ao todo?",
    "o": [
      "193",
      "203",
      "213",
      "207"
    ],
    "a": 1,
    "e": "125 + 78 = 203 livros."
  },
  {
    "v": 1,
    "s": "Matemática",
    "q": "Um auditório tem 12 fileiras com 15 cadeiras cada. Quantas cadeiras há?",
    "o": [
      "160",
      "170",
      "180",
      "190"
    ],
    "a": 2,
    "e": "12 × 15 = 180 cadeiras."
  },
  {
    "v": 1,
    "s": "Matemática",
    "q": "Na função f(x) = 2x + 3, qual é o valor de f(4)?",
    "o": [
      "8",
      "9",
      "11",
      "14"
    ],
    "a": 2,
    "e": "f(4) = 2 × 4 + 3 = 11."
  },
  {
    "v": 1,
    "s": "Matemática",
    "q": "Qual ponto pertence ao gráfico de y = x + 2?",
    "o": [
      "(1, 3)",
      "(2, 2)",
      "(0, 0)",
      "(3, 4)"
    ],
    "a": 0,
    "e": "Quando x = 1, y = 1 + 2 = 3."
  },
  {
    "v": 1,
    "s": "Matemática",
    "q": "A função f(x) = 5x − 2 é:",
    "o": [
      "Constante.",
      "Quadrática.",
      "Afim.",
      "Exponencial."
    ],
    "a": 2,
    "e": "Uma função afim tem a forma f(x) = ax + b."
  },
  {
    "v": 1,
    "s": "Matemática",
    "q": "Uma corrida custa R$ 6 fixos mais R$ 3 por quilômetro. Qual função representa o preço P(x)?",
    "o": [
      "P(x) = 6x + 3",
      "P(x) = 3x + 6",
      "P(x) = 9x",
      "P(x) = 6 − 3x"
    ],
    "a": 1,
    "e": "A parcela fixa é 6 e a variável é 3 vezes a distância."
  },
  {
    "v": 1,
    "s": "Matemática",
    "q": "No sistema x + y = 10 e x − y = 2, qual é o valor de x?",
    "o": [
      "4",
      "5",
      "6",
      "8"
    ],
    "a": 2,
    "e": "Somando as equações: 2x = 12; portanto x = 6."
  },
  {
    "v": 1,
    "s": "Matemática",
    "q": "Dois ingressos adultos e um infantil custam R$ 50. Um adulto e um infantil custam R$ 30. Quanto custa o adulto?",
    "o": [
      "R$ 10",
      "R$ 15",
      "R$ 20",
      "R$ 25"
    ],
    "a": 2,
    "e": "Subtraindo as duas equações, o ingresso adulto custa R$ 20."
  },
  {
    "v": 1,
    "s": "Matemática",
    "q": "Qual é o valor máximo da função f(x) = −x² + 4x + 1?",
    "o": [
      "4",
      "5",
      "6",
      "9"
    ],
    "a": 1,
    "e": "O vértice ocorre em x = 2 e f(2) = 5."
  },
  {
    "v": 1,
    "s": "Matemática",
    "q": "A função f(x) = (x − 3)² + 2 tem valor mínimo igual a:",
    "o": [
      "2",
      "3",
      "5",
      "0"
    ],
    "a": 0,
    "e": "O quadrado é sempre não negativo; o mínimo é 2 quando x = 3."
  },
  {
    "v": 2,
    "s": "Português",
    "q": "Em um poema, palavras dispostas em forma de espiral podem sugerir:",
    "o": [
      "Um movimento circular.",
      "Uma data histórica precisa.",
      "Uma fórmula de área.",
      "Uma referência bibliográfica."
    ],
    "a": 0,
    "e": "A disposição gráfica pode produzir sensação de movimento."
  },
  {
    "v": 2,
    "s": "Português",
    "q": "Qual recurso gráfico pode destacar uma palavra em um poema?",
    "o": [
      "Alterar seu tamanho e posição.",
      "Retirar todas as vogais.",
      "Substituir versos por equações.",
      "Excluir o título do poema."
    ],
    "a": 0,
    "e": "Tipografia e diagramação ajudam a construir efeitos de sentido."
  },
  {
    "v": 2,
    "s": "Português",
    "q": "Em “As folhas dançavam ao vento”, a escolha do verbo “dançavam” produz:",
    "o": [
      "Uma medida exata.",
      "Um efeito expressivo de movimento.",
      "Uma informação estatística.",
      "Uma ordem ao leitor."
    ],
    "a": 1,
    "e": "O verbo atribui às folhas uma ação humana, criando expressividade."
  },
  {
    "v": 2,
    "s": "Português",
    "q": "Em “Eu espero, espero, espero”, a repetição do verbo pode enfatizar:",
    "o": [
      "A duração da espera.",
      "O lugar da ação.",
      "O número de personagens.",
      "A profissão do narrador."
    ],
    "a": 0,
    "e": "A repetição intensifica a ideia de espera."
  },
  {
    "v": 2,
    "s": "Português",
    "q": "Qual alternativa apresenta uma tese?",
    "o": [
      "O artigo foi publicado ontem.",
      "A entrevista teve três perguntas.",
      "As escolas devem ampliar o acesso à leitura.",
      "A crônica tem quatro parágrafos."
    ],
    "a": 2,
    "e": "A frase apresenta uma posição que pode ser defendida com argumentos."
  },
  {
    "v": 2,
    "s": "Português",
    "q": "Qual alternativa apresenta um argumento para defender bibliotecas escolares?",
    "o": [
      "Bibliotecas são espaços com estantes.",
      "O acesso a livros favorece a formação de leitores.",
      "O livro está sobre a mesa.",
      "A biblioteca possui uma porta azul."
    ],
    "a": 1,
    "e": "A formação de leitores é uma justificativa para a proposta."
  },
  {
    "v": 2,
    "s": "Português",
    "q": "Em “Que ótimo! A internet caiu bem na hora da prova!”, qual efeito é mais provável?",
    "o": [
      "Ironia.",
      "Neutralidade científica.",
      "Descrição geográfica.",
      "Linguagem matemática."
    ],
    "a": 0,
    "e": "O elogio aparente contrasta com a situação negativa."
  },
  {
    "v": 2,
    "s": "Português",
    "q": "Em uma crônica, o humor pode surgir quando:",
    "o": [
      "Há uma quebra inesperada de expectativa.",
      "Todo verbo está no infinitivo.",
      "O texto apresenta apenas números.",
      "Não há nenhuma situação narrada."
    ],
    "a": 0,
    "e": "O contraste entre o esperado e o ocorrido pode produzir humor."
  },
  {
    "v": 2,
    "s": "Português",
    "q": "No trecho “A rua alagou porque choveu intensamente”, qual é a causa?",
    "o": [
      "A rua.",
      "O alagamento.",
      "A chuva intensa.",
      "A palavra “porque”."
    ],
    "a": 2,
    "e": "A chuva intensa é apresentada como motivo do alagamento."
  },
  {
    "v": 2,
    "s": "Português",
    "q": "No trecho “O ônibus atrasou, por isso João perdeu o início da aula”, qual é a consequência?",
    "o": [
      "O atraso do ônibus.",
      "João perder o início da aula.",
      "João entrar no ônibus.",
      "O ônibus chegar cedo."
    ],
    "a": 1,
    "e": "Perder o início da aula é o resultado do atraso."
  },
  {
    "v": 2,
    "s": "Matemática",
    "q": "Uma pessoa escolhe 3 camisetas e 2 calças. Quantas combinações diferentes pode formar?",
    "o": [
      "5",
      "6",
      "8",
      "9"
    ],
    "a": 1,
    "e": "Pelo princípio multiplicativo: 3 × 2 = 6."
  },
  {
    "v": 2,
    "s": "Matemática",
    "q": "Uma senha usa um dos 4 símbolos e um dos 3 números disponíveis. Quantas senhas podem ser feitas?",
    "o": [
      "7",
      "12",
      "16",
      "24"
    ],
    "a": 1,
    "e": "Há 4 × 3 = 12 combinações possíveis."
  },
  {
    "v": 2,
    "s": "Matemática",
    "q": "Ao lançar um dado comum justo, qual é a probabilidade de sair um número par?",
    "o": [
      "1/6",
      "1/3",
      "1/2",
      "2/3"
    ],
    "a": 2,
    "e": "Os resultados pares são 2, 4 e 6: 3 de 6, ou 1/2."
  },
  {
    "v": 2,
    "s": "Matemática",
    "q": "Em uma caixa há 2 bolas azuis e 3 vermelhas. Qual é a probabilidade de retirar uma azul?",
    "o": [
      "2/5",
      "3/5",
      "1/2",
      "2/3"
    ],
    "a": 0,
    "e": "São 2 casos favoráveis entre 5 bolas."
  },
  {
    "v": 2,
    "s": "Matemática",
    "q": "Se 3 cadernos custam R$ 24, quanto custam 5 cadernos iguais?",
    "o": [
      "R$ 32",
      "R$ 36",
      "R$ 40",
      "R$ 45"
    ],
    "a": 2,
    "e": "Cada caderno custa R$ 8; cinco custam R$ 40."
  },
  {
    "v": 2,
    "s": "Matemática",
    "q": "Uma receita para 4 pessoas usa 200 g de arroz. Para 10 pessoas, mantendo a proporção, serão necessários:",
    "o": [
      "300 g",
      "400 g",
      "500 g",
      "600 g"
    ],
    "a": 2,
    "e": "200 ÷ 4 = 50 g por pessoa; 10 × 50 = 500 g."
  },
  {
    "v": 2,
    "s": "Matemática",
    "q": "Um triângulo retângulo tem catetos de 6 cm e 8 cm. Quanto mede a hipotenusa?",
    "o": [
      "9 cm",
      "10 cm",
      "12 cm",
      "14 cm"
    ],
    "a": 1,
    "e": "Pelo teorema de Pitágoras: 6² + 8² = 100; a hipotenusa é 10 cm."
  },
  {
    "v": 2,
    "s": "Matemática",
    "q": "Em um triângulo retângulo, o seno de um ângulo agudo é a razão entre:",
    "o": [
      "Cateto oposto e hipotenusa.",
      "Cateto adjacente e hipotenusa.",
      "Hipotenusa e cateto oposto.",
      "Cateto oposto e cateto adjacente."
    ],
    "a": 0,
    "e": "Seno é a razão entre cateto oposto e hipotenusa."
  },
  {
    "v": 2,
    "s": "Matemática",
    "q": "Um produto de R$ 200 recebeu reajuste de 10%. Qual é o novo preço?",
    "o": [
      "R$ 210",
      "R$ 215",
      "R$ 220",
      "R$ 230"
    ],
    "a": 2,
    "e": "10% de 200 são 20; o preço passa a R$ 220."
  },
  {
    "v": 2,
    "s": "Matemática",
    "q": "Uma mensalidade de R$ 150 aumentou 20%. Qual é o valor após o reajuste?",
    "o": [
      "R$ 170",
      "R$ 175",
      "R$ 180",
      "R$ 185"
    ],
    "a": 2,
    "e": "20% de 150 são 30; o valor final é R$ 180."
  },
  {
    "v": 3,
    "s": "Português",
    "q": "Na crônica, a expressão “O relógio voava naquela manhã” sugere que:",
    "o": [
      "O relógio tinha asas.",
      "O tempo parecia passar rapidamente.",
      "O relógio estava quebrado.",
      "A manhã não havia começado."
    ],
    "a": 1,
    "e": "A expressão é figurada e transmite a sensação de passagem rápida do tempo."
  },
  {
    "v": 3,
    "s": "Português",
    "q": "Em “Talvez a biblioteca abra mais cedo”, a palavra “Talvez” indica:",
    "o": [
      "Certeza.",
      "Ordem.",
      "Possibilidade ou dúvida.",
      "Conclusão."
    ],
    "a": 2,
    "e": "“Talvez” é um modalizador que expressa incerteza."
  },
  {
    "v": 3,
    "s": "Português",
    "q": "Qual alternativa apresenta um fato verificável?",
    "o": [
      "A biblioteca é o melhor lugar da cidade.",
      "A leitura é a atividade mais divertida.",
      "A escola recebeu 120 livros em março.",
      "O novo livro é maravilhoso."
    ],
    "a": 2,
    "e": "A quantidade de livros e o período podem ser conferidos em registros."
  },
  {
    "v": 3,
    "s": "Português",
    "q": "Na frase “Na minha opinião, as aulas deveriam começar mais tarde”, encontramos:",
    "o": [
      "Um dado estatístico.",
      "Uma opinião pessoal.",
      "Uma data histórica.",
      "Um fato comprovado."
    ],
    "a": 1,
    "e": "“Na minha opinião” marca explicitamente um ponto de vista."
  },
  {
    "v": 3,
    "s": "Português",
    "q": "Dois artigos concordam que é importante economizar água, mas propõem soluções diferentes. Eles apresentam:",
    "o": [
      "Temas sem relação.",
      "A mesma proposta detalhada.",
      "Uma ideia comum e opiniões divergentes.",
      "Somente fatos idênticos."
    ],
    "a": 2,
    "e": "Os textos compartilham a preocupação, mas divergem nas propostas."
  },
  {
    "v": 3,
    "s": "Português",
    "q": "Ao comparar dois textos sobre transporte público, qual procedimento ajuda a identificar opiniões divergentes?",
    "o": [
      "Observar apenas o tamanho dos títulos.",
      "Identificar a posição defendida por cada autor.",
      "Ignorar os argumentos.",
      "Contar quantas palavras há em cada texto."
    ],
    "a": 1,
    "e": "Comparar os pontos de vista e argumentos revela concordâncias e divergências."
  },
  {
    "v": 3,
    "s": "Português",
    "q": "Dois poemas abordam a saudade: um com esperança e outro com tristeza. O que muda principalmente?",
    "o": [
      "O tema comum.",
      "O sentimento e o modo de tratar o tema.",
      "A necessidade de haver rimas.",
      "O gênero textual dos dois."
    ],
    "a": 1,
    "e": "Poemas podem abordar o mesmo tema com perspectivas e efeitos diferentes."
  },
  {
    "v": 3,
    "s": "Português",
    "q": "Ao comparar poemas sobre a natureza, devemos observar:",
    "o": [
      "Somente o número de versos.",
      "Apenas o nome do autor.",
      "Imagens, linguagem e sentimentos expressos.",
      "A ordem alfabética das palavras."
    ],
    "a": 2,
    "e": "A comparação envolve tema, escolhas de linguagem e efeitos de sentido."
  },
  {
    "v": 3,
    "s": "Português",
    "q": "Em uma tirinha, a personagem diz “Que dia lindo!” enquanto aparece encharcada sob chuva forte. O humor surge:",
    "o": [
      "Da concordância literal entre fala e cena.",
      "Da contradição irônica entre fala e imagem.",
      "Da ausência de elementos visuais.",
      "Do uso de linguagem científica."
    ],
    "a": 1,
    "e": "A imagem contradiz a fala, produzindo ironia."
  },
  {
    "v": 3,
    "s": "Português",
    "q": "Numa tirinha, o rosto assustado de uma personagem diante de uma notícia ajuda a:",
    "o": [
      "Apagar o sentido do texto.",
      "Reforçar a reação e o efeito da mensagem.",
      "Transformar a tirinha em receita.",
      "Indicar que a fala é uma equação."
    ],
    "a": 1,
    "e": "A linguagem não verbal complementa as palavras e constrói sentido."
  },
  {
    "v": 3,
    "s": "Matemática",
    "q": "Um retângulo mede 8 cm de comprimento e 5 cm de largura. Qual é sua área?",
    "o": [
      "13 cm²",
      "26 cm²",
      "40 cm²",
      "80 cm²"
    ],
    "a": 2,
    "e": "Área do retângulo = 8 × 5 = 40 cm²."
  },
  {
    "v": 3,
    "s": "Matemática",
    "q": "Um quadrado tem lado de 7 m. Qual é seu perímetro?",
    "o": [
      "14 m",
      "21 m",
      "28 m",
      "49 m"
    ],
    "a": 2,
    "e": "O perímetro é a soma dos quatro lados: 4 × 7 = 28 m."
  },
  {
    "v": 3,
    "s": "Matemática",
    "q": "Uma caixa retangular mede 4 cm × 3 cm × 5 cm. Qual é seu volume?",
    "o": [
      "12 cm³",
      "20 cm³",
      "47 cm³",
      "60 cm³"
    ],
    "a": 3,
    "e": "Volume = comprimento × largura × altura = 4 × 3 × 5 = 60 cm³."
  },
  {
    "v": 3,
    "s": "Matemática",
    "q": "Quantos litros correspondem a 2.500 mL?",
    "o": [
      "0,25 L",
      "2,5 L",
      "25 L",
      "250 L"
    ],
    "a": 1,
    "e": "Como 1.000 mL = 1 L, 2.500 mL = 2,5 L."
  },
  {
    "v": 3,
    "s": "Matemática",
    "q": "Qual é o próximo termo da sequência 3, 7, 11, 15, ...?",
    "o": [
      "17",
      "18",
      "19",
      "20"
    ],
    "a": 2,
    "e": "A sequência aumenta de 4 em 4: 15 + 4 = 19."
  },
  {
    "v": 3,
    "s": "Matemática",
    "q": "Qual é o próximo termo da sequência 2, 6, 18, 54, ...?",
    "o": [
      "72",
      "108",
      "162",
      "216"
    ],
    "a": 2,
    "e": "Cada termo é o anterior multiplicado por 3: 54 × 3 = 162."
  },
  {
    "v": 3,
    "s": "Matemática",
    "q": "As notas de uma turma foram 6, 7, 8 e 9. Qual é a média aritmética?",
    "o": [
      "7",
      "7,5",
      "8",
      "8,5"
    ],
    "a": 1,
    "e": "Média = (6 + 7 + 8 + 9) ÷ 4 = 7,5."
  },
  {
    "v": 3,
    "s": "Matemática",
    "q": "Uma tabela registra 12 alunos no clube de leitura e 18 no de robótica. Quantos alunos há nos dois clubes, considerando que ninguém participa dos dois?",
    "o": [
      "6",
      "18",
      "24",
      "30"
    ],
    "a": 3,
    "e": "Somando os valores da tabela: 12 + 18 = 30."
  },
  {
    "v": 3,
    "s": "Matemática",
    "q": "Em um conjunto de dados 2, 3, 3, 5, 7, qual é a moda?",
    "o": [
      "2",
      "3",
      "5",
      "7"
    ],
    "a": 1,
    "e": "Moda é o valor que aparece mais vezes: 3."
  },
  {
    "v": 3,
    "s": "Matemática",
    "q": "Qual é a mediana dos números 4, 6, 8, 10 e 12?",
    "o": [
      "6",
      "8",
      "9",
      "10"
    ],
    "a": 1,
    "e": "Com os dados ordenados, a mediana é o valor central: 8."
  }
];
