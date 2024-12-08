const singleBanners = document.querySelectorAll(".single-banner")
singleBanners.forEach(section => {
    const secLink = section.querySelector("a")
    const secImg = section.querySelector("img")
    const link = secLink.getAttribute("href")
    if(link === "javascript:;" || link === "" ){
        secLink.style.pointerEvents = "none"
        secImg.classList.remove("hover:scale-105")
    }
    
})
