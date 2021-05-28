<script>

</script>

<style>
    
    h1, h2, h3, h4, h5, h6 {
    font-size: revert;
    font-weight: inherit;
}

    #container{
        display: flex;
        align-items: center;
        justify-content: center;
        height: 100vh;
        background: #8664c9;
        /* font-family: Arial, Helvetica, sans-serif; */
        padding: 0px 20px;
    }
    #card {
        display: flex;
        width: 600px;
        height: auto;
        background: white;
        border-radius: 2px;
        box-shadow: 1px 1px 5px 1px rgb(0, 0, 0, .2);
    }
    .info{
        border-right: 1px solid #ddd;
    }

    .description{
        position: relative;
        background: #fbfbfb;
    }

    .description p{
        margin: 20px 30px;
    }

    .description .social{
        margin-top: 25px;
    }

    .description .social a{
        display: inline-block;
        padding: 0 15px;
        color: #f0522a;
    }

    .info, .description{
        padding: 20px;
        text-align: center;
    }

    .info a{
        position: relative;
        display: block;
        margin: 20px 30px;
    }

    .info img{
        
        border-radius: 50%;
        box-shadow: 0 0 0 8px rgb(0, 0, 0, .06);
        transition: .2s;
    }
    .info a:hover img{
        box-shadow: 0 0 0 12px rgb(0, 0, 0, .1);
    }

    .info h2{
        color: #f0522a;
        margin-top: 10px;
    }

    .info h4{
        margin-top: 20px;
    }

    @media (max-width:640px){
        #card{
            display: block;
            width: 450px;
        }
        .info{
            padding: 20px 20px 5px 20px;
            border: 0;
        }
        img{
            margin: 0px auto;
        }
        .description{
            padding: 5px 20px 20px 20px;
            background: transparent;
        }
        .info h4{
            margin: 0;
        }
        .social a{
            margin-bottom: 10px;
        }
    }

</style>

<div id="container">
    <div id="card">
        <div class="info">
            <a href="#">
                <img
                    src="https://interactive-examples.mdn.mozilla.net/media/examples/moon.jpg"
                    alt=""
                />
                <h2>Manuel|Duran</h2>
                <h4>Desarrollador web</h4>
            </a>
        </div>
        <div class="description">
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis incidunt facilis ipsum, dolorem eum et repudiandae. Laborum sint rem pariatur saepe quaerat voluptates, asperiores modi!
            </p>
            <div class="social">
                <a href="#"><i class="fab fa-facebook-f"></i></a>
                <a href="#"><i class="fab fa-instagram"></i></a>
                <a href="#"><i class="fab fa-twitter"></i></a>
            </div>
        </div>
    </div>
</div>


