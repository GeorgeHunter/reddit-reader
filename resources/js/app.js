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


                // Items for Inclusion
                var postTitle = "<h3>" + postTitleContent + "</h3>";
                var permalink = post.data.permalink;
                var itemContent = '<a href="http://reddit.com' + permalink + '">' + postTitle + "</a>";
                var commentLink = '<a href="http://reddit.com' + permalink + '" class="block">' + "View the Comments " + "</a>";
                var author = post.data.author;

                console.log(post.data);

                //var thumbnail = post.data.preview;


                var previewLogic = function() {
                    if (preview === "self") {
                        return "";
                    } else {
                        return preview;
                    }
                }


                $("#wrapper").append( '<div class="item">' + itemContent + '<img src="' + previewLogic() + '" class="block item__img">' + author + commentLink + '</div>' );

            }
        )
    }
)