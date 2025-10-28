
async function loadPage(){
    let response = await fetch("https://csumb.space/api/videoLikes.php?videoId=FgtBWb2k5N8?si=qw3YZI1CGPCEos0G");
    let data = await response.json();
    console.log(data);
    document.querySelector("#likes").textContent = data.likes;

}
loadPage();

let likeBtn = document.querySelector("#likeBtn");
let cancelLikeBtn = document.querySelector("#cancelLikeBtn");

likeBtn.addEventListener("click", updateLikes);
cancelLikeBtn.addEventListener("click", updateCancelLikes);
cancelLikeBtn.style.display = "none";

async function updateLikes(){
    let response = await fetch("https://csumb.space/api/videoLikes.php?videoId=FgtBWb2k5N8?si=qw3YZI1CGPCEos0G&action=like");
    let data = await response.json();
    console.log(data);
    document.querySelector("#likes").textContent = data.likes;
    cancelLikeBtn.style.display = "block";
    likeBtn.style.display = "none";
}

async function updateCancelLikes(){
    let response = await fetch("https://csumb.space/api/videoLikes.php?videoId=FgtBWb2k5N8?si=qw3YZI1CGPCEos0G&action=cancelLike");
    let data = await response.json();
    console.log(data);
    document.querySelector("#likes").textContent = data.likes;
    cancelLikeBtn.style.display = "none";
    likeBtn.style.display = "block";
}


let container = document.querySelector(".comments");
let commentsBtn = document.querySelector("#commentsBtn");
commentsBtn.addEventListener("click", comments);
async function comments(){
    let response = await fetch("https://csumb.space/api/videoLikes.php?videoId=FgtBWb2k5N8?si=qw3YZI1CGPCEos0G&action=comments");
    let data = await response.json();
    console.log(data);
    container.innerHTML = "";
    let author_date = document.createElement("p");
    let comment = document.createElement("p");
    // let stars = document.createElement("img");
    // stars.src = "images/star.jpg";
        author_date.textContent = `${data[1].author} - Date ${data[1].date}`
        comment.textContent = `"${data[1].comment}" - Rating ${data[1].rating}`;
        container.appendChild(author_date);
        container.appendChild(comment);
   
}