


class DatosUsuarios {
    constructor(nombre, apellido, dinero){
      this.nombre = nombre;
      this.apellido = apellido;
      this.dinero = dinero;
    }
  
    get_datos(){
      console.log("--- USUARIO ---");
      console.log("Nombre: ", this.nombre);
      console.log("Apellido: ", this.apellido);
      console.log("Dinero: " , this.dinero);
    }
  
    cambiarDinero(nuevoDinero) {
      this.dinero = nuevoDinero;
    }
  }
  
  
  let listaUsuarios = [];
  
  let nombre = prompt("Ingrese su nombre de usuario:");
  let apellido = prompt("Ingrese su apellido:");
  let dinero = parseFloat(prompt("Ingrese la cantidad de dinero que quiera guardar:"));
  
  let datosUsuarios = new DatosUsuarios(nombre,apellido,dinero);
  
  listaUsuarios.push(datosUsuarios);
  
  for (let usuario of listaUsuarios) {
    usuario.get_datos();
  }
  
  function obtenerTipoCambio(tipoMoneda) {
    let tasas = {
      dolares: 710, 
      euros: 381,   
    };
    
    return tasas[tipoMoneda];
  }
  
  function casaDeCambio() {
    let intentos = 3;
    
    while (intentos > 0) {
      let monto = prompt('Quiere usar el dinero guardado para realizar el cambio? (si/no):');
      let tipoMoneda = prompt('Ingresa el tipo de moneda (dolares/euros):');
      
      if (tipoMoneda === 'dolares' || tipoMoneda === 'euros') {
        let tipoCambio = obtenerTipoCambio(tipoMoneda);
        let resultado;
        
        if (monto.toLowerCase() === "si") {
          resultado = datosUsuarios.dinero / tipoCambio;
        } else if (monto.toLowerCase() === "no") {
          let cantidadCambio = parseFloat(prompt("Ingrese la cantidad de dinero que quiera cambiar:"));
          resultado = cantidadCambio / tipoCambio;
        } else {
          console.log("Respuesta no válida. Por favor, ingrese 'si' o 'no'.");
          continue; 
        }
        
        console.log(`Resultado: ${resultado.toFixed(2)} ${tipoMoneda}`);
        break;
      } else {
        intentos--;
        if (intentos === 0) {
          throw new Error('Se han agotado los intentos. Por favor, contacta al servicio de atención al cliente.');
        }
        console.log(`Tipo de moneda no válido. Te quedan ${intentos} intentos.`);
      }
    }
  }
  
  try {
    casaDeCambio();
  } catch (error) {
    console.error(error.message);
  }
  

  function buscarUsuario(nombre) {
    let usuarioEncontrado = listaUsuarios.find(usuario => usuario.nombre === nombre);
    if (usuarioEncontrado) {
      let tipoMoneda = prompt('Ingresa el tipo de moneda al que allas hecho la conversion(dolares/euros):');
      let tipoCambio = obtenerTipoCambio(tipoMoneda);
      let resultado = usuarioEncontrado.dinero / tipoCambio;
      alert(`El usuario ${nombre} tiene un dinero convertido de ${resultado.toFixed(2)} ${tipoMoneda}`);
    } else {
      alert("Usuario no encontrado");
    }
  }
  
  let nombreUsuario = prompt("Ingrese el nombre de usuario para ver su dinero convertido");
  buscarUsuario(nombreUsuario);
  