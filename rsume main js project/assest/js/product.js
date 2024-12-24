let arrayCourses = [
    {id : '1' , srcImg : 'assest/images/google-search-console-1-500x500.png' , titleImg : 'اموزش کامل سرچ کنسول' , member : 0 , cost : '199,000'} ,
    {id : '2' , srcImg : 'assest/images/email-marketing-500x500.jpg' , titleImg : 'اموزش ایمیل مارکتینگ' , member : 2 , cost : '199,000'} ,
    {id : '3' , srcImg : 'assest/images/website-speed-1-500x500.png' , titleImg : 'دوره افزایش سرعت سایت' , member : 4 , cost : '39,000'} ,
    {id : '4' , srcImg : 'assest/images/google-analytics-1-500x500.png' , titleImg : 'دوره اموزش گوگل انالیتیکس' , member : 0 , cost : '119,000'} ,
]

const $ = document

// send to product page 

let locationSearch = location.search

let locationSearchParam = new URLSearchParams(locationSearch)

let userIdParam = locationSearchParam.get('id')

let mainProduct = arrayCourses.find(product => {
    return product.id === userIdParam
})
mainProduct ? sendProductPage(mainProduct) : location.href = location.href = "http://127.0.0.1:5501/product.html"

function sendProductPage (product) {
    const imgProduct = $.querySelector('.img-product')
    const titleMainProduct = $.querySelector('.title-main-product')
    const memberCourses = $.querySelector('.main-member-product')
    const costProduct = $.querySelector('.main-cost-product')

    imgProduct.src = product.srcImg
    titleMainProduct.innerHTML = product.titleImg
    memberCourses.innerHTML = product.member
    costProduct.innerHTML = product.cost
}
// send to product page 
// calcute total cost

// calcute total cost