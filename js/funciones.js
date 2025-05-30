var aNivelActual = new Array();
var nNivelActual = 1;
var maxH = 0; //numero maximo de columnas
var maxV = 0; //numero maximo de filas
var posH = -1; //posicion horizontal del jugador
var posV = -1; //posicion vertical del jugador
var numObjetivos = 0;
var numTesorosColocados = 0;
var w = 16;
var h = 16;
var skin;
var dirSkin;
var skinPorDefecto = 5;
var esParedSimple;
var strMovimientos = "";
var numM = 0; //numero de movimientos
var numP = 0; //numero de empujones


var aSkins = new Array();
	aSkins[0] = ["Mac","img/mac/",16,16,false];
	aSkins[1] = ["Mac (Grande)","img/mac/",32,32,false];
	aSkins[2] = ["Simple (Normal)","img/simple_n/",16,16,true];
	aSkins[3] = ["Simple (Pequeño)","img/simple_p/",8,8,true];
	aSkins[4] = ["eContento","img/eContento/",13,13,true];
	aSkins[5] = ["Yoshio Murase","img/yoshio/",16,16,true];
	aSkins[6] = ["Windows","img/windows/",16,16,false];
	aSkins[7] = ["Gadget para Google","img/google/",13,13,true];

function inicio(){
	repintarPared();
	for(i=0;i<document.frm.conjuntoDeNiveles.length;i++){
		if (document.frm.conjuntoDeNiveles[i].value==conjuntoDeNiveles){
			document.frm.conjuntoDeNiveles[i].selected=true;
		}
	}
	for(i=1;i<document.frm.numeroDeNivel.length;i++){
		if (document.frm.numeroDeNivel[i].value==getCookie("sokoban_nivel")){
			document.frm.numeroDeNivel[i].selected=true;
		}
	}
	for(i=0;i<aSkins.length;i++){
		if (i==skin){
			document.frm.skin[i].selected=true;
		}
	}
}

	
function recargar(){
	window.location.href = "sokoban.html";
	return;
}

function deshacer(){
	accion = strMovimientos.charAt(strMovimientos.length-1);
	switch (accion){
		case "l": //izquierda
			numM--;
			inJugador(posV,posH+1);
			outBloque(posV,posH);
			posH = posH + 1;
			strMovimientos = strMovimientos.substring(0,strMovimientos.length-1);
			break;
		case "L": //izquierda empujando
			numP--;
			inJugador(posV,posH+1);
			inTesoro(posV,posH);
			outBloque(posV,posH-1);
			posH=posH + 1;
			strMovimientos = strMovimientos.substring(0,strMovimientos.length-1);
			break;
		case "r": //derecha
			numM--;
			inJugador(posV,posH-1);
			outBloque(posV,posH);
			posH = posH - 1;
			strMovimientos = strMovimientos.substring(0,strMovimientos.length-1);
			break;
		case "R": //derecha empujando
			numP--;
			inJugador(posV,posH-1);
			inTesoro(posV,posH);
			outBloque(posV,posH+1);
			posH = posH - 1;
			strMovimientos = strMovimientos.substring(0,strMovimientos.length-1);
			break;
		case "u": //arriba
			numM--;
			inJugador(posV+1,posH);
			outBloque(posV,posH);
			posV = posV + 1;
			strMovimientos = strMovimientos.substring(0,strMovimientos.length-1);
			break;
		case "U": //arriba empujando empujando
			numP--;
			inJugador(posV+1,posH);
			inTesoro(posV,posH);
			outBloque(posV-1,posH);
			posV = posV + 1;
			strMovimientos = strMovimientos.substring(0,strMovimientos.length-1);
			break;
		case "d": //abajo
			numM--;
			inJugador(posV-1,posH);
			outBloque(posV,posH);
			posV = posV - 1;
			strMovimientos = strMovimientos.substring(0,strMovimientos.length-1);
			break;
		case "D": //abajo empujando
			numP--;
			inJugador(posV-1,posH);
			inTesoro(posV,posH);
			outBloque(posV+1,posH);
			posV = posV - 1;
			strMovimientos = strMovimientos.substring(0,strMovimientos.length-1);
			break;
	}
	//alert(strMovimientos);
}

