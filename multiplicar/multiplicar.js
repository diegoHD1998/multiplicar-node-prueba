
const fs = require('fs');

let listarTabla = (base, limite) =>{


    for (let i = 1; i <= limite; i++) {
        console.log(`${base} * ${i} = ${base * i}`)
      }

}




let crearArchivo = (base)=>{

    return new Promise((resolve, reject) => {

        if (!Number(base)) {
            reject (`El valor "${base}" NO es nu numero`);
            return;
        }

      let data = "";

      for (let i = 1; i <= 10; i++) {
        data += `${base} * ${i} = ${base * i}\n`;
      }

      fs.writeFile(`tablas/Tabla-${base}.txt`, data, (err) => {
        if (err){
            reject(err)
        }else{
            resolve( `Tabla-${base}.txt`);
        }
        
      });
    });

}




let crearArchivo2 = (base, limite)=>{

    return new Promise((resolve, reject) => {

        if (!Number(base) ) {
            reject (`El valor "${base}" NO es nu numero`);
            return;
        }
        if (!Number(limite)) {
            reject (`El valor "${limite}" NO es nu numero`);
            return;
        }

      let data = "";

      for (let i = 1; i <= limite; i++) {
        data += `${base} * ${i} = ${base * i}\n`;
      }

      fs.writeFile(`tablas/Tabla-${base}.txt`, data, (err) => {
        if (err){
            reject(err)
        }else{
            resolve( `Tabla-${base}.txt`);
        }
        
      });
    });

}

module.exports={
    crearArchivo,
    listarTabla,
    crearArchivo2
}