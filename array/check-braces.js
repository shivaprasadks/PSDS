(function() {
  console.clear();
  var checkBraces = (myString) => {
    let checkStack = bracesType => {
      let topItem = bracesTracker.pop();
      if (typeof topItem === 'undefined' ||
        topItem !== bracesType) {
        return false
      } else return true;
    }

    let bracesTracker = [];

    for (let i = 0; i < myString.length; i++) {
      switch (myString.charAt(i)) {
        case "(":
          bracesTracker.push('simple');
          break;
        case ")":
          if (checkStack('simple')) break;
          else return false;

        case "[":
          bracesTracker.push('box');
          break;
        case "]":
          if (checkStack('box')) break;
          else return false;
        case "{":
          bracesTracker.push('curly');
          break;
        case "}":
          if (checkStack('curly')) break;
          else return false;
        default:
          break;
      }
    }

    if(bracesTracker.length != 0) { 
    	return false ;
    };
    return true;
  }


  var main = () => {
    let someString = "()";
    console.log(checkBraces(someString));
  }


  main();
})();
