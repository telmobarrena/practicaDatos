# Ejemplo 1 CSV

Para aprender cómo se puede preparar el formato CSV para después pasarlo a Excel, se va a trabajar con el ejemplo indicator.csv 
que se puede descargar desde el singuiente enlace:

<https://sofiaherrador.github.io/practicaDatos/CSV/indicator.csv>

Normalmente, al abrir el dicho documento en Excel se puede comprobar que todos los datos se visualizan correctamente en cada celda. 
Además, no ha separado las comas, ya que, en este caso, no interesa que separe las comas, las cuales se refieren a los decimales.
Hay ocasiones en las que Excel no muestra el documento como el usuario desea. Ya sea porque aparece más de un dato en la misma celda o 
porque confunde las comas de los decimales por comas de separación. Este problema se puede resolver mediante el siguiente procedimiento:

- Seleccionar una columna donde se desea separar los datos
- Ir a Data-> Text to Columns
- Se abrirá un cuadro adicional en el que hay que seleccionar las siguientes opciones 
- Seleccionar únicamente Delimited
![List of categories](https://sofiaherrador.github.io/practicaDatos/fotos/fotos/Capture%20csv1.PNG)
- Seleccionar el tipo de delimitador: en este caso coma
![List of categories](https://sofiaherrador.github.io/practicaDatos/fotos/fotos/Capture%20csv2.PNG)
- Elegir el formato de datos de la columna, en este caso General
![List of categories](https://sofiaherrador.github.io/practicaDatos/fotos/fotos/Capture%20csv%203.PNG)
- Comprobar que los datos se ven igual que en la imagen
![List of categories](https://sofiaherrador.github.io/practicaDatos/fotos/fotos/Capture%201.PNG)

Este procedimiento no permite seleccionar varias columnas a la vez. Si al realizarlo todavía existe alguna columna donde la 
información no esté correctamente separada se puede seleccionar esa columna y saltar el proceso pulsando Finish, siempre y 
cuando el tipo de delimitador sea el mismo que en el resto de columnas.
