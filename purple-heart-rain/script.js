function createHeart(){
    const heart = document.createElement('div');
    heart.classList.add('heart');
    // 0~100사이의 랜덤값
    heart.style.left = Math.random() * 230 + 'vh';
    //3~5초 사이의 랜덤값
    heart.style.animationDuration = Math.random() * 2 + 3 +'s';
    heart.innerText = '💜'; //purpleheart
    document.body.appendChild(heart);

    setTimeout( () => {
        heart.remove('heart');
    }, 5000);
}
setInterval(createHeart, 240);