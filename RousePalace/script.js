function toggleInfo(id) {
  const info = document.getElementById(id);

  // Oculta todas las secciones primero
  const allInfos = document.querySelectorAll('.paquete-info');
  allInfos.forEach(section => {
    if (section !== info) {
      section.style.display = 'none';
    }
  });

  // Alterna la visibilidad de la sección seleccionada
  if (info.style.display === 'block') {
    info.style.display = 'none';
  } else {
    info.style.display = 'block';
  }
}

