<script>
  import CardIcon from "../components/Cards/CardIcon.svelte";
  import CardImage from "../components/Cards/CardImage.svelte";
  import Card from "../components/Cards/Card.svelte";
  import Icon from "../components/Icons/Icon.svelte";
  import imagePlaceHolder from "../node_modules/images/example-500x500.jpg";
  import TextPromotion from "../components/TextContainers/TextPromotion.svelte";
  import Section from "../components/Sections/Section.svelte";
  import Separator from "../components/Separator.svelte";
  import IconList from "../components/Lists/IconList.svelte";
  import Li from "../components/Lists/ListItem.svelte";
  import Image from "../components/Images.svelte";
  /* 
  let sec;
  $: if (sec) {
    console.log("section: ", sec);
  } */
</script>

<svelte:head>
  <title>Gwendolin Home</title>
</svelte:head>

<!-- Card icons section-->
<Section sectionStyles="pb-20 bg-blueGray-200 -mt-24">
  <!-- <div slot="head-section"> outside the inner container </div> -->
  <!-- <div slot="footer-section"> outside the inner container bottom area</div> -->
  <div class="flex flex-wrap">
    <Card class="lg:pt-12 pt-6">
      <Icon type="fas fa-camera-retro" class="bg-red-400" />
      <h3 class="text-xl font-semibold">Photography</h3>
      <p class="mt-2 mb-4 text-blueGray-500">
        Like a window in time, images are a form of immortalization.
      </p>
    </Card>
    <Card>
      <Icon class="bg-emerald-400" type="fas fa-paint-brush" />
      <h3 class="text-xl font-semibold">Art</h3>
      <p class="mt-2 mb-4 text-blueGray-500">
        Drawing and coloring is something I really enjoy, a world full of color.
      </p>
    </Card>
    <Card class="pt-6">
      <Icon class="bg-purple-500" type="fas fa-laptop-code" />

      <h3 class="text-xl font-semibold">Code</h3>
      <p class="mt-2 mb-4 text-blueGray-500">
        Creations brought to life by code, that's the final touch.
      </p>
    </Card>

    <div class="flex flex-wrap items-center mt-20">
      <TextPromotion
        class="w-full md:w-5/12 px-4 mr-auto ml-auto"
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
        type="gla"
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
      class="md:pr-12"
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
  <!--   <Carousel />
 -->
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
    <Card CLASS="w-full lg:w-3/12 px-4 text-center" type="transparent">
      <Icon container="div" type="fas fa-medal text-xl" />
      <h6 class="text-xl mt-5 font-semibold text-white">Excelent Services</h6>
      <p class="mt-2 mb-4 text-blueGray-400">
        Some quick example text to build on the card title and make up the bulk
        of the card's content.
      </p>
    </Card>
    <Card CLASS="w-full lg:w-3/12 px-4 text-center" type="transparent">
      <Icon container="div" type="fas fa-poll text-xl" />
      <h6 class="text-xl mt-5 font-semibold text-white">
        Grow your creativity
      </h6>
      <p class="mt-2 mb-4 text-blueGray-400">
        Some quick example text to build on the card title and make up the bulk
        of the card's content.
      </p>
    </Card>
    <Card CLASS="w-full lg:w-3/12 px-4 text-center" type="transparent">
      <Icon container="div" type="fas fa-poll text-xl" />
      <h6 class="text-xl mt-5 font-semibold text-white">Launch time</h6>
      <p class="mt-2 mb-4 text-blueGray-400">
        Some quick example text to build on the card title and make up the bulk
        of the card's content.
      </p>
    </Card>
  </div>
</Section>
