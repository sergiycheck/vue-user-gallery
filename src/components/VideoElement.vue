<template>

		<div class="carousel-item">
			<div class="d-flex justify-content-center">
				<div class="video-container"> 
					<video class="carousel-video-element" muted controls>
						<source v-bind:src="link" type="video/mp4"/>
							Your browser does not support HTML5 video.
					</video>
				</div>
			</div>
		</div>
	
</template>


<script>
export default {
	name:'VideoElement',
	props:{
		name:String,
		link:String
	}
}
</script>

<style lang="scss">
.video-container{
	position: relative;
	width: 80%;
	margin:0 auto;
	min-height: round(100vh/2);

  video{
    position: absolute;
    left: 50%;
    top: 50%;
    max-width: 100%;
    max-height: 100%;
    -webkit-transform: translate(-50%,-50%);
    -moz-transform: translate(-50%,-50%);
    -ms-transform: translate(-50%,-50%);
    transform: translate(-50%,-50%);
    z-index: 0;
  }

}

</style>