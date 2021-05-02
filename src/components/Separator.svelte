<script>
    export let wrapper = true;
    export let wrapperStyles;
    export let wrapperInLine;
    export let svgStyles = "";
    export let svgViewBox = "";
    export let svgX = "0";
    export let svgY = "0";
    export let polygonStyles = "";
    export let polygonPoints = "";
</script>


{#if wrapper === true} 
    <div class="{wrapperStyles}" component="tiene wrapper" style="{wrapperInLine};">
        <svg
        class="{svgStyles}"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
        version="1.1"
        viewBox="{svgViewBox}"
        x="{svgX}"
        y="{svgY}"
        >
        <polygon
            class="{polygonStyles}"
            points="{polygonPoints}"
        ></polygon>
        </svg>
    </div>

{:else}
        <svg
        class="{svgStyles}"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
        version="1.1"
        viewBox="{svgViewBox}"
        x="{svgX}"
        y="{svgY}"
        >
            <polygon
                class="{polygonStyles}"
                points="{polygonPoints}"
            >
            </polygon>
        </svg>

{/if}