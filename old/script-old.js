
    var progress = document.getElementById('wave2');
    var pathLength = progress.getTotalLength();

    progress.style.strokeDasharray = pathLength + 'px';
    progress.style.strokeDashoffset = pathLength + 'px';
    

    function test (arg){ 
        // change number from px to % (trojčlenka)
            let percentage = (arg * pathLength ) / 100 ; 
        // set up new percentage
            let newOffset = parseInt( progress.style.strokeDashoffset ) - percentage;


        // seting up animation in header
            var cssAnimation = document.createElement('style');
            cssAnimation.type = 'text/css';
            var rules = document.createTextNode('@keyframes dash {'+
            'from {  stroke-dashoffset: 0 ; }'+
            'to {  stroke-dashoffset:'+ ( - percentage) + ' ; }'+
            '}');
            cssAnimation.appendChild(rules);
            document.getElementsByTagName("head")[0].appendChild(cssAnimation);


        // change new percentage in DOM 
            progress.style.animation = "dash 3s linear forwards";
            progress.style.strokeDashoffset = newOffset;
           
            console.log(newOffset);



        //creating p element from js 
 /*    var node = document.createElement("p");    
        node.className = "aClassName";           
    var textnode = document.createTextNode( arg + "%");         
    node.appendChild(textnode);                              
    document.getElementById("test").appendChild(node); */



    //span value use for span
/*     var valueSpan = document.getElementById('valueSpan');
        valueSpan.innerHTML= arg +"%";
        valueSpan.style.left=(arg) + "%"; */

        // text path value
        var valueSpan = document.getElementById('valueSpan');
        valueSpan.innerHTML= arg +"%";
        valueSpan.setAttribute("startOffset", percentage)


    }
    test(80);


