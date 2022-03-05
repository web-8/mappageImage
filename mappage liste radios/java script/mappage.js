var currentRadio = new Image;
var listRadios  = new Array() ;
initUrl();
	 
function selectStation(elem){
    var lecteur     = document.getElementById("lecteur");
    var afficheur   = document.getElementById("affichage");
    afficheur.innerHTML = elem.title;

    // on a cliqué sur la station en cours de lecture: affichage "pause" dans l'afficheur
    if (elem.title == currentRadio.title) {
        if (lecteur.paused) {
            lecteur.play();
            elem.className = "selected";
            afficheur.innerHTML = elem.title ;
        } else {
            lecteur.pause();
            elem.className = "selected paused";
            afficheur.innerHTML = elem.title + " / en pause";
        }
        return ;
    } 
    console.log(elem.title + " = " + listRadios[elem.title]) ;
    lecteur.src = listRadios[elem.title];
    lecteur.play();
    elem.className = "selected";    // on applique la classe "selected" sur la station sélectionnée
    currentRadio.className = "";    // on supprime la classe "selected" sur la précédente station
    currentRadio = elem ;     
}
function viewLecteur(afficheur) {
    var lecteur = document.getElementById("lecteur");
    if (lecteur.style.visibility == "hidden")
        lecteur.style.visibility = "" ;
    else
        lecteur.style.visibility = "hidden" ;
}
function initUrl(){
    listRadios["Ecouter RTL"] = "http://streaming.radio.rtl.fr/rtl-1-44-128.mp3" ;
    listRadios["Ecouter Nova"] = "http://novazz.ice.infomaniak.ch/novazz-128.mp3" ;
    listRadios["Ecouter Nostalgie"] = "https://scdn.nrjaudio.fm/audio1/fr/30601/mp3_128.mp3?origine=ubuntu_website" ;
    listRadios["Ecouter RiresEtChansons"] = "https://scdn.nrjaudio.fm/audio1/fr/30401/mp3_128.mp3?origine=ubuntu_website" ;
    listRadios["Ecouter Europe1"] = "http://ais-live.cloud-services.paris:8000/europe1.mp3" ;
    listRadios["Ecouter FranceInter"] = "http://icecast.radiofrance.fr/franceinter-midfi.mp3" ;
    listRadios["Ecouter OuiFM"] = "http://stream.ouifm.fr/ouifm-high.mp3" ;
    listRadios["Ecouter RTL2"] = "http://streaming.radio.rtl2.fr/rtl2-1-44-128" ; 
    listRadios["Ecouter RMC"] = "http://chai5she.cdn.dvmr.fr/rmcinfo" ; 
    listRadios["Ecouter SudRadio"] = "https://start-sud.ice.infomaniak.ch/start-sud-high.mp3" ; 
    listRadios["Ecouter Fip"] = "http://direct.fipradio.fr/live/fip-midfi.mp3" ; 
    listRadios["Ecouter CherieFM"] = "https://scdn.nrjaudio.fm/audio1/fr/30201/mp3_128.mp3?origine=ubuntu_website" ; 
    listRadios["Ecouter Africa"] = "https://african1paris.ice.infomaniak.ch/african1paris-128.mp3";
}