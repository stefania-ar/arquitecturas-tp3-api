document.addEventListener("DOMContentLoaded", function () {
    console.log("hola");

    //botones
    const botonBuscarPorID = document.getElementById("btn1");
    const botonBuscarPorCarreras= document.getElementById("btn2");
    const botonMatricular= document.getElementById("btn3");

    //variables
    let id = document.getElementById("input1").value;
    let container= document.getElementById("container");
    let url ="https://ghibliapi.herokuapp.com/films";

    //eventos
    botonBuscarPorID.addEventListener("click", getAlumnoById);
    botonBuscarPorCarreras.addEventListener("click", getEstudiantesByCarrera);
    botonMatricular.addEventListener("click", matricular);

        async function fetchf(url){
        console.log("alo");
            try {
                let response = await fetch(url);
                if (response.ok) {
                    let t = await response.json();
                    console.log(t);
                }else{
                    container.innerHTML = "<h1>Error - Failed URL!</h1>";
                }
            }
            catch(error){

            }
        }

    //FUNCIONES 
    //   GET  
    function getAlumnoById(){
        url= "/estudiantes/{"+id+"}";
        fetchf(url);
    }

    function getEstudiantesByCarrera(){
            url= "/estudiantes/{"+ciudad+"}/{"+idCarrera+"}";
            fetchf(url);
        }
    
    //FUNCIONES
    //  POST
    function matricular(){
        url= "/estudiantes/matricular/{"+id+"}";
        fetchf(url);
    }

    function guardarEstudiante(){
        url= "/estudiantes";
        let header = "";
    }

    //CRUD CARRERAS

    function getCarrerasConInscriptos(){
        url= "/carreras/cantInscriptos";
        fetchf(url);
    }
    
});