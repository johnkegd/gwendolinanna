<script>
	import CardIcon from '../components/Cards/CardIcon.svelte';
	import CardImage from '../components/Cards/CardImage.svelte';
	import imagePlaceHolder from '../node_modules/images/example-500x500.jpg';
	import TextPromotion from '../components/TextContainers/TextPromotion.svelte';
	import Section from '../components/Sections/Section.svelte';
	import Separator from '../components/Separator.svelte';
	import IconList from '../components/Lists/IconList.svelte';
	import Li from '../components/Lists/ListItem.svelte';
	import Icon from '../components/Icons/Icon.svelte';
	import Image from '../components/Images.svelte';
	import logo from "images/logo-2.svg";
	import stars from "images/stars.svg";
</script>

<svelte:head>
  <title>Gwendolin Home</title>
</svelte:head>
<!--TODO: Split in components to header by page-->
<div class="relative pt-16 pb-32 flex content-center items-center justify-center min-h-screen-75">
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

<!-- Card icons section-->
<Section sectionStyles="pb-20 bg-blueGray-200 -mt-24">
	
	<!-- <div slot="head-section"> outside the inner container </div> -->
	<!-- <div slot="footer-section"> outside the inner container bottom area</div> -->
	<div class="flex flex-wrap">
		<CardIcon cardStyles="lg:pt-12 pt-6 w-full md:w-4/12 px-4 text-center" iconType="fas fa-award"
			iconStyles="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-red-400"
		>
			<h6 class="text-xl font-semibold">Awarded Agency</h6>
			<p class="mt-2 mb-4 text-blueGray-500">
				Some quick example text to build on the card title and make up the bulk of the card's content.
			</p>
		</CardIcon>
		<CardIcon cardStyles="w-full md:w-4/12 px-4 text-center" iconType="fas fa-retweet"
			iconStyles="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-emerald-400"
		>
			<h6 class="text-xl font-semibold">Free Revisions</h6>
			<p class="mt-2 mb-4 text-blueGray-500">
				Some quick example text to build on the card title and make up the bulk of the card's content.
			</p>
		</CardIcon>
		<CardIcon cardStyles="pt-6 w-full md:w-4/12 px-4 text-center" iconType="fas fa-fingerprint"
			iconStyles="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-purple-500"
		>
			<h6 class="text-xl font-semibold">Verified Company</h6>
			<p class="mt-2 mb-4 text-blueGray-500">
				Some quick example text to build on the card title and make up the bulk of the card's content.
			</p>
		</CardIcon>
		<div class="flex flex-wrap items-center mt-20">
			<TextPromotion 
				containerStyles="w-full md:w-5/12 px-4 mr-auto ml-auto"
				iconType="fas fa-user-friends text-xl"
				iconContainer="div"
				iconStyles="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-white"
			>
				<h3 class="text-3xl mb-2 font-semibold leading-normal">
					Working in it is a pleasure
				</h3>
				<p class="text-lg font-light leading-relaxed mt-4 mb-4 text-blueGray-600">
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis, repellendus.
				</p>
				<a href="/" class="font-bold text-blueGray-700 mt-8">
					Lorem ipsum dolor sit amet.!
				</a>
			</TextPromotion>
			<CardImage 
				cardImage="{imagePlaceHolder}"
				cardTitle="Card title"
				cardDescription="Qui occaecat sunt sunt ipsum velit duis voluptate consectetur labore do consequat."
			/>
		</div>
	</div>
</Section>



<!-- Highlights section-->
<Section sectionStyles="relative py-20" containerStyles="items-center flex flex-wrap">
	<Separator slot="head-section"/>
	<div slot="images-section" class="w-full md:w-4/12 ml-auto mr-auto px-4">
		<Image imgStyles="max-w-full rounded-lg shadow-lg"/>
	</div>
	
	<div class="w-full md:w-5/12 ml-auto mr-auto px-4">
		<TextPromotion
			containerStyles="md:pr-12"
			iconContainer="div"
			iconStyles="text-red-600 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-red-300"
			iconType="fas fa-rocket text-xl"
		>
			<h3 class="text-3xl font-semibold">A growing company</h3>
			<p class="mt-4 text-lg leading-relaxed text-blueGray-500">
			The extension comes with three pre-built pages to help you get
			started faster. You can change the text and images and you're
			good to go.
			</p>
			<IconList listStyles="list-none mt-6">
				<Li 
					title="Carefully crafted components" 
					iconType="fas fa-fingerprint"
				/>
				<Li
					title="Amazing page examples"
					iconType="fab fa-html5"
				/>
				<Li
					title="Dynamic components" 
					iconType="far fa-paper-plane"
				/>
			</IconList>
		</TextPromotion>
	</div>
</Section>

<!-- Contact section -->
<Section sectionStyles="pb-20 relative block bg-blueGray-800" containerStyles="container mx-auto px-4 lg:pt-24 lg:pb-64">
	<Separator slot="head-section" polygonStyles="text-blueGray-800 fill-current"/>
	<div class="flex flex-wrap text-center justify-center">
		<div class="w-full lg:w-6/12 px-4">
		  <h2 class="text-4xl font-semibold text-white">
			Build something
		  </h2>
		  <p class="text-lg leading-relaxed mt-4 mb-4 text-blueGray-400">
			Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vero eum amet rem. Dolores, dicta eligendi.
		  </p>
		</div>
	</div>

	<div class="flex flex-wrap mt-12 justify-center">

		<CardIcon noBg="true"  cardStyles="w-full lg:w-3/12 px-4 text-center" iconType="fas fa-medal text-xl"
			iconStyles="text-blueGray-800 p-3 w-12 h-12 shadow-lg rounded-full bg-white inline-flex items-center justify-center"
		>
			<h6 class="text-xl mt-5 font-semibold text-white">Excelent Services</h6>
			<p class="mt-2 mb-4 text-blueGray-400">
				Some quick example text to build on the card title and make up the bulk of the card's content.
			</p>
		</CardIcon>
		<CardIcon noBg="true" cardStyles="w-full lg:w-3/12 px-4 text-center" iconType="fas fa-poll text-xl"
			iconStyles="text-blueGray-800 p-3 w-12 h-12 shadow-lg rounded-full bg-white inline-flex items-center justify-center"
		>
			<h6 class="text-xl mt-5 font-semibold text-white">Grow your creativity</h6>
			<p class="mt-2 mb-4 text-blueGray-400">
				Some quick example text to build on the card title and make up the bulk of the card's content.
			</p>
		</CardIcon>
		<CardIcon noBg="true" cardStyles="w-full lg:w-3/12 px-4 text-center" iconType="fas fa-lightbulb text-xl"
			iconStyles="text-blueGray-800 p-3 w-12 h-12 shadow-lg rounded-full bg-white inline-flex items-center justify-center"
		>
			<h6 class="text-xl mt-5 font-semibold text-white">Launch time</h6>
			<p class="mt-2 mb-4 text-blueGray-400">
				Some quick example text to build on the card title and make up the bulk of the card's content.
			</p>
		</CardIcon>
	</div>
</Section>
