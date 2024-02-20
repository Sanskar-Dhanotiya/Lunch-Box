const accordians= document.querySelectorAll('.accordians');
console.log(accordians)
accordians.forEach(element=>{
    const icon= element.querySelector('.icon');
    const answer= element.querySelector('.answer');

    element.addEventListener('click', ()=>{
        icon.classList.toggle('active');
        answer.classList.toggle('active');
    })

})