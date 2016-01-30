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
                var postTitle = "<h1>" + postTitleContent + "</h1>";
                var permalink = post.data.permalink;
                var itemContent = '<a href="http://reddit.com' + permalink + '">' + postTitle + "</a>";
                var author = post.data.author;


                //var thumbnail = post.data.preview;


                var previewLogic = function() {
                    if (preview === "self") {
                        return "";
                    } else {
                        return preview;
                    }
                }


                $("#wrapper").append( '<div class="reddit-wrap">' + itemContent + '<img src="' + previewLogic() + '" class="item__img">' + author + '</div>' );

            }
        )
    }
)