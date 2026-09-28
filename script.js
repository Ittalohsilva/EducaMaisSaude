// Localiza o formulário e a área de mensagem
const formulario = document.getElementById("formulario-cadastro");
const mensagemFormulario = document.getElementById("mensagem-formulario");

// Escuta o envio do formulário
formulario.addEventListener("submit", function (evento) {
    // Impede o recarregamento da página
    evento.preventDefault();

    // Lê o valor digitado no campo nome
    const nome = document.getElementById("nome").value.trim();

    // Exibe a mensagem de confirmação
    mensagemFormulario.textContent =
        "Obrigado, " + nome + "! Seu cadastro foi enviado com sucesso.";

    mensagemFormulario.classList.remove("erro");
    mensagemFormulario.classList.add("sucesso");

    // Limpa os campos do formulário
    formulario.reset();
});

// Rolagem suave ao clicar nos links do menu
const linksInternos = document.querySelectorAll('a[href^="#"]');

linksInternos.forEach(function (link) {
    link.addEventListener("click", function (evento) {
        const destino = document.querySelector(link.getAttribute("href"));

        if (destino) {
            evento.preventDefault();
            destino.scrollIntoView({ behavior: "smooth" });
        }
    });
});
