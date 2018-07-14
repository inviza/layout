const posts = [
    {
      img: "https://placeimg.com/400/150/arch",
      title: "Post title 1",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, nemo dignissimos ea temporibus voluptatem maiores maxime consequatur impedit nobis sunt similique voluptas accusamus consequuntur, qui modi nesciunt veritatis distinctio rem!",
      link: 'link-1.com'
    },
    {
      img: "https://placeimg.com/400/150/nature",
      title: "Post title 2",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, nemo dignissimos ea temporibus voluptatem maiores maxime consequatur impedit nobis sunt similique voluptas accusamus consequuntur, qui modi nesciunt veritatis distinctio rem!",
      link: 'link-2.com'
    },
    {
      img: "https://placeimg.com/400/150/arch",
      title: "Post title 3",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, nemo dignissimos ea temporibus voluptatem maiores maxime consequatur impedit nobis sunt similique voluptas accusamus consequuntur, qui modi nesciunt veritatis distinctio rem!",
      link: 'link-3.com'
    }
  ];

const div = document.querySelector('.wrapper');

function createPostCard (post) {
    let basisArticle = document.createElement('div');
    basisArticle.classList.add('post');

    let imgArticle = document.createElement('img');
    imgArticle.classList.add('postpost__image');
    imgArticle.setAttribute('src', post.img);
    basisArticle.append(imgArticle);

    let titleArticle = document.createElement('h2');
    titleArticle.classList.add('post__title');
    titleArticle.textContent = post.title;
    basisArticle.append(titleArticle);

    let textArticle = document.createElement('p');
    textArticle.classList.add('post__text');
    textArticle.textContent = post.text;
    basisArticle.append(textArticle);

    let buttonArticle = document.createElement('a');
    buttonArticle.classList.add('button');
    buttonArticle.textContent = post.link;
    basisArticle.append(buttonArticle);

    return basisArticle;
}

function createCards(post){
    return post.map(item => createPostCard(item)); 
   }

   let newPosts = createCards(posts); 
   for(let item of newPosts){
    div.append(item);
  }