document.addEventListener("DOMContentLoaded", function () {
    console.log("hola");

    //botones
    const botonBuscarPorID = document.getElementById("btn1");
    const botonBuscarPorCarreras= document.getElementById("btn2");
    const botonMatricular= document.getElementById("btn3");
    const botonBuscarCarrerasConInscriptos= document.getElementById("btn4");
    const botonguardarEstudiante = document.getElementById("btn5");

    //variables
    let id = document.getElementById("input1").value;
    let container= document.getElementById("container");
    let url ="https://ghibliapi.herokuapp.com/films";

    //eventos
    botonBuscarPorID.addEventListener("click", getAlumnoById);
    botonBuscarPorCarreras.addEventListener("click", getEstudiantesByCarrera);
    botonBuscarCarrerasConInscriptos.addEventListener("click", getCarrerasConInscriptos);
    botonMatricular.addEventListener("click", matricular);
    botonguardarEstudiante.addEventListener("click", guardarEstudiante);

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

        
    function getCarrerasConInscriptos(){
        url= "/carreras/cantInscriptos";
        fetchf(url);
    }
    
    //FUNCIONES
    //  POST
    function matricular(){
        url= "/estudiantes/matricular/{"+id+"}";
        let header= {
            id:id
        }
        fetchPost(url, id);
    }

    function guardarEstudiante(){
        url= "/estudiantes";
        let estudiante={
            id: id,
            nombre: document.getElementById("input_puntuacion").value,
            apellido: document.getElementById("input_usuario").value,
            edad: "",
            genero: document.getElementById("id_peli").value,
            dni:document.getElementById("id_peli").value,
            ciudad: document.getElementById("id_peli").value
        }
        fetchPost(url, estudiante);
    }

    function fetchPost(url, param){
        fetch(url, {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(param)
        }).then(response => {
            response.json();
        })
        .catch(error =>console.log(error));
    }
    
});