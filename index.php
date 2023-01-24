<?php
require "functions.php";
get_head();

?>
<div class="registerContainer">
  <img src="imgs/cromopolislogin.jpg" />

  <div class="registerForm">
    <h1>CROMÓPOLIS</h1>
    <h2>Bienvenido</h2>
    <form action="php/CrearUser.php" method="post" id="form">
      <div class="campo">
        <p>Nombre</p>
        <input required type="text" id="registerName" name="user" placeholder="Introduce el usuario"/>
      </div>
      <div class="campo">
        <p>Email</p>
        <input required type="text" id="registerMail" name="email" placeholder="Introduce el email"/>
      </div>
      <div class="campo">
        <p>Contraseña</p>
        <input required type="password" id="contra" name="pwd" placeholder="Introduce la contraseña"/>
      </div>
        <p class="vermell" id="text0">Entre 8-15</p><p class="vermell" id="text1">1 lowercase</p><p class="vermell" id="text2">1 uppercase</p><p class="vermell" id="text3">1 numeric digit</p><p class="vermell" id="text4">1 special digit</p>
      <div class="campo">
        <p>Confirma contraseña</p>
        <input required type="password" id="contra2" name="pwd" placeholder="Introduce la contraseña"/>
      </div>
      <button class="buttonblack" id=form type="Submit">Iniciar Sesión</button>

    </form>
  </div>
</div>

<script src="js/script.js"></script>

<?php get_footer(); ?>