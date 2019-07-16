let climbingLeaderboard = (scores, alice) => {
  let lastScore = 0;
  let uniqueScores = [];

  while (scores.length) {
    let tmpScore = scores.pop();
    if (tmpScore !== lastScore) {
      lastScore = tmpScore;
      uniqueScores.push(tmpScore);
    }
  }

  let index = 0;
  return alice.map(item => {
    while (item >= uniqueScores[index]) {
      index++;
    }
    return uniqueScores.length - index + 1;
  });
};
