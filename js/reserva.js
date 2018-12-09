var Reserva = function(fecha, cantidadPersonas, precioPorPersona, codigoDescuento){
    this.fecha = fecha; 
    this.cantidadPersonas = cantidadPersonas;
    this.precioPorPersona = precioPorPersona; 
    this.codigoDescuento = codigoDescuento;
}

Reserva.prototype.precioBaseReserva = function(){
    return this.cantidadPersonas * this.precioPorPersona;
}

Reserva.prototype.precioTotalReserva = function(){
    return this.precioBaseReserva() + this.calculaAdicionales() -  this.calculaDescuento();
}


Reserva.prototype.calculaDescuento = function(){
    var descuento = 0;

    switch(true){
        case (this.cantidadPersonas >= 4 && this.cantidadPersonas <= 6) : 
            descuento += this.precioBaseReserva() * 0.05;
            break;
        case (this.cantidadPersonas >= 7 && this.cantidadPersonas <= 8) : 
            descuento += this.precioBaseReserva() * 0.10;
            break;
        case (this.cantidadPersonas > 8) : 
            descuento += this.precioBaseReserva() * 0.15;
            break;
    }

    switch(this.codigoDescuento){
        case "DES15": 
            descuento += this.precioBaseReserva() * 0.15;
            break;
        case "DES200": 
            descuento += 200;
            break;
        case "DES1": 
            descuento += this.precioPorPersona;
            break;
    }

    return descuento;
}

Reserva.prototype.calculaAdicionales = function(){
    var adicionales = 0;

    switch(this.fecha.getDay()){
        case 0:
        case 5:
        case 6: adicionales += this.precioBaseReserva() * 0.10;
            break;
    }

    switch(this.fecha.getHours()){
        case 13:
        case 20: adicionales += this.precioBaseReserva() * 0.05;
            break;
    }

    return adicionales;

}