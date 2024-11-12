function mostrarModulo(modulo) {
    for (let i = 1; i <= 7; i++) {
        const moduloElemento = document.getElementById('modulo-' + i);
        moduloElemento.style.display = 'none';
    }

    const moduloSelecionado = document.getElementById('modulo-' + modulo);
    moduloSelecionado.style.display = 'block';
}

mostrarModulo(1);