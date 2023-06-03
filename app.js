$(document).ready(function() {
  $("#docs").hover(function() {
    $("#document-icon").toggleClass("fa-bounce");
    $("#document-icon").toggleClass("glow-orange")
  });

  $("#discord").hover(function() {
    $("#discord-icon").toggleClass("fa-beat");
  });

  $("#github-1").hover(function() {
    $("#github-icon").toggleClass("fa-beat");
  });

  $("#logo-header").hover(function() {
    $(this).toggleClass("fa-bounce");
  });

  $(document).ready(function() {
    $(".logo-text").hover(function() {
      $(this).toggleClass("glow-orange-text");
      $(".logo-header").toggleClass("glow-orange");
    });
  });
  
  $(document).ready(function() {
    $(".header").hover(function() {
      $(".header-container::after").toggleClass("glow-orange");
    });
  });

$(document).ready(function() {
  $("#discord").hover(function() {
    $("#discord-icon").toggleClass("glow-blue");
  });

  $("#github-1").hover(function() {
    $("#github-icon").toggleClass("glow-white");
  });
});

  
  function handleScreenResize() {
    var discordIcon = $("#document-icon");
    if ($(window).width() <= 720) {
      discordIcon.addClass("");
    } else {
      discordIcon.removeClass("");
    }
  }


  handleScreenResize();

  $(window).resize(handleScreenResize);
});

window.addEventListener("DOMContentLoaded", function() {
  document.body.style.opacity = "1";
});

function handleUnimplemented() {
  alert("This feature is not yet available, sorry for the inconvenience");
}