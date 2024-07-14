let search = $("#search")
let btn = $("#btn")

btn.click(function(){
if(search.val() === ""){
    alert("Please enter a search term");
}else{
    $.ajax({
        type: "get",
        url: `https://api.openweathermap.org/data/2.5/weather?q=${search.val()}&appid=4d10f569540e429401f702150860ed54`,
        dataType: "json",
        success: function (response) {
            $(".temp").text((response.main.temp - 273).toFixed(2) + " °C" )
            $(".city").text(response.name)
            $("#humidity").text(response.main.humidity + " %")
            $("#wind").text(response.wind.deg + "km/h")
            

        },
        error: function (error) {
            console.log(error);
        }
    });
}
})