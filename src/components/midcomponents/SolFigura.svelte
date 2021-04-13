<script>
    import Figura from './Figura.svelte';
    import FiguraPerro from './FiguraPerro.svelte';
    import FiguraGato from './FiguraGato.svelte';
    export let clase = "claseEspecial";
    export let color = "#F3AC3C";
    export let width = "50px";
    export let animation = "baila";
</script>
<style>
    body{
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100%;
      margin: 0px;
      padding: 0px;
      background-color: #1A4341;
    }
    
    .body{
      width: 100px;
      height: 100px;
      border-radius: 50%;
    }
    
    .s1{
      height: 30px;
      border-radius: 50%;
      background-color: #998235;
      margin-right: 50px;
      
    }

    .baila {
      animation: baila 0.7s infinite;
    }

    .muevete {
      animation: mueve 0.7s infinite;
    }
    
    .s2{
      
    }
    
    .s3{
      
    }
  
  @keyframes mueve {
    from{
        transform: rotateZ(0deg);
    }
    to{
        transform: rotateZ(360deg);
    }
  }

  @keyframes baila {
    from{
        transform: rotateY(360deg);
    }
    to{
        transform: rotateY(0deg);
    }
  }
  </style>

<div class="body" style="background-color:{color}">
    <div class="s1 {animation}" style="width:{width}"></div>
    <div class="s2"></div>
    <div class="s2"></div>
  </div>
  <div class="b1"></div>
  <div class="b2"></div>
  <div class="b3"></div>


<!-- <Figura {color}/>
<FiguraPerro {color}/>
<FiguraGato {color}/> -->