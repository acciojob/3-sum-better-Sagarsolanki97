function threeSum(S, target) {
  S.sort(function(a, b) {
    return a - b;
  });
  var closestSum = Infinity;
  for (var i = 0; i < S.length - 2; i++) {
    var j = i + 1;
    var k = S.length - 1;
    while (j < k) {
      var sum = S[i] + S[j] + S[k];
      if (Math.abs(sum - target) < Math.abs(closestSum - target)) {
        closestSum = sum;
      }
      if (sum < target) {
        j++;
      } else {
        k--;
      }
    }
  }
  return closestSum;
}
