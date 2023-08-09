const music= new Audio('audio/1.mp3');
//music.play();

const song=[
    {
        id:"1",
        songName:` On My Way <br> <div class="subtitle"> Alan Walker</div>`,
        poster:"img/1.jpg"
    },
    {
        id:"2",
        songName:`Fade
        <br> <div class="subtitle"> Alan Walker</div>`,
        poster:"img/2.jpg"
    },
    {
        id:"3",
        songName:` Cartoon - On & On<br> <div class="subtitle"> Feat. Daniel Levi</div>`,
        poster:"img/3.jpg"
    },
    {
        id:"4",
        songName:`Warriyo <br> <div class="subtitle">feat. Laura Brehm</div>`,
        poster:"img/4.jpg"
    },
    {
        id:"5",
        songName:` On My Way <br> <div class="subtitle"> Alan Walker</div>`,
        poster:"img/5.jpg"
    },
    {
        id:"6",
        songName:` electronic music <br> <div class="subtitle">Calvin Harris</div>`,
        poster:"img/6.jpg"
    },
    {
        id:"7",
        songName:`Agar tum sath ho <br> <div class="subtitle">Alka Yagnik and Arijit Singh
        </div>`,
        poster:"img/7.jpg"
    },
    {
        id:"8",
        songName:`suna hai <br> <div class="subtitle">Jeet Ganguly, Jubin Nautiyal, and Rashmi Virag
        </div>`,
        poster:"img/8.jpg"
    },
    {
        id:"9",
        songName:`Dilbar <br> <div class="subtitle"> Dhvani Bhanushali, Ikka Singh, and Neha Kakka</div>`,
        poster:"img/9.jpg"
    },
    {
        id:"10",
        songName:` Duniyaa <br> <div class="subtitle">Akhil,Dhvani Bhanushali</div>`,
        poster:"img/10.jpg"
    },
    {
        id:"11",
        songName:`Lagdi Lahore Di <br> <div class="subtitle">Guru Randhawa</div>`,
        poster:"img/11.jpg"
    },
    {
        id:"12",
        songName:`Putt Jatt Da <br> <div class="subtitle">Song by Diljit Dosanjh
        </div>`,
        poster:"img/12.jpg"
    },
    {
        id:"13",
        songName:`Baarishein<br> <div class="subtitle"> Atif Aslam</div>`,
        poster:"img/13.jpg"
    },
    {
        id:"14",
        songName:` Vaste <br> <div class="subtitle"> Tanishk Bagchi </div>`,
        poster:"img/14.jpg"
    },
    {
        id:"15",
        songName:`  Lut Gaye  <br> <div class="subtitle"> Jubin Nautiyal and Manoj Muntashir
        </div>`,
        poster:"img/15.jpg"
    }, 
    {
        id:"16",
        songName:` Tu meri Jindagi Hai<br> <div class="subtitle">Anuradha Paudwal and Kumar Sanu
        </div>`,
        poster:"img/16.jpg"
    }, 
    {
        id:"17",
        songName:` Batao Yaad Hai Tumko <br> <div class="subtitle">Rahat Fateh Ali Khan</div>`,
        poster:"img/17.jpg"
    },
    {
        id:"18",
        songName:` mere Dhol Judaiyan<br> <div class="subtitle">Ali Sethi, Xulfi.</div>`,
        poster:"img/18.jpg"
    },
    {
        id:"19",
        songName:` Eh munde pagal ne Sarre  <br> <div class="subtitle">Jaspreen Singh Kathpal
        </div>`,
        poster:"img/19.jpg"
    },
    {
        id:"20",
        songName:` Dunny 82K <br> <div class="subtitle">Nhinhi</div>`,
        poster:"img/20.jpg"
    }
]

//music play ,musicPlay button fix and waveflow

let masterPlay=document.getElementById("masterPlay");
let wave=document.getElementById('wave')
masterPlay.addEventListener('click',()=>{
    if(music.paused|| music.currentTime<=0)
    {
        music.play();
        wave.classList.add('active1')                  //wave flow 
        masterPlay.classList.remove('bi-play-fill')    //play button change
        masterPlay.classList.add('bi-pause-fill')
    }
    else{
        music.pause();
        wave.classList.remove('active1')
        masterPlay.classList.add('bi-play-fill')
        masterPlay.classList.remove('bi-pause-fill')
    }
})

const makeAllBackground=()=>{
    Array.from(document.getElementsByClassName('songItem')).forEach((el)=>{
        el.style.background='rgb(105, 105, 105,.0)';
        
    })
}
const makeAllplays=()=>{
    Array.from(document.getElementsByClassName('playlistPlay')).forEach((el)=>{
        el.style.background='rgb(105, 105, 105,.0)';
        el.classList.remove('bi-play-fill')
        el.classList.add('bi-pause-fill')
    })
}
 
