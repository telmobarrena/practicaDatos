# Ejemplo 1 Visualización
Se van a comparar los datos de empleo de Euskadi en el primer periodo del 2017 por rangos de edad

- Se van a tener en cuenta los datos recogidos en formato XML del [ejemplo 2](../xml/Ejemplo2XML.html)
- Para recoger el resto de datos entrar en la web de Ikerbide al apartado de base de datos coyunturales: 
<http://www.euskadi.eus/ikerbide-base-de-datos/web01-s2oga/es/>
- Elegir los siguientes filtros:

      Mercado laboral
      Población Ocupada PRA
      Población ocupada entre 16-24 años y 45 años y más
      Años entre 2017-2017
      Euskadi
      Distintas Tablas
      XML
- Seguir los pasos explicados en la practica 2 de XML para converir a texto estos datos:
[practicas xml2](../practicas/xml2)

- Una vez obtenidos los datos, escoger solo los datos del primer periodo del 2017. Para ello basta con copiarlos y pegarlos en el código del link: 

[DonutChart.html](../visualizacion/DonutChart.html)

En este caso no es necesario hacer ningún cálculo porque el código ya los hace, pero si fuese necesario habría que coger los datos de población total ocupada y calcular el porcentaje para cada rango. 

![List of categories](../fotos/fotos/Capture%2044.PNG)
