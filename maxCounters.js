
let maxCounters => (N, A) => {
    let currentMax = 0;
    let lastIncrease = 0;
    let counters = Array(N).fill(0);

    A.forEach(item => {
        if(item > N) lastIncrease = currentMax;
        else {
            let i = item - 1;
            counters[i] = Math.max(counters[i], lastIncrease);
            counters[i]++;
            currentMax = Math.max(currentMax, counters[i]);
        }
    });

    return counters.map(c => Math.max(c, lastIncrease));
}