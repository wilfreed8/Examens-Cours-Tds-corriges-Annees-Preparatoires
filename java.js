




function search() {
  // Récupérer la valeur de la zone de texte de recherche
  var searchTerm = document.getElementById("searchInput").value;
  
  // Récupérer tous les éléments <aside> de la page
  var asides = document.getElementsByTagName("aside");
  
  // Créer un tableau pour stocker les résultats de la recherche
  var searchResults = [];
  
  // Parcourir tous les éléments <aside> et vérifier si le terme de recherche est présent
  for (var i = 0; i < asides.length; i++) {
    var asideContent = asides[i].textContent;
    
    // Vérifier si le terme de recherche est présent dans le contenu de l'élément <aside>
    if (asideContent.includes(searchTerm)) {
      // Ajouter l'élément <aside> à la liste des résultats de recherche
      searchResults.push(asides[i].cloneNode(true));
    }
  }
  
  // Afficher les résultats de la recherche dans l'élément <div> dédié
  var searchResultsDiv = document.getElementById("searchResults");
  searchResultsDiv.innerHTML = "";
  
  for (var j = 0; j < searchResults.length; j++) {
    searchResultsDiv.appendChild(searchResults[j]);
  }
}
document.getElementById("searchInput").addEventListener("keydown", function(event) {
  if (event.key === "Enter") {
    search();
  }
});
