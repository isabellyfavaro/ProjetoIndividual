const questions = [

    {
        title: "Lançamento",
        question: "O lançamento de um carro refere-se ao ano em que um modelo específico de veículo foi introduzido no mercado. É o momento em que o carro é apresentado ao público e disponibilizado para venda pela primeira vez. Se fosse para você escolher, você gostaria de ter um carro lançado em que década:",
        options: ["Década de 40",
            "Década de 50",
            "Década de 60",
            "Década de 70"],
        points: [1, 2, 3, 4]
    },



    {
        title: "Torque",
        question: "O torque em um carro é a força de rotação que o motor produz, medida em Newton-metros (Nm) ou libras-pé (lb-ft). É essa força que impulsiona o carro para frente e aceleração ele. Se para apertar um parafuso você precisa girar uma chave com mais força, no carro você precisa de mais torque para fazer as rodas se moverem. Se fosse para você escolher, você gostaria de ter um carro com um torque de:",
        options: ["200 à 300",
            "300 à 400",
            "400 à 500",
            "Variável"],
        points: [1, 2, 3, 4]
    },

    {
        title: "Motor",
        question: "A capacidade do motor (cilindrada), é o volume total dos cilindros do motor onde ocorre a combustão, medida em litros (L). Ela indica o tamanho do motor e sua potencial capacidade de produzir potência e torque. Quanto maior ela for, maior serão esses dois. No entanto, motores maiores também tendem a ser menos eficientes em termos de consumo de combustível e podem ser mais pesados. Se fosse para você escolher, você gostaria de ter uma capacidade de:",
        options: ["de 2 a 3L",
            "de 3 a 4L",
            "de 4 a 5L",
            "mais de 5L"],
        points: [1, 2, 3, 4]
    },

    {
        title: "Suspensão",
        question: "A suspensão é o sistema que conecta as rodas à carroceria do veículo, absorvendo impactos e garantindo estabilidade. Suspensão independente permite movimento individual das rodas, eixo rígido conecta diretamente as rodas mantendo-as paralelas, e eixo rígido com molas semi-elípticas usa molas de lâminas para suporte e amortecimento. Se fosse para escolher, qual suspensão você preferiria:",
        options: ["Independente nas quatro rodas",
            "Independente na frente, eixo rígido atrás",
            "Independente na frente, eixo rígido com molas semi-elípticas atrás",
            "Independente na frente, eixo rígido com molas semi-elípticas opcionais atrás"],
        points: [1, 2, 3, 4]
    },

    {
        title: "Direção",
        question: "A direção é o sistema que permite ao motorista controlar a trajetória do veículo. Na direção pinhão e cremalheira, quando você vira o volante, um tipo de engrenagem move uma barra que faz as rodas virarem para onde você quer. Na direção setor e sem-fim, o volante está conectado a uma barra que faz as rodas se moverem, usando um formato de roda dentada para guiar esse movimento. Escolha um tipo de direção:",
        options: ["Pinhão e cremalheira",
            "Setor e sem-fim",
            "",
            ""],
        points: [1, 2, 3, 4]
    },

    {
        title: "Aceleração",
        question: "A aceleração é a rapidez com que um veículo aumenta sua velocidade. Ter uma aceleração muito alta pode proporcionar uma sensação de desempenho esportivo e facilitar ultrapassagens, mas também pode aumentar o consumo de combustível e exigir mais cuidado ao dirigir, especialmente em condições de aderência limitada. Se fosse para você escolher, você gostaria de ter uma aceleração de:",
        options: ["5 à 6 segundos",
            "6 à 7 segundos",
            "7 à 8 segundos",
            "8 à 9 segundos"],
        points: [1, 2, 3, 4]
    },

    {
        title: "Carroceria",
        question: "A carroceria de um carro é a estrutura externa que dá forma a ele. Um cupê é um carro fechado com dois ou quatro assentos e uma linha de teto comum. Um cupê conversível tem um teto retrátil que pode ser abaixado, enquanto um cupê conversível fastback tem um desenho de teto mais esportivo. Um roadster é um tipo de cupê conversível com dois assentos e uma capota removível. Qual formato te agrada mais:",
        options: ["Cupê",
            "Cupê conversível",
            "Cupê conversível fastback",
            "Roadster"],
        points: [1, 2, 3, 4]
    },

    {
        title: "Velocidade Máx.",
        question: "A velocidade máxima de um veículo é a medida máxima de sua capacidade de deslocamento, com base na potência, torque e aerodinâmica do carro. Alcançar essa velocidade requer um equilíbrio entre potência, controle e segurança, e muitos veículos são projetados com limitadores para garantir que ninguém ultrapasse os limites seguros. Você gostaria de ter um carro com velocidade máxima de:",
        options: ["Menos de 170km/h",
            "170km/h à 200km/h",
            "200km/h à 250km/h",
            "250km/h à 300km/h"],
        points: [1, 2, 3, 4]
    },

    {
        title: "Freios",
        question: "Os freios são sistemas que reduzem a velocidade ou param o veículo. Freios a disco nas quatro rodas oferecem melhor desempenho de frenagem e dissipação de calor. Já os freios só na frente com tambores atrás geralmente oferecem boa eficiência, enquanto tambores nas quatro rodas podem ser menos eficazes em frenagens intensas, mas são mais simples e econômicos. Qual a sua preferência de freio:",
        options: ["Discos nas quatro rodas",
            "Tambores nas quatro rodas",
            "Discos na frente e tambores atrás",
            "Tambores na frente e tambores atrás"],
        points: [1, 2, 3, 4]
    },

    {
        title: "Rotação",
        question: "Rotação é a velocidade de rotação do motor, medida em rotações por minuto (RPM). Alta rotação significa que o motor gira rapidamente, proporcionando maior potência em velocidades altas, enquanto baixa rotação é mais eficiente em velocidades baixas, mas sacrifica o desempenho. Rotação variável refere-se à capacidade do motor de se ajustar sua de acordo com a demanda. Escolha a rotação que te agrada mais:",
        options: ["Variável",
            "Alta",
            "Média",
            "Baixa"],
        points: [1, 2, 3, 4]
    },


    {
        title: "Câmbio",
        question: "O câmbio é um sistema que permite mudar as marchas do veículo para controlar a velocidade e o torque do motor. Um câmbio manual de 4 velocidades oferece quatro opções de marcha, enquanto um câmbio manual de 3 velocidades ou automático Powerglide possui três. Um câmbio manual de 5 velocidades oferece uma marcha adicional, e um câmbio automático seleciona automaticamente as marchas. Escolha um câmbio:",
        options: ["Manual de 3 velocidades",
            "Manual de 4 velocidades",
            "Manual de 5 velocidades",
            "Automático"],
        points: [1, 2, 3, 4]
    },
];



const Carros = ["Ferrari 250 GTO", "Ford Mustang 69", "Jaguar", "Chevrolet E-TYPE"];



let currentQuestion = 0;

let answers = { "Ferrari 250 GTO": 0, "Ford Mustang 69": 0, "Jaguar": 0, "Chevrolet E-TYPE": 0};



const questionElement = document.getElementById("question");

const optionsElement = document.getElementById("options");

const resultElement = document.getElementById("result");

function showQuestion() {

    const question = questions[currentQuestion];
  
    questionElement.textContent = question.question;
  
  
  
    optionsElement.innerHTML = '';
  
    question.options.forEach((option, index) => {
  
      const button = document.createElement("button");
  
      button.textContent = option;
  
      button.addEventListener("click", () => selectOption(option, question.points[index]));
  
      optionsElement.appendChild(button);
  
    });
  
  }

function showMenu() {
  window.location.href = "dashboard.html"
}