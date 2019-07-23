var test = new Array({dist:9},{dist:7},{dist:2},{dist:4},{dist:8},{dist:5},{dist:1},{dist:6},{dist:3},{dist:10});
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
  
  temp =  csvData[i];
  csvData[i] = csvData[j];
  csvData[j] = temp; 
 
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
// version 2  renaud
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
 * MERGE  SORT  array duplication
 **********************************************************************************/
function mergesort2(){
  console.log("mergesort - implement me !");
  let a = new Array({dist:59},{dist:57},{dist:52},{dist:50},{dist:58},{dist:55},{dist:1},{dist:25},{dist:18},{dist:20})
  let profondeur = 1;
  ms2(csvData,profondeur,false); 
  console.log(csvData);
  setupDisplay();
  //console.log(a);
}
function ms2(a,profondeur,debug){
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
  ms2(left,profondeur+1,debug);
  ms2(right,profondeur+1,debug);
  //mergin the sorted parts
  merge2(left,right,a,profondeur);
  //setupDisplay(a)
  console.log("after merge");
  //console.log(a);
} 
function merge2(left , right ,a){
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
 * MERGE  SORT  indice
 **********************************************************************************/
function mergesort() {
  console.time("mergesort");
  msort(0, csvData.length-1);
  console.timeEnd("mergesort")
  console.log(csvData);
}
function msort(left, right) {
  if(left < right){
      let middle = Math.floor((left+right)/2);
      msort(left, middle);
      msort(middle+1, right)
      merge(left, middle, right);
  }
 
}
function merge(left, middle, right){
  let sizeLeft = middle - left + 1;
  let sizeRight = right - middle;
  let L = [];
  let R = [];
  for (let i=0; i<sizeLeft; ++i)
      L[i] = csvData[left + i];
  for (let j=0; j<sizeRight; ++j)
      R[j] = csvData[middle + 1 + j];
  let i = 0;
  let j = 0;
  let k=left;
  while (i < sizeLeft && j < sizeRight){
      if(L[i].dist<= R[j].dist){
          let itemPos = csvData.indexOf(L[i]);
          if(itemPos !== -1){
              swap(k, itemPos);
          }
          i++;
      }else{
          let itemPos = csvData.indexOf(R[j]);
          if(itemPos !== -1){
              swap(k, itemPos);
          }
          j++;
      }
      k++;
  }
  while(i<sizeLeft){
      let itemPos = csvData.indexOf(L[i]);
      if(itemPos !== -1){
          swap(k, itemPos);
      }
      i++;
      k++;
  }
  while(j<sizeRight){
      let itemPos = csvData.indexOf(R[j]);
      if(itemPos !== -1){
          swap(k, itemPos);
      }
      k++;
      j++;
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
  
  let debut = 0;
  let fin = csvData.length - 1;

  console.time("execute_QuickSort");
  execute_QuickSort(debut, fin,csvData);
  console.timeEnd("execute_QuickSort");
}

function execute_QuickSort(debut , fin, arr ){
  if (debut < fin ) {
    var indice_pivot = partitionner(debut, fin,arr);
    execute_QuickSort(debut, indice_pivot - 1,arr);
    execute_QuickSort(indice_pivot + 1, fin,arr);
  }
}

function partitionner (debut, fin, arr) {
  var temp;
  var valeur_pivot = arr[debut];
  var d = debut+1;
  var f = fin;
  while (d < f) {
      while (d < f && arr[f].dist >= valeur_pivot.dist) f--;
      while (d < f && arr[d].dist <= valeur_pivot.dist) d++;
      swap(d,f);
    
  }
  if (arr[d].dist > valeur_pivot.dist) d--;
  
  swap(debut,d);
  return d;
}


/**********************************************************************************
 * QUICK3 SORT 
 **********************************************************************************/
function quick3sort(){
  console.log("quick3sort - implement me !");
  W3quicks(csvData, 0, csvData.length - 1); 

}
// 3-way partition based quick sort 
function W3quicks(a,l , r) 
{ 
    if (r <= l) return; 
    let i;
    let j; 
    // Note that i and j are passed as reference 
    partition(a, l, r, i, j); 
    // Recur 
    quicksort(a, l, j); 
    quicksort(a, i, r); 
} 
function partition(a, l, r, i, j) 
{ 
    i = l-1;
    j = r; 
    let p = l-1;
    let q = r; 
    let  v = a[r]; 
  
    while (true) 
    { 
        // From left, find the first element greater than 
        // or equal to v. This loop will definitely terminate 
        // as v is last element 
        while (a[++i].dist < v.dist); 
  
        // From right, find the first element smaller than or 
        // equal to v 
        while (v.dist < a[--j].dist) 
            if (j == l) 
                break; 
  
        // If i and j cross, then we are done 
        if (i >= j) break; 
  
        // Swap, so that smaller goes on left greater goes on right 
        swap(csvData.indexOf(a[i]), csvData.indexOf(a[j])); 
  
        // Move all same left occurrence of pivot to beginning of 
        // array and keep count using p 
        if (a[i].dist == v.dist) 
        { 
            p++; 
            swap(csvData.indexOf(a[p]), csvData.indexOf(a[i])); 
        } 
  
        // Move all same right occurrence of pivot to end of array 
        // and keep count using q 
        if (a[j].dist == v.dist) 
        { 
            q--; 
            swap(csvData.indexOf(a[j]), csvData.indexOf(a[q])); 
        } 
    } 
  
    // Move pivot element to its correct index 
    swap(csvData.indexOf(a[i]), csvData.indexOf(a[r])); 
  
    // Move all left same occurrences from beginning 
    // to adjacent to arr[i] 
    j = i-1; 
    for (var k = l; k < p; k++, j--) 
        swap(csvData.indexOf(a[k]), csvData.indexOf(a[j])); 
  
    // Move all right same occurrences from end 
    // to adjacent to arr[i] 
    i = i+1; 
    for (var k = r-1; k > q; k--, i++) 
        swap(csvData.indexOf(a[i]), csvData.indexOf(a[k])); 
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
