var resultado="";
const apellidosAlemanes = [
    "Müller", "Schmidt", "Schneider", "Fischer", "Weber",
    "Meyer", "Wagner", "Becker", "Hoffmann", "Schulz",
    "Koch", "Richter", "Klein", "Wolf", "Schröder",
    "Neumann", "Schwarz", "Zimmermann", "Braun", "Hartmann",
    "Lange", "Schmitt", "Werner", "Krause", "Meier",
    "Sommer", "König", "Engel", "Herrmann", "Walter",
    "Lange", "Pohl", "Richter", "Fuchs", "Busch",
    "Schreiber", "Zimmer", "Jansen", "Günther", "Vogel",
    "Hermann", "Hofmann", "Keller", "Wolf", "Braun",
    "Engelhardt", "Graf", "Albrecht", "Wiegand", "Günther",
    "Schulte", "Seidel", "Huber", "Schubert", "Roth",
    "Stiegler", "Dietrich", "Schrader", "Möller", "Lorenz",
    "Kiefer", "Götz", "Krauß", "Riedel", "Arnold",
    "Günzel", "Beck", "Dreyer", "Witt", "Putz",
    "Huber", "Baumann", "Bock", "Engel", "Fröhlich",
    "Krüger", "Meyer", "Keller", "Wolf", "Wenzel",
    "Weiss", "Otten", "Schulze", "Meyer", "Schmitt",
    "Möller", "Schreiber", "Fischer", "Schmitt", "Pfeiffer",
    "Fiedler", "Ziegler", "Engel", "Senger", "Friedrich",
    "Sauter", "Moser", "Eberhardt", "Vogt", "Schilling"
];

const apellidosEspanoles = [
    "García", "Fernández", "González", "Rodríguez", "López",
    "Martínez", "Sánchez", "Pérez", "Gómez", "Martín",
    "Díaz", "Moreno", "Muñoz", "Álvarez", "Romero",
    "Jiménez", "Molina", "Vázquez", "Castro", "Ortiz",
    "Ramos", "Delgado", "Navarro", "Torres", "Salazar",
    "Cruz", "Reyes", "Hernández", "Jiménez", "Luna",
    "Márquez", "Aguilar", "Ríos", "Cano", "Pacheco",
    "Bermúdez", "Vega", "Serrano", "Hidalgo", "Cardenas",
    "Silva", "Maldonado", "Cordero", "Valdez", "Pérez",
    "Téllez", "Santos", "Alonso", "Cabrera", "Ríos",
    "Quintero", "Ceballos", "Montoya", "Camacho", "Castillo",
    "Solano", "Figueroa", "Duarte", "Villarreal", "Castañeda",
    "Pérez", "Ocampo", "Orozco", "Gutiérrez", "Salas",
    "Acosta", "Villar", "Peña", "Coronado", "Arce",
    "Mora", "Núñez", "Bautista", "Ramírez", "Paniagua",
    "Gonzales", "Mena", "Correa", "Sánchez", "Serrato",
    "Montes", "Salgado", "Aguilera", "Aranda", "Tovar",
    "Solares", "Zapata", "Contreras", "Ferrer", "Salvador",
    "Medina", "Pérez", "Arroyo", "Lara", "Saavedra",
    "Rubio", "Iglesias", "Esparza", "Benítez", "Garrido"
];

const nombresChinos = [
    "Li Wei", "Wang Fang", "Zhang Jie", "Liu Yang", "Chen Hao",
    "Zhao Min", "Yang Xin", "Wu Lei", "Sun Li", "Zhou Rui",
    "Guo Qiang", "Ma Lin", "Xu Ying", "Shen Yu", "Deng Fei",
    "Zhu Xi", "Huang Tao", "Gao Feng", "Luo Ming", "Cao Jun",
    "Yuan Zhi", "Tang Lei", "He Jia", "Jin Hua", "Dong Mei",
    "Fang Qian", "Cheng Yi", "Liang Hong", "Xie Bo", "Peng Yi",
    "Xiao Yan", "Shi Hui", "Yao Wei", "Zheng Hao", "Fan Bing",
    "Qi Ming", "Hao Jie", "Hu Xuan", "Pei Ning", "Kang Lei",
    "Lin Cheng", "Han Yue", "Yu Fei", "Mo Yan", "Bao Long",
    "Xue Feng", "Lai Jing", "Lu Yun", "Jiang Tao", "Ren Qi",
    "Fu Qiang", "Dai Wei", "Su Ling", "Pan Kai", "Ke Yan",
    "Jiang Ping", "Lei Meng", "Zou Xiang", "Shang Yu", "Qin Yue",
    "Lian Hong", "Gu An", "Hou Ming", "Zhong Qiang", "Qiao Li",
    "Cai Wei", "Tan Bin", "Long Fei", "Miao Lin", "Tian Yi",
    "Guan Qian", "Qu Bo", "Dong Xue", "Kou Ping", "Liu Jie",
    "Zeng Lin", "Feng Xin", "Gong Rui", "Wei Zhi", "Lü Ming",
    "Zhao Lei", "Chen Xi", "Sun Tao", "Wang Jie", "Li Hua",
    "Zhang Min", "Yang Rui", "Liu Fei", "Xu Tao", "Deng Ming",
    "Huang Li", "Gao Jun", "Luo Fang", "Cao Xin", "Tang Zhi",
    "Yuan Fei", "He Ming", "Shen Lei", "Ma Rui", "Wu Bin"
];

