<?php
require "functions.php";
get_header();
?>
<h2>Venta de producto</h2>
<form action="e1.php" method="post">
  <div class="productContainer">
    <div class="productForm">
      <div class="graybackground">
        <div class="campo">
          <p>Nombre</p>
          <input required type="text" name="name" placeholder="Introduce el usuario"/>
        </div>
        <div class="campo">
          <p>Precio</p>
          <input required type="text" name="price" placeholder="Introduce el precio"/>
        </div>
        <div class="campo">
          <p>Descripción</p>
          <input required type="text" name="descripcion" placeholder="Introduce la descripción del producto"/>
        </div>
        <div class="campo">
          <p>Categoría</p>
          <input required type="text" name="categoria" placeholder="Introduce la categoría"/>
        </div>
      </div>
    </div>

    <div class="productAdd">
        <div class="drop-area" id ="areadrop" draggable="true">
            <h2>Drag & Drop files</h2>
            <button class="buttonblack">Upload files</button>
            <div id="fitxersbaby"></div>
            <input type="file" name="inputFiles[]" id="input-file" hidden multiple />
        </div>
        <div id="preview"></div>
        <button class="buttonblack">ENVIA</button>
    </div>
    <div id="filesguardadas"></div>
  </div>
</form>


<script src="js/dragdrop.js"></script>

<?php get_footer(); ?>