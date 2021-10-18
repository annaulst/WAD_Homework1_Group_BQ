$(function(){

    /* add the nav-bar */
    let header = $('<header>');
    let nav = $('<nav>');
    let iconDiv = $('<div class="icon">');
    let img = $('<img src="res/images/logo.png" alt="PostIt Icon">');
    let searchDiv = $('<div class="search-container">');
    let input = $('<input type="text">');
    let button = $('<button>Search</button>');
    let userDiv = $('<div>');
    let userImg = $('<img id="user-image" src="res/images/login.png"/>');

    iconDiv.append(img);
    searchDiv.append(input, button);
    userDiv.append(userImg);
    nav.append(iconDiv, searchDiv, userDiv);
    header.append(nav);

    $('body').append(header);

    /* add the posts */
    let section = $('<section id="main">');
    let postsContainer = $('<div class="posts-container">');

    // retrieve posts.json from online storage
    $.get("http://myjson.dit.upm.es/api/bins/1sbt", function(json_obj) {
        for (obj of json_obj) {
            console.log(obj);
            
            let post = $('<div class="post"></div>');
            let postHeaderDiv = $('<div>');
            let userImage = $('<img id="user-image" src="res/images/login.png"/>');
            let date = $('<p>').text(obj.date);
            let contentDiv = $('<div class="post-content">');
            let postDescription = $('<p class="post-description">').text(obj.post);
            let likeButton = $('<button class="btn btn-like">');
            let i = $('<i class="fa fa-thumbs-up">');

            likeButton.append(i);
            postHeaderDiv.append(userImage, date);
            contentDiv.append(postDescription, likeButton);
            
            if (obj.img == null) {
                post.append(postHeaderDiv, contentDiv);
            } else {
                let postImg = $('<img>').attr("src", obj.img);
                postImg.attr("alt", obj.imgDescription);
                post.append(postHeaderDiv, postImg, contentDiv);
            }

            postsContainer.append(post);
        }
    });

    // retrieve posts.json locally
    /* $.get("res/json/posts.json", function(json_obj) {
        for (obj of json_obj) {
            console.log(obj);
            
            let post = $('<div class="post"></div>');
            let postHeaderDiv = $('<div>');
            let userImage = $('<img id="user-image" src="res/images/login.png"/>');
            let date = $('<p>').text(obj.date);
            let contentDiv = $('<div class="post-content">');
            let postDescription = $('<p class="post-description">').text(obj.post);
            let likeButton = $('<button class="btn btn-like">');
            let i = $('<i class="fa fa-thumbs-up">');

            likeButton.append(i);
            postHeaderDiv.append(userImage, date);
            contentDiv.append(postDescription, likeButton);
            
            if (obj.img == null) {
                post.append(postHeaderDiv, contentDiv);
            } else {
                let postImg = $('<img>').attr("src", obj.img);
                postImg.attr("alt", obj.imgDescription);
                post.append(postHeaderDiv, postImg, contentDiv);
            }

            postsContainer.append(post);
        }
    }); */


    section.append(postsContainer);
    $('body').append(section);

});