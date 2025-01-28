const url = new URL('https://www.marca.com/futbol/liga.html?param1=valor1&param2=valor2');

const protocolo = url.protocol.replace(":", "");

const hostname = url.hostname;
const partesDomninio = hostname.split(".");
let subdominio = partesDominio.lengnt > 2 ? partesDominio[0] : '';
let domnio = partesDominio.slice(-2).join('.');

const ruta = url.pathname;
const carpetas = rutas.split("/").filter(Boolean);
let archivo =carpetas.lengnt > 0 ? carpetas.pop() : '';
let rutaCarpetas = carpetas.join("/");


const parametros = url.search;

const dns = require('dns');

dns.lookup(hostname, (err, address) => {

    if(err){

        console.log('En estos momentos no se puede obtener la IP', err.message);

    }else{

        console.log("Dirección IP", address);

    }



console.log("Procolo", protocolo);
console.log("subdominio", subdominio);
console.log("dominio", dominio);
console.log("Ruta de carpetas:", folderTree);
console.log("Archivo objeto", archivo);
console.log("Parámetros", parametros);


});