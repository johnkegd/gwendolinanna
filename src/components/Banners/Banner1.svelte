<script>
    import Section from '../Sections/Section.svelte';
</script>


<style>
    #contenedor{
    color: white;
    text-align: center;
    /* display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center; */

    /* 
    margin: 0px auto;
    height: 400px;*/ 
    width: 80%;

    background: url("https://images.unsplash.com/photo-1472289065668-ce650ac443d2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1050&q=80");
    background-repeat: no-repeat;
    background-attachment: fixed;
    background-position: 50% 50%; 
    background-color: rgba(255, 255, 255, 0.7);
    border-radius: 30px;
    /* box-shadow: 1px 5px 5px black; */

}

/* .cajas{
    width: 150px;
    height: 100px;
    margin: 10px 10px;

}

.caja-1{
    height: auto;
    width: 85%;
}

.caja-2{
    height: auto;
    width: 70%;
} */


    
</style>

<Section>
<div class="container mx-auto text-xl shadow-xl flex flex-wrap justify-center shadow-xl rounded-lg -mt-64 py-16 px-12 relative z-10" id="contenedor">
    <!-- <div class="cajas caja-1"> -->
        <p class="text-4xl text-center"><span role="img" aria-label="love">🖌 </span></p><br/>
        
        <h3 class="font-semibold text-3xl">Do you love this Starter Kit?</h3>
    <!-- </div> -->
    <!-- <div class="cajas caja-2"> -->
        <p class="text-white text-lg leading-relaxed mt-4 mb-4">Cause if you do, it can be yours now. Hit the buttons below to navigate to get the Free version for your next project. Build a new web app or give an old project a new look!</p>
    <!-- </div> -->
        <div class="sm:block flex flex-col mt-10"><a href="#" target="_blank" class="get-started text-white font-bold px-6 py-4 rounded outline-none focus:outline-none mr-1 mb-2 active:bg-red-500 uppercase text-sm shadow hover:shadow-lg ease-linear transition-all duration-150">Get started</a> 
            <a href="https://github.com/johnkegd/gwendolinanna" target="_blank" class="github-star sm:ml-1 text-white font-bold px-6 py-4 rounded outline-none focus:outline-none mr-1 mb-1 bg-blueGray-700 active:bg-blueGray-600 uppercase text-sm shadow hover:shadow-lg ease-linear transition-all duration-150"><i class="fab fa-github text-lg mr-1"></i> 
              <span>Help With a Star</span></a></div>

</div>
</Section>