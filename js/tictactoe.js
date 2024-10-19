var turno= false;

function activo(boton) {
    boton.disabled= true;
    if (!turno) {
        boton.value= "X";
    } else {
        boton.value= "O";
    }
    turno = !turno;
}