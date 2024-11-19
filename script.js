const cvBtn = document.querySelector('.cv-btn');

cvBtn.addEventListener('click', () => {
    alert("open the chinthak's cv");
});



const logoLink = document.querySelector('.logo');
const links = document.querySelectorAll('.link');
const sections = document.querySelectorAll('section');
const menuItem = document.querySelector('#menu-icon');
const headerNav = document.querySelector('header nav');

menuItem.addEventListener('click', () => {
    menuItem.classList.toggle('bx-x');
    headerNav.classList.toggle('active');
})

const activePage = () => {
    const barsBox = document.querySelector('.bars-box');
    const header = document.querySelector('header');

    header.classList.remove('active');
    setTimeout(() => {
        header.classList.add('active');
    }, 1100);
    
    links.forEach(link => {
        link.classList.remove('active');
    });

    barsBox.classList.remove('active');
    setTimeout(() => {
        barsBox.classList.add('active');
    }, 1100);

    sections.forEach(section => {
        section.classList.remove('active');
    });

    headerNav.classList.remove('active');
    menuItem.classList.remove('bx-x');
}

links.forEach((link, idx) => {
    link.addEventListener('click', () => {
        if(!link.classList.contains('active')){
            activePage();

            setTimeout(() => {
                sections[idx].classList.add('active');
            },1100);

            link.classList.add('active');
        }
    })
})

logoLink.addEventListener('click', () => {
    if(!links[0].classList.contains('active')){
        activePage();

        setTimeout(() => {
            sections[0].classList.add('active');
        },1100);

        links[0].classList.add('active');
    }
})





const resumeBtns = document.querySelectorAll('.resume-btn');

resumeBtns.forEach((btn, idx) => {
    btn.addEventListener('click', () => {

        const resumeDetails = document.querySelectorAll('.resume-detail');
        // console.log(resumeDetails);

        resumeBtns.forEach(btn => {
            btn.classList.remove('active');
        });

        btn.classList.add('active');
        
        resumeDetails.forEach(detail => {
            detail.classList.remove('active_');
        });
        resumeDetails[idx].classList.add('active_');
    });
});







const arrowLeft = document.querySelector(".portfolio-box .navigation .arrow-left");
const arrowRight = document.querySelector(".portfolio-box .navigation .arrow-right");

let index = 0;

const activePortfolio = () => {
    const imgSlide = document.querySelector(".portfolio-box .portfolio-carousel .img-slide");
    const portfolioDetails = document.querySelectorAll('.portfolio-box .portfolio-detail');

    imgSlide.style.transform = `translateX(calc(${index * -100}% - ${index * 2}rem))`;

    portfolioDetails.forEach(detail => {
        detail.classList.remove('active');
    });

    portfolioDetails[index].classList.add('active');
}

arrowRight.addEventListener('click', () => {
    if(index < 4){
        index++;
        arrowLeft.classList.remove('disable');
    }
    else{
        index = 5;
        arrowRight.classList.add('disable');
    }

    activePortfolio();
});

arrowLeft.addEventListener('click', () => {
    if(index > 1){
        index--;
        arrowRight.classList.remove('disable');
    }
    else{
        index = 0;
        arrowLeft.classList.add('disable');
    }

    activePortfolio();
})