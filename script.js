function mostrarResultado(texto){
    document.getElementById('resultado').innerHTML = `<pre>${texto}</pre>`;
}

function desafio1(){
    let INDICE = 13, SOMA = 0, K = 0;

    while (K < INDICE) {
        K++;
        SOMA += K;
    }

    mostrarResultado(`O valor da soma é: ${SOMA}`);
}

function desafio2(){
    const numero = parseInt(prompt("Informe um número para verificar se está na sequência de fibonacci: "),10);

    let a = 0, b = 1;

    while (b < numero){
        [a,b] = [b, a + b];
    }

    const pertence = (b === numero) || ( numero === 0);

    mostrarResultado(`O número ${numero} ${pertence ? "pertence" : "não pertence"} à sequência de Fibonacci. `);

}

function desafio3() {
    const faturamentoMensal = [
        { dia: 1, valor: 0 },
        { dia: 2, valor: 100 },
        { dia: 3, valor: 200 },
        { dia: 4, valor: 300 },
        { dia: 5, valor: 0 },
        { dia: 6, valor: 400 },
        { dia: 7, valor: 500 },
    ];

    const valores = faturamentoMensal.map(d => d.valor).filter(v => v > 0);
    const menorValor = Math.min(...valores);
    const maiorValor = Math.max(...valores);
    const mediaMensal = valores.reduce((acc, v) => acc + v, 0) / valores.length;
    const diasAcimaMedia = valores.filter(v => v > mediaMensal).length;

    mostrarResultado(`Menor valor: ${menorValor}\nMaior valor: ${maiorValor}\nDias acima da média: ${diasAcimaMedia}`);
}


function desafio4(){
    const faturamentoEstados = {
        SP: 67836.43,
        RJ: 36678.66,
        MG: 29229.88,
        ES: 27165.48,
        Outros: 19849.53,
    };

    const total = Object.values(faturamentoEstados).reduce((acc, val) => acc + val, 0);
    const percentuais = Object.entries(faturamentoEstados).map(([estado, valor]) => {
        return `${estado}: ${(valor / total * 100).toFixed(2)}%`;
    });

    mostrarResultado(percentuais.join('\n'));
}

function desafio5(){
    const texto = prompt("Digite uma string para inverter:");
    let invertido = "";

    for (let i = texto.length - 1; i >= 0; i--) {
        invertido += texto[i];
    }

    mostrarResultado(`String invertida: ${invertido}`);
}