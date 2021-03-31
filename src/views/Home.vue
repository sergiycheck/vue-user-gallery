<template>
  <div class="home-content">
    
    <aside class=" bd-aside sticky-xl-top text-muted align-self-start mb-3 mb-xl-5 px-2 bg-light">
			<h2 class="h6 pt-4 pb-3 mb-4 border-bottom">Choose one option</h2>
			<nav class="small" id="toc">
				<ul class="list-unstyled fs-4 fw-bold">

					<li class="my-2">
						<button class="btn d-inline-flex align-items-center collapsed fs-4"
						data-bs-toggle="collapse" aria-expanded="false"
						data-bs-target="#contents-collapse"
						aria-controls="contents-collapse">Explore</button>

						<ul class="list-unstyled ps-3 collapse" id="contents-collapse">
							<li><a class="d-inline-flex align-items-center rounded" href="/explore">explore</a></li>

						</ul>

					</li>

					<li class="my-2">
						<button class="btn d-inline-flex align-items-center collapsed fs-4"
							data-bs-toggle="collapse" aria-expanded="false"
							data-bs-target="#forms-collapse"
							aria-controls="forms-collapse">Contacts</button>

						<ul class="list-unstyled ps-3 collapse" id="forms-collapse">
							<li><a class="d-inline-flex align-items-center rounded" href="/messages">messages</a></li>
						</ul>
					</li>

					<li class="my-2">
						<ul class="list-unstyled ps-3" id="components-collapse">
							<li><a class="d-inline-flex align-items-center rounded" href="/profile">profile</a></li>
							<li><a class="d-inline-flex align-items-center rounded" href="/options">options</a></li>
						</ul>
					</li>

				</ul>

			</nav>
		</aside>



	<div class="bd-container container-xxl">
  
		<div id="hm-heading" class="text-center p-3">

			<div id="carouselExampleDark"
				class="carousel carousel-dark slide d-flex flex-column justify-content-center"
				data-bs-interval="false">
			
				<div class="carousel-inner mb-3">

					<VideoElement 
            v-bind:key="video.name" v-for="video in videoItems"
            v-bind:name="video.name"
            v-bind:link="video.link"
            ></VideoElement>
				</div>
				
				<div class="carousel-indicators">
					<button type="button"
							data-bs-target="#carouselExampleDark" data-bs-slide-to="0"
							class="active" aria-current="true" aria-label="Slide 1"></button>

					<button type="button" data-bs-target="#carouselExampleDark"
							data-bs-slide-to="1" aria-label="Slide 2"></button>

					<button type="button" data-bs-target="#carouselExampleDark"
							data-bs-slide-to="2" aria-label="Slide 3"></button>
				</div>

				<button class="carsl-control-prev" type="button" data-bs-target="#carouselExampleDark"  data-bs-slide="prev">
					<span class="carousel-control-prev-icon" aria-hidden="true"></span>
					<span class="visually-hidden">Previous</span>
				</button>
				<button class="carsl-control-next" type="button" data-bs-target="#carouselExampleDark"  data-bs-slide="next">
					<span class="carousel-control-next-icon" aria-hidden="true"></span>
					<span class="visually-hidden">Next</span>
				</button>


			</div>


		</div>


		<div class="row" >

			<HomeOverlay></HomeOverlay>

      <Post
        v-for="post in postItems"
        v-bind:key="post.postId"
        v-bind:post="post"
        v-bind:comments="post.comments"
        @eventAddComment="addCommentToPost"
      ></Post>

			
		</div>

	</div>


  </div>
</template>



<script>

//import {commentReadMoreWithClassName} from '../custom-scripts/home-scripts.js';

import {showBigPostWithClassName} from '../custom-scripts/home-scripts.js';

import {skipVideoOnEnd} from '../custom-scripts/home-scripts.js';

// @ is an alias to /src
import VideoElement from '@/components/VideoElement.vue';
import HomeOverlay from './HomeOverlay.vue'
import Post from '@/components/PostComponent.vue';


