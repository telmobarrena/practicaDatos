# RSS

## Printer manager
Menu -> Print -> Print using system dialog...

- Entrar en la web de Opendata Euskadi al apartado de datos de empleo y seleccionar el mencionado anteriormente. Se puede acceder directamente a través del siguiente link:

<http://opendata.euskadi.eus/catalogo/-/oferta-publica-de-empleo-ope-de-la-administracion-autonomica-de-euskadi/>

- Descargar el documento como RSS

Este documento no viene como el anterior de XML en el que los datos no estaban en línea con sus etiquetas. Por tanto, no es necesario reemplazarlo por otros caracteres. Si fuese necesario, habría que seguir los pasos explicados en el capítulo 5.

- Copiar todo el documento y pegarlo en un notepad ++

- Guardarlo como .rss

De esta forma ya queda preparado el documento RSS para poder ser leído mediante un código JavaSctipt. Véase en el anexo IV como ha de quedar dicho documento. Y en el anexo V el código para convertir RSS a Excel.

Los pasos a dar para ejecutar el código se muestran a continuación:
- Copiar el siguiente link:

<https://sofiaherrador.github.io/practicaDatos/rss/EjemploRSS.html>

- Clickar encima del botón see data

- Comprobar que la información en formato XML ha pasado a formato texto y separado de la siguiente manera

- Copiar dicho texto a Excel. En este caso la información ya aparecerá de forma adecuada separada

- Comprobar que los datos se ven igual que en la imagen

![List of categories](https://sofiaherrador.github.io/practicaDatos/fotos/fotos/Capture%208.PNG)











```
<!DOCTYPE html>
<html>
<body>

<h2>Oferta Pública de Empleo (OPE) de la Administración Autonómica de Euskadi 2018</h2>
  
<button type="button" onclick="loadXMLDoc()">
see data</button>
<p id="demo"></p>

<script>
function loadXMLDoc() {
  var xmlhttp = new XMLHttpRequest();
  xmlhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      myFunction(this);
    }
  };
  xmlhttp.open("GET", "https://sofiaherrador.github.io/practicaDatos/rss/ope.rss", true);
  xmlhttp.send();
}
 
function myFunction(xml) {
  var x, i, xmlDoc, txt;
  xmlDoc = xml.responseXML;
  txt = "";
  x = xmlDoc.getElementsByTagName("item");
  for (i = 0; i< x.length; i++) {
  
    ti = x[i].getElementsByTagName("title");
   
    txt += ti[0].childNodes[0].nodeValue + "<br>";
    
  }
  document.getElementById("demo").innerHTML = txt;
}
</script>
</body>
</html>
```

