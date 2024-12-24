const $ = document
let arrayArticles =  [
    {id : '1' , srcImg : 'assest/images/blog/602-540x350.jpg' , titleImg : '5 تکنیک کنسول گوگل برای آنالیز سیو سایت'} ,
    {id : '2' , srcImg : 'assest/images/blog/605-540x350.jpg' , titleImg : 'چگونه بهینه سازی دیتابیس وردپرس رو انجام بدیم'} ,
    {id : '3' , srcImg : 'assest/images/blog/634-540x350.jpg' , titleImg : 'چگونه رنگ در تبلیغات و بازاریابی نقش دارد؟؟'} ,
    {id : '4' , srcImg : 'assest/images/blog/660-1-540x350.jpg' , titleImg : 'افزونه رنک مث پرو , بهترین افزونه سیوی وردپرس'} ,
    {id : '5' , srcImg : 'assest/images/blog/663-540x350.jpg' , titleImg : 'راه اندازی پت شاپ آنلاین'} ,
]
// change articles
const containerLinkArticles = $.querySelector('.container-link-blog-page')
const articleBlogPage = $.querySelector('.article-blog-page')


containerLinkArticles.addEventListener('click' , event => {
    event.target.tagName === 'LI' ? changeBlogPageArticle(event.target) : ''
})

function changeBlogPageArticle (li) {
    let changeArticle = li.getAttribute('data-change-article')
    changeArticle === 'all-article' ? changeAllArticle() : changeArticle === 'seo-article' ? changeSeoArticle() : changeArticle === 'wordpress-article' ? changeWordpressArticle() : changeArticle === 'work-article' ? changeWorkArticle() : changeArticle === 'future-article' ? changeFutureArticle() : ''
}

function changeAllArticle() {
    articleBlogPage.innerHTML = `<div class="articles">
                        <img src="assest/images/blog/602-540x350.jpg" alt="" slot="img-articles" class="img-articles">
                        <h4 slot="title-articles" class="title-articles text-nowrap">5 تکنیک کنسول گوگل برای آنالیز سیو سایت</h4>
                        <p slot="description-articles" class="description-articles">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است </p>
                        <div slot="contnet-articles" class="contnet-articles">
                            <span slot="name-articles" class="name-articles">SEO</span>
                            <span slot="time-articles">26</span>
                        </div>
                        <div slot="container-button-articles" class="container-button-articles">
                            <a href="article.html?id=1" class="button-articles">ادامه مطلب</a>
                        </div>
                    </div>
                    <div class="articles">
                        <img src="assest/images/blog/605-540x350.jpg" alt="" slot="img-articles" class="img-articles">
                        <h4 slot="title-articles" class="title-articles text-nowrap">چگونه بهینه سازی دیتابیس وردپرس رو انجام بدیم</h4>
                        <p slot="description-articles" class="description-articles">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است </p>
                        <div slot="contnet-articles" class="contnet-articles">
                            <span slot="name-articles" class="name-articles">SEO</span>
                            <span slot="time-articles">26</span>
                        </div>
                        <div slot="container-button-articles" class="container-button-articles">
                            <a href="article.html?id=2" class="button-articles">ادامه مطلب</a>
                        </div>
                    </div>
                    <div class="articles">
                        <img src="assest/images/blog/634-540x350.jpg" alt="" slot="img-articles" class="img-articles">
                        <h4 slot="title-articles" class="title-articles text-nowrap">چگونه رنگ در تبلیغات و بازاریابی نقش دارد؟؟</h4>
                        <p slot="description-articles" class="description-articles">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است </p>
                        <div slot="contnet-articles" class="contnet-articles">
                            <span slot="name-articles" class="name-articles">SEO</span>
                            <span slot="time-articles">26</span>
                        </div>
                        <div slot="container-button-articles" class="container-button-articles">
                            <a href="article.html?id=3" class="button-articles">ادامه مطلب</a>
                        </div>
                    </div>
                    <div class="articles">
                        <img src="assest/images/blog/660-1-540x350.jpg" alt="" slot="img-articles" class="img-articles">
                        <h4 slot="title-articles" class="title-articles text-nowrap">افزونه رنک مث پرو , بهترین افزونه سیوی وردپرس</h4>
                        <p slot="description-articles" class="description-articles">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است </p>
                        <div slot="contnet-articles" class="contnet-articles">
                            <span slot="name-articles" class="name-articles">SEO</span>
                            <span slot="time-articles">26</span>
                        </div>
                        <div slot="container-button-articles" class="container-button-articles">
                            <a href="article.html?id=4" class="button-articles">ادامه مطلب</a>
                        </div>
                    </div>
                    <div class="articles">
                        <img src="assest/images/blog/663-540x350.jpg" alt="" slot="img-articles" class="img-articles">
                        <h4 slot="title-articles" class="title-articles text-nowrap">راه اندازی پت شاپ آنلاین</h4>
                        <p slot="description-articles" class="description-articles">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است </p>
                        <div slot="contnet-articles" class="contnet-articles">
                            <span slot="name-articles" class="name-articles">SEO</span>
                            <span slot="time-articles">26</span>
                        </div>
                        <div slot="container-button-articles" class="container-button-articles">
                            <a href="article.html?id=5" class="button-articles">ادامه مطلب</a>
                        </div>
                    </div>`
}

