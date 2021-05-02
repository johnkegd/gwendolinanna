<script>
    import imagePlaceHolder from '../../node_modules/images/example-500x500.jpg';
    import CardImage from '../Cards/CardImage.svelte';
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
  
        <!-- example-->
        <CardImage 
        cardImage="https://www.australia.com/content/dam/assets/photograph/digital/l/g/1/9/1000557.jpg"
        cardTitle="at the Beach"
        cardDescription="sunny day"
        />

      </div>
    </div>
  </section>
  