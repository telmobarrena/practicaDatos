function leerUniversidades() {
    uniTR = document.getElementsByTagName('table')[0].getElementsByTagName('tr')
    str='[';
    for (i=1;i<(uniTR.length)/4;i++) {
     
	 
	  universidad = uniTR[i].children[2].textContent.replace('/','').replace("'", '').replace('(1)','').replace('(2)','');
	  rankingmundial = uniTR[i].children[1].textContent;
	  Posición_presencia = uniTR[i].children[4].textContent;
	  Posición_excelencia = uniTR[i].children[7].textContent;
	
	  
      str += "['" + universidad
	  str += "'," + rankingmundial
	  str += "," + Posición_presencia
	  str += "," + Posición_excelencia +"],"
      
    }
	str = str.substring(0,str.length-1);
	str += "]" 
    return str;
}