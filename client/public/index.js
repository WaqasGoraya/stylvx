// home slider-start
$(document).ready(function () {
    $(".trending-brands .owl-carousel").owlCarousel({
        autoplay: true,
        loop: true,
        margin: 10,
        nav: true,
        responsive: {
            0: {
                items: 1,
            },
            600: {
                items: 3,
            },
            1000: {
                items: 7,
            },
        },
    });
// home slider-end


// About Us page slider-start
    $(".our-team-sec .owl-carousel").owlCarousel({
        autoplay: true,
        loop: true,
        margin: 10,
        nav: true,
        responsive: {
            0: {
                items: 1,
            },
            767: {
                items: 3,
            },
            1000: {
                items: 4,
            },
        },
    });

// About Us page slider-end

});


// radio btn js code start
document.querySelectorAll('.stroke-div').forEach(strokeDiv => {
    strokeDiv.addEventListener('click', function () {
        // Remove the 'strk' class from all stroke-div elements
        document.querySelectorAll('.stroke-div').forEach(div => {
            div.classList.remove('strk');
        });

        // Add the 'strk' class to the clicked stroke-div
        this.classList.add('strk');
    });
});
// radio btn js code end


//   faq accordaion js code start
function toggleParagraph(collapseId, iconId) {
    const allCollapses = document.querySelectorAll(".collapse");
    const clickedCollapse = document.getElementById(collapseId);
    const clickedIcon = document.getElementById(iconId);
  
    // Close all collapsible sections except the clicked one
    allCollapses.forEach((el) => {
      if (el.id !== collapseId) {
        el.classList.remove("show");
        const otherIcon = document.querySelector(
          `[aria-controls="${el.id}"] img`
        );
        if (otherIcon) {
          otherIcon.src = "./assets/images/plus.png"; // Change back to plus icon
        }
      }
    });
  }
  
  function toggleIcons(plusIconId, minusIconId) {
    const plusIcon = document.getElementById(plusIconId);
    const minusIcon = document.getElementById(minusIconId);
  
    if (plusIcon.style.display !== "none") {
      plusIcon.style.display = "none";
      minusIcon.style.display = "block";
    } else {
      plusIcon.style.display = "block";
      minusIcon.style.display = "none";
    }
  }
//   faq accordaion js code end

  


  // file input js code start
document.querySelector('.custom-file-button').addEventListener('click', function () {
    document.getElementById('fileInput').click();
});

document.getElementById('fileInput').addEventListener('change', function () {
    var fileName = document.getElementById('fileInput').files[0].name;
    document.getElementById('fileName').textContent = fileName;
});
// file input js code end
