contador=0;
        function cellclick(celda){
            if (window.getComputedStyle(celda).backgroundImage=="none") {
                if(contador<8){
                    celda.style=`
                        background-image: url(./img/reina.png);
                        background-size: contain;
                        background-repeat:no-repeat;
                        background-position:center;`;
                    document.getElementById("contador").innerHTML=`<p>Contador=${++contador}</p>`;
                }
            } else {
                celda.style=`
                    background-image:none;
                `;
                document.getElementById("contador").innerHTML=`<p>Contador=${--contador}</p>`
            }
        }

        function cambiar(r,c) {
            var celda = document.getElementById("tablero");
            var r1=r, c1=c, r2=r, c2=c, r3=r, c3=c, r4=r, c4=c;

            for (let i = 0; i < 8; i++){
                celda.rows[r].cells[i].style.backgroundColor="#ff0000";
                celda.rows[i].cells[c].style.backgroundColor="#ff0000";
                if (r1 < 8 && c1 < 8) {
                    celda.rows[r1++].cells[c1++].style.backgroundColor="#ff0000";
                }

                if (r2 >= 0 && c2 > -1) {
                    celda.rows[r2--].cells[c2--].style.backgroundColor="#ff0000";
                }

                if (r3 > -1 && c3 < 8) {
                    celda.rows[r3--].cells[c3++].style.backgroundColor="#ff0000";
                }

                if (r4 < 8 && c4 >= 0) {
                    celda.rows[r4++].cells[c4--].style.backgroundColor="#ff0000";
                }
            }
        }

        function limpiar() {
            var celdas = document.getElementsByTagName("td");
            for(let i = 0; i < celdas.length; i++) {
                celdas[i].style.backgroundColor="";
            }
        }

        function limpiarTodo() {
            var celda = document.getElementById("tablero").getElementsByTagName("td");
            for (let i = 0; i < celda.length; i++) {
                celda[i].style="background-image:none;";
            }
        }

        function solucion1() {  
            limpiarTodo();
            var celda=document.getElementById("tablero");
            var estilo= `
            background-image: url(./img/reina.png);
            background-size: cover;
            background-repeat: no-repeat;
            background-position: center;`;
            celda.rows[0].cells[3].style=estilo;
            celda.rows[1].cells[6].style=estilo;
            celda.rows[2].cells[2].style=estilo;
            celda.rows[3].cells[7].style=estilo;
            celda.rows[4].cells[1].style=estilo;
            celda.rows[5].cells[4].style=estilo;
            celda.rows[6].cells[0].style=estilo;
            celda.rows[7].cells[5].style=estilo;
        }

        function solucion2() {
            limpiarTodo();
            var celda=document.getElementById("tablero");
            var estilo= `
            background-image: url(./img/reina.png);
            background-size: cover;
            background-repeat: no-repeat;
            background-position: center;`;
            celda.rows[0].cells[3].style=estilo;
            celda.rows[1].cells[5].style=estilo;
            celda.rows[2].cells[7].style=estilo;
            celda.rows[3].cells[2].style=estilo;
            celda.rows[4].cells[0].style=estilo;
            celda.rows[5].cells[6].style=estilo;
            celda.rows[6].cells[4].style=estilo;
            celda.rows[7].cells[1].style=estilo;
        }

        function solucion3() {
            limpiarTodo();
            var celda=document.getElementById("tablero");
            var estilo= `
            background-image: url(./img/reina.png);
            background-size: cover;
            background-repeat: no-repeat;
            background-position: center;`;
            celda.rows[0].cells[4].style=estilo;
            celda.rows[1].cells[6].style=estilo;
            celda.rows[2].cells[3].style=estilo;
            celda.rows[3].cells[0].style=estilo;
            celda.rows[4].cells[2].style=estilo;
            celda.rows[5].cells[7].style=estilo;
            celda.rows[6].cells[5].style=estilo;
            celda.rows[7].cells[1].style=estilo;
        }

        function soluciones() {
            var solucion = document.getElementById("opciones").value;
            switch(solucion) {
                case "1":
                    solucion1();
                    break;
                case "2":
                    solucion2();
                    break;
                case "3":
                    solucion3();
                    break;
                default:
                    limpiarTodo();
                    break;
            }
        }