function setConjunto(strConjunto){
	if (getCookie("sokoban_estado")!="" || getCookie("sokoban_nivel")!=""){
		if (confirm("You have a saved game in this Level group.\nIf you switch to another group, you will lose it.\nDo you want to continue?")){
			setCookie("sokoban_conjuntoDeNiveles",strConjunto,getExpDate(180, 0, 0));
			reiniciarJuego(); 		
		}
	}else{
		setCookie("sokoban_conjuntoDeNiveles",strConjunto,getExpDate(180, 0, 0));
		reiniciarJuego(); 
	}
}


function setNivel(num){
	if (getCookie("sokoban_estado")!="" || getCookie("sokoban_nivel")!=""){
		if (confirm("You have a saved game at this level.\nIf you move to another level, you will lose it.\nDo you want to continue?")){
			setCookie("sokoban_nivel",num,getExpDate(180, 0, 0));
			reiniciarNivel(); 		
		}
	}else{
		setCookie("sokoban_nivel",num,getExpDate(180, 0, 0));
		reiniciarNivel(); 
	}
}


function setSkin(num){
	setCookie("sokoban_skin",num,getExpDate(180, 0, 0));
	recargar();
}


function getSkin(){
	skin = getCookie("sokoban_skin");
	if (skin==""){
		skin = skinPorDefecto;
	}
	dirSkin = aSkins[skin][1];
	w =  aSkins[skin][2];
	h =  aSkins[skin][3];
	esParedSimple = aSkins[skin][4];
}
getSkin();


// manejo de imagenes
var iBlanco    = new Image();   iBlanco.src    = dirSkin + "sp.gif";
var iPared     = new Image();   iPared.src     = dirSkin + "pared.gif";
var iObjetivo  = new Image();   iObjetivo.src  = dirSkin + "objetivo.gif";
var iJugador   = new Image();   iJugador.src   = dirSkin + "jugador.gif"
var iOJugador  = new Image();   iOJugador.src  = dirSkin + "ojugador.gif"
var iTesoro    = new Image();   iTesoro.src    = dirSkin + "tesoro.gif"
var iOTesoro   = new Image();   iOTesoro.src   = dirSkin + "otesoro.gif"

function cambiar(idImg,idImgNueva) {
  document.images[idImg].src = eval(idImgNueva).src;
  //el 1er parametro es el nombre de la imagen
  //el 2o parametro es la que queremos cambiar
  pintarMovimientos();
}

function inicializarNivel(){
	var nivel = getCookie("sokoban_nivel");
	var estado = getCookie("sokoban_estado");
	strMovimientos = getCookie("sokoban_movimientos");
	
	if (nivel>numNiveles){
		alert("Congratulations!!!\nYou've completed this set of levels.")
		deleteCookie("sokoban_nivel");
		deleteCookie("sokoban_estado");
		deleteCookie("sokoban_movimientos");
		setConjunto("clasicos");
	}else{
		
		if (nivel=="") {nivel=1};
		if (estado==""){
			nNivelActual = nivel;
			nivel = eval("nivel_" + nivel);
			aNivelActual = nivel.split("|");
		}else{
			if(confirm("You have a game started.\nDo you want to continue it?")){
				nNivelActual = nivel;
				aNivelActual = estado.split("|");
			}else if(confirm("Do you want to try the same level?")){
				reiniciarNivel();
			}else{
				reiniciarJuego();
			}
		}
		var txt = ""	
		txt = "<table cellpadding=\"0\" cellspacing=\"0\" border=\"0\">"
		for (i=0;i<aNivelActual.length;i++){
			txt += "<tr height=\"" + h + "\">";
			for(j=0;j<aNivelActual[i].length;j++){
				switch (aNivelActual[i].charAt(j)){
					case "#": //pared
						imagen = dirSkin + "pared.gif";
						break;
					case "@": //jugador
						imagen = dirSkin + "jugador.gif";
						posV   = i;
						posH   = j;
						break;
					case ".": //objetivo
						imagen = dirSkin + "objetivo.gif";
						numObjetivos = numObjetivos + 1;
						break;
					case "$": //tesoro
						imagen = dirSkin + "tesoro.gif";
						break;
					case "*": //tesoro sobre objetivo
						imagen = dirSkin + "otesoro.gif";
						numTesorosColocados = numTesorosColocados + 1;
						numObjetivos = numObjetivos + 1;
						break;
					case "+": //jugador sobre objetivo
						imagen = dirSkin + "ojugador.gif";
						posV   = i;
						posH   = j;
						numObjetivos = numObjetivos + 1;
						break;
					case " ": //espacio
						imagen = dirSkin + "sp.gif";
						break;
				}
	
				txt +="<td id=\"td_x" + i + "y" + j + "\" width=\"" + w + "\"><img src=\"" + imagen + "\" width=\"" + w + "\" height=\"" + h + "\" name=\"img_x" + i + "y" + j + "\" ></td>";
			}
			txt += "</tr>";
			if (maxH< ( aNivelActual[i].length - 1)){
				maxH = aNivelActual[i].length - 1;
			}
		}
		txt += "<tr><td colspan=\"" + aNivelActual[0].length + "\" align=\"right\"><p>M:<span id=\"numM\">0</span> &nbsp; &nbsp; P:<span id=\"numP\">0</span>  &nbsp; &nbsp;  T:<span id=\"numT\">0</span></p></td></tr>";
		txt += "</table>";
		if (maxV < (aNivelActual.length - 1)){
			maxV = aNivelActual.length - 1;
		}
		document.write(txt);
	}
	
	if (strMovimientos.length>0){
		contarMovimientos();
	}
}

