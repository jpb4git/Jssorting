Number.prototype.toRadians = function(){
  return this * Math.PI / 180;
}


// Calculates the distance between Grenoble and the given city
function distanceFromGrenoble(city)
{

/** Converts numeric degrees to radians */
/**
 * if (typeof(Number.prototype.toRad) === "undefined") {
  Number.prototype.toRad = function() {
    return this * Math.PI / 180;
  }
}
*/

 // console.log("distanceFromGrenoble - implement me !");
 // console.log(city);
  var GrenobleLat = 45.166667;
  var GrenobleLong = 5.716667;

  var cityLat = parseFloat(city.latitude);
  var cityLong = parseFloat(city.longitude);

  var R = 6371e3; // metres
  var φ1 = GrenobleLat.toRadians();
  var φ2 = cityLat.toRadians();
  var Δφ = (cityLat - GrenobleLat).toRadians();
  var Δλ = (cityLong - GrenobleLong).toRadians();



  var a = Math.sin(Δφ/2) * Math.sin(Δφ/2) +
          Math.cos(φ1) * Math.cos(φ2) *
          Math.sin(Δλ/2) * Math.sin(Δλ/2);
  var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));

  var distance = R * c;

  //console.log("La ville : "+ city.chef_lieu   +  " est distante de " + Math.round(distance / 1000) + ' kilomètre(s) par rapport à Grenoble');

return  distance / 1000;

}





  /**
   * calcule distance 
   * 
   */
    

// Swap 2 values in array csvData
// i is the index of the first city
// j is the index of the second city
function swap(i,j)
{
  var temp ; 
  temp = csvData[i];
  csvData[i] = csvData[j];
  csvData[j] = temp;  
  //displayBuffer.push(['swap', i, j]); // Do not delete this line (for display)
 
}

// Returns true if city with index i in csvData is closer to Grenoble than city with index j
// i is the index of the first city
// j is the index of the second city
function isLess(i, j)
{
  displayBuffer.push(['compare', i, j]); // Do not delete this line (for display)
  
   return  csvData[i].dist < csvData[j].dist;  
}


function insertsort()
{

   // on sort par distance 
   console.log("csvData start sorting ");

   for (var i = 1; i < csvData.length; i++){
      for (var k = i ; k > 0 && csvData[k].dist < csvData[k-1].dist; k--){
          swap(k,k-1);
      } 
   }

   console.log("insertsort - implement me !");

}

function selectionsort()
{
  console.log("selectionsort - implement me before sort !");
  for (var f = 0 ; f < csvData.length;f++){
    console.log(csvData[f].dist);
  }
  var taille = Number(csvData.length);
  
  for (i = 0 ; i < taille ; i++ ){
    //if (Math.floor(Number(csvData[i].dist)) < Math.floor(Number(csvData[p].dist)) )  {
    //  p = i;
   /// }
   var p = i;
    for (var j = i + 1  ;j < taille ; j++ ){
        if (Math.floor(Number(csvData[j].dist)) < Math.floor(Number(csvData[p].dist))){
          p = j; 
          swap(i,p);     
        }
         
    } 
  }
  console.log("selectionsort - implement me !");
  for (var f = 0 ; f < csvData.length;f++){
    console.log(csvData[f].dist);
  }
  
  
}

function bubblesort()
{
  console.log("bubblesort - implement me !");
}

function shellsort()
{
  console.log("shellsort - implement me !");
}

function mergesort()
{
  console.log("mergesort - implement me !");
}

function heapsort()
{
  console.log("heapsort - implement me !");
}

function quicksort()
{
  console.log("quicksort - implement me !");
}
function quick3sort()
{
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