function changeSeoArticle() {
    articleBlogPage.innerHTML = `<div class="articles">
                        <img src="assest/images/blog/602-540x350.jpg" alt="" slot="img-articles" class="img-articles">
                        <h4 slot="title-articles" class="title-articles text-nowrap">5 تکنیک کنسول گوگل برای آنالیز سیو سایت</h4>
                        <p slot="description-articles" class="description-articles">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است </p>
                        <div slot="contnet-articles" class="contnet-articles">
                            <span slot="name-articles" class="name-articles">SEO</span>
                            <span slot="time-articles">26</span>
                        </div>
                        <div slot="container-button-articles" class="container-button-articles">
                            <a href="article.html?id=1" class="button-articles">ادامه مطلب</a>
                        </div>
                    </div>
                    <div class="articles">
                        <img src="assest/images/blog/660-1-540x350.jpg" alt="" slot="img-articles" class="img-articles">
                        <h4 slot="title-articles" class="title-articles text-nowrap">افزونه رنک مث پرو , بهترین افزونه سیوی وردپرس</h4>
                        <p slot="description-articles" class="description-articles">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است </p>
                        <div slot="contnet-articles" class="contnet-articles">
                            <span slot="name-articles" class="name-articles">SEO</span>
                            <span slot="time-articles">26</span>
                        </div>
                        <div slot="container-button-articles" class="container-button-articles">
                            <a href="article.html?id=4" class="button-articles">ادامه مطلب</a>
                        </div>
                    </div>
                    `
}

function changeWordpressArticle() { 
    articleBlogPage.innerHTML = `<div class="articles">
                        <img src="assest/images/blog/605-540x350.jpg" alt="" slot="img-articles" class="img-articles">
                        <h4 slot="title-articles" class="title-articles text-nowrap">چگونه بهینه سازی دیتابیس وردپرس رو انجام بدیم</h4>
                        <p slot="description-articles" class="description-articles">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است </p>
                        <div slot="contnet-articles" class="contnet-articles">
                            <span slot="name-articles" class="name-articles">SEO</span>
                            <span slot="time-articles">26</span>
                        </div>
                        <div slot="container-button-articles" class="container-button-articles">
                            <a href="article.html?id=2" class="button-articles">ادامه مطلب</a>
                        </div>
                    </div>`
}

function changeWorkArticle() {
    articleBlogPage.innerHTML = `<div class="articles">
                        <img src="assest/images/blog/663-540x350.jpg" alt="" slot="img-articles" class="img-articles">
                        <h4 slot="title-articles" class="title-articles text-nowrap">راه اندازی پت شاپ آنلاین</h4>
                        <p slot="description-articles" class="description-articles">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است </p>
                        <div slot="contnet-articles" class="contnet-articles">
                            <span slot="name-articles" class="name-articles">SEO</span>
                            <span slot="time-articles">26</span>
                        </div>
                        <div slot="container-button-articles" class="container-button-articles">
                            <a href="article.html?id=5" class="button-articles">ادامه مطلب</a>
                        </div>
                    </div>`
}

function changeFutureArticle() {
    articleBlogPage.innerHTML = `<div class="articles">
                        <img src="assest/images/blog/634-540x350.jpg" alt="" slot="img-articles" class="img-articles">
                        <h4 slot="title-articles" class="title-articles text-nowrap">چگونه رنگ در تبلیغات و بازاریابی نقش دارد؟؟</h4>
                        <p slot="description-articles" class="description-articles">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است </p>
                        <div slot="contnet-articles" class="contnet-articles">
                            <span slot="name-articles" class="name-articles">SEO</span>
                            <span slot="time-articles">26</span>
                        </div>
                        <div slot="container-button-articles" class="container-button-articles">
                            <a href="article.html?id=3" class="button-articles">ادامه مطلب</a>
                        </div>
                    </div>`
}
// change articles

// search box blog page

const searchBoxElem = $.querySelector('.search-blog-page')
const iconSearchBoxElem = $.querySelector('.icon-search-blog-page')
const textBlogPage = $.querySelector('.text-search-box-blog-page')

searchBoxElem.addEventListener('keyup' ,  event => {
    let inputValue = event.target.value
    if (inputValue) {
        textBlogPage.classList.add('active')
        let suggestionsResult = arrayArticles.filter(li => {
            return li.titleImg.includes(inputValue) ///startwidth first of includes
        })
        suggestionLiGenerator(suggestionsResult)
    } else {
        textBlogPage.classList.remove('active')
    }

})

function suggestionLiGenerator(resultArray) {
    textBlogPage.innerHTML = ""
    let resultMapArray = resultArray.map(word => {
        return '<li class="list-group-item link-search-box" onclick="autoCompleteClick(event)">' + word.titleImg + '<li/>'
    })
    if (!resultMapArray.length) {
        customListItem = '<li class="list-group-item link-search-box" onclick="autoCompleteClick(event)">' + searchBoxElem.value + '</li>'
    } else {
        customListItem = resultMapArray.join("")
    } 
    console.log(resultMapArray);
    textBlogPage.innerHTML = customListItem

}
//  onclick="autoCompleteClick(event)
function autoCompleteClick (event) {
    textBlogPage.innerHTML = ""
    searchBoxElem.value = event.target.textContent
    textBlogPage.classList.remove("active")
}