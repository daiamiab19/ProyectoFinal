
/***********************************************************************************************************/
let foto = document.getElementById('foto__curriculum');
random = numrand9();
foto.setAttribute("src","./imagenes/persona"+random+".jpg");
/***********************************************************************************************************/



/***********************************************************************************************************/
let lista_nombres1 = ["Juan", "Pedro", "Carlos", "Miguel", "Luis", "Javier", "Andrés", "Diego", "Fernando", "Pablo"];
let lista_nombres2 = ["José", "Antonio", "Francisco", "Santiago", "Manuel", "Alberto", "Ricardo", "Rafael", "Roberto", "Mario"];
let lista_apellidos =["García", "Hernández", "Martínez", "González", "Rodríguez", "López", "Pérez", "Sánchez", "Ramírez", "Flores"];
let persona = lista_nombres1[numrand9()]+" "+lista_nombres2[numrand9()]+" "+lista_apellidos[numrand9()];

const nombre_completo = document.getElementById('nombre_persona');
nombre_completo.textContent = persona;
/***********************************************************************************************************/



/***********************************************************************************************************/
let numeroLocal = Math.floor(Math.random() * 10000000); // Genera un número local aleatorio con 7 dígitos
let numeroCompleto = "381-" + numeroLocal.toString().padStart(7, "0"); 


const telefono = document.getElementById('telefono_persona');
telefono.textContent = numeroCompleto;
/***********************************************************************************************************/



/***********************************************************************************************************/
let nicksLaborales = ["Experto", "Gestor", "Creativo", "Innovador", "Estratega", "Ejecutivo", "Visionario", "Líder", "Geek", "Analista"];
const email = document.getElementById("email_persona");

email.textContent = nicksLaborales[numrand9()]+"@gmail.com";
console.log(numeroCompleto);

/***********************************************************************************************************/

let habilidadesBlandas = ["Comunicación efectiva", "Trabajo en equipo", "Resolución de problemas", "Pensamiento crítico", "Empatía", "Adaptabilidad", "Gestión del tiempo", "Creatividad", "Liderazgo", "Honestidad", "Flexibilidad", "Capacidad de aprendizaje", "Comunicación intercultural", "Respeto", "Negociación", "Toma de decisiones", "Emprendimiento", "Confianza", "Escucha activa", "Colaboración"];
const habilidades = document.getElementById("habilidades_persona");

for(let i=0;i<6;i++){
habilidades.innerHTML += "<li>"+habilidadesBlandas[numrand20()] +"</li>"
}







/****************Start Funciones ******************/
function numrand9(){
return (Math.floor(Math.random()*9));
};

function numrand20(){
    return (Math.floor(Math.random()*20));
};
/*****************Fin Funciones************************/
console.log(numrand9());
