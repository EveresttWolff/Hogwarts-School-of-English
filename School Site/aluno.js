function showCasa(casa) {
    const casas = document.querySelectorAll('.casa');
    casas.forEach(casa => casa.style.display = 'none');
    
    document.getElementById(`caso-${casa}`).style.display = 'flex';
}
