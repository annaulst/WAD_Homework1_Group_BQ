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
    let dropdownDiv = $('<div style="display:none" data-hidden="true" class="dropdown-menu">')
    let userData = $('<p>John Doe</p> <p>john.doe@example.com</p>')
    let userImg = $('<img id="user-image" src="res/images/john_doe.png"/>');

    iconDiv.append(img);
    searchDiv.append(input, button);
    dropdownDiv.append(userData)
    userDiv.append(userImg);
    nav.append(iconDiv, searchDiv, userDiv);
    header.append(nav);

    $('body').append(header);
    $('body').append(dropdownDiv)

    /* add the dropdown menu */
    $('#user-image').click(function(){
        if ($('.dropdown-menu').attr("data-hidden") == "true")
        {
            $('.dropdown-menu').show()
            $('.dropdown-menu').attr("data-hidden", "false")
        }
        else
        {
            $('.dropdown-menu').hide()
            $('.dropdown-menu').attr("data-hidden", "true")
        }
    })

    /* add the posts */
    let section = $('<section id="main">');
    let postsContainer = $('<div class="posts-container">');

    // json validator: https://jsonlint.com/

    // retrieve posts.json from online storage
    $.get("http://myjson.dit.upm.es/api/bins/7469", function(json_obj) {
        for (obj of json_obj) {
            console.log(obj);
            
            let post = $('<div class="post"></div>');
            let postHeaderDiv = $('<div>');
            let userImage = $('<img id="user-image"/>');
            userImage.attr("src", obj.userImgSrc);
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
            let userImage = $('<img id="user-image"/>');
            userImage.attr("src", obj.userImgSrc);
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