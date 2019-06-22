(function() {
    console.clear();
  
    var checkBraces = (myString) => {
      let bracesTracker = {
          "simple": 0,
          "curly": 0,
          "box": 0
        },
        count = 0;
  
      for (let i = 0; i < myString.length; i++) {
        switch (myString.charAt(i)) {
          case "(":
            bracesTracker['simple']++;
            break;
          case ")":
            bracesTracker['simple']--;
            break;
          case "[":
            bracesTracker['box']++;
            break;
          case "]":
            bracesTracker['box']--;
            break;
          case "{":
            bracesTracker['curly']++;
            break;
          case "}":
            bracesTracker['curly']--;
            break;
          default:
            break;
        }
      }
  
      for (item in bracesTracker) {
        count += bracesTracker[item];
      }
      if (count != 0) return "incomplete string FALSE";
      else return "complete string TRUE";
    }
  
    var main = () => {
      let someString = "([])";
      console.log(checkBraces(someString));
    }
  
  
    main();
  })();
  (function() {
    console.clear();
  
    var checkBraces = (myString) => {
      let bracesTracker = {
          "simple": 0,
          "curly": 0,
          "box": 0
        },
        count = 0;
  
      for (let i = 0; i < myString.length; i++) {
        switch (myString.charAt(i)) {
          case "(":
            bracesTracker['simple']++;
            break;
          case ")":
            bracesTracker['simple']--;
            break;
          case "[":
            bracesTracker['box']++;
            break;
          case "]":
            bracesTracker['box']--;
            break;
          case "{":
            bracesTracker['curly']++;
            break;
          case "}":
            bracesTracker['curly']--;
            break;
          default:
            break;
        }
      }
  
      for (item in bracesTracker) {
        count += bracesTracker[item];
      }
      if (count != 0) return "incomplete string FALSE";
      else return "complete string TRUE";
    }
  
    var main = () => {
      let someString = "([])";
      console.log(checkBraces(someString));
    }
  
  
    main();
  })();
  