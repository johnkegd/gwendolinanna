<script>
//Movement Animation
//import animation from '../../animations';
import {fade,fly} from 'svelte/transition';


let visible = false;
function handleClick() {
visible = !visible;
}

</script>

<style>
#container {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding-bottom: 100px;
    margin-top: 20px;
}
#card {
    transform-style: preserve-3d;
    width: 300px;
    height: 570px;
    border-radius: 30px;
    padding: 0px 35px;
    box-shadow: 0 20px 20px rgba(0, 0, 0, 0.2), 0px 0px 50px rgba(0, 0, 0, 0.2);
    transition: 500ms;
}

 #card:hover{
    transform: scale(1.1, 1.1);
}

.sneaker {
    margin-top: 40px;
    min-height: 100px;
    display: flex;
    align-items: center;
    justify-content: center;
}
.sneaker img {
    width: 200px;
    z-index: 2;
    transition: all 0.75s;
    animation-name: rotate-gear;
    animation-duration: 2s;
    animation-iteration-count: initial;
    animation-timing-function: linear;
}

.sneaker img:hover{
    animation-name: rotate-gear;
    animation-duration: 2s;
    animation-iteration-count: infinite;
    animation-timing-function: initial;
}

@keyframes rotate-gear{
    from{
        transform: rotateZ(0deg);
    }
    to{
        transform: rotateZ(-360deg);
    }
}

.circle {
    width: 150px;
    height: 150px;
    background: linear-gradient(
        to right,
            #60A5FA,
            #34D399
    );
    position: absolute;
    border-radius: 50%;
    z-index: 1;
}

#info h1 {
    padding-top: 20px;
    text-align: center;
    font-size: 30px;
    transition: all 0.75s ease-out;
}
#info h3 {
    font-size: 20px;
    padding: 25px 0px;
    color: #585858;
    font-weight: lighter;
    transition: all 0.75s ease-out;
}
.sizes {
    display: flex;
    justify-content: center;
    transition: all 0.75s ease-out;
}
.sizes button {
    padding: 10px 20px;
    margin-left: 5px;
    background: #34d3993d;
    border: none;
    box-shadow: 0px 5px 10px #60a5fa65;
    border-radius: 30px;
    cursor: pointer;
    font-weight: bold;
    color: #585858;
}

button:hover{
    color: white;
    background: linear-gradient(
        to right,
            #60A5FA,
            #34D399
    );
}

button.active {
    color: white;
    background: linear-gradient(
        to right,
            #60A5FA,
            #34D399
    );
}
.purchase {
    margin-top: 42px;
    transition: all 0.75s ease-out;
}
.purchase button {
    width: 100%;
    padding: 15px 0px;
    background:#34D399;
    border: none;
    color: white;
    cursor: pointer;
    border-radius: 30px;
    font-weight: bolder;
    transition: 2s linear;
}

.purchase button:hover{
    background: linear-gradient(
        to right,
            #60A5FA,
            #34D399
    );
}


</style>

<div id="container">
    <div id="card">
        <div class="sneaker">
            <div class="circle"></div>
            <img src="https://raw.githubusercontent.com/developedbyed/3d-card-effect/master/adidas.png" alt="">
        </div>
        <div id="info">
            <h1>Adidas ZX</h1>
            {#if visible}
            <h3 in:fly={{y:-300, duration:800}}>FUTURE-READY TRAINERS WITH WRAPPED BOOST FOR EXCEPTION COMFORT.</h3>
            {:else}
            <h3 in:fly={{x:300, duration:800}}>FUTURE-READY TRAINERS WITH WRAPPED BOOST FOR EXCEPTION COMFORT.</h3>
            {/if}
            <div class="sizes">
                <button>39</button>
                <button>40</button>
                <button class="active">41</button>
                <button on:click="{handleClick}">42</button>
            </div>
            <div class="purchase">
                <button>Purchase</button>
            </div>
        </div>
    </div>
</div>