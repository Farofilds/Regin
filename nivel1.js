function validarLogin() {
    const labareda = document.getElementById('username').value;

    const mensagem = document.getElementById('message');

    const labareda1 = "babadook";

    if (labareda === labareda1) {
        mensagem.style.color = 'green';
        mensagem.textContent = 'acerto, mizeravi';
        window.location.href = 'nivel2.html';

    } else {
        mensagem.style.color = 'red';
        mensagem.textContent = 'qual o nome?';
    }
}