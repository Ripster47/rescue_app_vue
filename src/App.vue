<template>
  <div id="app">
    <div id="nav">
      
    </div id="app">

  <header id="pageTop" class="header">


    <!-- NAVBAR -->
    <nav class="text-center navbar navbar-expand-md main-nav navbar-scrollUp bg-success">
      <div class="container">
        <button class="navbar-toggler animated" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="burger-menu icon-toggle"><i class="icon-menu icons"></i></i></span>
        </button>
        <a class="" href="/">
          <img class="navpic" src="/FoSRR_burned.png" alt="">
        </a>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav ml-auto">
            <li class="nav-item ">
              <a class="nav-link" href="/">Home<span class="sr-only">(current)</span></a>
            </li>

            <li class="nav-item dropdown drop_single ">
              <a class="nav-link dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false" href="/about">About</a>
            </li>

             <li class="nav-item dropdown drop_single ">
              <a class="nav-link dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false" href="/crew">Crew</a>
            </li>

            <li class="nav-item dropdown drop_single ">
              <a class="nav-link dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false" href="/animals">Adoptables</a>
            </li>

            <li class="nav-item dropdown drop_single ">
              <a class="nav-link dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false" href="/relinquish/current">Relinquishments</a>

            <li class="dropdown megaDropMenu nav-item ">
              <a class="nav-link dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false" href="/signup">Register</a>
            </li>
            <li class="dropdown megaDropMenu nav-item" >
              <a class="nav-link dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false" href="/login">Login</a>
            </li>
            <li class="dropdown megaDropMenu nav-item" >
              <a class="nav-link dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false" href="/logout">Logout</a>
            </li>
            <li class="dropdown megaDropMenu nav-item" >
              <a class="nav-link dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false" href="/admintools">Admin</a>
            </li>
            <!-- header search -->
          </ul>
        </div>
        <!-- header search ends-->
      </div>
    </nav>
  </header>

    <router-view/>

    <footer class="footer element-footer">
     <div class="container">
       <div class="row justify-content-center">
        <div class="col-md-7">
          <div class="text-center copyright ">
            <p>© 2018 Friends of Scales Reptile Rescue. All Rights Reserved.</p>
          </div>
        </div>
       </div>
     </div>
    </footer>

  </div>
</template>

<style>

img.navpic{
  max-width: 40%;
  height: auto;
}
</style>

<script>
</script>


