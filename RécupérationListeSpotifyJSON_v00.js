function liste(nomListe) {

    //On récupère toutes les lignes
    var lignes = document.querySelectorAll("div[role='row']")

    var result = '[\n'

    for (var i = 1; i < lignes.length; i++) {
        if (i>1) {
            result += ",\n"
        }

        //On recherche le ligne qui contient le titre de la chanson et le chanteur
        var ligneTitreChanteur = lignes[i].querySelector("div[aria-colindex='2']")

        //On recherche le chanteur
        var ligneChanteur = ligneTitreChanteur.querySelector("a > span > span")
        //On l'enregistre
        var chanteur = ligneChanteur.innerText

        //On recherche le titre
        var ligneTitre = ligneTitreChanteur.querySelector("div > span > span")
        //On l'enregistre
        var titre = ligneTitre.innerText.replace('"','\"')

        //On cherche la ligne qui contient le nom de l'album
        var ligneAlbumComplete = lignes[i].querySelector("div[aria-colindex='3']") 

        //On cherche l'album
        var ligneAlbum = ligneAlbumComplete.querySelector("a > span > span")
        //On l'enregistre
        var album = ligneAlbum.innerText.replace('"','\"')

        //On récupère le numéro dans la liste
        var ligneNumero = lignes[i].ariaRowIndex

        //On affiche le tout
        //console.log(ligneNumero + " - chanteur: " + chanteur + " - titre: " + titre + " - album: " + album)
        //On enregistre le JSON
        result += '{"order":' + ligneNumero + ',"chanteur": "' + chanteur + '","titre": "' + titre + '","album": "' + album + '","playlist": "' + nomListe + '"}'
    }

    result += ']'
    console.log(result)

};