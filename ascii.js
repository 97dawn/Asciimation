// Doeun Kim
// doeun.kim@stonybrook.edu
// extra feature: #2 Control Enabling
"use strict";
var currentAnimation;
var interval;
var currentAnimationArray;


document.addEventListener("DOMContentLoaded", function(event) {
    document.getElementById("stop").disabled = true;
    document.getElementById("start").disabled = false;
    document.getElementById("animation").onchange = setAnimation;
    
    document.getElementById("start").onclick = function(){
        document.getElementById("stop").disabled = false;
        document.getElementById("start").disabled = true;
        document.getElementById("animation").disabled = true;
        currentAnimation = document.getElementById("textarea").value;
        currentAnimationArray = currentAnimation.split("=====\n"); 
        if(document.getElementById("textarea").value != ""){
           interval = setInterval(function() {
                var currentFrame = currentAnimationArray.shift();
                var textArea = document.getElementById("textarea");
                textArea.value = currentFrame;
                currentAnimationArray.push(currentFrame);
            }, 200);    
        }
    };

    document.getElementById("stop").onclick = function(){
        clearInterval(interval);
        document.getElementById("textarea").value = currentAnimation;
        document.getElementById("stop").disabled = true;
        document.getElementById("start").disabled = false;
        document.getElementById("animation").disabled = false;
    };

    document.getElementById("small").onclick = function(){
        document.getElementById("textarea").style.fontSize ="7pt";
        document.getElementById("medium").checked = false;
        document.getElementById("large").checked = false;
    };
    document.getElementById("medium").onclick = function(){
        document.getElementById("textarea").style.fontSize = "12pt";
        document.getElementById("small").checked = false;
        document.getElementById("large").checked = false;
    };
    document.getElementById("large").onclick = function(){
        document.getElementById("textarea").style.fontSize = "24pt";
        document.getElementById("medium").checked = false;
        document.getElementById("small").checked = false;
    };
});

function setAnimation(){
    currentAnimation = ANIMATIONS[document.getElementById("animation").value];
    document.getElementById("textarea").value = currentAnimation;
}

var CUSTOM = 
"                   ＼ ㅣ  /                  \n" + 
"                     @@@                    \n" + 
"                  - @@@@@ -                 \n" + 
"                     @@@                    \n" + 
"                    / ㅣ ＼                  \n" + 
"                                            \n" + 
"                                            \n" + 
"                                            \n" + 
"                     ____                   \n" + 
"                  __|    |__                \n" + 
"                  |________|                \n" + 
"                   | .  . |                 \n" + 
"                   |__<___|                 \n" + 
"                   |  .   |                 \n" + 
"                   |__.___|                 \n" + 
"=====\n" + 
"                   ＼ ㅣ  /                  \n" + 
"                     @@@                    \n" + 
"                  - @@@@@ -                 \n" + 
"                     @@@                    \n" + 
"                    / ㅣ ＼                  \n" + 
"                                            \n" + 
"                                            \n" + 
"                                            \n" + 
"                                            \n" + 
"                     ____                   \n" + 
"                  __|    |__                \n" + 
"                  |________|                \n" + 
"                   | .  . |                 \n" + 
"                   |__<___|                 \n" + 
"                   |__.___|                 \n" + 
"=====\n" + 
"                   ＼ ㅣ  /                  \n" + 
"                     @@@                    \n" + 
"                  - @@@@@ -                 \n" + 
"                     @@@                    \n" + 
"                    / ㅣ ＼                  \n" + 
"                                            \n" + 
"                                            \n" + 
"                                            \n" + 
"                                            \n" + 
"                                            \n" + 
"                     ____                   \n" + 
"                  __|    |__                \n" + 
"                  |________|                \n" + 
"                   | .  . |                 \n" + 
"                   |__<___|                 \n" + 
"=====\n" + 
"                   ＼ ㅣ  /                  \n" + 
"                     @@@                    \n" + 
"                  - @@@@@ -                 \n" + 
"                     @@@                    \n" + 
"                    / ㅣ ＼                  \n" + 
"                                            \n" + 
"                                            \n" + 
"                                            \n" + 
"                                            \n" + 
"                                            \n" + 
"                                            \n" + 
"                     ____                   \n" + 
"                  __|    |__                \n" + 
"                  |________|                \n" + 
"                   |_u_u__|                 \n" + 
"=====\n" + 
"                   ＼ ㅣ  /                  \n" + 
"                     @@@                    \n" + 
"                  - @@@@@ -                 \n" + 
"                     @@@                    \n" + 
"                    / ㅣ ＼                  \n" + 
"                                            \n" + 
"                                            \n" + 
"                                            \n" + 
"                                            \n" + 
"                                            \n" + 
"                                            \n" + 
"                                            \n" + 
"                     ____                   \n" + 
"                  __|    |__                \n" + 
"                  |________|                \n" ;
ANIMATIONS["custom"] = CUSTOM;