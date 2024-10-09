function validarLogin() {
    const labareda = document.getElementById('username').value;

    const mensagem = document.getElementById('message');

    const labareda1 = "nucleo";

    if (labareda === labareda1) {
        mensagem.style.color = 'green';
        mensagem.textContent = 'acerto, mizeravi';
        window.location.href = 'nivel3.html';

    } else {
        mensagem.style.color = 'red';
        mensagem.textContent = 'qual a fonte disso tudo?';
    }
}