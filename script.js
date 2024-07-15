function calcularFatorial() {
    // Seleciona o elemento de entrada e saída
    const numero = parseInt(document.getElementById('numero').value);
    const outputDiv = document.getElementById('output');
    
    // Verifica se o número é válido
    if (isNaN(numero) || numero < 0) {
        outputDiv.textContent = 'Por favor, digite um número inteiro não negativo.';
        return;
    }
    
    let fatorial = 1;
    let i = numero;
    
    while (i > 0) {
        fatorial *= i;
        i--;
    }
    
    // Exibe o resultado no elemento div
    outputDiv.textContent = 'O fatorial de ' + numero + ' é: ' + fatorial;
}