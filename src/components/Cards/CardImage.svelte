<script>
    export let cardTitle;
    export let cardDescription;
    export let cardImage = "https://cdn.prod.www.spiegel.de/images/f612fd70-0001-0004-0000-000001243725_w948_r1.77_fpx69.95_fpy44.94.jpg";
    export let cardStyles;
</script>

<div class="w-full md:w-4/12 px-4 mr-auto ml-auto">
    <div
      class="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg bg-red-400"
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
            class="text-red-400 fill-current"
          />
        </svg>
        <h4 class="text-xl font-bold text-white">{cardTitle}</h4>
        <p class="text-md font-light mt-2 text-white">
          {cardDescription}
        </p>
      </blockquote>
    </div>
  </div>