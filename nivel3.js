function validarLogin() {
    const labareda = document.getElementById('username').value;
    const mensagem = document.getElementById('message');

    const labareda1 = "099 101 117 110 111 116 117 114 110 111";

    if (labareda === labareda1) {
        mensagem.style.color = 'green';
        mensagem.textContent = 'acerto, mizeravi';
        window.location.href = 'nivel4.html';

    } else {
        mensagem.style.color = 'red';
        mensagem.textContent = 'seus olhos são sua melhor ferramenta.';
    }
}