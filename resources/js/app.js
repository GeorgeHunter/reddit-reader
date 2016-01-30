$.getJSON(
    "http://www.reddit.com/r/pics.json?jsonp=?",
    function foo(data)
    {
        $.each(
            data.data.children.slice(0, 9),
            function (i, post) {

                // Content Variables
                var postTitleContent = post.data.title;

                // Items for Inclusion
                var postTitle = "<h1>" + postTitleContent + "</h1>";
                var permalink = post.data.permalink;


                var itemContent = '<a href="http://reddit.com' + permalink + '">' + postTitle + "</a>";

                var preview = post.data.thumbnail;

                var previewLogic = function() {
                    if (preview === "self") {
                        return "";
                    } else {
                        return preview;
                    }
                }


                $("#wrapper").append( '<div class="reddit-wrap">' + itemContent + '<img src="' + previewLogic() + '">' + '</div>' );

            }
        )
    }
)