// Datos del alumno /inscripcion
function Alumno(nombre, apellidos, edad){
    this.nombre = nombre; 
    this.apellidos = apellidos;
    this.edad = edad; 
    this.materiasInscritas=[];
    this.calificaciones = {};
}

// Funcion para dar de alta un alumno (materias)
function altaAlumno(nombre, apellidos,edad){
    return new Alumno(nombre,apellidos,edad);
}

//inscribir alumno
function inscribirClase(alumno,materia){
    alumno.Materias.push(materia);
}

//Asignar calificacion
function AsignarCalificacion(alumno,materia,calificacion){
    alumno.calificaciones[materia] = calificacion;
}

//crear grupos
function crearGrupos(alumnos, numGrupos){
    let grupos = [];
    let indice = 0;
    //grupos sin alumnos
    for (let i = 0; i < numGrupos; i++){
        grupos.push([]);
    }
}

//Buscar alumno
function BuscarPorNombre(alumnos,nombre){
    let resultado =[];
    for (let alumno of alumnos){
        if(alumno.nombre === nombre){
            resultado.push(alumno);
        }
    }
    return resultado;
}

function CalcularPromedio(){
    var v1 = document.getElementById("n1").value;
    var v2 = document.getElementById("n2").value;
    var v3 = document.getElementById("n3").value;
    var pro = (parseFloat(v1)+parseFloat(v2)+parseFloat(v3))/3;
    document.getElementById("promedio").innerHTML = pro;
 
//calcular promedio
if (contador > 0){
    return suma/ contador;
} else { 
 //mensaje de alerta
 return "El alumno no ha sido calificado";
}
}
  
function obtenerPromedioGrupo(){
    var v1 = document.getElementById("n1").value;
    var v2 = document.getElementById("n2").value;
    var v3 = document.getElementById("n3").value;
    var pro = (parseFloat(v1)+parseFloat(v2)+parseFloat(v3))/3;
    document.getElementById("promedio").innerHTML = pro;
//calcular promedio y devolver
if(contador > 0){
    return suma/contador;
  } else {
    return "Por el momento el grupo no tiene calificaciones asignadas";
  }
}

//lista de alumnos de forma ascedente y descedente
function obtenerListaOrdenada(alumnos, orden){
    let copia = alumnos.slice();
    copia.sort(function(a,b){
        let promedioA = obtenerPromedio(a);
        let promedioB = obtenerPromedio(b);
        //comparar el orden
        if (typeof promedioA === "number" && typeof promedioB === "number"){
            if (orden === "asc"){
                //ascedente
                return promedioA - promedioB;
    
            } else if (orden === "desc"){
                //descedente
                return promedioB - promedioA;
            } else{
                //no es valido
                return 0;
            }
        } else{
            // sino es numero
            return 0;
        }
    });
    return copia;

}









  



