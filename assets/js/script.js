const datosApi = async () => {
    const url = "https://jsonplaceholder.typicode.com/photos";
    try {
        const response = await fetch(url);
        arregloUrl = await response.json();
        arregloUrl.forEach((elemento) => {
            if (elemento.id <= 20) {
                console.log(`Id: ${elemento.id} , Titulo: ${elemento.title}`);
            };
        });

    } catch (error) {
        console.error('error en el proceso....', error.message);
    }
}

datosApi();

const obtenerInformacion = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Información Enviada");
        }, 3000);
    });
};


const recibirInformacion = async () => {
    try {
        const mensaje = await obtenerInformacion();
        console.log(mensaje);
    } catch (error) {
        console.error('Error al recibir la información:', error.message);
    }
};

recibirInformacion();