function mostrarMaterial(material) {
    for (let i = 1; i <= 4; i++) {
        const materialElemento = document.getElementById('material-' + i);
        materialElemento.style.display = 'none';
    }

    const materialSelecionado = document.getElementById('material-' + material);
    materialSelecionado.style.display = 'block';
}

mostrarMaterial(1);