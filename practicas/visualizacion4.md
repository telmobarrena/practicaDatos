# Ejemplo 4 Visualización
Se van a leer las coordenadas de una lista de poblaciones y se van a graficar en un gráfico de dispersión o XY (Scatter Chart).

Los datos provienen de la hoja [lista de municipios](https://www.businessintelligence.info/assets/listado-longitud-latitud-municipios-espana.html)

Se van a obtener con WebScraping mediante la función del [fichero JavaScript](../geocoordenadas/leerPoblaciones.js)

Los datos obtenidos se guardan como JSON en un fichero de nombre [pobData.js](../geocoordenadas/pobData.js)

Para visualizarlo, se utiliza la librería de [Gooble Chart](https://developers.google.com/chart/) y el tipo de gráfico [Scatter Chart](https://developers.google.com/chart/interactive/docs/gallery/scatterchart).
El resultado es el que se muestra en la página [pobDataGoogle.html](../geocoordenadas/pobDataGoogle.html)

Se puede realizar la representación de los mismos datos con otras librerías, por ejemplo:
- [Poblaciones con GoolgleChart](../geocoordenadas/pobDataGoogle.html) - [Google Chart](https://developers.google.com/chart/interactive/docs/gallery/scatterchart)
- [Poblaciones con Plotly.html](../geocoordenadas/pobDataPlotly.html) - [Plotly](https://plot.ly/javascript/line-and-scatter/#data-labels-hover)
- [Poblaciones con CanvasJS](../geocoordenadas/pobDataCanvasJS.html) - [CanvasJS](https://canvasjs.com/html5-javascript-scatter-point-chart/)
