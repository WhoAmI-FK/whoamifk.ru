<?php 
include_once "dbdata/db.php";
?>
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <meta name="author" content="Faisal Kassem">
    <meta name="description" content="My first official web-page.">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>WhoAmIFK</title>
    <link rel="shortcut icon" href="images/233-2334669_-simple-questionmark-svg-question-mark-png-black.png" type="image/png">
    <link rel="stylesheet" href="bootstrap-5.1.3/dist/css/bootstrap.min.css"/>
    <link rel="stylesheet" href="css/main.css"/>
    <link rel="stylesheet" href="css/animate.css">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/devicons/devicon@v2.14.0/devicon.min.css">
    <link rel="stylesheet" href="css/devicon.min.css"/>
    <link rel="stylesheet" href="css/lightbox.min.css"/>
  </head>
  <body>
  
  <input type="checkbox" id="active">
    <label for="active" class="menu-btn"><i class="fas fa-bars"></i></label>
    <div class="wrapper">
      <ul>
<li><a href="#home">Home</a></li>
<li><a href="#about">About</a></li>
<li><a href="#perks">Perks</a></li>
<li><a href="#projects">Projects</a></li>
<li><a href="#certificates">Certificates</a></li>
<li><a href="#foot">Contact</a></li>
</ul>
</div>
<div id="myback">
<div name="home" id="text">
  <h1 class="display-1 noselect font-weight-light">Faisal Kassem</h1>
  <h1 class="display-3 noselect font-weight-light">WhoAmIFK</h1>
  <h1 class="display-6 noselect font-weight-light">Software-dev.</h1>
</div>
<canvas id="nokey" width="800" height="800">
    Your Browser Don't Support Canvas, Please Download Chrome ^_^``
</canvas>
</div>
<div id="about" name="about" class="container-fluid p-2 mt-5 wow fadeInLeft">
  <div class="row p-2">
    <div class="col">
      <h1 class="display-1 font-weight-light border-bottom border-dark wow zoomIn">
        About me:
      </h1>
      <p class="mt-2" style="word-wrap:break-word;font-size:1.7rem;">
       I have always been interested in technology sphere. When I was about 6 years old I received my first personal computer where my programming journey gradually has begun. The first programming language I practiced was Delphi which I was taught at school during Informatics-classes. Furtherly, I decided to join the group the IT-Educational Center(IT-STEP Academy), where under the guidance of vairous professional teachers I implemented several projects, which for that time of my progress were complex in implementation.
       I completed courses related to such languages as: C/C++, HTML/CSS/JS/SCSS/JQUERY/BOOTSTRAP, not-fully completed React.js, PHP/Laravel. Moreover, I also have experience working with Databases such as MySQL, MSSQL, Oracle Databases Foundation. Lastly, I also gained experience working with Arduino. 
      </p>
    </div>
  </div>
  <div id="perks" name="perks" class="row p-3 mt-3 mb-4">
   <h1 class="display-3 font-weight-light border-bottom border-dark wow fadeInLeft">Platforms&Skills</h1>
    <div class="container-fluid d-flex row justify-center align-items-center wow fadeInLeft">
      <div class="col p-1 d-flex justify-content-center flex-wrap align-items-center">
      <i class="devicon-windows8-original m-3 display-1"></i>
      <i class="devicon-chrome-plain m-3 display-1"></i>
      <i class="devicon-firefox-plain m-3 display-1"></i>
      <i class="devicon-linux-plain m-3 display-1"></i>
    </div>
      <div class="col d-flex justify-content-center flex-wrap align-items-center pt-4 wow fadeInRight">
      <i class="devicon-css3-plain m-3 display-1"></i>
      <i class="devicon-html5-plain m-3 display-1"></i>
      <i class="devicon-php-plain m-3 display-1"></i>
      <i class="devicon-javascript-plain m-3 display-1"></i>
      <i class="devicon-c-plain m-3 display-1"></i>
      <i class="devicon-cplusplus-plain m-3 display-1"></i>
      <i class="devicon-jquery-plain m-3 display-1"></i>
      <i class="devicon-laravel-plain m-3 display-1"></i>
      <i class="devicon-mysql-plain m-3 display-1"></i>
      <i class="devicon-microsoftsqlserver-plain m-3 display-1"></i>
      <i class="devicon-bash-plain m-3 display-1"></i>
      <i class="devicon-sass-original m-3 display-1"></i>
      <i class="devicon-electron-original m-3 display-1"></i>
      <i class="devicon-git-plain m-3 display-1"></i>
      <i class="devicon-angularjs-plain m-3 display-1"></i>
      <i class="devicon-typescript-plain m-3 display-1"></i>
    </div>
    </div>
  </div>
  </div>
  <h1 class="display-1 m-3 mt-5 pb-3 border-bottom border-dark wow fadeInLeft">My projects</h1>
  <div id="projects" name="projects" class="container-fluid d-flex justify-content-center mt-5">