function repintarPared(){
	if (!esParedSimple){
		for (i=0;i<aNivelActual.length;i++){
			for(j=0;j<aNivelActual[i].length;j++){
				if (aNivelActual[i].charAt(j)=="#"){
					obtenerPared(i,j);
				}
			}
		}
	}
}

function obtenerPared(i0,j0){
	strTxt = "";
	kkk=1;
	for(aaa=i0-1;aaa<i0+2;aaa++){
		for(bbb=j0-1;bbb<j0+2;bbb++){
			if ((aaa>=0) && (aaa<=maxV) && (bbb>=0) && (bbb<=maxH)){
				if( aNivelActual[aaa].charAt(bbb) == "#"){
					strTxt += "" + kkk + "";
				}
			}
			kkk++;
		}
	}
	if (strTxt=="1234567" || strTxt=="1234569" || strTxt=="12345679"){
		strTxt = "123456";
	}else if (strTxt=="12345" || strTxt=="123457" || strTxt=="1234579" || strTxt=="12457" || strTxt=="12459" || strTxt=="123459" || strTxt=="124579"){
		strTxt = "1245";
	}else if (strTxt=="124567" || strTxt=="1245679" || strTxt=="124569"){
		strTxt = "12456";
	}else if (strTxt=="1234578" || strTxt=="1245789" || strTxt=="12345789"){
		strTxt = "124578";
	}else if (strTxt=="123458" || strTxt=="1234589" || strTxt=="124589"){
		strTxt = "12458";
	}else if (strTxt=="234567" || strTxt=="234569" || strTxt=="2345679"){
		strTxt = "23456";
	}else if (strTxt=="12356" || strTxt=="1235679" || strTxt=="123569" || strTxt=="23567" || strTxt=="23569" || strTxt=="123567" || strTxt=="235679"){
		strTxt = "2356";
	}else if (strTxt=="1235678" || strTxt=="123568" || strTxt=="235678"){
		strTxt = "23568";
	}else if (strTxt=="12356789" || strTxt=="1235689" || strTxt=="2356789"){
		strTxt = "235689";
	}else if (strTxt=="2345" || strTxt=="23457" || strTxt=="234579" || strTxt=="2457" || strTxt=="2459" || strTxt=="23459"){
		strTxt = "245";
	}else if (strTxt=="24567" || strTxt=="245679" || strTxt=="24569"){
		strTxt = "2456";
	}else if (strTxt=="234578" || strTxt=="245789" || strTxt=="2345789"){
		strTxt = "24578";
	}else if (strTxt=="23458" || strTxt=="234589" || strTxt=="24589"){
		strTxt = "2458";
	}else if (strTxt=="1235" || strTxt=="125" || strTxt=="12579" || strTxt=="1259" || strTxt=="235" || strTxt=="2357" || strTxt=="257" || strTxt=="2579" || strTxt=="259" || strTxt=="2359" || strTxt=="12357" || strTxt=="123579" || strTxt=="23579" || strTxt=="1257" || strTxt=="12359"){
		strTxt = "25";
	}else if (strTxt=="1256" || strTxt=="12567" || strTxt=="125679" || strTxt=="12569" || strTxt=="2567" || strTxt=="25679" || strTxt=="2569" ){
		strTxt = "256";
	}else if (strTxt=="125678" || strTxt=="12568" || strTxt=="25678"){
		strTxt = "2568";
	}else if (strTxt=="1256789" || strTxt=="125689" || strTxt=="256789"){
		strTxt = "25689";
	}else if (strTxt=="123578" || strTxt=="1235789" || strTxt=="12358" || strTxt=="123589" || strTxt=="12578" || strTxt=="125789" || strTxt=="1258" || strTxt=="12589" || strTxt=="23578" || strTxt=="235789" || strTxt=="2358" || strTxt=="23589" || strTxt=="2578" || strTxt=="25789" || strTxt=="2589"){
		strTxt = "258";
	}else if (strTxt=="13457" || strTxt=="13459" || strTxt=="145" || strTxt=="1457" || strTxt=="1459" || strTxt=="345" || strTxt=="3457" || strTxt=="3459" || strTxt=="457" || strTxt=="459" || strTxt=="4579" || strTxt=="134579" || strTxt=="14579" || strTxt=="34579"){
		strTxt = "45";
	}else if (strTxt=="13456" || strTxt=="134567" || strTxt=="1345679" || strTxt=="134569" || strTxt=="1456" || strTxt=="14567" || strTxt=="145679" || strTxt=="14569" || strTxt=="3456" || strTxt=="34567" || strTxt=="345679" || strTxt=="34569" || strTxt=="4567" || strTxt=="45679" || strTxt=="4569"){
		strTxt = "456";
	}else if (strTxt=="1345678" || strTxt=="145678" || strTxt=="345678"){
		strTxt = "45678";
	}else if (strTxt=="1456789" || strTxt=="3456789" || strTxt=="13456789"){
		strTxt = "456789";
	}else if (strTxt=="134568" || strTxt=="14568" || strTxt=="34568"){
		strTxt = "4568";
	}else if (strTxt=="1345689" || strTxt=="145689" || strTxt=="345689"){
		strTxt = "45689";
	}else if (strTxt=="134578" || strTxt=="1345789" || strTxt=="14578" || strTxt=="145789" || strTxt=="34578" || strTxt=="45789" || strTxt=="345789"){
		strTxt = "4578";
	}else if (strTxt=="134589" || strTxt=="1458" || strTxt=="14589" || strTxt=="3458" || strTxt=="34589" || strTxt=="4589"){
		strTxt = "458";
	}else if (strTxt=="135" || strTxt=="1357" || strTxt=="1359" || strTxt=="15" || strTxt=="157" || strTxt=="1579" || strTxt=="159" || strTxt=="35" || strTxt=="357" || strTxt=="3579" || strTxt=="359" || strTxt=="57" || strTxt=="579" || strTxt=="59" || strTxt=="13579"){
		strTxt = "5";
	}else if (strTxt=="13567" || strTxt=="135679" || strTxt=="13569" || strTxt=="156" || strTxt=="1567" || strTxt=="1569" || strTxt=="356" || strTxt=="3567" || strTxt=="35679" || strTxt=="3569" || strTxt=="567" || strTxt=="5679" || strTxt=="569" || strTxt=="1356" || strTxt=="15679"){
		strTxt = "56";
	}else if (strTxt=="135678" || strTxt=="15678" || strTxt=="1568" || strTxt=="35678" || strTxt=="3568" || strTxt=="5678" || strTxt=="13568"){
		strTxt = "568";
	}else if (strTxt=="1356789" || strTxt=="156789" || strTxt=="15689" || strTxt=="356789" || strTxt=="35689" || strTxt=="56789" || strTxt=="135689"){
		strTxt = "5689";
	}else if (strTxt=="1358" || strTxt=="1578" || strTxt=="15789" || strTxt=="158" || strTxt=="1589" || strTxt=="3578" || strTxt=="35789" || strTxt=="358" || strTxt=="3589" || strTxt=="578" || strTxt=="5789" || strTxt=="589" || strTxt=="135789" || strTxt=="13578"){
		strTxt = "58";
	}
	
	strTxt = dirSkin + strTxt + ".gif";
	document.images["img_x" + i0 + "y" + j0].src = strTxt;
}



