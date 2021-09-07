window.onload   = function() {
       var canvan      = document.getElementById("canvas"),
           context     = canvan.getContext("2d"),
           width       = canvan.width = window.innerWidth,
           height      = canvan.height = window.innerHeight;

       var baseX       = width  * .5;

       var baseY       = height * 1,
           offsetY     = height * .915;

      var angle        =  0,
          speed        = .02;

      var baseRadius   = 100,
          offsetRadius = 50;

      var baseBlue     =  40,
          offsetBlue   = 255;

      var baseAlpha    = .5,
        offsetAlpha    = .6;
   
   render();

   function render() {
      var  delta = Math.abs(Math.sin(angle)),
           x = baseX,   
           y = baseY - offsetY * delta,
           radius = baseRadius + offsetRadius * Math.abs(delta),
           blue = baseBlue + offsetBlue * delta, 
           alpha = baseAlpha;
          
          context.clearRect(0, 0, width, height);
          context.beginPath();
          context.arc(x , y, radius, 0, Math.PI * 2, false);
          context.fillStyle = "rgba( 0, 0, " + blue + ", " + alpha + ")";
          context.fill();

          angle += speed;

      requestAnimationFrame(render);

}

};


