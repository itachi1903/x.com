let name = localStorage.getItem('name');
let username = localStorage.getItem('username');


document.getElementById("right-name").innerHTML= name ;
document.getElementById("post-name").innerHTML= name ;
document.getElementById("right-username").innerHTML= `@${username}` ;
document.getElementById("post-username").innerHTML= `@${username}` ;


// with image post
let fileInput = document.getElementById('fileimg');
let fileUrl = ""
// Add change event listener directly
fileInput.addEventListener("change", () => {
    if (fileInput.files[0] !== undefined) {
        let file = fileInput.files[0];
        fileUrl = URL.createObjectURL(file);
        document.getElementById("img").setAttribute('src', fileUrl);
    } else {
        console.log("No file selected");
    }
});

let commentCan = document.querySelectorAll(".commentcontainer");
let commentbtn = document.querySelectorAll(".commentBtn");

for (let index = 0; index < commentbtn.length; index++) {
    commentbtn[index].addEventListener('click',()=>{
        commentCan[index].style.display="block";
    })
}

let likes = document.querySelectorAll(".likebtn");
for (let index = 0; index < likes.length; index++) {
    likes[index].addEventListener('click',()=>{
        likes[index].style.color="red";
    })
    
}

document.getElementById("btn").addEventListener('click', () => {
    let des = document.getElementById('des');
    let desVAlue = des.value;
    if (desVAlue === "") {
        return;
    }
    let div = document.createElement('div');
    div.innerHTML = `
    <div class="flex p-4 post gap-1 border-0  border-b-2">
                <span class="part1-post material-symbols-outlined text-[50px] w-fit">account_circle</span>
                <div class="part2-post w-full">
                    <div class="header-of-post">
                        <div class="flex justify-between items-center">
                            <div class="flex items-center gap-1 flex-col md:flex-row">
                                <h1 class="text-xl">${name}</h1>
                                <span class="text-[15px] text-[#ffffff7c]">${username}</span>
                            </div>
                            <span class="material-symbols-outlined">more_horiz</span>
                        </div>
                        <p class="text-lg text-[10px] md:text-sm">${desVAlue}</p>
                        <div class="my-4  bg-[#ffffff25] rounded-xl py-2">
                          <img src="${fileUrl}" alt="post-image"
                                class="block w-full max-h-[60vh] object-contain rounded-xl">
                        </div>
                        <div class="flex items-center justify-between">
                            <span
                                class="material-symbols-outlined cursor-pointer hover:text-[#ffffff7c] commentBtn">mode_comment</span>
                            <span
                                class="material-symbols-outlined cursor-pointer hover:text-[#ffffff7c]">swap_calls</span>
                            <span
                                class="material-symbols-outlined cursor-pointer hover:text-[#ffffff7c] likebtn">favorite</span>
                            <span
                                class="material-symbols-outlined cursor-pointer hover:text-[#ffffff7c]">bar_chart</span>
                            <div class="flex items-center">
                                <span
                                    class="material-symbols-outlined cursor-pointer hover:text-[#ffffff7c]">Bookmark</span>
                                <span
                                    class="material-symbols-outlined cursor-pointer hover:text-[#ffffff7c]">ios_share</span>
                            </div>
                        </div>
                        <div class="py-4 commentcontainer">
                                <h1>Comments</h1>
                                <div class="comment-can py-4">
                                    <div class="commentpost mt-4 flex gap-2">
                                        <input type="text" class="comment-info w-full rounded-full outline-none text-black px-4 py-1">
                                        <input type="submit" value="post" class="px-4 rounded-full bg-white text-black postcomment">
                                    </div>
                                </div>
                        </div>
                    </div>
                </div>
            </div>
    `
    document.querySelector('.post-can').prepend(div);
    des.value = "";
    fileInput.value = "";
    document.getElementById("img").setAttribute('src', '');
    document.getElementById('post').style.display = 'none';
});


document.getElementById('post').style.display = 'none';
document.getElementById('posting-close').addEventListener('click',()=>{
    document.getElementById('post').style.display = 'none';
})
// without image post
document.getElementById("imgless-post").addEventListener('click', () => {
    let des = document.getElementById('imgless-des');
    let desVAlue = des.value;
    if (desVAlue === "") {
        return;
    }
    let div = document.createElement('div');
    div.innerHTML = `
    <div class="flex p-4 post gap-1 border-0  border-b-2">
                <span class="part1-post material-symbols-outlined text-[50px] w-fit">account_circle</span>
                <div class="part2-post w-full">
                    <div class="header-of-post">
                        <div class="flex justify-between items-center">
                            <div class="flex items-center gap-1 flex-col md:flex-row">
                                <h1 class="text-xl">${name}</h1>
                                <span class="text-[15px] text-[#ffffff7c]">${username}</span>
                            </div>
                            <span class="material-symbols-outlined">more_horiz</span>
                        </div>
                        <p class="text-lg text-[10px] md:text-sm my-4">${desVAlue}</p>
                        <div class="flex items-center justify-between">
                            <span
                                class="material-symbols-outlined cursor-pointer hover:text-[#ffffff7c] commentBtn">mode_comment</span>
                            <span
                                class="material-symbols-outlined cursor-pointer hover:text-[#ffffff7c]">swap_calls</span>
                            <span
                                class="material-symbols-outlined cursor-pointer hover:text-[#ffffff7c] likebtn">favorite</span>
                            <span
                                class="material-symbols-outlined cursor-pointer hover:text-[#ffffff7c]">bar_chart</span>
                            <div class="flex items-center">
                                <span
                                    class="material-symbols-outlined cursor-pointer hover:text-[#ffffff7c]">Bookmark</span>
                                <span
                                    class="material-symbols-outlined cursor-pointer hover:text-[#ffffff7c]">ios_share</span>
                            </div>
                        </div>
                        <div class="py-4 commentcontainer" style="display:none">
                                <h1>Comments</h1>
                                <div class="comment-can py-4">
                                    <div class="commentpost mt-4 flex gap-2">
                                        <input type="text" class="comment-info w-full rounded-full outline-none text-black px-4 py-1">
                                        <input type="submit" value="post" class="px-4 rounded-full bg-white text-black postcomment">
                                    </div>
                                </div>
                        </div>
                    </div>
                </div>
            </div>
    `
    document.querySelector('.post-can').prepend(div);
    des.value = "";
    document.getElementById('post').style.display = 'none';
});

let a = document.querySelectorAll(".post-icons");
a[0].addEventListener('click',()=>{
    document.getElementById('post').style.display = 'flex';
})



for (let index = 1; index < a.length; index++) {
    a[index].addEventListener('click',()=>{
        alert("This feature is not avaible rightnow")
    })
}
document.querySelector('.post-can').addEventListener('click', (event) => {
    // Check if the clicked element is a .commentbtn or .likebtn
    if (event.target.classList.contains('commentbtn')) {
        let commentCan = event.target.closest('.post').querySelector('.commentcontainer');
        commentCan.style.display = "block";
    } else if (event.target.classList.contains('likebtn')) {
        event.target.style.color = "red";
    }
});