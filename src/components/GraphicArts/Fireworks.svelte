<script>
import {onMount} from 'svelte';
import {fire} from './FireWorks';

        let canvas, elementW, elementH;    


        onMount(() => {
            const ctx = canvas.getContext('2d');
            let frame;
            let t = 0;
            canvas.width = elementW;
            canvas.height = elementH;
           // fire();


        function loop() {
            frame = requestAnimationFrame(loop);

          ctx.globalCompositeOperation = 'source-over';
          ctx.fillStyle = 'hsla(0,0%,0%,.1)';
          ctx.fillRect(0, 0, canvas.width , canvas.height);
          let foo, i, j, r;
          foo = Math.sin(t) * 2 * Math.PI;
          for (i=0; i<800; ++i) {
            r = 800 * Math.sin(i * foo);
            ctx.globalCompositeOperation = '';
            ctx.fillStyle = 'hsla(' + i + 12 + ',100%, 60%,1)';
            ctx.beginPath();
            ctx.arc(Math.sin(i) * r + (canvas.width / 2), 
                  Math.cos(i) * r + (canvas.height / 1), 
                  1.5, 0, Math.PI * 2);
                  ctx.fill();

          }
          t += 0.000005;
          return t %= 2 * Math.PI;
        }

        loop();
        return () => {
            cancelAnimationFrame(frame);
        }
        });
</script>

<svelte:window bind:innerHeight="{elementH}" bind:innerWidth="{elementW}"/>

<canvas bind:this={canvas} class="absolute w-full h-full center">
</canvas>