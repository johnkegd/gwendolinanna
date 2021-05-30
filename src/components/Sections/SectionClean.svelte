<script>
    export let sectionStyles = "relative flex items-center w-full h-full min-h-screen";
</script>


<section class="{sectionStyles}">
    <div class="absolute top-0 w-full h-full bg-blueGray-800 bg-no-repeat bg-full">
    </div>
    <div class="container mx-auto px-4 h-full">
        <div class="flex content-center items-center justify-center h-full">
          <div class="w-full lg:w-4/12 px-4">
            <div class="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-200 border-0">
                <slot></slot>
            </div>
          </div>
        </div>
    </div>
</section>