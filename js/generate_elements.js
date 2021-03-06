function generate_navbar()
{
    var header = document.getElementsByTagName('header')[0];
    var firstnav = document.createElement('nav');
    var title1 = $(document).find("title").text();
    if (title1 == "Catalogue en ligne")
	firstnav.className="navbar navbar-expand-md navbar-dark bg-dark";
    else
	firstnav.className="navbar navbar-expand-md navbar-dark fixed-top bg-dark";
    header.appendChild(firstnav);

    var firstnavp = header.lastChild;
    var secondnav = document.createElement('nav');
    secondnav.className="container d-flex justify-content-between navbar-inverse";
    firstnavp.appendChild(secondnav);

    var secondnavp = firstnavp.lastChild;

    var ael = document.createElement('a');
    ael.className="navbar-brand";
    ael.href ="./index.html";
    ael.innerHTML = "Catalogue En ligne";
    secondnavp.appendChild(ael);

    // for signed_in cookie see sign.js
    var signed = getCookie("signed_in");
    if (signed == "y")
    {
	var uel = document.createElement('ul');
	uel.className="nav navbar-nav navbar-right";
	secondnavp.appendChild(uel);

	var uelp = secondnavp.lastChild;

	var user = getCookie("Username");

	var li2  = document.createElement('li');	
	li2.className = "dropdown";
	uelp.appendChild(li2);

	var li2_p = uelp.lastChild;

	var a1 = document.createElement('a');
	a1.className = "dropdown-toggle";
	a1.setAttribute("data-toggle", "dropdown");
	a1.href = "#";
	a1.innerHTML =  user;
	li2_p.appendChild(a1);

	var a1_p = li2_p.lastChild;
	var span1 = document.createElement('span');
	span1.className = "caret";
	a1_p.appendChild(span1);

	var ul6 = document.createElement('ul');
	ul6.className = "dropdown-menu";
	li2_p.appendChild(ul6);

	
	var ul6_p =li2_p.lastChild;
	var li4 = document.createElement('li');
	ul6_p.appendChild(li4);

	var li4_p = ul6_p.lastChild;
	var a5 = document.createElement('a');
	a5.innerHTML = "Voir panier";
	a5.href = "panier.html";
	li4_p.appendChild(a5);

	var li5 = document.createElement('li');
	ul6_p.appendChild(li5);

	var li6_p = ul6_p.lastChild;
	var a7 = document.createElement('a');
	a7.innerHTML = "Deconnexion";
	a7.href = "#";
	a7.setAttribute("onclick", "deconnection_client()");
	li6_p.appendChild(a7);
    }
    else
    {
	var uel = document.createElement('ul');
	uel.className="navbar-nav navbar-right";
	secondnavp.appendChild(uel);

	var uelp = secondnavp.lastChild;
	
	var ilel = document.createElement('li');
	ilel.className="nav-item active";
	uelp.appendChild(ilel);

	var ilelp = uelp.lastChild;
	var ael2 = document.createElement('a');
	ael2.className = "nav-link";
	ael2.innerHTML = "S'inscrire";
	ael2.href="./signup.html";
	ilelp.appendChild(ael2);

	var ilel2 = document.createElement('il');
	ilel.className="nav-item active";
	uelp.appendChild(ilel2);

	var ilelp2 = uelp.lastChild;
	var ael3 = document.createElement('a');
	ael3.className = "nav-link";
	ael3.innerHTML = "Ouvrir une session";
	ael3.href="./signin.html";
	ilelp2.appendChild(ael3);
    }
}

function generate_footer()
{
    var last_section_p = document.getElementById('last-section');

    var newhr = document.createElement('hr');
    newhr.className = "featurette-divider";
    last_section_p.appendChild(newhr);

    var new_footer = document.createElement('footer');
    new_footer.className = "container";
    last_section_p.appendChild(new_footer);

    var new_footer_p = last_section_p.lastChild;
    var pel = document.createElement('p');
    pel.innerHTML = "&copy; 2017-2018 PAM.inc";
    new_footer_p.appendChild(pel);
}


function main()
{
    generate_navbar();
    generate_footer();
}

main();