function reiniciarNivel(){
	deleteCookie("sokoban_estado");
	deleteCookie("sokoban_movimientos");		
	recargar();
}


function reiniciarJuego(){
	deleteCookie("sokoban_nivel");
	deleteCookie("sokoban_estado");
	deleteCookie("sokoban_movimientos");	
	recargar();
}

function pintarEstado(){
	txt = "";
	for (i=0;i<aNivelActual.length;i++){
		txt = txt + aNivelActual[i] + "|";	
	}
	fechaExp = getExpDate(180, 0, 0);
	setCookie("sokoban_estado",txt,fechaExp);
	setCookie("sokoban_movimientos",strMovimientos,fechaExp);
	if (numTesorosColocados==numObjetivos){
		deleteCookie("sokoban_estado");
		deleteCookie("sokoban_movimientos");
		setCookie("sokoban_nivel",parseInt(nNivelActual)+1,fechaExp);
		recargar();	
	}
}

function handleCursores(evt) {
	evt = (evt) ? evt : ((window.event) ? event : null);

	if (evt) {
		switch (evt.keyCode) {
			case 37: //izquierda
				if(posH>0){
					if (aNivelActual[posV].charAt(posH-1)==" " || aNivelActual[posV].charAt(posH-1)=="."){
						numM++;
						inJugador(posV,posH-1);	
						outBloque(posV,posH);
						strMovimientos += "l";
						posH = posH - 1;
					}else if (aNivelActual[posV].charAt(posH-1)=="$" || aNivelActual[posV].charAt(posH-1)=="*"){
						if(posH-2>0){
							c = aNivelActual[posV].charAt(posH-2);
							if (c == " " || c == "."){
								numP++;
								inTesoro(posV,posH-2);
								outBloque(posV,posH-1);
								inJugador(posV,posH-1);
								outBloque(posV,posH);
								strMovimientos += "L";
								posH = posH - 1;
							}
						}
					}
    		}
				break;    
			case 38: //arriba
				if(posV>0){
					if (aNivelActual[posV-1].charAt(posH)==" " || aNivelActual[posV-1].charAt(posH)=="."){
						numM++;
						inJugador(posV-1,posH);
						outBloque(posV,posH);
						strMovimientos += "u";
						posV = posV - 1;
					}else if (aNivelActual[posV-1].charAt(posH)=="$" || aNivelActual[posV-1].charAt(posH)=="*"){
						if(posV-2>0){
							c = aNivelActual[posV-2].charAt(posH);
							if (c == " " || c == "."){
								numP++;
								inTesoro(posV-2,posH);
								outBloque(posV-1,posH);
								inJugador(posV-1,posH);
								outBloque(posV,posH);
								strMovimientos += "U";
								posV = posV - 1;
							}	
						}
					}
				}
        break;    
			case 39: //derecha
				if(posH<maxH){
					if (aNivelActual[posV].charAt(posH+1)==" " || aNivelActual[posV].charAt(posH+1)=="."){
						numM++;
						inJugador(posV,posH+1);
						outBloque(posV,posH);
						strMovimientos += "r";
						posH = posH + 1;
					}else if (aNivelActual[posV].charAt(posH+1)=="$" || aNivelActual[posV].charAt(posH+1)=="*"){
						if(posH+2<maxH){
							c = aNivelActual[posV].charAt(posH+2);
							if (c == " " || c == "."){
								numP++;
								inTesoro(posV,posH+2);
								outBloque(posV,posH+1);
								inJugador(posV,posH+1);
								outBloque(posV,posH);
								strMovimientos += "R";
								posH = posH + 1;
							}	
						}
    			}
    		}
				break;    
			case 40: //abajo
				if(posV<maxV){
					if (aNivelActual[posV+1].charAt(posH)==" " || aNivelActual[posV+1].charAt(posH)=="."){
						numM++;
						inJugador(posV+1,posH);
						outBloque(posV,posH);
						strMovimientos += "d";
						posV = posV + 1;
					}else if(aNivelActual[posV+1].charAt(posH)=="$" || aNivelActual[posV+1].charAt(posH)=="*"){
						if(posV+2<maxV){
							c = aNivelActual[posV+2].charAt(posH);
							if (c == " " || c == "."){
								numP++;
								inTesoro(posV+2,posH);
								outBloque(posV+1,posH);
								inJugador(posV+1,posH);
								outBloque(posV,posH);
								strMovimientos += "D";
								posV = posV + 1;
							}	
						}
    			}
    		}
				break;    
			case 90: //Z
				if (evt.ctrlKey){
					deshacer();
				}
				break;
		}

		pintarEstado();
	}
}



