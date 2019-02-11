const lengthOfLongestSubstring = (s) => {
  const n = s.length;
  const set = new Set();
  let ans = 0, i = 0, j = 0;

  while (i < n && j < n) {
    // try to extend the range [i, j]
    if (!set.has(s.charAt(j))){
      set.add(s.charAt(j++));
      ans = Math.max(ans, j - i);
    } else {
      set.delete(s.charAt(i++));
    }
  }
  return ans;
}
