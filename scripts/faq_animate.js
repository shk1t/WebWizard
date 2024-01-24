const faq_li_arr = document.querySelectorAll(".faq_content_list li");
const faq_second_line_arr = document.querySelectorAll(".faq_content_list_line_second");

for(let e of (document.querySelectorAll(".faq_content_list_line_first"))){
    e.addEventListener("click", switch_line);  
};

for (let i = 0; i < faq_li_arr.length; i++) {
    faq_li_arr[i].style.height = faq_li_arr[i].offsetHeight - faq_second_line_arr[i].offsetHeight + "px";
    faq_second_line_arr[i].style.opacity = 0;

}

function switch_line(event) {
    faq_li = this.parentElement;
    faq_second_line = faq_li.lastElementChild;
    icon = this.lastElementChild
    
    if (faq_second_line.style.opacity == 0) {
        faq_li.style.height = faq_li.offsetHeight + faq_second_line.offsetHeight + "px";
        faq_second_line.style.opacity = 1
        icon.style.rotate =  '+90deg'
    }
    else{
        faq_li.style.height = faq_li.offsetHeight - faq_second_line.offsetHeight + "px";
        faq_second_line.style.opacity = 0
        icon.style.rotate =  '-90deg'
    }
}
