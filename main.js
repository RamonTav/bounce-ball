window.onload   = function() {
       var canvan      = document.getElementById("canvas"),
           context     = canvan.getContext("2d"),
           width       = canvan.width = window.innerWidth,
           height      = canvan.height = window.innerHeight;

       var baseX       = width  * .5;

       var baseY       = height * .5,
           offsetY     = height * .333;

      var angle        =  0,
          speed        = .02;

      var baseRadius   = 100,
          offsetRadius = 50;

      var baseBlue     = 128,
          offsetBlue   = 128;

      var baseAlpha    = .5,
        offsetAlpha    = .6;
   
   render();

   function render() {
      var  delta = Math.sin (angle),
           x = baseX,   
           y = baseY + offsetY * delta,
           radius = baseRadius + offsetRadius * Math.abs(delta),
           blue = baseBlue + offsetBlue * Math.abs(delta),
           alpha = baseAlpha + offsetAlpha * Math.abs(delta);
          
          context.clearRect(0, 0, width, height);
          context.beginPath();
          context.arc(x , y, radius, 0, Math.PI * 2, false);
          context.fillStyle = "rgba( 0, 0, " + blue + ", " + alpha + ")";
          context.fill();

          angle += speed;

      requestAnimationFrame(render);

}

};


