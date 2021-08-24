
var progress = document.getElementById('wave2');
var pathLength = progress.getTotalLength();

progress.style.strokeDasharray = pathLength + 'px';
progress.style.strokeDashoffset = pathLength + 'px';
 

function test (arg){ 
    // change number from px to % (trojčlenka)
        let percentage = (arg * pathLength ) / 100 ; 
    // set up new percentage
        let newOffset = parseInt( progress.style.strokeDashoffset ) - percentage;
    // change new percentage in DOM 
        progress.style.strokeDashoffset = newOffset;
        console.log(percentage);
}
test(50);