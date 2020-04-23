$(document).ready(function () {
    let apiKey = "140a711b7703f5bbedb297df50a74dcf";
    let imgServer = "https://image.tmdb.org/t/p/w500";
    let currentPage = 1;
    let totalPages;

    getMovies(currentPage);
    function getMovies(page){
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
    $("#leftarr").click(function () {
        currentPage--;
        if(currentPage!==0 && currentPage<=totalPages){
            getMovies(currentPage);
            $("#rightarr").show();
        }else {
            $(this).hide();
        }

    });
    $("#rightarr").click(function () {
        currentPage++;
        if(currentPage>totalPages){
            $(this).hide();
        }else if (currentPage>0) {
            getMovies(currentPage);
            $("#leftarr").show();
        }

    });
    
    function parseData(data) {
        $("#mainContainer").empty();
        data.forEach(function (item) {
          $("#mainContainer").append(
              "<div class='elementContainer'>"+
              "<img class='baner' src='"+imgServer+ item.poster_path +"'>"+
            "<h3>Title:<span>"+item.title +"</span></h3>"+
                 "<p><b>Description:</b><span>"+item.overview +"</span></p>" +
              "</div>"
        );
        })
    }
});














