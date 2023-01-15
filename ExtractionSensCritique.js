function extraction() {
    //Exemple d'extraction pour création de liste

    urlDepart = "https://www.senscritique.com/top/resultats/meilleurs_classiques_de_la_litterature/354140"

    const livres = document.querySelectorAll("a[data-testid='product-title']");
    livres.forEach(element => console.log(element.outerText));

    const auteurs = document.querySelectorAll("p[data-testid='creators']");
    auteurs1.item(0).querySelector('a span span').outerText

    auteurs.forEach(element => console.log(element.item(0).querySelector('a span span').outerText))


    for (let i = 0; i <livres.length; i++) {
        console.log(livres.item(i).outerText + " - " + auteurs.item(i).querySelector('a span span').outerText)
    }
}
