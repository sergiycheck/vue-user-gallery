
export default function activateHomeHandlers(){

	skipVideoOnEnd();
	commentReadMoreWithClassName();
	showBigPostWithClassName();

}


export function skipVideoOnEnd(){



    const carouselInner = document.querySelector(".carousel-inner");
    if(carouselInner){
      carouselInner.querySelector(".carousel-item").classList.add("active");
    }

    AddClickListenerForCarouselNextBtn();

    let loadVideosTimerId = setTimeout(()=>{

      const videos = document.querySelectorAll(".carousel-video-element");
      videos.forEach(vid=>{
        vid.pause();
        vid.muted = true;
        let targetElement = vid.parentNode;
        do{
          if(targetElement.classList &&
              targetElement.classList.contains("active")){
            vid.play();
            videoEndedHandler(vid);
            return;
          }
          targetElement = targetElement.parentNode;
        }while(targetElement)
        clearTimeout(loadVideosTimerId);
      });

    },100);//animation time?


}


function videoEndedHandler(vid){
	if(vid){
		vid.onended = function(){
			document.querySelector(".carsl-control-next").click();
		};
	}

}


function AddClickListenerForCarouselNextBtn(){
  let btnClasses = [".carsl-control-next",".carsl-control-prev"];

  setListenersForNextPrevButtons(btnClasses);

  function setListenersForNextPrevButtons(buttonClasses){
    Array.from(buttonClasses).forEach(btnClass=>{
      const btnNexVideo = document.querySelector(btnClass);

      btnNexVideo?.addEventListener('click',()=>{
        findVideoAndPauseOrPlay(pauseActiveVideo);
        setTimeout(()=>{
          findVideoAndPauseOrPlay(playNextVideo,videoEndedHandler);
        },650);
      });
    });

  }

  function findVideoAndPauseOrPlay(pauseOrPlayVideo,videoHandler){
    let items = document.querySelectorAll(".carousel-item");
    items.forEach(item=>{
      if(item && item.classList.contains("active")){
        let vid = item.querySelector(".carousel-video-element");

        if(typeof pauseOrPlayVideo == 'function')
          pauseOrPlayVideo(vid);
        if(typeof videoHandler == 'function')
          videoHandler(vid);
        return;
      }
    });
  }

}
function pauseActiveVideo(vid){
  if (vid && !vid.paused){
    vid.pause();
		vid.currentTime = 0;
  }
}

function playNextVideo(vid){
	if (vid && vid.paused) {
		vid.play();
	}
}

export class BigPostManager{
  constructor(allowToSetShowBigPostView){
    this.allowToSetShowBigPostView = allowToSetShowBigPostView;
  }
  get allowToSetShowBigPostView(){
    return this.allowToSetShowBigPostView;
  }
  set allowToSetShowBigPostView(value){
    this.allowToSetShowBigPostView = value;
  }
}

export function showBigPostWithClassName(){

  
    let posts = document.querySelectorAll(".click-big-post");
    posts.forEach(p=>{
      p.addEventListener('click',(event)=>{
        showBigPostViewFromClass(event.target);
      })
    });
  

}

function showBigPostViewFromClass(postSourceElement){
	let postSourceUrl = Object.values(postSourceElement.attributes).find(a=>a.name==="src").value;
	document.querySelector(".overlay").style.height = "100%";
	setTimeout(()=>{
		closeBigPostView();
		setPostSource(postSourceUrl);
	},10)

}


function closeBigPostView(){
	let overlayElem = document.querySelector(".overlay");

	overlayElem.addEventListener("click", (evt) => {
    const overlayMainElem = document.getElementById("overlayMainElem");
    let targetElement = evt.target; // clicked element

    do {
        if (targetElement === overlayMainElem) {
            // This is a click inside. Do nothing, just return.
            return;
        }
        // Go up the DOM
        targetElement = targetElement.parentNode;//detecting parent nodes
    } while (targetElement);

    // This is a click outside.
    document.querySelector(".overlay").style.height = "0%";

		//document.querySelector(".overlay").style.display = "none";
});
}

function setPostSource(sourceName){
	document.getElementById("overlay-post-view").setAttribute("src",sourceName);
}


export function commentReadMoreWithClassName(){
  
  let posts = document.querySelectorAll(".readmore");
  posts.forEach(p=>{
    p.addEventListener('click',(event)=>{
      commentReadMoreWithClass(event.target.parentElement);
    })
  });
    
}

//todo: add animation to comment read more
function commentReadMoreWithClass(commentContent){

	const readMoreSpanPromise =  new Promise((resolve,reject)=>{
    const readMoreComponent = commentContent.querySelector(".readmore");
    if(readMoreComponent){
      console.log(readMoreComponent);
      resolve(readMoreComponent);
    }else{
      reject(()=>console.log('cannot find el with class readmore'))
    }
	});
	readMoreSpanPromise.then((readMoreSpan)=>{
		let dots = commentContent.querySelector(".dots");
		let moreText = commentContent.querySelector(".more");
    //console.log(dots);
    //console.log(moreText);

		if(dots.style.display==="none"){
			dots.style.display = "inline";
			moreText.style.display = "none";
			readMoreSpan.innerText = " read more"
		}else{
			dots.style.display = "none";
			moreText.style.display = "inline";
			readMoreSpan.innerText = " read less"
		}
	});

}

