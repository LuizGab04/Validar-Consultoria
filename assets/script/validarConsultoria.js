function SendMail(event) {
    event.preventDefault(); // Previne o comportamento padrão do formulário

    let dados = {
        nome: document.getElementById("nome").value,
        estado: document.getElementById("estado").value,
        email: document.getElementById("emailCorp").value,
        ddd: document.getElementById("ddd").value,
        telefone: document.getElementById("telefone").value,
        cargo: document.getElementById("cargo").value,
        faturamento: document.getElementById("faturamento").value
    };

    emailjs.send('service_52q6iq9', 'template_5rmfbvr', dados).then(
        (response) => {
            console.log('SUCCESS!', response.status, response.text);
                alert("Enviado!")
        },
        (error) => {
            console.log('FAILED...', error);
            // Adicione qualquer ação em caso de falha, como uma mensagem de erro
        }
    );
}
