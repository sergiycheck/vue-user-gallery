<template>
			<div>
				
				<div class="card p-2 mt-2">

					<div class="bd-placeholder-img d-flex justify-content-center">
						<div  class="d-inline-flex">
							<img class="click-big-post img-fluid  user-img"
							v-bind:src="post.imageUrl" alt="user post"/>

						</div>
					</div>

					<div class="card-body">

						<div class="row">

								<div class="col mb-2">
									<img class="img-fluid mx-auto"
									style="height: 30px"
									v-bind:src="post.authorAvatar"
									alt="user profile"/>
								</div>

								<div class="col-sm-11">
									<p class="card-text mb-1">
										{{post.postText}}
									</p>
								</div>

							</div>

						<hr/>

						<!-- {/* loop for post comments */} -->
						<div className="comments-container">
							<Comment
								v-for="comment in postComments" 
								v-bind:key="comment.commentId"
								v-bind:comment="comment"
								></Comment> 
						</div>

						<div class="row mb-3">

							<div class="col-sm-8">
								<input
									
									v-model="newCommentData"
									type="text" class="inpt-comment form-control"
									placeholder="add your comment" />
							</div>

							<div class="col-sm-2 d-flex justify-content-start">
								<button 
									v-on:click="addComment"  
									class="btn btn-outline-secondary">Post</button>
							</div>

							<div class="col-sm-2">

								<div class="d-flex justify-content-end">

									<svg v-on:click="incrementLikeCounter"
										xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="red" 
										class="bi bi-heart me-3 heartHoverable" viewBox="0 0 16 16">
										<path d="M8 2.748l-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z" />
									</svg>

									<small class=" text-muted">{{likeCounter}}</small>
								</div>
								
							</div>

						</div>


					</div>

				</div>

			</div>
</template>

<script>

//import {showBigPostWithClassName} from '../custom-scripts/home-scripts.js';

import Comment from '@/components/Comment.vue';

export default {
	name:'Post',
	components:{
		Comment
	},
	props:{
		post:Object,
		comments:Array
	},
	mounted(){
		console.log('post mounted');
		//showBigPostWithClassName();
	},
	data(){
		return{
			newCommentData:'',
			likeCounter:0
		}
	},
	computed:{
		postComments:function(){

			if(this.post && this.post.comments.length>0){
				return this.post.comments;
			}else{
				return [
					{
						postId:'post2',
						commentId:'comment1',
						commentatorAvatar:'',
						commentText:'comment text'
					},
					{
						postId:'post3',
						commentId:'comment2',
						commentatorAvatar:'',
						commentText:'comment2 text'
					},
				]
			}

		}
	},
	methods:{
		addComment:function(){
			// console.log(this.newCommentData);

			let avatar = '';
			if(this.comments && this.comments.length>0){
				avatar = this.comments
				.find(c=>c.commentatorAvatar!=null).commentatorAvatar;
			}else if(this.post.authorAvatar){
				avatar = this.post.authorAvatar;
			}
			let comment = {
				postId:this.post.postId,
				commentId:Date.now(),
				commentText:this.newCommentData,
				commentatorAvatar:avatar
			}
			// console.log(comment);

			this.$emit('eventAddComment',comment)
			this.newCommentData = '';
		},
		incrementLikeCounter:function(){
			this.likeCounter++;
		}
	}
}


</script>


<style lang="scss">
	.heartHoverable:hover{
		cursor: pointer;
	}
</style>