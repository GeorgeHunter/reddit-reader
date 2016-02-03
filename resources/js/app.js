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
                var permalink = post.data.permalink;
                var author = post.data.author;
                var url = post.data.url;
                var domain = post.data.domain;
                var ID = post.data.id;




                var previewLogic = function() {
                    if (preview === "self") {
                        return "http://blogs.perl.org/users/hjkl/snoo.png";
                    } else {
                        return preview;
                    }
                };



                //Building Block
                var image = '<img src="' + previewLogic() + '" class="block item__img">';



                // Items for Inclusion
                var postTitle = "<h3>" + postTitleContent + "</h3>";
                var itemContent = '<a href="http://reddit.com' + permalink + '">' + postTitle + "</a>";
                var commentLink = '<a href="http://reddit.com' + permalink + '" class="block">' + "View the Comments " + "</a>";
                var imageLinked = '<a href="' + url + '">' + image + "</a>";
                var authorLinked = '<a href="http://reddit.com/user/' + author + '">' + author + "</a>";

                var lightThumb = '<img src="' + preview + '" class="show-' + ID +  '">';
                var lightMain = '<img src="' + url + '" class="shown-' + ID +  '" style="display: none">';

                var showClass = ".show-43d8ro";
                var shownClass = ".shown-43d8ro";

                console.log(showClass);


                var lightBoxLogic = function() {
                    if (domain === "i.imgur.com") {
                        return lightThumb + lightMain;
                    } else {
                        return imageLinked;
                    }

                };

                $(showClass).click(function() {
                    console.log("showing");
                    $(shownClass).toggle();
                });


                $("#wrapper").append( '<div class="item">' + itemContent + lightBoxLogic() + authorLinked + commentLink + '</div>' );

            }
        )
    }
);