var Restaurant = function(id, nombre, rubro, ubicacion, horarios, imagen, calificaciones) {
    this.id = id;
    this.nombre = nombre;
    this.rubro = rubro;
    this.ubicacion = ubicacion;
    this.horarios = horarios;
    this.imagen = imagen;
    this.calificaciones = calificaciones;
}

Restaurant.prototype.reservarHorario = function(horarioReservado) {
    this.horarios = this.horarios.filter(horario => horario != horarioReservado);
}

Restaurant.prototype.calificar = function(nuevaCalificacion) {
    if (Number.isInteger(nuevaCalificacion) && nuevaCalificacion > 0 && nuevaCalificacion < 10) {
        this.calificaciones.push(nuevaCalificacion);
    }
}

Restaurant.prototype.obtenerPuntuacion = function() {
    if (this.calificaciones.length === 0) {
        return 0;
    }else {
        return  promedio(sumatoria(this.calificaciones), this.calificaciones.length);
    }
}

function sumatoria(calificaciones){
    let sumatoria = 0;

    for (let i = 0; i < calificaciones.length; i++) {
        sumatoria += calificaciones[i]
    }

    return sumatoria;
}

function promedio(sumatoria, cantidad){
    return Math.round((sumatoria / cantidad) * 10) / 10;
}



