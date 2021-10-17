<script>
  import imagePlaceHolder from "../../node_modules/images/example-250x250.jpg";
  import Separator from "../Separator.svelte";
  export let cardTitle;
  export let cardDescription;
  export let cardImage = imagePlaceHolder;
  export let cardDescriptionBackground = "bg-blueGray-800";
</script>

<div class="w-full md:w-4/12 px-4 mr-auto ml-auto">
  <div
    class="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg {cardDescriptionBackground}"
  >
    <img alt="..." src={cardImage} class="w-full align-middle rounded-t-lg" />
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
  </div>
</div>
