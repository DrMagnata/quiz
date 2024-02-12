const perguntas = [
    {
      pergunta: "Qual é o maior planeta do Sistema Solar?",
      respostas: [
        "A) Júpiter",
        "B) Saturno",
        "C) Marte",
      ],
      correta: 0
    },
    {
      pergunta: "Qual é o osso mais longo do corpo humano?",
      respostas: [
        "A) Fêmur",
        "B) Úmero",
        "C) Costela",
      ],
      correta: 0
    },
    {
      pergunta: "Qual é a capital do Canadá?",
      respostas: [
        "A) Toronto",
        "B) Ottawa",
        "C) Vancouver",
      ],
      correta: 1
    },
    {
      pergunta: "Quem escreveu 'Dom Quixote'?",
      respostas: [
        "A) William Shakespeare",
        "B) Miguel de Cervantes",
        "C) Victor Hugo",
      ],
      correta: 1
    },
    {
      pergunta: "Qual é o animal mais rápido do mundo?",
      respostas: [
        "A) Guepardo",
        "B) Falcão-peregrino",
        "C) Lebre",
      ],
      correta: 1
    },
    {
      pergunta: "Qual é o elemento mais abundante na crosta terrestre?",
      respostas: [
        "A) Ferro",
        "B) Silício",
        "C) Oxigênio",
      ],
      correta: 2
    },
    {
      pergunta: "Qual é o maior oceano do mundo?",
      respostas: [
        "A) Oceano Atlântico",
        "B) Oceano Índico",
        "C) Oceano Pacífico",
      ],
      correta: 2
    },
    {
      pergunta: "Quantos planetas existem no Sistema Solar?",
      respostas: [
        "A) 7",
        "B) 8",
        "C) 9",
      ],
      correta: 1
    },
    {
      pergunta: "Qual é a montanha mais alta do mundo?",
      respostas: [
        "A) Everest",
        "B) K2",
        "C) Mont Blanc",
      ],
      correta: 0
    },
    {
      pergunta: "Quem pintou a 'Mona Lisa'?",
      respostas: [
        "A) Leonardo da Vinci",
        "B) Michelangelo",
        "C) Vincent van Gogh",
      ],
      correta: 0
    },
  ];
  
  const quiz = document.querySelector('#quiz')
  
  const template = document.querySelector('template')
  
  const corretas = new Set()
  const totalDePerguntas = perguntas.length
  
  const mostrarTotal = document.querySelector('#acertos span')
  mostrarTotal.textContent = corretas.size + ' de um total de  ' + totalDePerguntas
  
  // loop ou laço de repetição
  for(const item of perguntas) {
    const quizItem = template.content.cloneNode(true)
    quizItem.querySelector('h3').textContent = item.pergunta
  
    for(let resposta of item.respostas){
      const dt = quizItem.querySelector('dl dt').cloneNode(true)
      dt.querySelector('span').textContent = resposta
      dt.querySelector('input').setAttribute('name','pergunta-' + perguntas.indexOf(item))
  
  dt.querySelector('input').value = item.respostas.indexOf(resposta)
  
  dt.querySelector('input').onchange = (event) => { const estaCorreta = event.target.value == item.correta
  
  corretas.delete(item)
  if(estaCorreta){
    corretas.add(item)
    }
  
  mostrarTotal.textContent = corretas.size + ' de um total de ' + totalDePerguntas
  }
  
  
      // torna dl "pai do dt"
      quizItem.querySelector('dl').appendChild(dt)
    }
  
  
    //apaga a primeira parte do html h3 'pergunta 01' 
    quizItem.querySelector('dl dt').remove()
  
    // coloca a pergunta na tela
    quiz.appendChild(quizItem)
  }