window.onload   = function() {
       var canvan      = document.getElementById("canvas"),
           context     = canvan.getContext("2d"),
           width       = canvan.width = window.innerWidth,
           height      = canvan.height = window.innerHeight;

       var baseX       = width  * .5;

       var baseY       = height * 1,
           offsetY     = height * .82;

       var angle        =   0,
           speed        = .02;


      var delta1       =   0;
          delta2       =   0;
          delta3       =   0;

      var baseRadius   = 160,
          offsetRadius = 50;

      var baseRed      =  40;
          offsetRed    = 255;
          RedEn        =   0;

          baseBlue     =  40,
          offsetBlue   = 255;
          BlueEn       =   1;

      var baseAlpha    = .5,
         offsetAlpha   = .6;

   render();

   function render() {
      var  delta = Math.abs(Math.sin(angle));
           delta3 = delta2,
           delta2 = delta1,
           delta1 = delta,
           x = baseX,   
           y = baseY - offsetY * delta,
           radius = baseRadius + offsetRadius * Math.abs(delta) * 0,
           blue = (baseBlue + offsetBlue * delta)*BlueEn,
           red = (baseRed + offsetRed * delta)*RedEn,
           alpha = baseAlpha;
          
          context.clearRect(0, 0, width, height);
          context.beginPath();
          context.arc(x , y, radius, 0, Math.PI * 2, false);
          context.fillStyle = "rgba( " + red + ", 0, " + blue + ", " + alpha + ")";
          context.fill();

          angle += speed;

    var  m2 = delta1 - delta2,
         m1 = delta2 - delta3; 
      if (m1 < 0 && m2 > 0) {     
      var sound = document.getElementById("sound");
      sound.play();
         BlueEn=!BlueEn;
         RedEn=!RedEn;
         }

      requestAnimationFrame(render);
}

};

