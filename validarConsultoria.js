/*document.getElementById('form-cnpj').addEventListener('submit', async function (event) {
    event.preventDefault();  

    const cnpj = document.getElementById('cnpj').value;

    if (!validarCNPJ(cnpj)) {
        document.getElementById('resultado').textContent = "CNPJ inválido.";
        return;
    }

    
    const dados = await consultarCNPJ(cnpj);
    if (dados) {
        document.getElementById('resultado').textContent = `CNPJ válido: ${dados.nome}`;
    } else {
        document.getElementById('resultado').textContent = "CNPJ não encontrado.";
    }
});


/*function validarCNPJ(cnpj) {
    cnpj = cnpj.replace(/[^\d]+/g, '');

    if (cnpj.length !== 14) return false;

    if (/^(\d)\1+$/.test(cnpj)) return false;

    let tamanho = cnpj.length - 2;
    let numeros = cnpj.substring(0, tamanho);
    let digitos = cnpj.substring(tamanho);
    let soma = 0;
    let pos = tamanho - 7;

    for (let i = tamanho; i >= 1; i--) {
        soma += numeros.charAt(tamanho - i) * pos--;
        if (pos < 2) pos = 9;
    }

    let resultado = soma % 11 < 2 ? 0 : 11 - (soma % 11);
    if (resultado != digitos.charAt(0)) return false;

    tamanho = tamanho + 1;
    numeros = cnpj.substring(0, tamanho);
    soma = 0;
    pos = tamanho - 7;

    for (let i = tamanho; i >= 1; i--) {
        soma += numeros.charAt(tamanho - i) * pos--;
        if (pos < 2) pos = 9;
    }

    resultado = soma % 11 < 2 ? 0 : 11 - (soma % 11);
    if (resultado != digitos.charAt(1)) return false;

    return true;
}


/*async function consultarCNPJ(cnpj) {
    const url = `https://www.receitaws.com.br/v1/cnpj/${cnpj.replace(/[^\d]+/g, '')}`;

    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error('Erro ao consultar API');
        }

        const data = await response.json();

        if (data.status === 'ERROR') {
            console.log('CNPJ inválido ou não encontrado');
            return null;
        }

        return data;
    } catch (error) {
        console.error('Erro:', error);
        return null;
    }


}*/