export default {

  name: 'Home',

  components: {
    HomeOverlay,
    VideoElement,
    Post
  },
  data(){
  return {
    videoItems:[],
    postItems:[],
    apiPaths:[{ 
          videoJsonPath : './assets/data/videos.json' 
        },{ 
          postsJsonPath : './assets/data/post.json' 
        }
      ]
    }
  },

  beforeCreate(){
   console.log(`before created `); 
  },
  created(){
   console.log(`created `); 
  },
  beforeMount(){
   console.log(`beforeMount `); 
  },
  async mounted(){

    console.log(`mounted (ready)`);

    const videosFetched =  await this.fetchData(this.apiPaths[0].videoJsonPath)
    this.videoItems = this.videoItems.concat(videosFetched);
    console.log('this video items ',this.videoItems);

    const postsFetched = await this.fetchData(this.apiPaths[1].postsJsonPath)
    this.postItems = this.postItems.concat(postsFetched);
    console.log('this post items',this.postItems);

    if(postsFetched && videosFetched){
      skipVideoOnEnd();

      //how to call script only one time for all components from loop?
      setTimeout(()=>{
        showBigPostWithClassName();
        //commentReadMoreWithClassName();
      },100)
     
    }
    

  },
  beforeDestroy(){
    console.log(`beforeDestroy`);
  },
  methods:{

    fetchData: async function(url){
      return await fetch(url,{
        headers : { 
          'Content-Type': 'application/json',
          'Accept': 'application/json'
          }
      }).then((response)=>{
          if(response.ok){
            return response.json();
          }else{
            return null;
          }
        }).then((myJson)=> {
          if(myJson){
            return myJson.data;
          }
        });
    },
    addCommentToPost(data){
      //call to api
      const post = this.postItems.find(p=>p.postId===data.postId);
      if(post){
        post.comments.push(data);
        //commentReadMoreWithClassName();
      }else{
        console.log('data is not correct',data);
      }
    }

  }
}

</script>

<style lang="scss">

#hm-heading{
	margin-top: 5rem;
	margin-bottom:15px;
	position: relative;
	overflow: hidden;
}


.carousel{
	min-height: round(100vh/2.5);
  position: relative;

  .carousel-indicators{
    position: relative;
    button{
      width: 50px;
      padding: 5px;
      margin-right: 10px;
      background-color:rgba(0, 0, 0, 0.62);
      border-radius: 15px 15px 15px 15px;
      -moz-border-radius: 15px 15px 15px 15px;
      -webkit-border-radius: 15px 15px 15px 15px;
      border: 0px solid #000000;
      -webkit-box-shadow: 0px 9px 38px -7px rgba(0,0,0,0.79);
      -moz-box-shadow: 0px 9px 38px -7px rgba(0,0,0,0.79);
      box-shadow: 0px 9px 38px -7px rgba(0,0,0,0.79);

      &.active{
        background-color:black;
      }
    }

  }

  .carsl-control-prev, .carsl-control-next{
    position: absolute;
    border: 0;
    background-color: transparent;
  }
  .carsl-control-next{
    right: 0;
  }


}

//https://www.cssmatic.com/box-shadow


.card-img-wrapper{
	max-width: 70%;
	max-height:40vh;
}
.inpt-comment{
	border-top-style: hidden!important;
	border-right-style: hidden!important;
	border-left-style: hidden!important;
}
.inpt-comment:focus{
	box-shadow: none!important;
}
.more{
	display: none;
	transition: height 0.4s opacity 0.2s ease-out;
}
.readmore{
	font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
}
.readmore:hover{
	cursor: pointer;
	text-decoration: underline;
}
.user-img:hover{
	cursor: pointer;
}

@media (min-width: 1200px){
	.home-content {
    display: grid;
    gap: 1rem;
    grid-template-columns: auto auto auto auto auto auto ;////1fr 4fr 1fr
    grid-template-rows: auto;
	}
}

@media (min-width: 1200px){
	.bd-aside {
		grid-column:6/7;
		scroll-margin-top: 4rem;
	}
}
@media (min-width: 1200px){
	.bd-container {
    grid-row:1/2;
		grid-column: 2 / 6;

	}
}

.bd-aside{
	a {
		padding: .1875rem .5rem;
		margin-top: .125rem;
		margin-left: .3125rem;
		color: rgba(0, 0, 0, .65);
		text-decoration: none;
	}

	a:hover,
	a:focus {
		color: rgba(0, 0, 0, .85);
		background-color: rgba(121, 82, 179, .1);
	}

}








</style>
