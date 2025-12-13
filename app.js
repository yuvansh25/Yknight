const nextButton = document.querySelector('.next-btn');
const video=document.querySelector('.hero-video');

const movieList=['video/monkey.mp4','video/sword.mp4','video/god.mp4','video/hero-1.mp4',];

let index=0;
nextButton.addEventListener('click',function(){
    index+=1
    video.src=movieList[index];

    if(index===3){
        index=-1;
    }
})
const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors());
app.get('/api/games', (req, res) => {
  res.json({ success: true, data: [
    { _id: '1', title: 'Uncharted', description: 'Adventure game', price: '$50', videoUrl: 'sample.mp4' },
    { _id: '2', title: 'God of War', description: 'Action game', price: '$50', videoUrl: 'sample2.mp4' }
  ] });
});
app.listen(5000, () => console.log('API running on 5000'));
