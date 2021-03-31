<template>
  <div class="wrapper">

    <div id="nav">

    <nav class="navbar navbar-expand-md fixed-top navbar-light shadow p-0 bg-light" role="navigation"> 

			<div class="container text-dark">

        <router-link class="navbar-brand"  to="/">Home</router-link>

				<button class="navbar-toggler" type="button" 
					data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" 
					aria-controls="navbarSupportedContent" aria-expanded="false" 
					aria-label="Toggle navigation">
					<span class="navbar-toggler-icon"></span>
				</button>
		
				<div class="collapse navbar-collapse row" id="navbarSupportedContent">

					<div class="col">
						<ul class="nav navbar-nav">
							<li class="p-2">
                <router-link class="nav-link" to="/explore">Explore</router-link>
							</li>
						</ul>
					</div>

					<div class="seach-col col-md-auto">
						<div class="mt-2">
							<form class="">
								<input id="search" class="form-control" 
									type="search" placeholder="" 
									aria-label="Search">
							</form>
						</div>
						
					</div>

					<div class="col col-md-auto">
						<div class="nav navbar-nav d-flex justify-content-end">

              <router-link  class="nav-link" to="/messages">Messages</router-link>

              <div class="dropdown">
								<a class="nav-link dropdown-toggle" href="#" 
									role="button" id="dropdownMenuLink" 
									data-bs-toggle="dropdown" aria-expanded="false">
									User
								</a>

								<ul class="dropdown-menu" aria-labelledby="dropdownMenuLink">

									<li>
                    <router-link class="dropdown-item" to="/profile">Profile</router-link>
                  </li>

									<li><a class="dropdown-item" href="#">Sign out</a></li>

								</ul>

							</div>

              

							<div class="dropdown">
								<a class="nav-link dropdown-toggle" href="#" 
									role="button" id="dropdownMenuLink" 
									data-bs-toggle="dropdown" aria-expanded="false">
									Lang
								</a>
								<ul class="dropdown-menu" aria-labelledby="dropdownMenuLink">
									<li><a class="dropdown-item" href="#">EN</a></li>
									<li><a class="dropdown-item" href="#">ES</a></li>
									<li><a class="dropdown-item" href="#">RU</a></li>
									<li><a class="dropdown-item" href="#">FA</a></li>
								</ul>
							</div>

						</div>

					</div>
					
				</div>

			</div>
		</nav>

    </div>


  <div class="mainContent">
    <router-view/>
  </div>

  </div>

</template>

<script>

import {addListenerForSearchInput} from './app.scripts.js';
addListenerForSearchInput();

export default {
  
}

</script>

<style lang="scss">


  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }


  
$grid-breakpoints: (
  xs: 0,
  sm: 576px,
  md: 768px,
  lg: 992px,
  xl: 1200px,
  xxl: 1400px
);

@mixin media-breakpoint-up($var){
  @media (min-width:$var){
    @content
  }
}

.wrapper {
	position: relative;
	top: 0;
	height: 100vh;
}
.mainContent{
  min-height: 100%;
  position: relative;

  .user-wrapper{
    height: 100%;
    width: 100%;
    position: absolute;
  }
}

$svg-search-icon:url('./assets/img/search.svg');
#search{
	background:$svg-search-icon scroll 85% 50%;
	padding-left: 10%;
	background-repeat: no-repeat;
	margin-right: .5rem;

	&:focus{
		background-image: none;
		flex-grow: 3;
	}

  @include media-breakpoint-up(
    map-get($map: $grid-breakpoints, $key: md )){
    &.focus {
      width: 135%;
    }
  }

}


</style>
