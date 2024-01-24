const propiedadesAlquiler = [
    {
        nombre: 'Casa de Ensueño en Las Condes',
        src: 'assets/imgs/alquiler1.jpg',
        descripcion: 'Descubre el lujo y la comodidad en esta casa exclusiva en Las Condes, con espacios elegantes y vistas panorámicas que te harán sentir en la cima del mundo',
        ubicacion: 'Las Condes',
        habitaciones: '4',
        baños: '2',
        costo: '550.000',
        smoke: true,
        pets: true
    },
    {
        nombre: 'Residencia Moderna en Vitacura',
        src: 'assets/imgs/alquiler2.jpg',
        descripcion: 'Vive el equilibro perfecto entre estilo contemporáneo y funcionalidad en esta residencia única en Vitacura, con diseño vanguardista y amenidades de primer nivel',
        ubicacion: 'Vitacura',
        habitaciones: '5',
        baños: '2',
        costo: '550.000',
        smoke: false,
        pets: false
    },
    {
        nombre: 'Elegancia en La Dehesa',
        src: 'assets/imgs/alquiler3.jpg',
        descripcion: 'Sumérgete en la elegancia de esta propiedad en La Dehesa, donde la arquitectura sofisticada se combina con amplios jardines, creando un oasis de tranquilidad en la ciudad',
        ubicacion: 'La Dehesa',
        habitaciones: '4',
        baños: '2',
        costo: '780.000',
        smoke: true,
        pets: false
    },
    {
        nombre: 'Exclusiva Propiedad en La Dehesa',
        src: 'assets/imgs/alquiler4.jpg',
        descripcion: 'Sumérgete en la elegancia de esta propiedad en La Dehesa, donde la arquitectura sofisticada se combina con amplios jardines, creando un oasis de tranquilidad en la ciudad',
        ubicacion: 'Lo Barnechea',
        habitaciones: '3',
        baños: '2',
        costo: '900.000',
        smoke: false,
        pets: true
    },
    {
        nombre: 'Vista Panormaica en La Reina',
        src: 'assets/imgs/alquiler5.jpg',
        descripcion: 'Disfruta de vistas panorámicas en esta residencia en La Reina, donde cada rincón ha sido diseñado para maximizar la conexion con la naturaleza y ofrecer una experiencia única',
        ubicacion: 'Olmue',
        habitaciones: '8',
        baños: '3',
        costo: '1.850.000',
        smoke: true,
        pets: true
    },
    {
        nombre: 'Casa Sustentable en Providencia',
        src: 'assets/imgs/alquiler6.jpg',
        descripcion: 'Vive de manera sustentable en esta casa vanguardista en Providencia, donde la innovación se encuentra con la ecología, brindándote un hogar moderno y respetuoso con el medio ambiente.',
        ubicacion: 'Colina',
        habitaciones: '3',
        baños: '2',
        costo: '750.000',
        smoke: false,
        pets: true
    }
];

let newCarda = "";
let cardContainera = document.getElementById("alquiler2");

for (let casaa of propiedadesAlquiler) {
    //SMOKE
    //Se utiliza colores con bootstrap, success=verde y danger=rojo
    if(casaa.smoke){
        smoke=`<p class="text-success"><i class="fa-solid fa-smoking"></i> Permitido Fumar</p>
        `;
    }else{
        smoke=`<p class="text-danger"><i class="fa-solid fa-smoking"></i> No se permite Fumar</p>
        `
    }
    //PETS
    //Se utiliza el mismo criterio con los colores
    if(casaa.pets){
        pets=`<p class="text-success"><i class="fas fa-paw"></i> Mascotas permitidas</p>
        `;
    }else{
        pets=`<p class="text-danger"><i class="fa-solid fa-ban"></i> No se permiten Mascotas</p>
        `;
    }


    //ITERACION DE LAS CARDS DE ALQUILER 
    newCarda += `
    <div class="col-md-4 mb-4">
        <div class="card">
        <img src="${casaa.src}" class="card-img-top" alt="Imagen del departamento"/>  
            <div class="card-body">
                <h5 class="card-title">${casaa.nombre}</h5>
                <p class="card-text">${casaa.descripcion}</p>
                <p><i class="fas fa-map-marker-alt"></i> ${casaa.ubicacion}</p>
                <p><i class="fas fa-bed"></i> ${casaa.habitaciones} Habitaciones | <i class="fas fa-bath"></i> ${casaa.baños} Baños</p>
                <p><i class="fas fa-dollar-sign"></i> ${casaa.costo}</p>
                ${smoke}
                ${pets}
            </div>
        </div>
    </div>
`;
}

cardContainera.innerHTML = newCarda;



