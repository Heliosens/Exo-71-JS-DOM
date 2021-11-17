let monDiv = document.createElement('div');

monDiv.innerHTML = "Ce div a été ajouté en utilisant javascript";

document.getElementById('viewport').appendChild(monDiv);

let viewP = document.getElementById('viewport');

let div2 = document.createElement('div');
div2.style.backgroundColor = "red";
div2.style.width = "100px";
div2.style.height = "100px";

viewP.appendChild(div2);

let clear = document.getElementById('aSupprimer');

clear.remove();