<script>
import { title } from 'node:process';
import Icon from '../Icons/Icon.svelte';
export let listStyles;
export let lis;
</script>


<ul class="{listStyles}">

{#each lis as li}
<li class="{li.styles}">
    <div class="flex items-center">
          <Icon
            wrapper="true"{}
            container="{li.icon.container}"
            containerStyles="{li.icon.container.styles}"
            type="{li.icon.container.styles}"
          />
      <div>
        <h4 class="{li.title.styles}">
          Carefully crafted components
        </h4>
      </div>
    </div>
  </li>
{/each}
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