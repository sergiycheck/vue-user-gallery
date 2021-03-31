<template>

	<div  class="row justify-content-between">

		<div class="col-2 mb-2">
			<img class="img-fluid mx-auto"
			style="height: 30px"
			v-bind:src="comment.commentatorAvatar"
			alt="comment user profile"/>
		</div>

		<div class="col-10">
			<p class="comment-content">{{commentParts.textShortPart}}<span class="dots">...</span>
				<span  v-bind:class="{more:!isMoreActive}">
					{{commentParts.textRemainingPart}}
				</span>
				<span v-on:click="readMoreFromComment" class="readmore">{{readMoreText}}</span>
			</p>
		</div>

	</div>

</template>

<script>

//import {commentReadMoreWithClassName} from '../custom-scripts/home-scripts.js';


export default {
	name:'Comment',
	props:{
		comment:Object
	},
	mounted(){
		//commentReadMoreWithClassName();
	},
	data(){
		return{
			isMoreActive:false,
			readMoreText:'read more'
		}
	},
	computed:{
		commentParts:function(){
			if(this.comment.commentText.length>133){
      return {
					textShortPart:this.comment.commentText.slice(0,132),
					textRemainingPart:this.comment.commentText.slice(133,this.comment.commentText.length-1)
				};
			}else{
				return{
					textShortPart:this.comment.commentText
				};
			}
		}
	},
	methods:{
		readMoreFromComment:function(){
			this.isMoreActive = ! this.isMoreActive;
			if(this.readMoreText==='read more'){
				this.readMoreText = 'read less';
			}else{
				this.readMoreText = 'read more'
			}
		}
	}
}
</script>