let module = document.querySelector(".new-blog-module");
let editModule = document.querySelector(".edit-blog-module");
document.querySelector(".new-blog-button").addEventListener("click", () => {
    module.classList.add("open");
});

let blogs = document.querySelectorAll(".blog");
blogs.forEach((blog) => {
    blog.addEventListener("click", () => {
        let blogName = blog.querySelector(".blogs-name").textContent;
        let blogContent = blog.querySelector(".blogs-content").textContent;
        console.log(blogName, blogContent);
        editModule.classList.add("open");
        editModule.querySelector(".blog-name-input").value = blogName;
        editModule.querySelector(".blog-content-input").value = blogContent;

    })
})
