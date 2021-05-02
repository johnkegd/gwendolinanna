<script>
  import imagePlaceHolder from '../../node_modules/images/example-250x250.jpg';
    export let cardTitle;
    export let cardDescription;
    export let cardImage = imagePlaceHolder;
    export let cardDescriptionBackground = "bg-blueGray-800";
</script>

<div class="w-full md:w-4/12 px-4 mr-auto ml-auto">
    <div
      class="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg {cardDescriptionBackground}"
    >
      <img
        alt="..."
        src="{cardImage}"
        class="w-full align-middle rounded-t-lg"
      />
      <blockquote class="relative p-8 mb-4">
        <svg
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 583 95"
          class="absolute left-0 w-full block h-95-px -top-94-px"
        >
          <polygon
            points="-30,95 583,95 583,65"
            class="text-teal-800 fill-current"
          />
        </svg>
        <h4 class="text-xl font-bold text-white">{cardTitle}</h4>
        <p class="text-md font-light mt-2 text-white">
          {cardDescription}
        </p>
      </blockquote>
    </div>
  </div>