<div class="card-carousel wow fadeInLeft pb-3">
<?php 
  $output = $conn->query("SELECT p.id,p.ProjectTitle,p.image_path,p.typeId FROM tbprojects p JOIN tbtypesoflang l ON(l.id = p.typeId);");
  while($row = $output->fetch(PDO::FETCH_ASSOC)){
?>
  <div class="my-card d-flex flex-column justify-content-center align-items-center">
 <?php echo '<img class="img-fluid rounded" src='.$row["image_path"] . "/>"?>
  <button data-project=<?=$row["id"]?> data-type=<?=$row["typeId"]?> class="custom-design btn">
    Show description.
    </button>
  </div>
<?php 
  }
?>
  

</div>

  </div>

  <div class="overlay">
        <div class="popup">
            <h2>error.</h2>
            <div class="close-popup">Close</div>
        </div>
    </div>
  <div name="certificates" id="certificates" class="container-fluid p-3 mt-5">
  <h1 class="display-1 wow fadeInLeft font-weight-light border-bottom border-dark wow zoomIn">Certificates:</h1>
  <div class="row p-2 container-fluid">
    <div class="col p-1 wow fadeInLeft">
    <a href="images/0001.jpg" data-lightbox="uda">
      <img class="img-fluid m-2 rounded" src="images/0001.jpg"/>
    </a>
    </div>
    <div class="col p-1 wow fadeInRight">
    <a href="images/course_certificate1024_1.jpg" data-lightbox="oracle">
      <img class="img-fluid m-2 rounded" src="images/course_certificate1024_1.jpg"/>
    </a>
    </div>
  </div>
  </div>
  <h1 class="display-1 mt-5 text-center p-3">
  Thank you for the view!
  </h1>
  <footer name="foot" id="foot" class="bg-dark text-center text-white mt-5">
  <!-- Grid container -->
  <div class="container p-4">
    <!-- Section: Social media -->
    <section class="mb-4">
         <!-- Facebook -->
      <a class="btn btn-outline-light btn-floating m-1" href="https://www.facebook.com/Fkiritko" role="button"
        ><i class="fab fa-facebook-f"></i
      ></a>

      <!-- Instagram -->
      <a class="btn btn-outline-light btn-floating m-1" href="https://www.instagram.com/whoami_fq/" role="button"
        ><i class="fab fa-instagram"></i
      ></a>

      <!-- Linkedin -->
      <a class="btn btn-outline-light btn-floating m-1" href="https://www.linkedin.com/in/faisal-kassem-490406214/" role="button"
        ><i class="fab fa-linkedin-in"></i
      ></a>

      <!-- Github -->
      <a class="btn btn-outline-light btn-floating m-1" href="https://github.com/WhoAmI-FK" role="button"
        ><i class="fab fa-github"></i
      ></a>
    </section>
    <!-- Section: Text -->
    <section class="mb-4">
      <p>
    When something is important enough, you do it even if the odds are not in your favor.
      </p>
      <span>- Elon Musk</span>
    </section>
    <!-- Section: Text -->

  
  </div>
  <!-- Grid container -->

  <!-- Copyright -->
  <div class="text-center p-3" style="background-color: rgba(0, 0, 0, 0.2);">
    © <?=date('Y');?> Copyright:
    <a class="text-white" href="#">Faisal Kassem</a>
  </div>
  <!-- Copyright -->
</footer>
<!-- Footer -->
<script src="js/jquery-3.6.0.min.js"></script>
<script src="bootstrap-5.1.3/dist/js/bootstrap.min.js"> </script>
<script src="js/wow.min.js"></script>
              <script>
              new WOW().init();
              </script>
<script type="text/javascript" src="slick/slick.min.js"></script>
<script src="js/lightbox.min.js"></script>

<script src="js/main.js"></script> 
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css" integrity="sha512-9usAa10IRO0HhonpyAIVpjrylPvoDwiPUiKdWk5t3PyolY1cOd4DSE0Ga+ri4AuTroPR5aQvXU9xC6qOPnzFeg==" crossorigin="anonymous" referrerpolicy="no-referrer" />
</body>
</html>