//Array.from(document.getElementsByClassName('songItem'))[index - 1].style.background='rgb(105, 105, 105,.1)'
Array.from(document.getElementsByClassName("songItem")).forEach((e,i)=>{
    e.getElementsByTagName('img')[0].src=song[i].poster          //change images of songs
    e.getElementsByTagName('h5')[0].innerHTML=song[i].songName  // change song name and subtitle
})



let search_results=document.getElementsByClassName('serach_results')[0];
song.forEach(element=>{
    const {id,songName,poster} = element;
    let card = document.createElement('a');
    card.classList.add('card');
    card.href="#"+id;
    card.innerHTML=`   <img src= "${poster}" alt="">
    <div class="content">
        ${songName}
    </div>`;
    search_results.appendChild(card);
});
let input =document.getElementsByTagName('input')[0];
input.addEventListener('keyup',()=>{
   let input_value=input.value.toUpperCase() ;
   let items=search_results.getElementsByTagName('a');
   for(let index = 0;index < items.length; index++){
   let as = items[index].getElementsByClassName('content')[0];
   let text_value=as.textContent || as.innerHTML;

   if(text_value.toUpperCase().indexOf(input_value) > -1){
    items[index].style.display="flex";
   }
   else{
    items[index].style.display="none";
   }
   if(input.value == 0)
   {
    search_results.style.display =='none';
   }
   else{
    search_results.style.display =='';
   }
   }
})


//song play when click along with songPoster change
let index=0; 
let poster_master_play=document.getElementById('poster_master_play');  //target the poster
let download_music=document.getElementById('download_music');         //download button target
Array.from(document.getElementsByClassName('playListPlay')).forEach((e)=>{
    e.addEventListener('click',(el)=>{
        index=el.target.id;       
        music.src=`audio/${index}.mp3`;
        poster_master_play.src=`img/${index}.jpg`;
        music.play();
        masterPlay.classList.remove('bi-play-fill')    //play button change
        masterPlay.classList.add('bi-pause-fill')
        download_music.href= `audio/${index}.mp3`;
        let songTitles=song.filter((els)=>{                      //change subtitle when click along with song
           return els.id==index;
        });
        songTitles.forEach(elss=>{
         let {songName}=elss;
         title.innerHTML=songName
        })
    })
})


let currentStart=document.getElementById('currentStart');
let currentEnd=document.getElementById('currentEnd');
 //seek updation
 let seek=document.getElementById('seek');
 let bar2=document.getElementById('bar2');
  let dot=document.getElementsByClassName('dot')[0];

// update time stamp of a song
    music.addEventListener('timeupdate',()=>{
     let music_curr=music.currentTime;
     let music_dur=music.duration;


    
     let min1=Math.floor(music_dur / 60);    //for end time updation
     let sec1=Math.floor(music_dur % 60);
     
     if(sec1 < 10)
     {
        sec1=`0${sec1}`;
     }
     currentEnd.innerText=`${min1}:${sec1}`;

     let min2=Math.floor(music_curr/60);    
     let sec2=Math.floor(music_curr%60);
     if(sec2 < 10)
     {
        sec2=`0${sec2}`;
     }
     currentStart.innerText=`${min2}:${sec2}`;   //for start time updation


     let progressBar=parseInt((music_curr/music_dur)*100);
     seek.value=progressBar;
     let seekbar=seek.value;
     bar2.style.width=`${seekbar}%`;
     dot.style.left=`${seekbar}% `
 })
  seek.addEventListener('click',()=>{
    music.currentTime = seek.value * music.duration / 100;
  })
 


let pop_song_left=document.getElementById("pop_song_left");
let pop_song_right=document.getElementById("pop_song_right")
let pop_song=document.getElementsByClassName("pop_song")[0];

//scroll popular song right
pop_song_right.addEventListener('click',()=>{
    pop_song.scrollLeft+=330;
})

//scroll popular song left
pop_song_left.addEventListener('click',()=>{
    pop_song.scrollLeft-=330;
})


//control volume
let vol_icon=document.getElementById('vol_icon');
let vol=document.getElementById('vol');
let vol_bar=document.getElementsByClassName('vol_bar')[0];
let vol_dot=document.getElementById('vol_dot');
 

//control volume
vol.addEventListener('change',()=>{
    if(vol.value == 0)
    {
        vol_icon.classList.remove('bi-volume-up-fill');
        vol_icon.classList.remove("bi-volume-down-fill");
        vol_icon.classList.add("bi-volume-off-fill");

    }
    if(vol.value > 0)
    {
        
        vol_icon.classList.remove('bi-volume-up-fill');
        vol_icon.classList.add("bi-volume-down-fill");
        vol_icon.classList.remove("bi-volume-off-fill");
    }
    if(vol.value > 50)
    {
         
        vol_icon.classList.add('bi-volume-up-fill');
        vol_icon.classList.remove("bi-volume-down-fill");
        vol_icon.classList.remove("bi-volume-off-fill");
    }
    //control volue seekbar
    let vol_a=vol.value;
    vol_bar.style.width=`${vol_a}%`;
    vol_bar.style.left=`${vol_a}%`;
    music.volume = vol_a / 100;
    
})

