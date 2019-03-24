<template>
  <div id="app">
    <div id="nav">
      
    </div id="app">

  <header id="pageTop" class="header">


    <!-- NAVBAR -->
    <nav class="text-center navbar navbar-expand-md main-nav  navbar-scrollUp bg-white">
      <div class="container">
        <button class="navbar-toggler animated" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="burger-menu icon-toggle"><i class="icon-menu icons"></i></i></span>
        </button>
        <a class="" href="/">
          <h3>Friends of Scales</h3>
        </a>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav ml-auto">
            <li class="nav-item ">
              <a class="nav-link" href="/">Home<span class="sr-only">(current)</span></a>
            </li>

            <li class="nav-item dropdown drop_single ">
              <a class="nav-link dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false" href="/animals">Adoptables</a>
            </li>

            <li class="nav-item dropdown drop_single ">
              <a class="nav-link dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false" href="/relinquish/current">Relinquishments</a>
              <ul class="dropdown-menu dd_first">
                <li><a href="service.html">Services</a></li>
                <li class="dropdown">
                  <a href="javascript:void(0)" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Service Details</a>
                  <ul class="dropdown-menu submenu">
                    <li><a href="service-details-left-sidebar.html">Service Left Sidebar</a></li>
                    <li><a href="service-details-right-sidebar.html">Service Right Sidebar</a></li>
                    <li><a href="service-details-fullwidth.html">Service Fullwidth</a></li>
                  </ul>
                </li>
              </ul>
            </li>

            <li class="nav-item dropdown drop_single ">
              <a class="nav-link dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false" href="/about">Meet the Crew</a>
              
            </li>

            <li class="dropdown megaDropMenu nav-item active">
              <a class="nav-link dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false" href="/signup">Sign Up</a>
            </li>
            <li class="dropdown megaDropMenu nav-item active" >
              <a class="nav-link dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false" href="/login">Login</a>
            </li>
            <li class="dropdown megaDropMenu nav-item active" >
              <a class="nav-link dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false" href="/logout">Logout</a>
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
            <router-link to="/">Home</router-link> |
            <router-link to="/about">About</router-link> |
            <router-link to="/signup">Create Profile</router-link> |
            <router-link to="/login">Login</router-link> |
            <router-link to="/animals">Adoptables</router-link> |
            <router-link to="/relinquish/current">Relinquishments</router-link> |
            <router-link to="/animals/new">New</router-link> |
            <router-link to="/submissions/requests">Pending Requests</router-link> |
            <router-link to="/logout">Logout</router-link> 
          </div>
        </div>
       </div>
     </div>
    </footer>

  </div>
</template>

<style>

</style>