const nombresEspanol = [
    "Carlos", "María", "José", "Laura", "Antonio",
    "Lucía", "Manuel", "Carmen", "Francisco", "Elena",
    "Javier", "Ana", "Sergio", "Raquel", "David",
    "Isabel", "Pablo", "Cristina", "Pedro", "Beatriz",
    "Alejandro", "Marta", "Rafael", "Clara", "Roberto",
    "Nuria", "Juan", "Sara", "Miguel", "Eva",
    "Álvaro", "Patricia", "Hugo", "Sofía", "Diego",
    "Teresa", "Daniel", "Irene", "Luis", "Alicia",
    "Ignacio", "Adriana", "Felipe", "Rosa", "Andrés",
    "Victoria", "Fernando", "Silvia", "Alberto", "Gloria",
    "Mario", "Pilar", "Enrique", "Raúl", "Cristina",
    "Joaquín", "Sandra", "Lourdes", "Jorge", "Claudia",
    "Ricardo", "Belén", "Tomás", "Almudena", "Emilio",
    "Carolina", "Víctor", "Celia", "Ángel", "Gonzalo",
    "Paula", "Óscar", "Rocío", "Adrián", "Cristina",
    "Santiago", "Natalia", "Rubén", "Andrea", "Marcos",
    "Esteban", "Lorena", "Gabriel", "Montserrat", "Mateo",
    "Julia", "Héctor", "Inés", "Samuel", "Verónica",
    "Guillermo", "Noelia", "Arturo", "Lorena", "Santiago",
    "Olga", "Julián", "Iker", "Daniela", "Blanca"
];

function generarFechaAleatoria(inicio, fin) {
    // Convierte las fechas de entrada a milisegundos
    const fechaInicio = new Date(inicio).getTime();
    const fechaFin = new Date(fin).getTime();

    // Genera un timestamp aleatorio entre las dos fechas
    const timestampAleatorio = Math.random() * (fechaFin - fechaInicio) + fechaInicio;

    // Crea un objeto Date a partir del timestamp aleatorio
    const fechaAleatoria = new Date(timestampAleatorio);

    // Formatea la fecha en año-mes-día
    const año = fechaAleatoria.getFullYear();
    const mes = String(fechaAleatoria.getMonth() + 1).padStart(2, '0'); // +1 porque los meses son 0-indexados
    const dia = String(fechaAleatoria.getDate()).padStart(2, '0');

    return `${año}-${mes}-${dia}`;
}

function generar() {
    resultado=`CREATE DATABASE IF NOT EXISTS sistema_escolar; <br>
    USE sistema_escolar;<br>
    DROP TABLE IF EXISTS alumnos; <br>
    
    CREATE TABLE IF NOT EXISTS alumnos ( <br>
    matricula BIGINT UNSIGNED NOT NULL UNIQUE CHECK(CHAR_LENGTH(matricula)=9), <br>
    PRIMARY KEY (matricula), <br>
    apellido1 VARCHAR(255) NOT NULL, <br>
    apellido2 VARCHAR(255), <br>
    nombres VARCHAR(255) NOT NULL, <br>
    correo VARCHAR(255) NOT NULL, <br>
    fecha_nacimiento DATE NOT NULL <br>
    ); <br>

    INSERT INTO alumnos VALUES `;
    var matricula=223090001;
    for (let i = 0; i < 50001; i++) {
        resultado+=`('${matricula++}',
        '${apellidosAlemanes[Math.floor(Math.random()*100)]}',
        '${apellidosEspanoles[Math.floor(Math.random()*100)]}',
    '${Math.floor(Math.random()*2)+1 == 1 ? nombresEspanol[Math.floor(Math.random()*100)] : nombresChinos[Math.floor(Math.random()*100)] +" "+  nombresEspanol[Math.floor(Math.random()*100)]}',
    '${matricula-1}@unikino.edu.mx',
    '${generarFechaAleatoria('1930-01-01', '2005-12-31')}'),
    <br>`;
    }
    resultado=resultado.slice(0,-10)+";";
    document.getElementById("parrafo").innerHTML = resultado;
}

function generar_archivo() {
    var archivo = document.createElement("a");
    var salida = resultado.replace(/<br>/g,"\n").trim();
    archivo.setAttribute("href","data:text/plane;charset=utf-8,"+encodeURIComponent(salida));
    archivo.setAttribute("download","sistema_escolar.sql");
    archivo.style.display="none";
    document.body.appendChild(archivo);
    archivo.click();
    document.body.removeChild(archivo);
} 