function outBloque(pVO,pHO){
	iO = iBlanco;
	cO = ' ';

	var idOrigen  = "img_x" + pVO + "y" + pHO;
	
	vTemp = document.images[idOrigen].src.split("/");
	iTemp = vTemp[vTemp.length-1];
	if (iTemp.charAt(0)== "o"){
		iO = iObjetivo;
		cO = '.';	
	}
	if (iTemp.split(".")[0]=="otesoro"){
		numTesorosColocados = numTesorosColocados - 1;
	}
	
	escribirEstado(pVO,pHO,cO);
	cambiar(idOrigen,iO);
}



function inTesoro(pVO,pHO){
	iO = iTesoro;
	cO = '$';

	var idOrigen  = "img_x" + pVO + "y" + pHO;
	
	vTemp = document.images[idOrigen].src.split("/");
	if (vTemp[vTemp.length-1].charAt(0)== "o"){
		iO = iOTesoro;
		cO = '*';
		numTesorosColocados = numTesorosColocados + 1;
	}
	
	escribirEstado(pVO,pHO,cO);
	cambiar(idOrigen,iO);
}



function inJugador(pVO,pHO){
	iO = iJugador;
	cO = '@';

	var idOrigen  = "img_x" + pVO + "y" + pHO;
	
	vTemp = document.images[idOrigen].src.split("/");
	if (vTemp[vTemp.length-1].charAt(0)== "o"){
		iO = iOJugador;
		cO = '+';	
	}
	
	escribirEstado(pVO,pHO,cO);
	cambiar(idOrigen,iO);
}



