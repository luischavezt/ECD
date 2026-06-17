function seleccionar(valor) {
    document.getElementById('categoriaSeleccionada').value = valor;
    
    // Opcional: Cambiar estilo visual de los botones
    document.querySelectorAll('.btn-categoria').forEach(btn => btn.classList.remove('active'));
    event.currentTarget.classList.add('active');
}