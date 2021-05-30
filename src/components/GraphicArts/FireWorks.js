export function fire(){
    var t = 0;
    var canvas = document.querySelector("canvas");     
    var ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth - 800;
    canvas.height = window.innerHeight - 800;
    ctx.fillStyle = 'hsla(0,0%,0%,1)';

    window.addEventListener('resize', function() {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    }, false);

    function draw() {
      ctx.globalCompositeOperation = 'source-over';
      ctx.fillStyle = 'hsla(0,0%,0%,.1)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      var foo, i, j, r;
      foo = Math.sin(t) * 2 * Math.PI;
      for (i=0; i<400; ++i) {
        r = 400 * Math.sin(i * foo);
        ctx.globalCompositeOperation = '';
        ctx.fillStyle = 'hsla(' + i + 12 + ',100%, 60%,1)';
        ctx.beginPath();
        ctx.arc(Math.sin(i) * r + (canvas.width / 2), 
              Math.cos(i) * r + (canvas.height / 2), 
              1.5, 0, Math.PI * 2);
              ctx.fill();

      }
      t += 0.000005;
      return t %= 2 * Math.PI;

    };

    function run() {
      window.requestAnimationFrame(run);
      draw();
    }
    run();
}