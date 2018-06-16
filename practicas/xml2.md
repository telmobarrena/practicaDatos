# Ejemplo 2 XML

En el caso de que haya más información en formato XML que en el ejemplo anterior, será más complicado leerla. Lo recomendable es guardar dicha información en un documento XML. El código a ejecutar deberá abrir y convertir el fichero en un formato adecuado para leerlo en Excel.
Los pasos para preparar el documento XML son los siguientes:
- Entrar en la web de Ikerbide al apartado de base de datos coyunturales:
<http://www.euskadi.eus/ikerbide-base-de-datos/web01-s2oga/es/>
- Elegir estos filtros:
		- Mercado laboral
    		- Población Ocupada PRA
		
		
	  Población ocupada entre 25-44 años
	  Años entre 2008-2017
    	Euskadi
    	Distintas Tablas
    	XML
- Se abre una nueva pestaña con el documento. Copiar todo el contenido
- Pegarlo en una nueva pestaña de Notepad++

Para que javascript pueda leer bien el documento los datos deben estar en línea con sus etiquetas y no pueden estar dentro de CDATA. 
Por ello, se va a reemplazar por un espacio, de forma que después el código en html pueda leer ese caracter:
- Reemplazar: “ <![CDATA[ “  por  “espacio”
- Reemplazar: “ ]]>  “  por  “espacio”
- Guardar el documento como formato XML

A continuación, se ha preparado un código que lee este documento XML y lo convierte a texto para poder ser tratado en Excel.
Los pasos a dar para convertir dicho documento XML a Excel se muestran a continuación:
- Entrar el siguiente link:
<https://sofiaherrador.github.io/practicaDatos/xml/Ejemplo2XML.html>
- Hacer click encima del botón see data
- Comprobar que la información en formato XML ha pasado a formato texto y separado por punto y coma de la siguiente manera:

![List of categories](https://sofiaherrador.github.io/practicaDatos/fotos/fotos/Captura3.JPG)
- Copiar dicho texto a Excel y elegir el delimitador correspondiente
- Comprobar que los datos se ven igual que en la imagen:

![List of categories](https://sofiaherrador.github.io/practicaDatos/fotos/fotos/Capture%207.PNG)
