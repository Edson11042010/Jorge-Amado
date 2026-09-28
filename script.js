const perguntas=[ 
    {
        texto:"Qual ano Jorge Amado nasceu?",
        opcoes: ["1910", "1911", "1912", "1913"],
        respostaCorreta: 2
    },
    {
        texto:"Ele abordava quais temas sociais?",
        opcoes: ["Pobreza, Política, Preconceito e as Classes sociais", "Ricos, Igualdade social, Preconceito e as Classes Socias", "Ricos, Machismo, Política e as Classes sociais", "Probreza, Desigualdade, Preconceito e as Classes Sociais"],
        respostaCorreta: 3
    },
    {
        texto:"'Entre suas obras mais conhecidas estão “Capitães da Areia”, que conta a história de crianças e adolescentes em situação de abandono em Salvador'. Quais são essas hítorias?",
        opcoes:["Gabriela, Cravo e Canela, Dona Flor e Seus Dois Maridos e Tieta do Agreste", "Gabriela, Cravo e Canela, Dona Rosa e Seus Dois Filhos e Tieta do Agreste", "Gabriela, Chiero Verde e Salsinha, Dona Flor e Seus Dois Filhos e Tieta do Agreste", "Gabriela, Cravo e Canela, Dona Flor e Seus Dois Maridos e Tieta do Tigre"],
        respostaCorreta: 0
    },
    {
        texto:"Seu estilo de escrita e marcado por uma linguagem:",
        opcoes:["Simples, Romance e Cultura japonesa", "Díficil, Romance e Cultura brasileira", "Simples, Romance e Cultura brasileira", "Díficil, Romance e Cultura portuguesa"],
        respostaCorreta: 2
    },
    {
        texto: "DESAFIO - 'Jorge Amado recebeu diversos prêmios e teve seus livros traduzidos para vários idiomas. Muitas de suas obras também foram adaptadas para o cinema, a televisão e o teatro. Por sua importância e por retratar tão bem a cultura e a sociedade brasileira, Jorge Amado é considerado um dos grandes nomes da literatura brasileira'. Na sua opnião você acha que ele é importante para a literatura brasileira?",
        opcoes: ["Sim", "Não", "Não Sei"],
        respostaCorreta: 0
    }
]

const quiz = document.getElementById("quiz");

quiz.innerHTML = perguntas.map((pergunta, indice) => `
    <div class="questao">
        <h3>Pergunta ${indice + 1}: ${pergunta.texto}</h3>
        <form>
            ${pergunta.opcoes.map((opcao, opcaoIndex) => `
                <input type="radio" name="pergunta${indice}" value="${opcaoIndex}" id="pergunta${indice}-opcao${opcaoIndex}">
                <label for="pergunta${indice}-opcao${opcaoIndex}">${opcao}</label><br>
            `).join('')}
        </form>
    </div>
`).join('') + `
    <button id="ver-pontuacao" type="button">Ver pontuação</button>
    <p id="resultado" aria-live="polite"></p>
`;

document.getElementById("ver-pontuacao").addEventListener("click", () => {
    let pontuacao = 0;

    perguntas.forEach((pergunta, indice) => {
        const respostaSelecionada = document.querySelector(
            `input[name="pergunta${indice}"]:checked`
        );

        if (respostaSelecionada && Number(respostaSelecionada.value) === pergunta.respostaCorreta) {
            pontuacao++;
        }
    });

    document.getElementById("resultado").textContent =
        `Você fez ${pontuacao} de ${perguntas.length} pontos!`;
});