//next rev button of musicplay

let back=document.getElementById('back');
let next=document.getElementById('next')

back.addEventListener('click',() => {
    index -= 1; //rev button
    if(index < 1)
    {
       index=Array.from(document.getElementsByClassName(`songItem`)).length; //check how many songs are there and play the last song i.e index value is 20

    }
    music.src=`audio/${index}.mp3`;
    poster_master_play.src=`img/${index}.jpg`;
    music.play();
     

    let songTitles=song.filter((els)=>{                      //change subtitle when click along with song
       return els.id==index;
    });
    songTitles.forEach(elss=>{
     let {songName}=elss;
     title.innerHTML=songName
})
})
next.addEventListener('click',()=>{
    index++;  //forward button
    if(index >  Array.from(document.getElementsByClassName(`songItem`)).length)
    {
        index=1;

    }
    music.src=`audio/${index}.mp3`;
    poster_master_play.src=`img/${index}.jpg`;
    music.play();
     

    let songTitles=song.filter((els)=>{                      //change subtitle when click along with song
       return els.id==index;
    });
    songTitles.forEach(elss=>{
     let {songName}=elss;
     title.innerHTML=songName
})
})


// target suffle button inner html
let shuffle=document.getElementsByClassName('shuffle')[0];
shuffle.addEventListener('click',()=>{
    let a=shuffle.innerHTML;
    switch(a){
       case 'next':
       shuffle.classList.add('bi-arrow-repeat');
       shuffle.classList.remove("bi-music-note-beamed");
       shuffle.classList.remove('bi-shuffle');
       shuffle.innerHTML='repeat';
       break;

       case 'repeat':
        shuffle.classList.remove('bi-arrow-repeat');
        shuffle.classList.remove("bi-music-note-beamed");
        shuffle.classList.add('bi-shuffle');
        shuffle.innerHTML='random';
        break;

        case 'random':
            shuffle.classList.remove('bi-arrow-repeat');
            shuffle.classList.add("bi-music-note-beamed");
            shuffle.classList.remove('bi-shuffle');
            shuffle.innerHTML='next';

    }
})

 
//song shuffle functions next_music,repeat_music,random_music

    //song +=1 i,e next_music;

    const next_music=()=>{
        if(index == song.length)
        {
          index = 1;
        }
        else{
          index++;
        }
        music.src=`audio/${index}.mp3`;
        poster_master_play.src=`img/${index}.jpg`;
        music.play();
        masterPlay.classList.remove('bi-play-fill')    //play button change
        masterPlay.classList.add('bi-pause-fill')
        download_music.href= `audio/${index}.mp3`;
        let songTitles=song.filter((els)=>{                      //change subtitle when click along with song
           return els.id==index;
        });
        songTitles.forEach(elss=>{
         let {songName}=elss;
         title.innerHTML=songName
        })
    
    }

    //repeat song
    const repeat_music=()=>{
        index;
        music.src=`audio/${index}.mp3`;
        poster_master_play.src=`img/${index}.jpg`;
        music.play();
        masterPlay.classList.remove('bi-play-fill')    
        masterPlay.classList.add('bi-pause-fill')
        download_music.href= `audio/${index}.mp3`;
        let songTitles=song.filter((els)=>{                     
           return els.id==index;
        });
        songTitles.forEach(elss=>{
         let {songName}=elss;
         title.innerHTML=songName
        })
    
    }
    //random song play
    const random_music=()=>{
        if(index == song.length)
        {
          index = 1;
        }
        else{
          index = Math.floor((Math.random() * song.length)+1);
        }

        music.src=`audio/${index}.mp3`;
        poster_master_play.src=`img/${index}.jpg`;
        music.play();
        masterPlay.classList.remove('bi-play-fill')    
        masterPlay.classList.add('bi-pause-fill')
        download_music.href= `audio/${index}.mp3`;
        let songTitles=song.filter((els)=>{                   
           return els.id==index;
        });
        songTitles.forEach(elss=>{
         let {songName}=elss;
         title.innerHTML=songName
        })
    }

 // calling fuctions for song shuffle
    music.addEventListener('ended',()=>{
          let b=shuffle.innerHTML;
          switch(b)
          {
            case "repeat" :   //when b==repeat then call repeat_music fiction so that song is repeated
                {
                    repeat_music();
                }
                break;

            case "next" :        //when b==next then call next_music fiction for play next song
                {
                    next_music();
                }
                break;

            case "random" :     // //when b==random then call random_music fiction for random song play
            {
                    random_music();
            }
                break;
          }
        })


//serachBar



//scroll popular artist
let pop_art_left=document.getElementById("pop_art_left");
let pop_art_right=document.getElementById("pop_art_right")
let item=document.getElementsByClassName("item")[0];

//scroll popular artist right
pop_art_right.addEventListener('click',()=>{
    item.scrollLeft+=330;
})

//scroll popular artist left
pop_art_left.addEventListener('click',()=>{
    item.scrollLeft-=330;
})