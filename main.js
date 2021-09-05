window.onload   = function() {
   var canvan   = document.getElementById("canvas"),
       context0 = canvan.getContext("2d"),
       width    = canvan.width = window.innerWidth,
       height   = canvan.height = window.innerHeight;

   var centerX    = width  * .5,
       centerY    = height * .5;

   var offset0    = height * .4,
       speed0     = .03,
       angle0     = 0;

   var baseRadius = 100,
       offset1    = 50;

   var baseAlpha  = .5,
       offset2    = .6,
       baseGreen  = 180;
   
   render();

   function render() {
      var      y = centerY + Math.sin(angle0) * offset0;
          radius = baseRadius + Math.abs(Math.sin(angle0)) * offset1;
          alpha = baseAlpha + Math.abs(Math.sin(angle0)) * offset2;
          green = baseGreen * Math.abs(Math.sin(angle0));
          context0.clearRect(0, 0, width, height);
          context0.beginPath();
          context0.arc(centerX , y, radius, 0, Math.PI * 2, false);
          context0.fillStyle = "rgba( 0, 0, " + green  + ", " + alpha + ")";
          context0.fill();

          angle0 += speed0;

      requestAnimationFrame(render);

}

};


