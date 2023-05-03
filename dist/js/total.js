//total value locked
var totalValueLocked = 0;
var totalRaise = 0;
var totalPercent = 75;

document.getElementById("totalValueLocked").innerHTML = totalValueLocked;
document.getElementById("totalRaise").innerHTML = totalRaise;
document.getElementById("totalPercent").innerHTML = totalPercent;

// percent total raise circle (30% = 0.3)
document.getElementById("ratio_percent").style.cssText = `--ratio: 0.${totalPercent}`;