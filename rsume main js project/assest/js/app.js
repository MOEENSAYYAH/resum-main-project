let arraySliderCourses = [
    {id : '1' , srcImg : 'assest/images/google-search-console-1-500x500.png' , titleImg : 'اموزش کامل سرچ کنسول' , member : 0 , cost : '199,000'} ,
    {id : '2' , srcImg : 'assest/images/website-speed-1-500x500.png' , titleImg : 'دوره افزایش سرعت سایت' , member : 1 , cost : '39,000'} ,
    {id : '3' , srcImg : 'assest/images/email-marketing-500x500.jpg' , titleImg : 'اموزش ایمیل مارکتینگ' , member : 2 , cost : '199,000'} ,
    {id : '4' , srcImg : 'assest/images/google-analytics-1-500x500.png' , titleImg : 'دوره اموزش گوگل انالیتیکس' , member : 2 , cost : '119,000'} ,
]
let arraySliderArticles = [
    {id : '1' , srcImg : 'assest/images/blog/602-540x350.jpg' , titleImg : '5 تکنیک کنسول گوگل برای آنالیز سیو سایت'} ,
    {id : '2' , srcImg : 'assest/images/blog/605-540x350.jpg' , titleImg : 'چگونه بهینه سازی دیتابیس وردپرس رو انجام بدیم'} ,
    {id : '3' , srcImg : 'assest/images/blog/634-540x350.jpg' , titleImg : 'چگونه رنگ در تبلیغات و بازاریابی نقش دارد؟؟'} ,
    {id : '4' , srcImg : 'assest/images/blog/660-1-540x350.jpg' , titleImg : 'افزونه رنک مث پرو , بهترین افزونه سیوی وردپرس'} ,
    {id : '5' , srcImg : 'assest/images/blog/663-540x350.jpg' , titleImg : 'راه اندازی پت شاپ آنلاین'} ,
]
const $ = document

// slider-courses

import { Courses } from "../components/courses/courses.js"

window.customElements.define('site-course' , Courses)

const nextSliderCourses = $.querySelector('.next-courses')
const periviosSliderCourses = $.querySelector('.perivios-courses')
const imgSliderCourses = $.querySelector('.img-course')
const titleSliderCourses = $.querySelector('.title-course')
const membersSliderCourses = $.querySelector('.member-courses')
const costSliderCourses = $.querySelector('.cost-courses')

let numberSliderCourses = 0

setInterval(() => {
    nextChangeSliderCourses()
}, 3000);
nextSliderCourses.addEventListener('click' , () => {
    nextChangeSliderCourses()
})
periviosSliderCourses.addEventListener('click' , () => {
    periviosChangeSliderCourses()
})
function nextChangeSliderCourses () {
    numberSliderCourses === arraySliderCourses.length - 1 ? numberSliderCourses = 0 : numberSliderCourses++;
    changeSliderCourses()
}
function periviosChangeSliderCourses () {
    numberSliderCourses === 0 ? numberSliderCourses = arraySliderCourses.length - 1 : numberSliderCourses--
    changeSliderCourses()
}
function changeSliderCourses () {
    imgSliderCourses.src = arraySliderCourses[numberSliderCourses].srcImg
    titleSliderCourses.innerHTML = arraySliderCourses[numberSliderCourses].titleImg
    membersSliderCourses.innerHTML = arraySliderCourses[numberSliderCourses].member
    costSliderCourses.innerHTML = arraySliderCourses[numberSliderCourses].cost
}
// slider-courses
// slider-articles
import { Articles } from "../components/articles/articles.js"

window.customElements.define('site-articles' , Articles)

const nextSliderArticles = $.querySelector('.next-articles')
const periviosSliderArticles = $.querySelector('.perivios-articles')
const img1SliderArticles = $.querySelector('.img-1-articles')
const img2SliderArticles = $.querySelector('.img-2-articles')
const img3SliderArticles = $.querySelector('.img-3-articles')
const title1SliderArticles = $.querySelector('.title-1-articles')
const title2SliderArticles = $.querySelector('.title-2-articles')
const title3SliderArticles = $.querySelector('.title-3-articles')
const countinue1SliderArticles = $.querySelector('.countinue1')
const countinue2SliderArticles = $.querySelector('.countinue2')
const countinue3SliderArticles = $.querySelector('.countinue3')

let hrefCountinue = 'article.html'

let number1SliderArticles = 0
let number2SliderArticles = 1
let number3SliderArticles = 2

setInterval(() => {
    nextChangeSliderArticles()
} , 5000);
nextSliderArticles.addEventListener('click' , () => {
    nextChangeSliderArticles()
})
periviosSliderArticles.addEventListener('click' , () => {
    periviosChangeSliderArticles()
})
function nextChangeSliderArticles () {
    number1SliderArticles === arraySliderArticles.length - 1 ? number1SliderArticles = 0 : number1SliderArticles++
    number2SliderArticles === arraySliderArticles.length - 1 ? number2SliderArticles = 0 : number2SliderArticles++
    number3SliderArticles === arraySliderArticles.length - 1 ? number3SliderArticles = 0 : number3SliderArticles++
    changeSliderArticles()
}
function periviosChangeSliderArticles () {
    number1SliderArticles === 0 ? number1SliderArticles = arraySliderArticles.length - 1 : number1SliderArticles--
    number2SliderArticles === 0 ? number2SliderArticles = arraySliderArticles.length - 1 : number2SliderArticles--
    number3SliderArticles === 0 ? number3SliderArticles = arraySliderArticles.length - 1 : number3SliderArticles--
    changeSliderArticles()
}
function changeSliderArticles () {
    img1SliderArticles.src = arraySliderArticles[number1SliderArticles].srcImg
    title1SliderArticles.innerHTML = arraySliderArticles[number1SliderArticles].titleImg
    countinue1SliderArticles.href = `${hrefCountinue}?id=${arraySliderArticles[number1SliderArticles].id}`
    
    img2SliderArticles.src = arraySliderArticles[number2SliderArticles].srcImg
    title2SliderArticles.innerHTML = arraySliderArticles[number2SliderArticles].titleImg
    countinue2SliderArticles.href = `${hrefCountinue}?id=${arraySliderArticles[number2SliderArticles].id}`
    
    img3SliderArticles.src = arraySliderArticles[number3SliderArticles].srcImg
    title3SliderArticles.innerHTML = arraySliderArticles[number3SliderArticles].titleImg
    countinue3SliderArticles.href = `${hrefCountinue}?id=${arraySliderArticles[number3SliderArticles].id}`
    
}
// slider-articles

export {arraySliderArticles}

