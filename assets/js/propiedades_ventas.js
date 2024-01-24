const propiedadesVentas = [
    {
        nombre: 'Elegancia Moderna',
        src: 'assets/imgs/venta1.jpg',
        descripcion: 'Experimenta la opulencia contemporánea en esta residencia de Las Condes. Con cuatro habitaciones para el máximo confort, su diseño vanguardista se combina con una ubicación exclusiva, ofreciéndote el lujo que mereces',
        ubicacion: 'Santiago,Chile',
        habitaciones: '4',
        baños: '2',
        costo: '380.000.000 CLP',
        smoke: true,
        pets: true
    },
    {
        nombre: 'Vista al Horizonte',
        src: 'assets/imgs/venta2.jpg',
        descripcion: 'Sumérgete en el encanto de Viña del Mar con esta elegante casa con vista al mar. Tres habitaciones, dos baños, y la serenidad de la costa chilena hacen de esta propiedad un oasis de tranquilidad y sofisticación.',
        ubicacion: 'Viña del Mar,Chile',
        habitaciones: '3',
        baños: '2',
        costo: '520.000.000 CLP',
        smoke: true,
        pets: true
    },
    {
        nombre: 'Encanto Histórico',
        src: 'assets/imgs/venta3.jpg',
        descripcion: 'Descubre la magia de Valparaíso en esta encantadora casa histórica. Con dos habitaciones y dos baños, esta residencia combina el encanto de la arquitectura única de la ciudad con comodidades modernas.',
        ubicacion: 'Valparaiso,Chile',
        habitaciones: '2',
        baños: '2',
        costo: '650.000.000 CLP',
        smoke: true,
        pets: true
    },
    {
        nombre: 'Estilo y Comodidad',
        src: 'assets/imgs/venta4.jpg',
        descripcion: 'Vive el lujo en el corazón de São Paulo con esta residencia de cuatro habitaciones y tres baños. Una combinación perfecta de elegancia y comodidad, esta propiedad es el hogar ideal para aquellos que buscan lo mejor.',
        ubicacion: 'São Paulo, Brasil',
        habitaciones: '4',
        baños: '3',
        costo: '980.000.000 CLP',
        smoke: true,
        pets: true
    },
    {
        nombre: 'Perspectiva Única',
        src: 'assets/imgs/venta5.jpg',
        descripcion: 'Adquiere una perspectiva única de Río de Janeiro desde esta casa panorámica. Con tres habitaciones y dos baños, disfruta de la vida vibrante de la ciudad y las impresionantes vistas que esta propiedad tiene para ofrecer.',
        ubicacion: 'Río de Janeiro, Brasil',
        habitaciones: '3',
        baños: '3',
        costo: '2.150.000.000 CLP',
        smoke: true,
        pets: true
    },
    {
        nombre: 'Tranquilidad Escandinava',
        src: 'assets/imgs/venta6.jpg',
        descripcion: 'Descubre la exclusividad en esta casa escandinava en Oslo. Con dos habitaciones y dos baños, esta propiedad ofrece un estilo de vida tranquilo y elegante, fusionando diseño moderno con la serenidad del entorno noruego. ¡Haz de esta casa tu refugio único!',
        ubicacion: 'Oslo, Noruega',
        habitaciones: '2',
        baños: '2',
        costo: '1.800.000.000 CLP',
        smoke: true,
        pets: true
    }
];

let newCardv = "";
let cardContainerv = document.getElementById("venta2");

for (let casav of propiedadesVentas) {
    //SMOKE
    //Se utiliza colores con bootstrap, success=verde y danger=rojo
    if(casav.smoke){
        smoke=`<p class="text-success"><i class="fa-solid fa-smoking"></i> Permitido Fumar</p>
        `;
    }else{
        smoke=`<p class="text-danger"><i class="fa-solid fa-smoking"></i> No se permite Fumar</p>
        `
    }
    //PETS
    //Se utiliza el mismo criterio con los colores
    if(casav.pets){
        pets=`<p class="text-success"><i class="fas fa-paw"></i> Mascotas permitidas</p>
        `;
    }else{
        pets=`<p class="text-danger"><i class="fa-solid fa-ban"></i> No se permiten Mascotas</p>
        `;
    }


    //ITERACION DE LAS CARDS DE ALQUILER 
    newCardv += `
    <div class="col-md-4 mb-4">
        <div class="card">
        <img src="${casav.src}" class="card-img-top" alt="Imagen del departamento"/>  
            <div class="card-body">
                <h5 class="card-title">${casav.nombre}</h5>
                <p class="card-text">${casav.descripcion}</p>
                <p><i class="fas fa-map-marker-alt"></i> ${casav.ubicacion}</p>
                <p><i class="fas fa-bed"></i> ${casav.habitaciones} Habitaciones | <i class="fas fa-bath"></i> ${casav.baños} Baños</p>
                <p><i class="fas fa-dollar-sign"></i> ${casav.costo}</p>
                ${smoke}
                ${pets}
            </div>
        </div>
    </div>
`;
}

cardContainerv.innerHTML = newCardv;



