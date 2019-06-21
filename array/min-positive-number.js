(function() {
    let arr = [1, 1, 0, -1, -2];
    // arr = [2, 3, -7, 6, 8, 1, -10, 15];
    // arr = [2, 3, 7, 6, 8, -1, -10, 15];
    arr = arr.sort();
    let MIN = 1;
    console.clear();
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] <= 0) continue;
      if (arr[i] > 0 && arr[i] === MIN) MIN++;
    }
  
    console.log(MIN);
  })();
  