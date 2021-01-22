/* $(document).ready(function () {
    $("h1").css("color", "red"); // ensures JQuery has been successfully load before executing script. May be used if scripts are loaded in HTML head section
}) */

$("h1").addClass("big-title margin-50");
$("h1").removeClass("margin-50");

$("button").css("color", "blue"); // address all buttons
$("button").html("<em>Wow</em>");

$("h1").text("Bye");

console.log($("img").attr("src"));
$("a").attr("href", "https://www.bing.com");
console.log($("h1").attr("class"));

$("h1").click(function () {
    $("h1").css("color", "purple");
})

// Plain Javascript to add event listener to all buttons - use loop
// for (const button of document.querySelectorAll("button")) {
//     button.addEventListener("click", function () {
//         document.querySelector("h1").style.color = "red";
//     });
// }

// JQuery to add event listener to all buttons - natively works on all buttons
$("button").click(function () {
    $("h1").css("color", "red");
})

$("input").keypress(function () {
    console.log(event.key);
    $("h1").text(event.key);
})

$("h1").on("mouseover", function () {
    $("h1").css("color", "blue");
})

$("h1").before("<button>New Click</button>")

// prepend & append insert new element right after tag of element inserting into
$("h1").prepend("<button>New Click</button>");
$("h1").append("<button>New Click</button>");

// $("button").remove();

$("button").on("click", function () {
    // $("h1").toggle();
    // $("h1").fadeToggle();
    // $("h1").slideToggle();
    // $("h1").animate({ opacity: 0.5 }); // animate css attributes defined by a number
    $("h1").slideUp().slideDown().animate({ opacity: 0.5 });
});