
export class Persona {
    //atributos de la clase : definen las caracteristicas de la clase
    nombre: string;
    apellido: string;
    edad: number;
    kilometros: number;

    caminar() {
        console.log('estoy caminando ' + this.kilometros);
    }

    constructor(cuantoKm: number) {
        this.kilometros = cuantoKm;
        this.caminar();
    }

}

//Modificadores de acceso:

//public :
/**cualquiera puede verme , cuandono indicass ningun modificar , por defecto
 * es public  */
//private :
/** es loopuesto al public ,sol la clase puede verlo , este modificador restringe 
 * la visibilidad de los atributos de la clase ,nadie mas que la clase tiene accesos 
 * tanto para leerlos como para modificarlos
*/

/*protected:
solo compate atributos y metodos con las clases que las heredan 

example:*/
class ClasePadre {
    protected atributoProtegido: string;

}

class ClaseHijo extends ClasePadre {

    constructor() {
        super();
        this.atributoProtegido = 'mi secreto es que me gusta Internet Explorer XD';
    }
    //ESTE METODO ES PUBLICO
    getAtributoProtegido() {
        return this.atributoProtegido;
    }
}

let hija = new ClaseHijo();
console.log('cual es el secreto?' + hija.getAtributoProtegido());
//readonly