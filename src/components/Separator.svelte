<script>
  export let wrapper = true;
  export let wrapperStyles =
    "bottom-auto top-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden -mt-20 h-20";
  export let wrapperInLine = "transform: translateZ(0)";
  export let svgStyles = "absolute bottom-0 overflow-hidden";
  export let svgViewBox = "0 0 2560 100";
  export let svgX = "0";
  export let svgY = "0";
  export let polygonStyles = "text-white fill-current";
  export let polygonPoints = "2560 0 2560 100 0 100";
</script>

{#if wrapper === true}
  <div
    class={wrapperStyles}
    component="separator-wrapper"
    style="{wrapperInLine};"
  >
    <svg
      class={svgStyles}
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="none"
      version="1.1"
      viewBox={svgViewBox}
      x={svgX}
      y={svgY}
    >
      <polygon class={polygonStyles} points={polygonPoints} />
    </svg>
  </div>
{:else}
  <svg
    class={svgStyles}
    xmlns="http://www.w3.org/2000/svg"
    preserveAspectRatio="none"
    version="1.1"
    viewBox={svgViewBox}
    x={svgX}
    y={svgY}
  >
    <polygon class={polygonStyles} points={polygonPoints} />
  </svg>
{/if}