function escribirEstado(pV,pH,letra){
	var txtEstado = "";
	for (i=0;i<aNivelActual[pV].length;i++){
		if (i==pH){
			txtEstado = txtEstado + letra;
		}else{
			txtEstado = txtEstado + aNivelActual[pV].charAt(i);
		}
	}
	aNivelActual[pV] = txtEstado;
}


function escribirCreditos(){
	document.write("<b>Niveles: " + nombreDeNivel + "</b><br>");
	if(autorDeNivel!="" && mailDeNivel!=""){
		document.write("&nbsp; &nbsp; <i>&copy; " + autorDeNivel + " (<a href=\"mailto:" + mailDeNivel + "\">" + mailDeNivel + "</a>)</i><br>");
	}else if (autorDeNivel!=""){
		document.write("&nbsp; &nbsp; <i>&copy; " + autorDeNivel + "<br>");
	}
	if(urlDeNivel!=""){
		document.write("&nbsp; &nbsp; <i><a href=\"" + urlDeNivel + "\">" + urlDeNivel + "</a></i><br>");
	}
}

function escribirPie(){
	txt = ""
	txt += "<p class=\"textoP\">\n";
	txt += "<i>\n";
	txt += "	<a href=\"http://sokoban.e-Contento.com\" class=\"textoP\">Sokoban en JavaScript</a><br>\n";
	txt += "	&copy; <a href=\"mailto:sokoban@e-contento.com\" class=\"textoP\">Juan Antonio Jiménez</a><br>\n";
	txt += "	<a href=\"http://sokoban.e-Contento.com\" class=\"textoP\">http://sokoban.e-Contento.com</a><br>\n";
	txt += "</i>\n";
	txt += "</p>\n";
	document.write(txt);
}

function pintarMovimientos(){
	document.getElementById("numM").innerHTML = numM;
  document.getElementById("numP").innerHTML = numP;
  document.getElementById("numT").innerHTML = numM + numP;
}

function contarMovimientos(){
	for(i=0;i<strMovimientos.length;i++){
		if (strMovimientos.charAt(i)<"Z"){
			numP++;
		}else{
			numM++;
		}
	}
	pintarMovimientos();
}
