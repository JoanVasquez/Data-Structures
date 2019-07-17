let dayOfProgrammer = year => {
    let isLeap =
    (year % 4 != 0 || (year > 1918 && year % 100 == 0 && year % 400 != 0)) ? false : true;

return year === 1918
    ? '26.09.1918'
    : isLeap
        ? `12.09.${year}`
        : `13.09.${year}`;

console.log(dayOfProgrammer(1800));
