<script>
    import imagePlaceHolder from '../../node_modules/images/example-500x500.jpg';
    import CardImage from '../Cards/CardImage.svelte';
    import TextPromotion from '../TextContainers/TextPromotion.svelte';
    export let sectionStyles = "pb-20 bg-blueGray-200 -mt-24";
</script>

<section class="{sectionStyles}">
    <div class="container mx-auto px-4">
      <div class="flex flex-wrap">
          <!-- i don't want to set a name or wrapper to this slot for the moment-->
          <!-- cardIcons children comming via slot-->
          <slot></slot>
  
        <div class="flex flex-wrap items-center mt-32">
            <TextPromotion 
                containerStyles="w-full md:w-5/12 px-4 mr-auto ml-auto"
                iconType="fas fa-user-friends text-xl"
                iconContainer="div"
                iconStyles="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-white"
                promotionTitle="Working in it is a pleasure"
                promotionP1="Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis, repellendus."
                promotionP2="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Id tempora harum minima."
                promotionLinkText="Lorem ipsum dolor sit amet.!"
            />
            <CardImage 
                cardImage="{imagePlaceHolder}"
                cardTitle="Card title"
                cardDescription="Qui occaecat sunt sunt ipsum velit duis voluptate consectetur labore do consequat."
            />

        </div>
    </div>
  </section>
  