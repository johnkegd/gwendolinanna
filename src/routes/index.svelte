<script>
  import SectionCardIcons from '../components/Sections/SectionLanding.svelte';
  import Card from "../components/materialize/Card.svelte";
  import CardIcon from '../components/Cards/CardIcon.svelte';
  import logo from "images/logo-2.svg";
  import stars from "images/stars.svg";
</script>

<svelte:head>
  <title>Gwendolin Home</title>
</svelte:head>

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
        class="absolute top-0 b-auto left-0 pt-0 sm:w-2/12 -mt-32 max-h-860-px"
        src={logo}
        alt="Gwendolin Anna website"
      />
    </a>
  </div>
  <div class="container relative mx-auto">
    <div class="items-center flex flex-wrap">
      <div class="w-full lg:w-6/12 px-4 ml-auto mr-auto text-center">
        <div class="pr-12">
          <h1 class="text-white font-semibold text-5xl">
            Your story begin here.
          </h1>
          <p class="mt-4 text-lg text-blueGray-200">
            This is a simple example of a Landing Page you can build using Notus
            Svelte. It features multiple CSS components based on the Tailwind
            CSS design system.
          </p>
        </div>
      </div>
    </div>
  </div>
  <div
    class="top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden h-70-px"
    style="transform: translateZ(0);"
  >
    <svg
      class="absolute bottom-0 overflow-hidden"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="none"
      version="1.1"
      viewBox="0 0 2560 100"
      x="0"
      y="0"
    >
      <polygon
        class="text-blueGray-200 fill-current"
        points="2560 0 2560 100 0 100"
      />
    </svg>
  </div>
</div>

<SectionCardIcons>
<CardIcon 
	cardStyles="lg:pt-12 pt-6 w-full md:w-4/12 px-4 text-center"
	cardTitle="Awarded Agency"
	cardDescription="Divide details about your product or agency work into parts. A paragraph describing a feature will be enough."
	cardIcon="fa-award"/>
<CardIcon 
	cardStyles="w-full md:w-4/12 px-4 text-center"
	cardTitle="Free Revisions"
	cardDescription="Keep you user engaged by providing meaningful information. Remember that by this time, the user is curious."
	cardIcon="fa-retweet"/>
<CardIcon 
	cardStyles="pt-6 w-full md:w-4/12 px-4 text-center"
	cardTitle="Verified Company"
	cardDescription="Write a few lines about each one. A paragraph describing a feature will be enough. Keep you user engaged!"
	cardIcon="fa-fingerprint"/>

</SectionCardIcons>

