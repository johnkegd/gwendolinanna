<script>
export let title;
export let description;
export let price;
export let image;
export let category;

</script>

<style>

</style>
<div class="col l4 m6 s12 gallery-item gallery-expand gallery-filter {category}">
    <div class="gallery-curve-wrapper">
      <!-- svelte-ignore a11y-missing-attribute -->
      <a class="gallery-cover gray">
        <img class="responsive-img" src={image} alt="placeholder">
      </a>
      <div class="gallery-header">
        <span>{title}</span>
      </div>
      <div class="gallery-body">
        <div class="title-wrapper">
          <h3>{title}</h3>
          <span class="price">${price}</span>
        </div>
        <p class="description">
            {description}
          </p>
        <div class="carousel-wrapper">
          <div class="carousel">
            <a class="carousel-item" href="#one!"><img src="//cdn.shopify.com/s/files/1/1775/8583/t/1/assets/geometric-sun.jpg?v=5328726480767926026"></a>
            <a class="carousel-item" href="#two!"><img src="//cdn.shopify.com/s/files/1/1775/8583/t/1/assets/geometric-maze.jpg?v=14238163633299520814"></a>
            <a class="carousel-item" href="#three!"><img src="//cdn.shopify.com/s/files/1/1775/8583/t/1/assets/geometric-ice.jpg?v=10474404842800237238"></a>
            <a class="carousel-item" href="#four!"><img src="//cdn.shopify.com/s/files/1/1775/8583/t/1/assets/geometric-cave.jpg?v=13127282243134125143"></a>
            <a class="carousel-item" href="#five!"><img src="//cdn.shopify.com/s/files/1/1775/8583/t/1/assets/geometric-grapefruit.jpg?v=4070483676604165442"></a>
          </div>
        </div>
      </div>
      <div class="gallery-action">
        <a class="btn-floating btn-large waves-effect waves-light"><i class="material-icons">favorite</i></a>
      </div>
    </div>
  </div>
