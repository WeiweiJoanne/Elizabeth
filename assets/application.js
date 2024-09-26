// Put your application javascript here
const nav = document.querySelector(".nav");
const navBtn = document.querySelectorAll(".nav-button");
console.log("🚀 ~ navBtn:", navBtn)

const handleScroll = () => {
    if (window.scrollY > 0) {
        nav.classList.remove("my-bg-transparent");
        navBtn.forEach(el => {
            el.classList.add("text-slate-950")
        })
    }else{
         nav.classList.add("my-bg-transparent");
        navBtn.forEach((el) => {
          el.classList.remove("text-slate-950");
        });
    }
}

window.addEventListener("scroll", handleScroll)