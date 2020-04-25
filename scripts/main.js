$(document).ready(function () {
    let apiKey = "140a711b7703f5bbedb297df50a74dcf";
    let imgServer = "https://image.tmdb.org/t/p/w500";
    let currentPage = 1;
    let totalPages;
    let keyword;
    let search;
    let modal = document.getElementById("myModal");

    getMovies(currentPage);

    function getMovies(page){
        search = false;
        $.ajax({
            url: "https://api.themoviedb.org/3/movie/top_rated?api_key="+apiKey+"&language=en-US&page="+page,
            type: "GET",
            success: function(response){
                parseData(response.results);
                console.dir(response);
                totalPages = response.total_pages;
            },
            error:function (msg) {
                console.dir(msg);
                alert(msg);
            }
        });
    }
    function searchMovie(keyword,page){
        search = true;
        $.ajax({
            url: "https://api.themoviedb.org/3/search/movie?api_key="+apiKey+"&query="+keyword+"&page="+page,
            type: "GET",
            success: function(response){
                parseData(response.results);
                console.dir(response);
                totalPages = response.total_pages;
            },
            error:function (msg) {
                console.dir(msg);
                alert(msg);
            }
        });
    }
    function getDetails(movieId){
        $.ajax({
            url: "https://api.themoviedb.org/3/movie/"+movieId+"?api_key="+apiKey+"&language=en-US",
            type: "GET",
            success: function(response){
                showDetails(response);
                console.dir(response);
            },
            error:function (msg) {
                console.dir(msg);
                alert(msg);
            }
        });
    }

    $("#leftarr").click(function () {
        currentPage--;

        if(currentPage!==0 && currentPage<=totalPages){
            if(search ===true){
                searchMovie(keyword, currentPage);
            }else{
                getMovies(currentPage);
                $("#rightarr").show();
            }
        }else {
            $(this).hide();
        }

    });
    $("#rightarr").click(function () {
        currentPage++;
        if(currentPage>totalPages){
            $(this).hide();
        }else if (currentPage>0) {
            if (search ===true) {
                searchMovie(keyword, currentPage);
            }else{
                getMovies(currentPage);
                $("#leftarr").show();
            }
        }
    });
    $("#search").click(function () {
        currentPage = 1;
        keyword = $("#searchWord").val();
        searchMovie(keyword, currentPage);
    });

    function parseData(data) {
        $("#mainContainer").empty();
        data.forEach(function (item) {
            $("#mainContainer").append(
                "<div class='elementContainer'>" +
                "<img class='baner' src='" + imgServer + item.poster_path + "'>" +
                "<h3>Title:<span>" + item.title + "</span></h3>" +
                "<p><b>Description:</b><span>" + item.overview + "</span></p>" +
                "<button id='"+ item.id +"'class='showMore'>More</button>" +
                "</div>"
            );
        });
        $(".showMore").on("click",function () {
            let filmId = $(this)[0];
            getDetails(filmId.id);
            modal.style.display = "block";
        });
    }
    function showDetails(data){
        $("#detailsContainer").empty().append(
        "<span class='close'>&times;</span>"+
            "<div>"+data.overview+"</div>"+
            "<div>Popularity:"+data.popularity+"</div>"+
            "<div>Release date: "+data.release_date+"</div>"+
            "<div> Revenue: "+data.revenue+"</div>"+
            "<div>Runtime: "+data.runtime+"</div>"
        );
        $(".close").click(function () {
            modal.style.display = "none";
        });
    }
    window.onclick = function(event) {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    }

});














