function mostrarVentana(titulo, infoAdicional, imagen) {
    document.getElementById('tituloActividad').innerText = titulo;
    document.getElementById('informacionAdicional').innerText = infoAdicional;
    document.getElementById('imagenActividad').src = imagen;
    document.getElementById('ventanaEmergente').style.display = 'block';
}

function cerrarVentana() {
    document.getElementById('ventanaEmergente').style.display = 'none';
}

document.addEventListener('DOMContentLoaded', function() {
    const fotosActividades = document.querySelectorAll('.Foto_Actividad img, .Actividad_Foto img');
    const imagenesActividades = ['../IMG/pilar2.jpg', '../IMG/aljaferia2.jpeg', '../IMG/laseo2.jpg', '../IMG/tubo2.jpg', '../IMG/mercado2.jpeg', '../IMG/teatro2.jpg'];
    fotosActividades.forEach(function(foto, index) {
        foto.addEventListener('click', function() {
            const titulo = this.parentElement.querySelector('strong').innerText;
            const infoAdicional = this.parentElement.querySelector('.info-adicional').innerText;
            const imagen = imagenesActividades[index];
            mostrarVentana(titulo, infoAdicional, imagen);
        });
    });
});