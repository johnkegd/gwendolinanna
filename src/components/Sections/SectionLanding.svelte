<script>
    import imagePlaceHolder from '../../node_modules/images/example-500x500.jpg';
    export let sectionStyles = "pb-20 bg-blueGray-200 -mt-24";
</script>

<section class="{sectionStyles}">
    <div class="container mx-auto px-4">
      <div class="flex flex-wrap">
          <slot></slot>
  
      <div class="flex flex-wrap items-center mt-32">
        <div class="w-full md:w-5/12 px-4 mr-auto ml-auto">
          <div
            class="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-white"
          >
            <i class="fas fa-user-friends text-xl" />
          </div>
          <h3 class="text-3xl mb-2 font-semibold leading-normal">
            Working with us is a pleasure
          </h3>
          <p
            class="text-lg font-light leading-relaxed mt-4 mb-4 text-blueGray-600"
          >
            Don't let your uses guess by attaching tooltips and popoves to any
            element. Just make sure you enable them first via JavaScript.
          </p>
          <p
            class="text-lg font-light leading-relaxed mt-0 mb-4 text-blueGray-600"
          >
            The kit comes with three pre-built pages to help you get started
            faster. You can change the text and images and you're good to go. Just
            make sure you enable them first via JavaScript.
          </p>
          <a href="/" class="font-bold text-blueGray-700 mt-8">
            Check Notus Svelte!
          </a>
        </div>
  
        <div class="w-full md:w-4/12 px-4 mr-auto ml-auto">
          <div
            class="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg bg-red-400"
          >
            <img
              alt="..."
              src={imagePlaceHolder}
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
              <h4 class="text-xl font-bold text-white">Top Notch Services</h4>
              <p class="text-md font-light mt-2 text-white">
                The Arctic Ocean freezes every winter and much of the sea-ice then
                thaws every summer, and that process will continue whatever
                happens.
              </p>
            </blockquote>
          </div>
        </div>
      </div>
    </div>
  </section>
  