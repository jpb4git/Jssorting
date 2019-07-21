Number.prototype.toRadians = function(){
  return this * Math.PI / 180;
}


// Calculates the distance between Grenoble and the given city
function distanceFromGrenoble(city){

  var GrenobleLat = 45.166667;
  var GrenobleLong = 5.716667;
  var cityLat = parseFloat(city.latitude);
  var cityLong = parseFloat(city.longitude);
  var R = 6371e3; // metres
  var φ1 = GrenobleLat.toRadians();
  var φ2 = cityLat.toRadians();
  var Δφ = (cityLat - GrenobleLat).toRadians();
  var Δλ = (cityLong - GrenobleLong).toRadians();
  var a = Math.sin(Δφ/2) * Math.sin(Δφ/2) + Math.cos(φ1) * Math.cos(φ2) * Math.sin(Δλ/2) * Math.sin(Δλ/2);
  var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
  var distance = R * c;


return  distance / 1000;

}
  /**
   * calcule distance 
   * 
   */
    

// Swap 2 values in array csvData
// i is the index of the first city
// j is the index of the second city
function swap(i,j){
  displayBuffer.push(['swap', i, j]); // Do not delete this line (for display)
  var temp ; 
  temp = Object.assign({}, csvData[i]);
  csvData[i] = Object.assign({}, csvData[j]);
  csvData[j] = Object.assign({},temp);  
  
 
}

// Returns true if city with index i in csvData is closer to Grenoble than city with index j
// i is the index of the first city
// j is the index of the second city
function isLess(i, j){
  displayBuffer.push(['compare', i, j]); // Do not delete this line (for display)
   return  parseInt(csvData[i].dist) < parseInt(csvData[j].dist);  
}
function recursive(i){
  displayBuffer.push(['set', i]); // Do not delete this line (for display)
}

/**********************************************************************************
 * INSERT SORT
 **********************************************************************************/
function insertsort(){

   // on sort par distance 
   console.log("csvData start sorting ");

   for (var i = 1; i < csvData.length; i++){
      for (var k = i ; k > 0 && isLess(k,k-1); k--){
          swap(k,k-1);
      } 
   }

   console.log("insertsort - implement me !");

}
/**********************************************************************************
 * SELECTION SORT
 **********************************************************************************/
function selectionsort(){
  var taille = parseInt(csvData.length);
  for (i = 0 ; i < taille-1 ; i++ ){
    var min = i;  
    for (var j = i + 1  ; j < taille ; j++ ){
        if ( isLess(j,min)){
          min = j;    
        }
    } 
    if (min != i){
      swap(i,min); 
    }
  }
}
/**********************************************************************************
 * BUBBLE SORT
 **********************************************************************************/
function bubblesort(){
  var done = false;
  while (!done) {
      done = true;
      for (var i = 1; i< csvData.length; i++) {
          if (csvData[i-1].dist > csvData[i].dist) {
              done = false;
              swap(i,i-1);
          }
      }
  }
}
/**********************************************************************************
 * SHELL SORT
 **********************************************************************************/
function shellsort(){
 //var test = new Array({dist:59},{dist:57},{dist:52},{dist:50},{dist:58},{dist:55},{dist:1},{dist:25},{dist:18},{dist:20})
 var middle = Math.round(csvData.length/2);
 var longueur = csvData.length;
  //gaped for 
  for (var gap = middle ; gap > 0; gap -= 1){
    for (var i = 0 ; (i + gap) < longueur ;i++){
      if (parseInt(csvData[i + gap].dist) < parseInt(csvData[i].dist)){
          swap(i + gap , i);
        }
    }
  }
}
/**********************************************************************************
 * MERGE  SORT
 **********************************************************************************/
function mergesort(){
  console.log("mergesort - implement me !");
  let a = new Array({dist:59},{dist:57},{dist:52},{dist:50},{dist:58},{dist:55},{dist:1},{dist:25},{dist:18},{dist:20})
  let profondeur = 1;
  ms(csvData,profondeur,true); 
  //setupDisplay();
  console.log(a);
}


function ms(a,profondeur,debug){
  if (a.length < 2 ) return // array déjà trié. un seul element dans l'array 
  //splitting the array 
  let mid = Math.floor(a.length / 2);
  let left = a.slice(0, mid);
  let right= a.slice(mid, a.length);
 
  if (debug){
    console.log("profondeur : " + profondeur)
    console.log("A")
    console.log(a);
    console.log("left")
    console.log(left)
    console.log("right")
    console.log(right)
 }

  //recursive call for eatch part
  ms(left,profondeur+1,debug);
  ms(right,profondeur+1,debug);
  //mergin the sorted parts
  merge(left,right,a,profondeur);
  setupDisplay(a)
  //console.log("after merge");
  //console.log(a);
} 

function merge(left , right ,a){
  var l = 0 
  var r = 0
  var k =0;


  // boucle finale . les deux tableau doivent etre triés !
  while(l < left.length && r < right.length){
    if (parseInt(left[l].dist) <= parseInt(right[r].dist)){
      a[k] = left[l];
      recursive(k)
      recursive(l)
      //affectation(k,l);
      l++;
    }else{
      a[k] = right[r];
      recursive(k)
      recursive(r)
      //affectation(k,r);
      r++;
    }
    k++;
  }
  //--------------------------------------
  // on remplie le generale si l'un des deux tableaux left et right  G est en fin d'indice.
  // Seulement un des deux while sera executé. 
  while ( l < left.length){
    a[k] = left[l];
    recursive(k)
    recursive(l)
   l++;
   k++;
  }

  while ( r < right.length){
    a[k] = right[r];
    recursive(k)
    recursive(r)
   r++;
   k++;
  }
}


/**********************************************************************************
 * HEAP SORT
 **********************************************************************************/
function heapsort()
{
  console.log("heapsort - implement me !");
}
/**********************************************************************************
 * QHICK SORT
 **********************************************************************************/
function quicksort(){
  console.log("quicksort - implement me !");
}
/**********************************************************************************
 * QUICK3 SORT
 **********************************************************************************/
function quick3sort(){
  console.log("quick3sort - implement me !");
}


function sort(algo)
{
  switch (algo)
  {
    case 'insert': insertsort();break;
    case 'select': selectionsort();break;
    case 'bubble': bubblesort();break;
    case 'shell': shellsort();break;
    case 'merge': mergesort();break;
    case 'heap': heapsort();break;
    case 'quick': quicksort();break;
    case 'quick3': quick3sort();break;
    default: throw 'Invalid algorithm ' + algo;
  }
}
