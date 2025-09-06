const loadPosts=()=>{
    const url ='https://jsonplaceholder.typicode.com/posts';
    fetch(url)
    .then(response => response.json())
    .then(data =>
        {
            // console.log(data);
            displayPost(data);
        })
}
// -------------------------------------------------------------

// {
//     "userId": 1,
//     "id": 1,
//     "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
//     "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
// }


// -------------------------------------------------------------------




const displayPost=(posts)=>{
    // 1. Get the conatiner 
    const postContainer=document.getElementById('post-container');
    postContainer.innerHTML="";
    // console.log(postContainer);
posts.forEach(post => {
    // 2. create Element
    const postCard=document.createElement('div');
    postCard.innerHTML=`
   <div class="post-card">
<h2>${post.title}</h2>
<p>${post.body}</p>
</div>
    `
    // 3.add to the container
    postContainer.appendChild(postCard);
});

}