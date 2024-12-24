
const $ = document

let arrayArticles =  [
    {id : '1' , srcImg : 'assest/images/blog/602-540x350.jpg' , titleImg : '5 تکنیک کنسول گوگل برای آنالیز سیو سایت'} ,
    {id : '2' , srcImg : 'assest/images/blog/605-540x350.jpg' , titleImg : 'چگونه بهینه سازی دیتابیس وردپرس رو انجام بدیم'} ,
    {id : '3' , srcImg : 'assest/images/blog/634-540x350.jpg' , titleImg : 'چگونه رنگ در تبلیغات و بازاریابی نقش دارد؟؟'} ,
    {id : '4' , srcImg : 'assest/images/blog/660-1-540x350.jpg' , titleImg : 'افزونه رنک مث پرو , بهترین افزونه سیوی وردپرس'} ,
    {id : '5' , srcImg : 'assest/images/blog/663-540x350.jpg' , titleImg : 'راه اندازی پت شاپ آنلاین'} ,
]
//send to articles page


    
const imgArticles = $.querySelector('.img-article')


let locationSearch = location.search // ?id=1

let locationSearchParam = new URLSearchParams(locationSearch) //id => "1"

let userIdParam = locationSearchParam.get("id")

let mainArticle = arrayArticles.find(article => {
    return article.id === userIdParam
})
console.log(mainArticle);

if (mainArticle) {
    imgArticles.src = mainArticle.srcImg

} else {

    location.href = "http://127.0.0.1:5501/article.html"
}

//send to articles page

//change article page

const containerLinkArticles = $.querySelector('.container-link-blog-page')
const articleBlogPage = $.querySelector('.article-blog-page')

containerLinkArticles.addEventListener('click' , event => {
    event.target.tagName === 'LI' ? changeBlogPageArticle(event.target) : ''
})

function changeBlogPageArticle (li) {
    let changeArticle = li.getAttribute('data-change-article')
    changeArticle === 'seo-article' ? changeSeoArticle() : changeArticle === 'wordpress-article' ? changeWordpressArticle() : changeArticle === 'work-article' ? changeWorkArticle() : changeArticle === 'future-article' ? changeFutureArticle() : ''
}

function changeSeoArticle() {
    imgArticles.src = arrayArticles[0].srcImg
}
function changeWordpressArticle() {
    imgArticles.src = arrayArticles[1].srcImg
}
function changeWorkArticle() {
    imgArticles.src = arrayArticles[4].srcImg
}
function changeFutureArticle() {
    imgArticles.src = arrayArticles[2].srcImg
}
//change article page