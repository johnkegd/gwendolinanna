<script>
  import CardIcon from "../components/Cards/CardIcon.svelte";
  import CardImage from "../components/Cards/CardImage.svelte";
  import imagePlaceHolder from "../node_modules/images/example-500x500.jpg";
  import TextPromotion from "../components/TextContainers/TextPromotion.svelte";
  import Section from "../components/Sections/Section.svelte";
  import Separator from "../components/Separator.svelte";
  import IconList from "../components/Lists/IconList.svelte";
  import Li from "../components/Lists/ListItem.svelte";
  import Image from "../components/Images.svelte";
  import logo from "images/logo-2.svg";
  import stars from "images/stars.svg";
  import Nester from "../components/Nester.svelte";
  import Carousel from "../components/Carousel/Carousel.svelte";
</script>

<svelte:head>
  <title>Gwendolin Home</title>
</svelte:head>
<!--TODO: Split in components to header by page-->
<div
  class="relative pt-16 pb-32 flex content-center items-center justify-center min-h-screen-75"
>
  <div
    class="absolute top-0 w-full h-full bg-center bg-cover"
    style="background-image: url({stars});"
  >
    <span
      id="blackOverlay"
      class="w-full h-full absolute opacity-75 bg-black"
    />
    <a href="/">
      <img
        class="absolute top-0 b-auto left-0 pt-0 -mt-32 max-h-860-px"
        src={logo}
        alt="Gwendolin Anna website"
      />
    </a>
  </div>
  <Nester
    clsChildrens={[
      "container relative mx-auto",
      "items-center flex flex-wrap",
      "w-full lg:w-6/12 px-4 ml-auto mr-auto text-center",
    ]}
  >
    <div slot="floor-2" class="pr-12">
      <h1 class="text-white font-semibold text-5xl">Hi, i'm Gwendolin.</h1>
      <h2 class="text-white font-semibold text-2xl">
        student of computer science and draftswoman with a taste for
        photography.
      </h2>
      <p class="mt-4 text-lg text-blueGray-200" />
    </div>
  </Nester>

  <Separator
    wrapperStyles="top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden h-70-px"
    polygonStyles="text-blueGray-200 fill-current"
  />
</div>

<!-- Card icons section-->
<Section sectionStyles="pb-20 bg-blueGray-200 -mt-24">
  <!-- <div slot="head-section"> outside the inner container </div> -->
  <!-- <div slot="footer-section"> outside the inner container bottom area</div> -->
  <div class="flex flex-wrap">
    <CardIcon
      cardStyles="lg:pt-12 pt-6 w-full md:w-4/12 px-4 text-center"
      iconType="fas fa-camera-retro"
      iconStyles="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-red-400"
    >
      <h3 class="text-xl font-semibold">Photography</h3>
      <p class="mt-2 mb-4 text-blueGray-500">
        Like a window in time, images are a form of immortalization.
      </p>
    </CardIcon>
    <CardIcon
      cardStyles="w-full md:w-4/12 px-4 text-center"
      iconType="fas fa-paint-brush"
      iconStyles="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-emerald-400"
    >
      <h3 class="text-xl font-semibold">Art</h3>
      <p class="mt-2 mb-4 text-blueGray-500">
        Drawing and coloring is something I really enjoy, a world full of color.
      </p>
    </CardIcon>
    <CardIcon
      cardStyles="pt-6 w-full md:w-4/12 px-4 text-center"
      iconType="fas fa-laptop-code"
      iconStyles="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-purple-500"
    >
      <h3 class="text-xl font-semibold">Code</h3>
      <p class="mt-2 mb-4 text-blueGray-500">
        Creations brought to life by code, that's the final touch.
      </p>
    </CardIcon>
    <div class="flex flex-wrap items-center mt-20">
      <TextPromotion
        styles="w-full md:w-5/12 px-4 mr-auto ml-auto"
        iconType="fas fa-seedling text-xl"
        iconStyles="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-white"
      >
        <h3 class="text-3xl mb-2 font-semibold leading-normal">
          Current work in progress.
        </h3>
        <p
          class="text-lg font-light leading-relaxed mt-4 mb-4 text-blueGray-600"
        >
          In this project I intend to implement the following technique.
        </p>
        <a href="/" class="font-bold text-blueGray-700 mt-8">
          visit my art page.!
        </a>
      </TextPromotion>
      <CardImage
        cardImage={imagePlaceHolder}
        cardTitle="The woman"
        cardDescription="An accelerated time view of the project."
      />
    </div>
  </div>
