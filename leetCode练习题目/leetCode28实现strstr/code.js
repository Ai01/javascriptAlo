var strStr = function(haystack, needle) {
  if(needle === "") return 0;

  let res = -1;

  for(let i = 0; i<haystack.length; i++) {
    if(haystack.charAt(i) === needle.charAt(0)) {
      let _res = true;
      for(let j = 0; j<needle.length; j++) {
        if(needle.charAt(j) !== haystack.charAt(j+i)) {
          _res = false;
          break;
        }
      }
      if(_res) {
        res = i;
        break;
      }
    }
  }

  return res;
};

strStr("aaa", "a");
