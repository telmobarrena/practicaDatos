# Ejemplo 3 Web Scraping
Web scraping con Node: Se desea obtener la temperatura actual en Donostia en formato texto
Para ello, primero es necesario descargarse tanto Node como Electron:
- Descargar node como ZIP desde: <https://nodejs.org/download/release/latest-v9.x/>
- Escoger: node-v9.11.1-win-x64.zip
- Descargar Electron como ZIP desde: <https://github.com/electron/electron-quick-start>
- Hacer click en download zip:
![List of categories](https://sofiaherrador.github.io/practicaDatos/fotos/fotos/captureElectron.png)
- Crear una carpeta en p llamada node 
- Descomprimir ambos zip y guardarlos en P:\node
- Ir a la carpeta donde se ha guardado Electron y abrir en Notepad ++ el documento index.html
- Reemplazar el código por el que viene en el siguiente link:
<https://github.com/sofiaherrador/practicaDatos/blob/master/Web%20Scraping/node/index.html<
- Abrir command prompt y escribir:

      >>set path=P:\node\node-v9.11.1-win-x64;%path%
      >>cd P:\node\node-v9.11.1-win-x64
      >>npm install –g
      >>cd P:\node\electron-quick-start-master
      >>npm install
      >>npm start

- Aparecerá: up to date in 0.047s (u otros segundos)
- Se abre la aplicación. Comprobar que se visualiza la página web y el dato de la temperatura en formato texto.
![List of categories](https://sofiaherrador.github.io/practicaDatos/fotos/fotos/capture%20Node2.png)
- Copiar el dato y pegar en Excel

También se ha realizado un ejecutable de este programa para poder ser ejecutado en git hub desktop
