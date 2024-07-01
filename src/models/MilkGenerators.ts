import {MilkGenerator} from "./MilkGenerator.ts";

import diego from "../assets/generators/diego.png";
import queijo from "../assets/generators/queijo.png";
import iogurte from "../assets/generators/iogurte.png";
import fazenda from "../assets/generators/fazenda.png";
import maquinaOrdenha from "../assets/generators/maquina-ordenha.png";
import mina from "../assets/generators/mina.png";
import fabrica from "../assets/generators/fabrica.png";
import multinacional from "../assets/generators/multinacional.png";
import ovni from "../assets/generators/ovni.png";

export const milkGenerators: MilkGenerator[] = [
    {
        icon: diego,
        amount: 0,
        generatorName: "Diego",
        milkPerSecond: 0.1,
        initialCost: 15,
        currentCost: 15,
        description: "Diego é um cara legal, ele te ajuda a ordenhar as vacas. Seu amor" +
            " por vacas é inicialmente estranho, mas você se acostuma.",
        upgrades: [
            {
                name: "Aumento do Amor por Vacas",
                description: "Diego passa a amar vacas ainda mais, aumentando sua eficiência.",
                cost: 100,
                boostFactor: 1.5,
                wasBought: false
            },
            {
                name: "Aumento da Velocidade de Ordenha",
                description: "Diego aprende a ordenhar vacas mais rapidamente.",
                cost: 500,
                boostFactor: 1.5,
                wasBought: false
            },
            {
                name: "Aumento da Eficiência de Ordenha",
                description: "Diego se torna mais eficiente na ordenha de vacas.",
                cost: 1000,
                boostFactor: 1.5,
                wasBought: false
            },
            {
                name: "Aumento da Produção de Leite",
                description: "Diego passa a ordenhar mais leite das vacas.",
                cost: 5000,
                boostFactor: 1.5,
                wasBought: false
            },
            {
                name: "A Amálgama",
                description: "Diego se funde com as vacas, a produção de leite" +
                    " atinge níveis inimagináveis.",
                cost: 10000,
                boostFactor: 1.5,
                wasBought: false
            }
        ]
    },
    {
        icon: queijo,
        amount: 0,
        generatorName: "Queijo",
        milkPerSecond: 1,
        initialCost: 100,
        currentCost: 100,
        description: "O queijo é um ótimo gerador de leite. Ele é feito de leite, então" +
            " faz sentido que ele gere leite.",
        upgrades: [
            {
                name: "Camembert Mágico",
                description: "Camembert é uma delícia.",
                cost: 500,
                boostFactor: 1.5,
                wasBought: false
            },
            {
                name: "Gorgonzola Fantástico",
                description: "Verdinho e gostoso. Fede um pouco.",
                cost: 1000,
                boostFactor: 1.5,
                wasBought: false
            },
            {
                name: "Parmesão Poderoso",
                description: "Nham, bom no macarrão.",
                cost: 5000,
                boostFactor: 1.5,
                wasBought: false
            },
            {
                name: "Provolone Perfeito",
                description: "Tem gosto de Natal.",
                cost: 10000,
                boostFactor: 1.5,
                wasBought: false
            },
            {
                name: "Parmigiano Reggiano Divino",
                description: "A possibilidade de conhecer Deus e se horrorizar com sua" +
                    " imagem. Costuma gerar uma madrugada no banheiro chorando.",
                cost: 20000,
                boostFactor: 1.5,
                wasBought: false
            },
        ]
    },
    {
        icon: iogurte,
        amount: 0,
        generatorName: "Iogurte",
        milkPerSecond: 8,
        initialCost: 1100,
        currentCost: 1100,
        description: "Não podemos citar marcas por medo de copyrights, mas é gostoso.",
        upgrades: [
            {
                name: "Iogurte de Morango",
                description: "O sabor preferido de muita gente.",
                cost: 5000,
                boostFactor: 1.5,
                wasBought: false
            },
            {
                name: "Iogurte de Coco",
                description: "Praia, sol, calor e iogurte de coco.",
                cost: 10000,
                boostFactor: 1.5,
                wasBought: false
            },
            {
                name: "Iogurte de Limão",
                description: "Azedinho e gostoso.",
                cost: 50000,
                boostFactor: 1.5,
                wasBought: false
            },
            {
                name: "Iogurte de Maracujá",
                description: "Maracujá é uma fruta subestimada.",
                cost: 100000,
                boostFactor: 1.5,
                wasBought: false
            },
            {
                name: "Iogurte de Belzebu",
                description: "Um pacto feito e você verá mais leite do que poderia beber" +
                    " em vidas inteiras.",
                cost: 200000,
                boostFactor: 1.5,
                wasBought: false
            },
        ]
    },
    {
        icon: fazenda,
        amount: 0,
        generatorName: "Fazenda",
        milkPerSecond: 47,
        initialCost: 12000,
        currentCost: 12000,
        description: "A fazenda é um ótimo lugar para gerar leite. Vacas, campos e" +
            " celeiros são ótimos para isso.",
        upgrades: [
            {
                name: "Aquecedores de Baias",
                description: "Aquecedores privados em suas baias fazem as vacas mais felizes.",
                cost: 50000,
                boostFactor: 1.5,
                wasBought: false
            },
            {
                name: "Música Clássica",
                description: "Vacas gostam de música clássica, elas produzem mais leite" +
                    " quando ouvem.",
                cost: 100000,
                boostFactor: 1.5,
                wasBought: false
            },
            {
                name: "Vacas Felizes",
                description: "Vacas felizes produzem mais leite. Dê a elas um bom tratamento.",
                cost: 500000,
                boostFactor: 1.5,
                wasBought: false
            },
            {
                name: "Vacas de Ouro",
                description: "Vacas de ouro produzem leite de ouro. Literalmente.",
                cost: 1000000,
                boostFactor: 1.5,
                wasBought: false
            },
            {
                name: "Demo-vacas",
                description: "As vacas de Stranger Things produzem muito mais leite",
                cost: 2000000,
                boostFactor: 1.5,
                wasBought: false
            }
        ]
    },
    {
        icon: maquinaOrdenha,
        amount: 0,
        generatorName: "Máquina de Ordenhar",
        milkPerSecond: 260,
        initialCost: 130000,
        currentCost: 130000,
        description: "A máquina de ordenhar é uma invenção incrível que permite ordenhar" +
            " vacas muito rapidamente. É conhecida por nossos desenvolvedores como máquina" +
            " sugadora de tetas",
        upgrades: [
            {
                name: "Aumento da Velocidade de Ordenha",
                description: "A máquina de ordenha passa a ordenhar mais rapidamente.",
                cost: 500000,
                boostFactor: 1.5,
                wasBought: false
            },
            {
                name: "Aumento da Eficiência de Ordenha",
                description: "A máquina de ordenha se torna mais eficiente.",
                cost: 1000000,
                boostFactor: 1.5,
                wasBought: false
            },
            {
                name: "Aumento da Produção de Leite",
                description: "A máquina de ordenha passa a ordenhar mais leite.",
                cost: 5000000,
                boostFactor: 1.5,
                wasBought: false
            },
            {
                name: "Máquina de Ordenhar de Ouro",
                description: "A máquina de ordenhar de ouro suga as tetas das vacas de forma mais gentil.",
                cost: 10000000,
                boostFactor: 1.5,
                wasBought: false
            },
            {
                name: "Hiper-Máquina de Ordenha",
                description: "Máquina de Ordenha na quarta dimensão, para sugar leite em dimensões escondidas",
                cost: 20000000,
                boostFactor: 1.5,
                wasBought: false
            }
        ]
    },
    {
        icon: mina,
        amount: 0,
        generatorName: "Minas de Leite",
        milkPerSecond: 1400,
        initialCost: 1400000,
        currentCost: 1400000,
        description: "As minas de leite são minas subterrâneas que extraem leite do solo." +
            " Não pergunte como isso é possível.",
        upgrades: [
            {
                name: "Escravidão Moderna",
                description: "Pague pouco, lucre muito.",
                cost: 5000000,
                boostFactor: 1.5,
                wasBought: false
            },
            {
                name: "Más Condições de Trabalho",
                description: "As camas podem ser de papelão.",
                cost: 10000000,
                boostFactor: 1.5,
                wasBought: false
            },
            {
                name: "Refeição Única",
                description: "Um mineiro alimentado é um bom trabalhador, mas, cá entre nós, refeições demoram muito.",
                cost: 50000000,
                boostFactor: 1.5,
                wasBought: false
            },
            {
                name: "Minas Radioativas",
                description: "Contadores de Geiger não são necessários.",
                cost: 100000000,
                boostFactor: 1.5,
                wasBought: false
            },
            {
                name: "Minas Interdimensionais",
                description: "Vamos para um lugar sem leis trabalhistas.",
                cost: 200000000,
                boostFactor: 1.5,
                wasBought: false
            }
        ]
    },
    {
        icon: fabrica,
        amount: 0,
        generatorName: "Fábrica de Leite",
        milkPerSecond: 7800,
        initialCost: 20000000,
        currentCost: 20000000,
        description: "A fábrica de leite é um lugar onde o leite é fabricado. Não é" +
            " feito de vacas, mas de máquinas. Não se importe com a cor.",
        upgrades: [
            {
                name: "Aumento da Velocidade de Produção",
                description: "As máquinas passam a produzir leite mais rapidamente.",
                cost: 50000000,
                boostFactor: 1.5,
                wasBought: false
            },
            {
                name: "Aumento da Eficiência de Produção",
                description: "As máquinas passam a produzir leite de forma mais eficiente.",
                cost: 100000000,
                boostFactor: 1.5,
                wasBought: false
            },
            {
                name: "Aumento da Produção de Leite",
                description: "As máquinas passam a produzir mais leite.",
                cost: 500000000,
                boostFactor: 1.5,
                wasBought: false
            },
            {
                name: "Fábrica de Leite de Ouro",
                description: "Fábrica de leite de ouro, o leite é mais valioso.",
                cost: 1000000000,
                boostFactor: 1.5,
                wasBought: false
            },
            {
                name: "Fábrica de Leite Interdimensional",
                description: "Fábrica de leite em dimensões escondidas.",
                cost: 2000000000,
                boostFactor: 1.5,
                wasBought: false
            }
        ]
    },
    {
        icon: multinacional,
        amount: 0,
        generatorName: "Multinacional do Leite",
        milkPerSecond: 44000,
        initialCost: 330000000,
        currentCost: 330000000,
        description: "A multinacional do leite é uma empresa global que domina o mercado" +
            " de leite. Eles têm vacas em todos os lugares.",
        upgrades: [
            {
                name: "Monopólio",
                description: "Compre a concorrência.",
                cost: 500000000,
                boostFactor: 1.5,
                wasBought: false
            },
            {
                name: "Lobby",
                description: "Compre políticos.",
                cost: 1000000000,
                boostFactor: 1.5,
                wasBought: false
            },
            {
                name: "Suborno",
                description: "Compre a justiça.",
                cost: 5000000000,
                boostFactor: 1.5,
                wasBought: false
            },
            {
                name: "Monopólio Global",
                description: "Compre o mundo.",
                cost: 10000000000,
                boostFactor: 1.5,
                wasBought: false
            },
            {
                name: "Multinacional Interdimensional",
                description: "Compre dimensões escondidas.",
                cost: 20000000000,
                boostFactor: 1.5,
                wasBought: false
            }
        ]
    },
    {
        icon: ovni,
        amount: 0,
        generatorName: "OVNI",
        milkPerSecond: 260000,
        initialCost: 5100000000,
        currentCost: 5100000000,
        description: "O OVNI é um objeto voador não identificado que gera leite. Estudos" +
            " sugerem que seu leite vem de vacas interdimensionais.",
        upgrades: [
            {
                name: "Abdução de Vacas",
                description: "Abduza vacas para aumentar a produção de leite.",
                cost: 5000000000,
                boostFactor: 1.5,
                wasBought: false
            },
            {
                name: "Abdução de Humanos",
                description: "Abduza humanos para aumentar a produção de leite.",
                cost: 10000000000,
                boostFactor: 1.5,
                wasBought: false
            },
            {
                name: "Criação de Hibridos Humanos-Vaca",
                description: "Produção maior e fora do nosso entendimento.",
                cost: 50000000000,
                boostFactor: 1.5,
                wasBought: false
            },
            {
                name: "Mutações Genéticas",
                description: "Crie humanos-vaca super produtivos.",
                cost: 100000000000,
                boostFactor: 1.5,
                wasBought: false
            },
            {
                name: "Pocket Dimension",
                description: "Crie uma dimensão para produção de leite.",
                cost: 200000000000,
                boostFactor: 1.5,
                wasBought: false
            }
        ]
    },
];