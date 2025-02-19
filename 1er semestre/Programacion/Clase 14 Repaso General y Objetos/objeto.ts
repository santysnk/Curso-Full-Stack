// Definimos una interfaz para describir el tipo de 'persona'
interface Persona {
    nombre: string;
    apellido: string;
    edad: number;
    profesion: string;
    estaRegistrado: boolean;
    hobbies: string[];
    mascota: {
        nombre: string;
        raza: string;
    };
    mostrarHobbies: () => void;
}

const persona = {
    nombre: "Karen",
    apellido: "Simal",
    edad: 31,
    profesion: "Desarrolladora",
    estaRegistrado: true,
    hobbies: ["Fútbol", "Paddle", "Gimnasio"],
    mascota: {
        nombre: "Pepe",
        raza: "Golden"
    },
    mostrarHobbies: function() {
        this.hobbies.forEach(hobbie => console.log(hobbie));
    },
    mostrarNombreMascota: function() {
        console.log("El nombre de la mascota es: " + this.mascota.nombre);
    }
};

// Llamada a la función para mostrar el nombre de la mascota
persona.mostrarNombreMascota();
