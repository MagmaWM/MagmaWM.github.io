  $(document).ready(function() {
    $("#docs").hover(
      function() {
        $("#document-icon").addClass("fa-bounce");
      },
      function() {
        $("#document-icon").removeClass("fa-bounce");
      }
    );
  });
  $(document).ready(function() {
    $("#discord").hover(
      function() {
        $("#discord-icon").addClass("fa-beat");
      },
      function() {
        $("#discord-icon").removeClass("fa-beat");
      }
    );
  });
  $(document).ready(function() {
    $("#github-1").hover(
      function() {
        $("#github-icon").addClass("fa-beat");
      },
      function() {
        $("#github-icon").removeClass("fa-beat");
      }
    );
  });
  $(document).ready(function() {
    $("#github-1").hover(
      function() {
        $("#github-icon").addClass("fa-beat");
      },
      function() {
        $("#github-icon").removeClass("fa-beat");
      }
    );
  });
  $(document).ready(function() {
    $("#logo-header").hover(
      function() {
        $("#logo-header").addClass("fa-bounce");
      },
      function() {
        $("#logo-header").removeClass("fa-bounce");
      }
    );
  });

  $(document).ready(function() {
    function handleScreenResize() {
      var discordIcon = $("#document-icon");
      if ($(window).width() <= 720) {
        discordIcon.addClass("fa-bounce");
      } else {
        discordIcon.removeClass("fa-bounce");
      }
    }

    // Call the function on page load
    handleScreenResize();

    // Call the function when the window is resized
    $(window).resize(handleScreenResize);
  });
 window.addEventListener("DOMContentLoaded", function() {
      document.body.style.opacity = "1";
    });