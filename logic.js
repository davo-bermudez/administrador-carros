const boton = document.querySelector("#agregar")
const indiseño = document.querySelector("#diseño")
const inplaca = document.querySelector("#placa")
const inmodelo = document.querySelector("#modelo")
const inmarca = document.querySelector("#marca")
const contenedor = document.querySelector(".registrados")
const moto = document.querySelector("#bike")
const carro = document.querySelector("#car")
const incilindraje = document.querySelector("#cilindraje")

class vehiclecar{ 

    constructor(diseño, placa, modelo, marca){
        this.diseño = diseño;
        this.placa = placa;
        this.modelo = modelo;
        this.marca = marca;

    }

    showinfo(){
        return`<p>${this.diseño}</p> <p>${this.placa}</p> <p>${this.modelo}</p> <p>${this.marca}</p>`
    }
}


class vehiclebike extends vehiclecar{
    constructor(cilindraje, diseño, placa, modelo, marca){
        super(diseño, placa, modelo, marca)
        this.cilindraje = cilindraje;
      
    }
    showinfo(){
        return `${super.showinfo()} <p>${this.cilindraje}</p>`
        
    }
}

let listavehic = [new vehiclecar ("sedan", "XQC243", "2025", "renault"),]

boton.addEventListener("click", transdatos)
function transdatos(){
    let newvehicle = ""

    if(carro.checked){
       newvehicle = new vehiclecar(indiseño.value, inplaca.value, inmodelo.value, inmarca.value)
    }
    else if(moto.checked){
        newvehicle = new vehiclebike(incilindraje.value, indiseño.value, inplaca.value, inmodelo.value, inmarca.value)
    }
    listavehic.push(newvehicle)

    Actualizar()

    console.log(listavehic)
}

function Actualizar(){
    contenedor.innerHTML = ""

    listavehic.forEach((item) => {
        const element = document.createElement('div');

        let contenidoelement = ""

        if(item instanceof vehiclecar){
            contenidoelement = item.showinfo()
        }
        if(item instanceof vehiclebike){
            contenidoelement = item.showinfo()
        }

        element.innerHTML = contenidoelement;
        contenedor.appendChild(element)
    })

}

window.onload = Actualizar

moto.addEventListener("change", showinput)

function showinput(){
    incilindraje.style.display = "block"

}

carro.addEventListener("change", hideinput)

function hideinput(){
    incilindraje.style.display = "none"
}