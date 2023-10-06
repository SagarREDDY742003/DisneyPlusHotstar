const changeMode = () => {
    let mybody = document.body;
    mybody.classList.toggle('mylight');
}
 
function onloadPage(){
    document.getElementById('coupon').style.visibility = 'visible';
    document.getElementById('opac').style.opacity = '0.3';
}

function closeCoupon(){
    document.getElementById('coupon').style.visibility = 'hidden';
    document.getElementById('opac').style.opacity = '1';
}

