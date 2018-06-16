# Ejemplo 1 Web Scraping
Cómo desactivar barrera seguridad en google chrome:
- Cerrar todas las ventanas abiertas de google Chrome
- En la pantalla de inicio del ordenador buscar el icono de google Chrome y con botón derecho hacer click en Properties
- Se abre otra ventana. En target pondrá algo similar:

    "C:\Program Files (x86)\Google\Chrome\Application\chrome.exe"
    
- Abrir command prompt y entrar en el directorio anterior. Para ello hay que escribir algo parecido:

      >> C:
      >> cd Program Files (x86)\Google\Chrome\Application
      
- Por último, eliminar la seguridad escribiendo:

      >> chrome --disable-web-security
      
- Se abrirá google con un aviso

De esta forma ya se puede ejecutar un código que haga una “request” a una web y poder acceder sin problemas. 
