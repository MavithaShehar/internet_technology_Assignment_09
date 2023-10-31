var current_light = -1;
var current_direction = "RIGHT";
var light_count = 12;
var intervalID = null;

var light_1 ={
    background: "red",
}

const updateLightPanel = () => {
    $(".light").css("background", "white");

    if (current_direction === "RIGHT") {
        current_light++;
        $(".light").eq(current_light).css("background", "red");
        if (current_light === light_count - 1) {
            current_direction = "LEFT";
        }
    } else {
        current_light--;
        $(".light").eq(current_light).css("background", "red");
        if (current_light === 0) {
            current_direction = "RIGHT";
        }
    }
}

$("#startBtn").on("click", () => {
    if (intervalID === null) {
        intervalID = setInterval(updateLightPanel, 100);

        $("#audio")[0].play();

    }

});

$("#stopBtn").on("click", () => {
    clearInterval(intervalID);
    intervalID = null;
    $("#audio")[0].pause();
});