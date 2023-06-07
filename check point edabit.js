//1 Il s'agit d'une introduction au fonctionnement des défis d'Edabit.
// Dans le Onglet Code ci-dessus vous verrez une fonction de démarrage qui ressemble à ceci:

function hello() {
return "hello edabit.com"
}

//2 Retournez la somme de deux nombres
//Créez une fonction qui prend deux nombres comme arguments et renvoie leur somme.

function addition(a, b) {
	  var sum = a + b;
  return sum;
}

//3 Renvoyez le numéro suivant à partir de l'entier passé
//Créez une fonction qui prend un nombre comme argument, incrémente le nombre par + 1 et renvoie le résultat.

function addition(num) {
  var result = num + 1;
  return result;	
}

/* 4 Retournez le reste de deux numéros
  Il existe un seul opérateur en JavaScript, capable de fournir le reste d'une opération de division.
  Deux nombres sont passés comme paramètres.
  Le premier paramètre divisé par le deuxième paramètre aura un reste,
  éventuellement zéro. Renvoyez cette valeur.  */
  
 function remainder(x, y) {
	  return x % y;
} 

//5 Retournez le premier élément d'un tableau
//Créez une fonction qui prend un tableau contenant uniquement des nombres et renvoyez le premier élément.

function getFirstValue(arr) {
 return arr[0];	
}

//6 Le nombre est-il inférieur ou égal à zéro?
//Créez une fonction qui prend un nombre comme seul argument et renvoie true s'il est inférieur ou égal à zéro,
// sinon retour false.
 
 function lessThanOrEqualToZero(num) {
	  if (num <= 0) {
    return true;
  } else {
    return false;
  }
}

/*7 Temps de tri
JavaScript a une belle fonction intégrée sort qui trie un itérable,
 généralement un tableau de nombres, les triant dans l'ordre croissant,
 mais en utilisant un bloc, vous pouvez trier l'itérable de différentes manières.

Créez une fonction qui prend un tableau d'entiers comme argument et renvoie le même tableau dans l'ordre croissant.
 Utilisation sort() serait facile, mais pour ce défi, vous devez trier le tableau créant votre propre algorithme.  */
 
 function sortArray(arr) {
	 var n = arr.length;

  for (var i = 0; i < n - 1; i++) {
    var minIndex = i;

    for (var j = i + 1; j < n; j++) {
      if (arr[j] < arr[minIndex]) {
        minIndex = j;
      }
    }

    if (minIndex !== i) {
      var temp = arr[i];
      arr[i] = arr[minIndex];
      arr[minIndex] = temp;
    }
  }

  return arr;
}

//8 Corrigez le code dans l'onglet code pour réussir ce défi ( uniquement les erreurs de syntaxe )

    function cubes(a) {
	retunr a ** 3
	return a ** 3;   correction
}

//9 Les promesses sont juste objetsarr, une chaîne str et renvoyez un tableau de nombres selon les règles suivantes:

"Asc"renvoie un tableau trié dans l'ordre croissant.
"Des"renvoie un tableau trié dans l'ordre décroissant.
"None"renvoie un tableau sans aucune modification.                  

function ascDesNone(arr, str) {
	
	  if (str === "Asc") {
    return arr.sort(function(a, b) {
      return a - b;
    });
  } else if (str === "Des") {
    return arr.sort(function(a, b) {
      return b - a;
    });
  } else {
    return arr;
  }
}  

//10  Créez une fonction qui, étant donné un tableau similaire à celui ci-dessus,
// trie le tableau en fonction du "contenu des éléments".           
 
 function sortIt(arr) {
	  arr.sort();
      return arr;
}

//11 Créer une fonction qui calcule le nombre de carrés différents dans un n * n grille carrée.
// Vérifier le Ressources onglet.objets            

 function numberSquares(n) {
	 var numberOfSquares = (n * (n + 1) * (2 * n + 1)) / 6;
  return numberOfSquares;
}

//12 Créer une fonction qui prend length et width et trouve le périmètre d'un rectangle. 
   
function findPerimeter(length, width) {
	var perimeter = 2 * (length + width);
  return perimeter;
}

/*13 Créer une fonction qui renvoie true si le premier tableau peut être imbriqué à l'intérieur du second et false sinon.
arr1 peut être imbriqué à l'intérieur arr2 si:
arr1's min est supérieur à arr2'c'est min.
arr1's max est inférieur à arr2'c'est max.  */

function canNest(arr1, arr2) {
  var min1 = Math.min(...arr1); 
  var max1 = Math.max(...arr1); 
  var min2 = Math.min(...arr2); 
  var max2 = Math.max(...arr2); 
  
  if (min1 > min2 && max1 < max2) {
    return true;
  } else {
    return false;
  } 
   } 