$.getJSON(
    "http://www.reddit.com/r/pics.json?jsonp=?",
    function foo(data)
    {
        $.each(
            data.data.children.slice(0, 9),
            function (i, post) {

                // Content Variables
                var postTitleContent = post.data.title;
                var preview = post.data.thumbnail;
                var url = post.data.ur;
                var permalink = post.data.permalink;
                var author = post.data.author;
                var url = post.data.url;



                // Items for Inclusion
                var postTitle = "<h3>" + postTitleContent + "</h3>";
                var itemContent = '<a href="http://reddit.com' + permalink + '">' + postTitle + "</a>";
                var commentLink = '<a href="http://reddit.com' + permalink + '" class="block">' + "View the Comments " + "</a>";

                console.log(post.data);

                //var thumbnail = post.data.preview;


                var previewLogic = function() {
                    if (preview === "self") {
                        return "";
                    } else {
                        return preview;
                    }
                }

                var image = '<img src="' + previewLogic() + '" class="block item__img">';
                var imageLinked = '<a href="' + url + '">' + image + "</a>";





                $("#wrapper").append( '<div class="item">' + itemContent + imageLinked + author + commentLink + '</div>' );

            }
        )
    }
)