const argv = require('./config/yargs').argv
                
const { crearArchivo, listarTabla, crearArchivo2 } = require('./multiplicar/multiplicar')
let comando = argv._[0];




switch (comando) {
  case "listar":
    listarTabla(argv.base, argv.limite)
    break;

  case "crear":
    crearArchivo(argv.base)
      .then((archivo) => console.log(`Archivo Creado ${archivo}`))
      .catch((err) => console.log(err));
    break;

    case "crear2":
        crearArchivo2(argv.base, argv.limite)
        .then((archivo) => console.log(`Archivo Creado con limite: ${archivo}`))
        break;

  default:
    console.log("Comando no reconocido");
}

//let base = 11;

//let argv2 = process.argv;
//console.log(argv2)


 console.log(argv); 


