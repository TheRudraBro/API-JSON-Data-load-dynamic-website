// const loadPosts=()=>{
//     const url ='https://jsonplaceholder.typicode.com/posts';
//     fetch(url)
//     .then(response => response.json())
//     .then(json =>
//         {
//             // console.log(json);
//             displayPost(json);
//         })
// }
// const displayPost=(posts)=>{


// //1.Get the container where you want to add the data
// // const postContainer=document.getElementById('post-container');
// // console.log(postContainer);
// const postContainer = document.getElementById('post-container');
// postContainer.innerHTML="";
// // console.log(postContainer);



// //   for(let i=0; i<posts.length; i++){
// //       console.log(posts[i]);
// //   }
// // for(let post of posts){
// //     console.log(post);
// // }

// posts.forEach(post => {
//     // console.log(post.title);
//     //2.Create child element where you want to add the data
//     const li= document.createElement('li');
//     //3.Set the text content of the child element
//     li.innerText=post.title;
//     //4.Append the child element to the container
//     postContainer.appendChild(li);
// });





// }