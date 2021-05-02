<script>
    import Icon from '../Icons/Icon.svelte';
    export let sectionStyles = "relative py-20";

</script>

<section class="{sectionStyles}">
    <div
      class="bottom-auto top-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden -mt-20 h-20"
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
          class="text-white fill-current"
          points="2560 0 2560 100 0 100"
        ></polygon>
      </svg>
    </div>

    <div class="container mx-auto px-4">
      <div class="items-center flex flex-wrap">
        <div class="w-full md:w-4/12 ml-auto mr-auto px-4">
          <img
            alt="..."
            class="max-w-full rounded-lg shadow-lg"
            src="https://images.unsplash.com/photo-1555212697-194d092e3b8f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80"
          />
        </div>
        <div class="w-full md:w-5/12 ml-auto mr-auto px-4">
          <div class="md:pr-12">
              <Icon
                container="div"
                containerStyles="text-red-600 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-red-300"
                type="fas fa-rocket text-xl"
              />
            <h3 class="text-3xl font-semibold">A growing company</h3>
            <p class="mt-4 text-lg leading-relaxed text-blueGray-500">
              The extension comes with three pre-built pages to help you get
              started faster. You can change the text and images and you're
              good to go.
            </p>
            <ul class="list-none mt-6">
              <li class="py-2">
                <div class="flex items-center">
                      <Icon
                        wrapper="true"
                        container="span"
                        containerStyles="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-red-600 bg-red-200 mr-3"
                        type="fas fa-fingerprint"
                      />
                  <div>
                    <h4 class="text-blueGray-500">
                      Carefully crafted components
                    </h4>
                  </div>
                </div>
              </li>
              <li class="py-2">
                <div class="flex items-center">
                    <Icon
                        wrapper="true"
                        container="span"
                        containerStyles="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-red-600 bg-red-200 mr-3"
                        type="fab fa-html5"
                    />
                  <div>
                    <h4 class="text-blueGray-500">
                      Amazing page examples
                    </h4>
                  </div>
                </div>
              </li>
              <li class="py-2">
                <div class="flex items-center">
                    <Icon 
                        wrapper="true"
                        container="span"
                        containerStyles="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-red-600 bg-red-200 mr-3"
                        type="far fa-paper-plane"
                    />
                  <div>
                    <h4 class="text-blueGray-500">Dynamic components</h4>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>