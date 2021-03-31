<template>

		<div class="overlay">
			<h2>some text in overlay</h2>
			<div class="overlay-content container">

				<div class="row justify-content-center post-big-view">

					<div id="overlayMainElem" class="col-md-10 col-sm-8 p-3 mt-3">
						<div class="row p-2 bg-white shadow-lg p-3 mb-5 bg-body rounded">

							<div class="col p-2">
								<div class="bd-placeholder-img card-img-top mb-2">
									<img id="overlay-post-view" class="img-fluid mx-auto d-block user-img" src="#" alt="user post"/>
								</div>

								<div class="row justify-content-between">
									<div class="col-2 mb-2">
										<img class="img-fluid mx-auto"
										style="height: 30px"
										src="https://www.pngkey.com/png/full/73-730477_first-name-profile-image-placeholder-png.png"
										alt="user profile" />
									</div>

									<div class="col">
										<p class="mb-1">
											Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae tenetur explicabo fugit exercitationem
											voluptate? Doloribus, quae! Tempore temporibus, libero autem sit, perferendis nostrum velit cum eius maiores quibusdam,
											at quam.
										</p>
									</div>
								</div>

							</div>

							<div class="col-md-4 d-flex flex-column justify-content-between" >

								<div class="row overflow-auto" style="maxHeight: 600px">

									<div class="col">

										<div class="row m-2">
											<div class="col-sm-auto m-2">
												<img class="img-fluid mx-auto"
												style="height: 30px; width: 30px"
												src="https://www.pngkey.com/png/full/73-730477_first-name-profile-image-placeholder-png.png"
												alt="user profile" />
											</div>
											<div class="col">Lorem ipsum dolor sit amet consectetur adipisicing elit.
												Facere excepturi labore quo nobis ab illo corrupti. Natus assumenda quisquam asperiores
												laboriosam nostrum enim blanditiis, quae quas odio quod quibusdam voluptates?</div>
										</div>
										<div class="row m-2">
											<div class="col-sm-auto m-2">
												<img class="img-fluid mx-auto"
												style="height: 30px; width: 30px"
												src="https://www.pngkey.com/png/full/73-730477_first-name-profile-image-placeholder-png.png"
												alt="user profile" />
											</div>
											<div class="col">Lorem ipsum dolor sit amet consectetur adipisicing elit.
												Facere excepturi labore quo nobis ab illo corrupti. Natus assumenda quisquam asperiores
												laboriosam nostrum enim blanditiis, quae quas odio quod quibusdam voluptates?</div>
										</div>
										<div class="row m-2">
											<div class="col-sm-auto m-2">
												<img class="img-fluid mx-auto"
												style="height: 30px; width: 30px"
												src="https://www.pngkey.com/png/full/73-730477_first-name-profile-image-placeholder-png.png"
												alt="user profile" />
											</div>
											<div class="col">Lorem ipsum dolor sit amet consectetur adipisicing elit.
												Facere excepturi labore quo nobis ab illo corrupti. Natus assumenda quisquam asperiores
												laboriosam nostrum enim blanditiis, quae quas odio quod quibusdam voluptates?</div>
										</div>
										<div class="row m-2">
											<div class="col-sm-auto m-2">
												<img class="img-fluid mx-auto"
												style="height: 30px; width: 30px"
												src="https://www.pngkey.com/png/full/73-730477_first-name-profile-image-placeholder-png.png"
												alt="user profile" />
											</div>
											<div class="col">Lorem ipsum dolor sit amet consectetur adipisicing elit.
												Facere excepturi labore quo nobis ab illo corrupti. Natus assumenda quisquam asperiores
												laboriosam nostrum enim blanditiis, quae quas odio quod quibusdam voluptates?</div>
										</div>
										<div class="row m-2">
											<div class="col-sm-auto m-2">
												<img class="img-fluid mx-auto"
												style="height: 30px; width: 30px"
												src="https://www.pngkey.com/png/full/73-730477_first-name-profile-image-placeholder-png.png"
												alt="user profile" />
											</div>
											<div class="col">Lorem ipsum dolor sit amet consectetur adipisicing elit.
												Facere excepturi labore quo nobis ab illo corrupti. Natus assumenda quisquam asperiores
												laboriosam nostrum enim blanditiis, quae quas odio quod quibusdam voluptates?</div>
										</div>



									</div>

								</div>

								<div class="row p-3">
									<div class="col-md-10">
										<input id="comment-input-big-view" type="text" class="inpt-comment form-control"
											placeholder="Add your comment" aria-label="Add your comment" />
									</div>

									<div class="col-md-2 d-flex justify-content-start">
										<button id="post-comment-btn-big-view" class="btn btn-outline-secondary" >Post</button>
									</div>

								</div>

							</div>

						</div>
					</div>
				</div>

			</div>
		</div>


</template>



<script>
export default {
  
}
</script>

<style lang="scss">

$user-max-z-index:1030;/* next max z-index*/
/* The Overlay (background) */
.overlay {
  /* Height & width depends on how you want to reveal the overlay (see JS below) */
  height: 0vh;
  width: 100%;
  position: fixed; /* Stay in place */
  z-index: $user-max-z-index; /* Sit on top */
  left: 0;
  top: 0;
  background-color: rgba(0, 0, 0, 0.572); /* Black fallback color */
  overflow-x: hidden; /* Disable horizontal scroll */
	overflow-y: hidden;//not working
  transition: 0.2s; /* 0.5 second transition effect to slide in or slide down the overlay (height or width, depending on reveal) */
}

.overlay-content{
  position: relative;
  width: 100%;
	top:10%;
}


</style>