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


return  parseInt(distance / 1000);

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
  console.log(csvData.length);

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
 //shellsort2();
 //return null; 
 var test = new Array({dist:59},{dist:57},{dist:52},{dist:50},{dist:58},{dist:55},{dist:1},{dist:25},{dist:18},{dist:20},{dist:24})
 //csvData.pop();
 //csvData = [...test];
 //console.log(csvData);
 var middle = Math.floor(csvData.length/2);
 var longueur = csvData.length;
  //gaped for 
 let count = 0; 
 
 for (var gap = middle ; gap > 0; gap -= 1){
    for (var i = 0 ; (i + gap) < longueur ;i++){
      if (parseInt(csvData[i + gap].dist) > parseInt(csvData[i].dist)){
          swap(i + gap , i);
         
        }
    }
  }

}

function shellsort2(){
  var test = new Array({dist:59},{dist:57},{dist:52},{dist:50},{dist:58},{dist:55},{dist:1},{dist:25},{dist:18},{dist:20},{dist:24})
  //csvData.pop();
  //csvData = [...test];
  //console.log(csvData);
  var middle = Math.floor(csvData.length/2);
  var longueur = csvData.length;
   //gaped for 
  let count = 0;
  let h = 1 ; 
  // decoupage optimal
  while (h <  (csvData.length / 3) ){
    h = 3*h+1;
  }
  console.log(h);
  while ( h >  0 ){
     for (var gap = h ; gap < longueur ; gap += h ){ 
         for (var i = gap ; i > 0 ; i -= h){
           if (parseInt(csvData[i].dist) < parseInt(csvData[i-h].dist)){
               swap(i , i-h);
               //count++;
             }
         }
       }
   h = Math.floor(h / 3); 
 }
}
/**********************************************************************************
 * MERGE  SORT
 **********************************************************************************/
function mergesort(){
  console.log("mergesort - implement me !");
  let a = new Array({dist:59},{dist:57},{dist:52},{dist:50},{dist:58},{dist:55},{dist:1},{dist:25},{dist:18},{dist:20})
  let profondeur = 1;
  ms(csvData,profondeur,false); 
  console.log(csvData);
  setupDisplay();
  //console.log(a);
}
function ms(a,profondeur,debug){
  if (a.length < 2 ) return // array déjà trié. un seul element dans l'array 

  //splitting the array 
  let mid = Math.floor(a.length / 2);
  let left = a.slice(0, mid);
  let right= a.slice(mid, a.length);
  console.log(left)
  console.log(right)
  
 
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
  //setupDisplay(a)
  console.log("after merge");
  //console.log(a);
} 


function merge(left , right ,a){
  var l = 0 
  var r = 0
  var k =0;
 

  // boucle finale . les deux tableaux doivent etre triés !
  while(l < left.length && r < right.length){
    
    if (parseInt(left[l].dist) <= parseInt(right[r].dist)){
        //position = csvData.indexOf(left[l]);
        //swap(k,position);
        recursive(k)
        recursive(l)
        a[k] = left[l];
      //recursive(k)
      //recursive(l)
      //affectation(k,l);
      l++;
    }else{

        position = csvData.indexOf(right[r]);
        //swap(k,position);
        recursive(k)
        recursive(r)
        a[k] = right[r];
      //affectation(k,r);
      r++;
    }


    k++;
  }
  //--------------------------------------
  // on remplie le general si l'un des deux tableaux left et right est en fin d'indice.
  // Seulement un des deux while sera executé. 
  while ( l < left.length){
   
     // position = csvData.indexOf(left[l]);
     // swap(k,position);
      recursive(k)
      recursive(l)
      a[k] = left[l];
   l++;
   k++;
  }

  while ( r < right.length){
        //position = csvData.indexOf(right[r]);
        //swap(k,position);
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
function heapsort(){
  console.log("heapsort - implement me !");
  var test = new Array({dist:9},{dist:7},{dist:2},{dist:4},{dist:8},{dist:5},{dist:1},{dist:6},{dist:3},{dist:10})
  // create heap
  
  SortH(csvData);
  console.log(csvData)
}
function SortH(arr){
  var n = arr.length;
  // Build max heap
  for (var i = Math.floor(n / 2 - 1); i >= 0; i--) {
    heapify(arr, n, i);
  }
  for (var i = n-1; i >= 0; i--)
  {
    //swap()
    swap(0,i);
    // Heapify root element
    heapify(arr, i, 0);
  }
}
function heapify(arr,  n, i){
	// Find largest among root, left child and right child
  let  largest = i; 
  let l = 2 * i + 1; 
  let r = 2 * i + 2;  

  if (l < n && parseInt(arr[l].dist) > parseInt(arr[largest].dist)){
    largest = l;
  }
  if (r < n && parseInt(arr[r].dist) > parseInt(arr[largest].dist)){
    largest = r;
  }
  // Swap and continue heapifying if root is not largest
  if (largest != i)
  {
     // swap
     swap(i,largest); 
     heapify(arr, n, largest);
  }
}

/**********************************************************************************
 * QHICK SORT
 **********************************************************************************/
function quicksort(){
  console.log("quicksort - implement me !");
  var test = new Array({dist:9},{dist:7},{dist:2},{dist:4},{dist:8},{dist:5},{dist:1},{dist:6},{dist:3},{dist:10})
  qSort(csvData, 0, csvData.length - 1);
  //var sortedArray = quickSort(test, 0, test.length - 1);
}


function partition(items, left, right) {
  var pivot   = items[Math.floor((right + left) / 2)], //middle element
      i       = left, //left pointer
      j       = right; //right pointer
  while (i <= j) {
      while (items[i].dist <= pivot.dist) {
          i++;
      }
      while (items[j].dist >= pivot.dist) {
          j--;
      }
      if (i <= j) {
          swap(i, j); //sawpping two elements
          i++;
          j--;
      }
  }
  return i;
}

function qSort(items, left, right) {
  var index;
  if (items.length > 1) {
      index = partition(items, left, right); //index returned from partition
      if (left < index - 1) { //more elements on the left side of the pivot
          qSort(items, left, index - 1);
      }
      if (index < right) { //more elements on the right side of the pivot
          qSort(items, index, right);
      }
  }
 // return items;
}
// first call to quick sort






/**********************************************************************************
 * QUICK3 SORT
 **********************************************************************************/
function quick3sort(){
  console.log("quick3sort - implement me !");
}


function sort(algo)
{

  console.time("heapsort")
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
 
  console.timeEnd("heapsort")
}
