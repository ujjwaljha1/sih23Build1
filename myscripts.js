document.addEventListener("DOMContentLoaded", function () {
    const slides = document.querySelectorAll(".slide-container");
    const dots = document.querySelectorAll(".carousel-dot");
    let currentIndex = 0;
  
    function showSlide(index) {
      slides[currentIndex].classList.remove("active");
      dots[currentIndex].classList.remove("active");
  
      currentIndex = index;
  
      slides[currentIndex].classList.add("active");
      dots[currentIndex].classList.add("active");
    }
  
    showSlide(currentIndex);
  
\
    dots.forEach((dot, index) => {
      dot.addEventListener("click", () => {
        showSlide(index);
      });
    });
  
    // Listen for arrow key presses
    document.addEventListener("keydown", function (e) {
      if (e.key === "ArrowLeft") {
        currentIndex = (currentIndex - 1 + slides.length) % slides.length;
        showSlide(currentIndex);
      } else if (e.key === "ArrowRight") {
        currentIndex = (currentIndex + 1) % slides.length;
        showSlide(currentIndex);
      }
    });
  });
  
/*



<h2>Automatic Slideshow</h2>
<p>Change image every 2 seconds:</p>

<div class="slideshow-container">

<div class="mySlides fade">
  <div class="numbertext">1 / 3</div>
  <img src="img_nature_wide.jpg" style="width:100%">
  <div class="text">Caption Text</div>
</div>

<div class="mySlides fade">
  <div class="numbertext">2 / 3</div>
  <img src="img_snow_wide.jpg" style="width:100%">
  <div class="text">Caption Two</div>
</div>

<div class="mySlides fade">
  <div class="numbertext">3 / 3</div>
  <img src="img_mountains_wide.jpg" style="width:100%">
  <div class="text">Caption Three</div>
</div>

</div>
<br>

<div style="text-align:center">
  <span class="dot"></span> 
  <span class="dot"></span> 
  <span class="dot"></span> 
</div>


<!-- Image 1 -->
<label for="img-7" class="prev-slide">
<span>&lsaquo;</span>
</label>
<label for="img-6" class="next-slide">
<span>&rsaquo;</span>
</label>
<label for="img-5" class="prev-slide">
<span>&lsaquo;</span>
</label>
<label for="img-4" class="next-slide">
<span>&rsaquo;</span>
</label>
<label for="img-3" class="prev-slide">
  <span>&lsaquo;</span>
  </label>
  <label for="img-2" class="next-slide">
  <span>&rsaquo;</span>
  </label>


<!-- Image 2 -->

  <label for="img-7" class="prev-slide">
    <span>&lsaquo;</span>
    </label>
    <label for="img-6" class="next-slide">
    <span>&rsaquo;</span>
    </label>
    <label for="img-5" class="prev-slide">
    <span>&lsaquo;</span>
    </label>
    <label for="img-4" class="next-slide">
    <span>&rsaquo;</span>
    </label>
    <label for="img-3" class="prev-slide">
      <span>&lsaquo;</span>
      </label>
      <label for="img-1" class="next-slide">
      <span>&rsaquo;</span>
      </label>

  <!-- Image 3 -->
      <label for="img-7" class="prev-slide">
        <span>&lsaquo;</span>
        </label>
        <label for="img-6" class="next-slide">
        <span>&rsaquo;</span>
        </label>
        <label for="img-5" class="prev-slide">
        <span>&lsaquo;</span>
        </label>
        <label for="img-4" class="next-slide">
        <span>&rsaquo;</span>
        </label>
        <label for="img-2" class="prev-slide">
          <span>&lsaquo;</span>
          </label>
          <label for="img-1" class="next-slide">
          <span>&rsaquo;</span>
          </label>

          <!-- Image 4 -->
          <label for="img-7" class="prev-slide">
            <span>&lsaquo;</span>
            </label>
            <label for="img-6" class="next-slide">
            <span>&rsaquo;</span>
            </label>
            <label for="img-5" class="prev-slide">
            <span>&lsaquo;</span>
            </label>
            <label for="img-3" class="next-slide">
            <span>&rsaquo;</span>
            </label>
            <label for="img-2" class="prev-slide">
              <span>&lsaquo;</span>
              </label>
              <label for="img-1" class="next-slide">
              <span>&rsaquo;</span>
              </label>
            
<!-- Image 5 -->
<label for="img-7" class="prev-slide">
  <span>&lsaquo;</span>
  </label>
  <label for="img-6" class="next-slide">
  <span>&rsaquo;</span>
  </label>
  <label for="img-4" class="prev-slide">
  <span>&lsaquo;</span>
  </label>
  <label for="img-3" class="next-slide">
  <span>&rsaquo;</span>
  </label>
  <label for="img-2" class="prev-slide">
    <span>&lsaquo;</span>
    </label>
    <label for="img-1" class="next-slide">
    <span>&rsaquo;</span>
    </label>
  

    <!-- Image 6 -->
    <label for="img-7" class="prev-slide">
      <span>&lsaquo;</span>
      </label>
      <label for="img-5" class="next-slide">
      <span>&rsaquo;</span>
      </label>
      <label for="img-4" class="prev-slide">
      <span>&lsaquo;</span>
      </label>
      <label for="img-3" class="next-slide">
      <span>&rsaquo;</span>
      </label>
      <label for="img-2" class="prev-slide">
        <span>&lsaquo;</span>
        </label>
        <label for="img-1" class="next-slide">
        <span>&rsaquo;</span>
        </label>
      

        <!-- Image 7 -->
        <label for="img-6" class="prev-slide">
          <span>&lsaquo;</span>
          </label>
          <label for="img-5" class="next-slide">
          <span>&rsaquo;</span>
          </label>
          <label for="img-4" class="prev-slide">
          <span>&lsaquo;</span>
          </label>
          <label for="img-3" class="next-slide">
          <span>&rsaquo;</span>
          </label>
          <label for="img-2" class="prev-slide">
            <span>&lsaquo;</span>
            </label>
            <label for="img-1" class="next-slide">
            <span>&rsaquo;</span>
            </label>


 <li class="slide-container">
            <div class="slide-image">
              <img src="img/allirghts.png">
            </div>
            <div class="carousel-controls">
              <label for="img-7" class="prev-slide">
                <span>&lsaquo;</span>
                </label>
                <label for="img-6" class="next-slide">
                <span>&rsaquo;</span>
                </label>
                <label for="img-5" class="prev-slide">
                <span>&lsaquo;</span>
                </label>
                <label for="img-4" class="next-slide">
                <span>&rsaquo;</span>
                </label>
                <label for="img-3" class="prev-slide">
                  <span>&lsaquo;</span>
                  </label>
                  <label for="img-2" class="next-slide">
                  <span>&rsaquo;</span>
                  </label>
            </div>
          </li>
          <input type="radio" name="radio-buttons" id="img-2" />
          <li class="slide-container">
            <div class="slide-image">
              <img src="img/RIGHT TO EQUALITY.png">
            </div>
            <div class="carousel-controls">
              <label for="img-7" class="prev-slide">
                <span>&lsaquo;</span>
                </label>
                <label for="img-6" class="next-slide">
                <span>&rsaquo;</span>
                </label>
                <label for="img-5" class="prev-slide">
                <span>&lsaquo;</span>
                </label>
                <label for="img-4" class="next-slide">
                <span>&rsaquo;</span>
                </label>
                <label for="img-3" class="prev-slide">
                  <span>&lsaquo;</span>
                  </label>
                  <label for="img-1" class="next-slide">
                  <span>&rsaquo;</span>
                  </label>            
            </div>
          </li>
          <input type="radio" name="radio-buttons" id="img-3" />
          <li class="slide-container">
            <div class="slide-image">
              <img src="img/rightoffreedom.png">
            </div>
            <div class="carousel-controls">
              <label for="img-7" class="prev-slide">
                <span>&lsaquo;</span>
                </label>
                <label for="img-6" class="next-slide">
                <span>&rsaquo;</span>
                </label>
                <label for="img-5" class="prev-slide">
                <span>&lsaquo;</span>
                </label>
                <label for="img-4" class="next-slide">
                <span>&rsaquo;</span>
                </label>
                <label for="img-2" class="prev-slide">
                  <span>&lsaquo;</span>
                  </label>
                  <label for="img-1" class="next-slide">
                  <span>&rsaquo;</span>
                  </label>
              </label>
            </div>
          </li>
          <input type="radio" name="radio-buttons" id="img-4" checked />
          <li class="slide-container">
            <div class="slide-image">
              <img src="img/rightofremedies.png">
            </div>
            <div class="carousel-controls">
              <label for="img-7" class="prev-slide">
                <span>&lsaquo;</span>
                </label>
                <label for="img-6" class="next-slide">
                <span>&rsaquo;</span>
                </label>
                <label for="img-5" class="prev-slide">
                <span>&lsaquo;</span>
                </label>
                <label for="img-3" class="next-slide">
                <span>&rsaquo;</span>
                </label>
                <label for="img-2" class="prev-slide">
                  <span>&lsaquo;</span>
                  </label>
                  <label for="img-1" class="next-slide">
                  <span>&rsaquo;</span>
                  </label>
            </div>
          </li>
          <input type="radio" name="radio-buttons" id="img-5" checked />
          <li class="slide-container">
            <div class="slide-image">
              <img src="img/Right to Freedom of Religion.png">
            </div>
            <div class="carousel-controls">
              <label for="img-7" class="prev-slide">
                <span>&lsaquo;</span>
                </label>
                <label for="img-6" class="next-slide">
                <span>&rsaquo;</span>
                </label>
                <label for="img-4" class="prev-slide">
                <span>&lsaquo;</span>
                </label>
                <label for="img-3" class="next-slide">
                <span>&rsaquo;</span>
                </label>
                <label for="img-2" class="prev-slide">
                  <span>&lsaquo;</span>
                  </label>
                  <label for="img-1" class="next-slide">
                  <span>&rsaquo;</span>
                  </label>
                
              </label>
            </div>
          </li>
          <input type="radio" name="radio-buttons" id="img-6" checked />
          <li class="slide-container">
            <div class="slide-image">
              <img src="img/rightofexploitation.png">
            </div>
            <div class="carousel-controls">
              <label for="img-7" class="prev-slide">
                <span>&lsaquo;</span>
                </label>
                <label for="img-5" class="next-slide">
                <span>&rsaquo;</span>
                </label>
                <label for="img-4" class="prev-slide">
                <span>&lsaquo;</span>
                </label>
                <label for="img-3" class="next-slide">
                <span>&rsaquo;</span>
                </label>
                <label for="img-2" class="prev-slide">
                  <span>&lsaquo;</span>
                  </label>
                  <label for="img-1" class="next-slide">
                  <span>&rsaquo;</span>
                  </label>
            </div>
          </li>
          <input type="radio" name="radio-buttons" id="img-7" checked />
          <li class="slide-container">
            <div class="slide-image">
              <img src="img/Cultural and Educational Rights.png">
            </div>
            <div class="carousel-controls">
              <label for="img-6" class="prev-slide">
                <span>&lsaquo;</span>
                </label>
                <label for="img-5" class="next-slide">
                <span>&rsaquo;</span>
                </label>
                <label for="img-4" class="prev-slide">
                <span>&lsaquo;</span>
                </label>
                <label for="img-3" class="next-slide">
                <span>&rsaquo;</span>
                </label>
                <label for="img-2" class="prev-slide">
                  <span>&lsaquo;</span>
                  </label>
                  <label for="img-1" class="next-slide">
                  <span>&rsaquo;</span>
                  </label>
            </div>
          
          <div class="carousel-dots">
            <label for="img-1" class="carousel-dot" id="img-dot-1"></label>
            <label for="img-2" class="carousel-dot" id="img-dot-2"></label>
            <label for="img-3" class="carousel-dot" id="img-dot-3"></label>
            <label for="img-4" class="carousel-dot" id="img-dot-4"></label>
            <label for="img-5" class="carousel-dot" id="img-dot-5"></label>
            <label for="img-6" class="carousel-dot" id="img-dot-6"></label>
            <label for="img-7" class="carousel-dot" id="img-dot-7"></label>
          </div>
        </ul>
      </div>


.carousel {
    margin-left: 15%;
    margin-right: 15%;
  
  }
  
  ul.slides {
    display: block;
    position: relative;
    height: 600px;
    margin: 0;
    padding: 0;
    overflow: hidden;
    list-style: none;
  }
  
  .slides * {
    user-select: none;
    -ms-user-select: none;
    -moz-user-select: none;
    -khtml-user-select: none;
    -webkit-user-select: none;
    -webkit-touch-callout: none;
  }
  
  ul.slides input {
    display: none;
  }
  
  .slide-container {
    display: block;
  }
  
  .slide-image {
    display: block;
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    opacity: 0;
    transition: all 0.7s ease-in-out;
  }
  
  .slide-image img {
    width: auto;
    min-width: 100%;
    height: 100%;
  }
  
  .carousel-controls {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    z-index: 999;
    font-size: 100px;
    line-height: 600px;
    color: #fff;
  }
  
  .carousel-controls label {
    display: none;
    position: absolute;
    padding: 0 20px;
    opacity: 0;
    transition: opacity 0.2s;
    cursor: pointer;
  }
  
  .slide-image:hover + .carousel-controls label {
    opacity: 0.5;
  }
  
  .carousel-controls label:hover {
    opacity: 1;
  }
  
  .carousel-controls .prev-slide {
    width: 49%;
    text-align: left;
    left: 0;
  }
  
  .carousel-controls .next-slide {
    width: 49%;
    text-align: right;
    right: 0;
  }
  
  .carousel-dots {
    position: absolute;
    left: 0;
    right: 0;
    bottom: 20px;
    z-index: 999;
    text-align: center;
  }
  
  .carousel-dots .carousel-dot {
    display: inline-block;
    width: 30px;
    height: 30px;
    border-radius: 50%;
    background-color: #fff;
    opacity: 0.5;
    margin: 10px;
    border-style: dotted;
  }
  
  input:checked + .slide-container .slide-image {
    opacity: 1;
    transform: scale(1);
    transition: opacity 1s ease-in-out;
  }
  
  input:checked + .slide-container .carousel-controls label {
    display: list-item;
  }
  
  input#img-1:checked ~ .carousel-dots label#img-dot-1,
  input#img-2:checked ~ .carousel-dots label#img-dot-2,
  input#img-3:checked ~ .carousel-dots label#img-dot-3,
  input#img-4:checked ~ .carousel-dots label#img-dot-4,
  input#img-5:checked ~ .carousel-dots label#img-dot-5,
  input#img-6:checked ~ .carousel-dots label#img-dot-6 {
    opacity: 1;
  }
  
  input:checked + .slide-container .nav label {
    display: block;
  }
  


  the slides are not working 



  please solve this