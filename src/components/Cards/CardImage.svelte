<script>
  import imagePlaceHolder from "../../node_modules/images/example-250x250.jpg";
  import Separator from "../Separator.svelte";
  export let cardTitle;
  export let cardDescription;
  export let cardImage = imagePlaceHolder;
  export let cardDescriptionBackground = "bg-blueGray-800";
  export { CLASS as class };
  let CLASS = "";
</script>

{#if $$slots.placeholder_content}
  <img alt="..." src={cardImage} class="w-full align-middle rounded-t-lg" />
  <blockquote class="relative p-8 mb-4">
    <Separator
      svgStyles="absolute left-0 w-full block h-95-px -top-94-px"
      svgViewBox="0 0 583 95"
      polygonStyles="text-teal-800 fill-current"
      polygonPoints="-30,95 583,95 583,65"
    />
    <h4 class="text-xl font-bold text-white">Card title</h4>
    <p class="text-md font-light mt-2 text-white">Card description</p>
  </blockquote>
{:else}
  <div class={CLASS}>
    <div
      class="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg {cardDescriptionBackground}"
    >
      <slot>
        <img
          alt="..."
          src={cardImage}
          class="w-full align-middle rounded-t-lg"
        />
        <blockquote class="relative p-8 mb-4">
          <Separator
            svgStyles="absolute left-0 w-full block h-95-px -top-94-px"
            svgViewBox="0 0 583 95"
            polygonStyles="text-teal-800 fill-current"
            polygonPoints="-30,95 583,95 583,65"
          />
          <h4 class="text-xl font-bold text-white">{cardTitle}</h4>
          <p class="text-md font-light mt-2 text-white">
            {cardDescription}
          </p>
        </blockquote>
      </slot>
    </div>
  </div>
{/if}
