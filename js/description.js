function get_query_variable(variable) {
    var query = window.location.search.substring(1);
    var vars = query.split('&');
    for (var i = 0; i < vars.length; i++) {
        var pair = vars[i].split('=');
        if (decodeURIComponent(pair[0]) == variable) {
            return decodeURIComponent(pair[1]);
        }
    }
    console.log('Query variable %s not found', variable);
}

function main()
{
    var id_of_product = get_query_variable("id");
    var produit = cat.get_item_with_id(id_of_product);
    var img_path = "./img/" + produit.get_img();
    
    document.getElementById("prix_produit").innerHTML = produit.get_prix();
    document.getElementById("img_produit").src = img_path;
}

main();
