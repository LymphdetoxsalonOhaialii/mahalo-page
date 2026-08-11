const stars = [...document.querySelectorAll('.stars button')];
const message = document.querySelector('#rating-message');
const card = document.querySelector('#review-card');
const petals = document.querySelector('.petals');

const texts = {
  1:'ご来店ありがとうございました。率直なお声をありがとうございます。',
  2:'ありがとうございます。いただいたお声を大切にします。',
  3:'ありがとうございます。これからも心地よい時間をお届けします。',
  4:'嬉しい評価をありがとうございます。Mahalo 🌺',
  5:'最高のMahaloをありがとうございます！🌺'
};

function petalsBurst(count=28){
  for(let i=0;i<count;i++){
    const el=document.createElement('span');
    el.className='petal';
    el.textContent='🌺';
    el.style.left=(Math.random()*100)+'%';
    el.style.setProperty('--drift',((Math.random()-.5)*45)+'vw');
    el.style.animationDuration=(3.2+Math.random()*3)+'s';
    el.style.animationDelay=(Math.random()*.25)+'s';
    el.style.fontSize=(14+Math.random()*14)+'px';
    petals.appendChild(el);
    setTimeout(()=>el.remove(),7000);
  }
}

stars.forEach((button,index)=>{
  button.addEventListener('click',()=>{
    const rating=index+1;
    stars.forEach((s,i)=>s.classList.toggle('active',i<rating));
    message.textContent=texts[rating];
    card.classList.remove('hidden');
    if(rating===5){
      document.querySelector('.stars').classList.remove('pop');
      void document.querySelector('.stars').offsetWidth;
      document.querySelector('.stars').classList.add('pop');
      petalsBurst(40);
    }else{
      petalsBurst(8);
    }
    card.scrollIntoView({behavior:'smooth',block:'center'});
  });
});

window.addEventListener('load',()=>{
  setTimeout(()=>petalsBurst(6),1800);
});