</Section>

<!-- Highlights section-->
<Section
  sectionStyles="relative py-20"
  containerStyles="items-center flex flex-wrap"
>
  <Separator slot="head-section" />
  <div slot="images-section" class="w-full md:w-4/12 ml-auto mr-auto px-4">
    <Image imgStyles="max-w-full rounded-lg shadow-lg" />
  </div>

  <div class="w-full md:w-5/12 ml-auto mr-auto px-4">
    <TextPromotion
      styles="md:pr-12"
      iconStyles="text-red-600 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-red-300"
      iconType="fas fa-rocket text-xl"
    >
      <h3 class="text-3xl font-semibold">Highlights projects</h3>
      <p class="mt-4 text-lg leading-relaxed text-blueGray-500">
        Some of the following projects can be found in my store as NFT digital
        arts.
      </p>
      <IconList listStyles="list-none mt-6">
        <Li
          title="Carefully crafted components"
          iconType="fas fa-fingerprint"
        />
        <Li title="Amazing page examples" iconType="fab fa-html5" />
        <Li title="Dynamic components" iconType="far fa-paper-plane" />
      </IconList>
    </TextPromotion>
  </div>
  <Carousel />
</Section>
<!-- Contact section -->
<Section
  sectionStyles="pb-20 relative block bg-blueGray-800"
  containerStyles="container mx-auto px-4 lg:pt-24 lg:pb-64"
>
  <Separator
    slot="head-section"
    polygonStyles="text-blueGray-800 fill-current"
  />
  <div class="flex flex-wrap text-center justify-center">
    <div class="w-full lg:w-6/12 px-4">
      <h2 class="text-4xl font-semibold text-white">Build something</h2>
      <p class="text-lg leading-relaxed mt-4 mb-4 text-blueGray-400">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vero eum amet
        rem. Dolores, dicta eligendi.
      </p>
    </div>
  </div>

  <div class="flex flex-wrap mt-12 justify-center">
    <CardIcon
      noBg="true"
      cardStyles="w-full lg:w-3/12 px-4 text-center"
      iconType="fas fa-medal text-xl"
      iconStyles="text-blueGray-800 p-3 w-12 h-12 shadow-lg rounded-full bg-white inline-flex items-center justify-center"
    >
      <h6 class="text-xl mt-5 font-semibold text-white">Excelent Services</h6>
      <p class="mt-2 mb-4 text-blueGray-400">
        Some quick example text to build on the card title and make up the bulk
        of the card's content.
      </p>
    </CardIcon>
    <CardIcon
      noBg="true"
      cardStyles="w-full lg:w-3/12 px-4 text-center"
      iconType="fas fa-poll text-xl"
      iconStyles="text-blueGray-800 p-3 w-12 h-12 shadow-lg rounded-full bg-white inline-flex items-center justify-center"
    >
      <h6 class="text-xl mt-5 font-semibold text-white">
        Grow your creativity
      </h6>
      <p class="mt-2 mb-4 text-blueGray-400">
        Some quick example text to build on the card title and make up the bulk
        of the card's content.
      </p>
    </CardIcon>
    <CardIcon
      noBg="true"
      cardStyles="w-full lg:w-3/12 px-4 text-center"
      iconType="fas fa-lightbulb text-xl"
      iconStyles="text-blueGray-800 p-3 w-12 h-12 shadow-lg rounded-full bg-white inline-flex items-center justify-center"
    >
      <h6 class="text-xl mt-5 font-semibold text-white">Launch time</h6>
      <p class="mt-2 mb-4 text-blueGray-400">
        Some quick example text to build on the card title and make up the bulk
        of the card's content.
      </p>
    </CardIcon>
  </div>
</Section>
