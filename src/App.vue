<template>
  <div id="app" class="wrapper">

    <div id="nav">

      <div>
        <b-navbar toggleable="lg" type="light" variant="light">

          <b-navbar-brand href="#">
            <router-link to="/">Home</router-link>
          </b-navbar-brand>

          <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

          <b-collapse id="nav-collapse" is-nav>

            <b-navbar-nav>

              <b-nav-item href="#">
                <router-link to="/explore">Explore</router-link>
              </b-nav-item>

              <b-nav-item href="#">
                <router-link to="/messages">Messages</router-link>
              </b-nav-item>

            </b-navbar-nav>

            <!-- Right aligned nav items -->
            <b-navbar-nav class="ml-auto">

              <b-nav-form class="d-flex align-center">
                <b-form-input size="sm" class="mr-sm-2 search" placeholder="Search"></b-form-input>
                <b-button size="sm" class="my-2 my-sm-0 rounded bg-dark" type="submit">Search</b-button>
              </b-nav-form>

              <b-nav-item-dropdown text="Lang" right>
                <b-dropdown-item href="#">EN</b-dropdown-item>
                <b-dropdown-item href="#">ES</b-dropdown-item>
                <b-dropdown-item href="#">RU</b-dropdown-item>
                <b-dropdown-item href="#">FA</b-dropdown-item>
              </b-nav-item-dropdown>

              <b-nav-item-dropdown right>
                <!-- Using 'button-content' slot -->
                <template #button-content>
                  <em>User</em>
                </template>
                <b-dropdown-item href="#">
                  <router-link to="/profile">Profile</router-link>
                </b-dropdown-item>

                <b-dropdown-item href="#">Sign Out</b-dropdown-item>
              </b-nav-item-dropdown>
            </b-navbar-nav>

          </b-collapse>
        </b-navbar>
      </div>
            
    </div>


  <div className="mainContent">
    <router-view/>
  </div>

  </div>

</template>

<script>
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
.search{
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
