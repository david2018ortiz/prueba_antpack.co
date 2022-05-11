
window.onload = loadQuestion  = () =>{

    let question = document.querySelector('#container__cardQuestion');
    let services = document.querySelector('.services__main');
    let review = document.querySelector('#container__cardReview');

    for(let i=0; i<=8; i++){

        question.innerHTML += "<div class='card__question'><div class='angle'><i class='fa-solid fa-angle-right'></i></div><div class='content__question'><h4>the quick fox jumps over the lazy dog</h4><p>Things on a very small scale behave like nothing </p></div></div>";
    }    
    for(let i=0; i<=2; i++){

        services.innerHTML += "<div class='card'><div class='card-body'><div class='card-header'><i class='fa-solid fa-user-group'></i><h5 class='card-title'>Emergency Case</h5></div><p class='card-text'>- The best products start with Figma<br>- Design with real data <br>- Lightning fast prototyping <br>- Fastest way to organize <br>- Work at the speed of thought.</p><a href='#' class='btn'>Learn More</a></div></div>";
    }
    for(let i=0; i<=2; i++){

        img = i+1;
        review.innerHTML += "<div class='card__rewiew'><p class='clasificacion'><input id='radio1' type='radio' name='estrellas' value='5'><label for='radio1'>★</label><input id='radio2' type='radio' name='estrellas' value='4'><label for='radio2'>★</label><input id='radio3' type='radio' name='estrellas' value='3'><label for='radio3'>★</label><input id='radio4' type='radio' name='estrellas' value='2'><label for='radio4'>★</label><input id='radio5' type='radio' name='estrellas' value='1'><label for='radio5'>★</label></p><p>Slate helps you see how many more days you need to work to reach your financial goal.</p><img src='img/img"+ img +".jpg' alt=''></div>";
    }
}
