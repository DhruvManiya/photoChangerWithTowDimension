const span = document.querySelector(".span");
const span1 = document.querySelector(".span-1");
const span2 = document.querySelector(".span-2");
const span3 = document.querySelector(".span-3");
const active = document.querySelector(".active");
const greterThan = document.querySelector(".greter-than");
const lessThan = document.querySelector(".less-than");
const beachs = document.querySelector(".beachs");
const mountains = document.querySelector(".mountains");
const forests = document.querySelector(".forests");
const bImg1 = document.querySelector(".b-img-1");
const bImg2 = document.querySelector(".b-img-2");
const bImg3 = document.querySelector(".b-img-3");
const mImg1 = document.querySelector(".m-img-1");
const mImg2 = document.querySelector(".m-img-2");
const mImg3 = document.querySelector(".m-img-3");
const fImg1 = document.querySelector(".f-img-1");
const fImg2 = document.querySelector(".f-img-2");
const fImg3 = document.querySelector(".f-img-3");



span1.addEventListener('click',()=>{

    span1.classList.add('color');
    span2.classList.remove('color'); 
    span3.classList.remove('color'); 
    
    span.style.margin = "15px 0 0 0";
    greterThan.classList.add('active');
    lessThan.classList.remove('active');

    bImg1.classList.add('image');
    bImg2.classList.remove('image');
    bImg3.classList.remove('image');

    if(span1.classList.contains('color'))
{
    beachs.classList.add('active');
    mountains.classList.remove('active');
    forests.classList.remove('active');
};
});



span2.addEventListener('click',()=>{

    span2.classList.add('color');
    span1.classList.remove('color'); 
    span3.classList.remove('color'); 
    
    span.style.margin = "15px 0 0 0";
    greterThan.classList.add('active');
    lessThan.classList.remove('active');

    mImg1.classList.add('image');
    mImg2.classList.remove('image');
    mImg3.classList.remove('image');

    if(span2.classList.contains('color'))
{
    mountains.classList.add('active');
    beachs.classList.remove('active');
    forests.classList.remove('active');
    lessThan.classList.remove('active');


};
});


span3.addEventListener('click',()=>{

    span3.classList.add('color');
    span1.classList.remove('color'); 
    span2.classList.remove('color'); 
    
    span.style.margin = "15px 0 0 0";
    greterThan.classList.add('active');
    lessThan.classList.remove('active');

    fImg1.classList.add('image');
    fImg2.classList.remove('image');
    fImg3.classList.remove('image');

    if(span3.classList.contains('color'))
{
    forests.classList.add('active');
    beachs.classList.remove('active');
    mountains.classList.remove('active');
};

});



greterThan.addEventListener('click',()=>{

    if(bImg1.classList.contains('image')){
        bImg2.classList.add('image');
        bImg1.classList.remove('image');
        span1.classList.remove('active'); 
        span2.classList.remove('active');
        span3.classList.remove('active');   
        lessThan.classList.add('active');
    }
    else if(bImg2.classList.contains('image')){
        bImg3.classList.add('image');
        bImg2.classList.remove('image');
        greterThan.classList.remove('active');
        span.style.margin = "65vh 0 0 0";
        span1.classList.add('active'); 
        span2.classList.add('active');
        span3.classList.add('active');
    }

});


greterThan.addEventListener('click',()=>{

    if(mImg1.classList.contains('image')){
        mImg2.classList.add('image');
        mImg1.classList.remove('image');
        span1.classList.remove('active'); 
        span2.classList.remove('active');
        span3.classList.remove('active');   
        lessThan.classList.add('active');
    }
    else if(mImg2.classList.contains('image')){
        mImg3.classList.add('image');
        mImg2.classList.remove('image');
        greterThan.classList.remove('active');
        span.style.margin = "65vh 0 0 0";
        span1.classList.add('active'); 
        span2.classList.add('active');
        span3.classList.add('active');
    }

});



greterThan.addEventListener('click',()=>{

    if(fImg1.classList.contains('image')){
        fImg2.classList.add('image');
        fImg1.classList.remove('image');
        span1.classList.remove('active'); 
        span2.classList.remove('active');
        span3.classList.remove('active');   
        lessThan.classList.add('active');
    }
    else if(fImg2.classList.contains('image')){
        fImg3.classList.add('image');
        fImg2.classList.remove('image');
        greterThan.classList.remove('active');
        span.style.margin = "65vh 0 0 0";
        span1.classList.add('active'); 
        span2.classList.add('active');
        span3.classList.add('active');
    }

});




lessThan.addEventListener('click',()=>{
    if(bImg2.classList.contains('image')){
        bImg1.classList.add('image');
        bImg2.classList.remove('image');
        span.style.margin = "15px 0 0 0";
        span1.classList.add('active'); 
        span2.classList.add('active');
        span3.classList.add('active');   
        lessThan.classList.remove('active');
    }
    else if(bImg3.classList.contains('image')){
        bImg2.classList.add('image');
        bImg3.classList.remove('image');
        greterThan.classList.add('active');
        span1.classList.remove('active'); 
        span2.classList.remove('active');
        span3.classList.remove('active');
    }
    

});

lessThan.addEventListener('click',()=>{
    if(mImg2.classList.contains('image')){
        mImg1.classList.add('image');
        mImg2.classList.remove('image');
        span.style.margin = "15px 0 0 0";
        span1.classList.add('active'); 
        span2.classList.add('active');
        span3.classList.add('active');   
        lessThan.classList.remove('active');
    }
    else if(mImg3.classList.contains('image')){
        mImg2.classList.add('image');
        mImg3.classList.remove('image');
        greterThan.classList.add('active');
        span1.classList.remove('active'); 
        span2.classList.remove('active');
        span3.classList.remove('active');
    }
    

});

lessThan.addEventListener('click',()=>{
    if(fImg2.classList.contains('image')){
        fImg1.classList.add('image');
        fImg2.classList.remove('image');
        span.style.margin = "15px 0 0 0";
        span1.classList.add('active'); 
        span2.classList.add('active');
        span3.classList.add('active');   
        lessThan.classList.remove('active');
    }
    else if(fImg3.classList.contains('image')){
        fImg2.classList.add('image');
        fImg3.classList.remove('image');
        greterThan.classList.add('active');
        span1.classList.remove('active'); 
        span2.classList.remove('active');
        span3.classList.remove('active');
    }
    

});















