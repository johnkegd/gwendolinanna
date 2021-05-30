<script>
import {onMount} from 'svelte';
import {fire} from './FireWorks';

        let canvas, elementW, elementH;    


        onMount(() => {
            const ctx = canvas.getContext('2d');
            let frame;
            let t = 0;
            fire();
/* 

        (function loop() {
            frame = requestAnimationFrame(loop);

          ctx.globalCompositeOperation = 'source-over';
          ctx.fillStyle = 'hsla(0,0%,0%,.1)';
          ctx.fillRect(0, 0, elementW, elementH);
          let foo, i, j, r;
          foo = Math.sin(t) * 2 * Math.PI;
          for (i=0; i<300; ++i) {
            r = 300 * Math.sin(i * foo);
            ctx.globalCompositeOperation = '';
            ctx.fillStyle = 'hsla(' + i + 12 + ',100%, 60%,1)';
            ctx.beginPath();
            ctx.arc(Math.sin(i) * r + (elementW / 2), 
                  Math.cos(i) * r + (elementH / 2), 
                  1.5, 0, Math.PI * 2);
                  ctx.fill();

          }
          t += 0.000001;
          t %= 2 * Math.PI;

        }());
        return () => {
            cancelAnimationFrame(frame);
        } */
        });
</script>

<svelte:window bind:innerHeight="{elementH}" bind:innerWidth="{elementW}"/>

<canvas bind:this={canvas} class="absolute w-full center">
</canvas>