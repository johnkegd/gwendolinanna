<script>
  let slides = [
    {
      src: "https://images.unsplash.com/photo-1549880338-65ddcdfd017b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80",
      alt: "Mountain",
    },
    {
      src: "https://images.unsplash.com/photo-1507502707541-f369a3b18502?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80",
      alt: "Moon",
    },
    {
      src: "https://images.unsplash.com/photo-1462899006636-339e08d1844e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80",
      alt: "Building",
    },
    {
      src: "https://images.unsplash.com/photo-1516653980844-c68df1de5249?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80",
      alt: "Desert",
    },
    {
      src: "https://images.unsplash.com/photo-1472715148636-92e348325950?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=667&q=80",
      alt: "Ocean",
    },
    {
      src: "https://images.unsplash.com/photo-1549880338-65ddcdfd017b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80",
      alt: "Mountain",
    },
    {
      src: "https://images.unsplash.com/photo-1507502707541-f369a3b18502?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80",
      alt: "Moon",
    },
    {
      src: "https://images.unsplash.com/photo-1462899006636-339e08d1844e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80",
      alt: "Building",
    },
    {
      src: "https://images.unsplash.com/photo-1516653980844-c68df1de5249?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80",
      alt: "Desert",
    },
    {
      src: "https://images.unsplash.com/photo-1472715148636-92e348325950?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=667&q=80",
      alt: "Ocean",
    },
  ];

  let currentSlide = 0;
  let concurrentSlides = 3;
  let visibleSlides = slides.slice(slides, concurrentSlides).map((x, i) => i);
  let slideDirection = 1;
  let autoSlide = true;
  // $: console.log(autoSlide);

  let slideTime = 4500;
  let timer = setInterval(() => {
    if (autoSlide) slide(concurrentSlides);
  }, slideTime);

  function slide(amount) {
    slideDirection = Math.sign(amount);
    currentSlide = currentSlide + amount;
    const newSlides = [];
    for (let i = 0; i < concurrentSlides; i++)
      newSlides.push(mod(currentSlide + i, slides.length));
    visibleSlides = newSlides;
  }

  function mod(n, m) {
    return ((n % m) + m) % m;
  }
</script>

<svelte:head>
  <link
    href="https://fonts.googleapis.com/icon?family=Material+Icons"
    rel="stylesheet"
  />
</svelte:head>

<div class="carousel-main">
  <div class="carousel">
    <!--   <button class="carousel-ctrl" on:click={(e) => slide(-concurrentSlides)}>
      <i class="material-icons"> keyboard_arrow_left </i>
    </button> -->
    <div class="slides">
      {#each slides as slide, i}
        <div
          class="slide"
          class:slide-invisible={!visibleSlides.includes(i)}
          style=""
        >
          <img {...slide} />
        </div>
      {/each}
    </div>
    <!--     <button class="carousel-ctrl" on:click={(e) => slide(concurrentSlides)}>
      <i class="material-icons"> keyboard_arrow_right </i>
    </button> -->
  </div>
</div>

<style>
  .carousel-main {
    font-family: sans-serif;
    text-align: center;
    width: 100%;
    margin-top: 3em;
    margin-bottom: -4.95em;
    z-index: 1;
  }
  .carousel {
    /* display: flex; */
    width: 100%;
    justify-content: center;
    /*  margin: 0 8px; */
  }
  .slides {
    display: flex;
    width: auto;
    height: 100%;
    overflow: hidden;
    justify-content: space-around;
    transform: matrix(1, -0.05, 0, 1, 0, 0);
  }
  .carousel-ctrl {
    flex-basis: 80px;
  }
  .slide {
    width: 240px;
    height: 240px;
    overflow: hidden;
    transition: 0.75s cubic-bezier(1, -0.24, 0.43, 1.78);
    padding: 0 4px;
  }

  .slide img {
    width: 240px;
    max-width: 100%;
    height: 240px;
    display: block;
    object-fit: cover;
    object-position: center;
    transition: 0.55s all ease;
    box-shadow: -3px -7px 2px rgb(14 14 14 / 51%);
    border-bottom: 5px solid #00000036;
  }

  .slide:hover img {
    transform: scale(1.1);
  }

  .slide-invisible {
    opacity: 1;
    width: 19px;
    transition: 0.85s cubic-bezier(0.65, 0.06, 0.68, 0.19);
  }
  .slide-invisible:hover {
    width: 240px;
  }

  button {
    background-color: transparent;
    border: 0;
  }
  button:hover {
    background-color: rgb(241, 241, 241);
    border-radius: 4px;
  }
</style>
