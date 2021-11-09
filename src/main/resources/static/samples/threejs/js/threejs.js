(function ($) {
  var sampleName = "threejs",
    samplePath = "samples/threejs/",
    zoomIn = false;

  function isChrome() {
    return navigator.userAgent.indexOf("Chrome") != -1;
  }

  function updateDepth(book, newPage) {
    var page = book.turn("page"),
      pages = book.turn("pages"),
      depthWidth = 16 * Math.min(1, (page * 2) / pages);

    newPage = newPage || page;

    depthWidth = 16 * Math.min(1, ((pages - page) * 2) / pages);
  }

  function loadPage(page, pageElement) {
    $.ajax({ url: samplePath + "pages/page" + page + ".html" }).done(function (
      pageHtml
    ) {
      pageElement.html(pageHtml);
    });
  }

  function zoomHandle(e) {
    if (zoomIn) zoomOut();
    else if (e.target && $(e.target).hasClass("zoom-this")) {
      zoomThis($(e.target));
    }
  }

  function zoomThis(pic) {
    var tmpContainer = $("<div />", { class: "zoom-pic" }),
      transitionEnd = $.cssTransitionEnd(),
      tmpPic = $("<img />"),
      zCenterX = $("#book-zoom").width() / 2,
      zCenterY = $("#book-zoom").height() / 2,
      bookPos = $("#book-zoom").offset(),
      picPos = {
        left: pic.offset().left - bookPos.left,
        top: pic.offset().top - bookPos.top,
      };

    zoomIn = true;

    bookshelf.currentSample().flipbook.turn("disable", true);
    $(window).resize(zoomOut);
    tmpContainer.click(zoomOut);

    tmpPic.load(function () {
      var realWidth = $(this)[0].width,
        realHeight = $(this)[0].height,
        zoomFactor = realWidth / pic.width(),
        picPosition = {
          top: (picPos.top - zCenterY) * zoomFactor + zCenterY + bookPos.top,
          left: (picPos.left - zCenterX) * zoomFactor + zCenterX + bookPos.left,
        },
        position = {
          top: ($(".splash").height() - realHeight) / 2,
          left: ($(".splash").width() - realWidth) / 2,
        },
        translate = {
          top: position.top - picPosition.top,
          left: position.left - picPosition.left,
        };

      $(".samples .bar").css({ visibility: "hidden" });

      $("#book-zoom").transform(
        "translate(" +
          translate.left +
          "px, " +
          translate.top +
          "px)" +
          "scale(" +
          zoomFactor +
          ", " +
          zoomFactor +
          ")"
      );

      $("#book-zoom").bind(transitionEnd, function (e) {
        $(this).unbind(transitionEnd);

        if (zoomIn) {
          tmpContainer.appendTo($(".splash"));

          tmpPic
            .css({
              margin: position.top + "px " + position.left + "px",
            })
            .appendTo(tmpContainer)
            .fadeOut(0)
            .fadeIn(500);
        }
      });
    });

    tmpPic.attr("src", pic.attr("src"));
  }

  function zoomOut() {
    var transitionEnd = $.cssTransitionEnd();

    zoomIn = false;

    $(window).unbind("resize", zoomOut);

    bookshelf.moveBar(true);

    $(".zoom-pic").remove();
    $("#book-zoom").transform("scale(1, 1)");
    $(".samples .bar").css({ visibility: "visible" });

    $("#book-zoom").bind(transitionEnd, function (e) {
      $(this).unbind(transitionEnd);
      bookshelf.currentSample().flipbook.turn("disable", false);
      bookshelf.moveBar(false);
    });
  }

  function loadFlipbook(flipbook) {
    if (flipbook.width() === 0) {
      if (bookshelf.currentSampleName() == sampleName) {
        setTimeout(function () {
          loadFlipbook(flipbook);
        }, 10);
      }

      return;
    }

    flipbook.turn({
      elevation: 50,
      acceleration: !isChrome(),
      autoCenter: true,
      duration: 1500,
      pages: 112,
      width: 960,
      height: 600,
      when: {
        turning: function (e, page, view) {
          var book = $(this),
            currentPage = book.turn("page"),
            pages = book.turn("pages");

          if (currentPage > 3 && currentPage < pages - 3) {
            if (page == 1) {
              book.turn("page", 2).turn("stop").turn("page", page);
              e.preventDefault();
              return;
            } else if (page == pages) {
              book
                .turn("page", pages - 1)
                .turn("stop")
                .turn("page", page);
              e.preventDefault();
              return;
            }
          } else if (page > 3 && page < pages - 3) {
            if (currentPage == 1) {
              book.turn("page", 2).turn("stop").turn("page", page);
              e.preventDefault();
              return;
            } else if (currentPage == pages) {
              book
                .turn("page", pages - 1)
                .turn("stop")
                .turn("page", page);
              e.preventDefault();
              return;
            }
          }
          setTimeout(function () {
            // location.href = "/samples/threejs/pages/page6.html";
          }, 2000);

          updateDepth(book, page);

          if (page >= 2) $(".threejs-book .p2").addClass("fixed");
          else $(".threejs-book .p2").removeClass("fixed");

          if (!$(".splash .bookshelf").is(":visible")) {
            Hash.go("samples/" + sampleName + "/" + page).update();
          }
        },
      },
    });

    flipbook.addClass("animated");
    bookshelf.showSample();
  }

  bookshelf.loadSample(sampleName, function (action) {
    var sample = this;

    bookshelf.preloadImgs(
      ["book-covers.jpg", "pages.png", "pages-depth.png"],
      samplePath + "pics/",
      function () {
        bookshelf.loaded(sampleName);

        if (action == "preload") {
          yepnope({
            test: Modernizr.csstransforms,
            nope: sample.path + "css/threejs-html4.css",
          });

          return;
        }

        sample.previewWidth = 115;
        sample.previewHeight = 73;
        sample.previewSrc = samplePath + "pics/preview.jpg";
        sample.tableContents = 5;
        sample.shareLink = "http://" + location.host + "/#" + samplePath;
        sample.shareText =
          "A book about Steve Jobs in HTML5 using the new turn.js via @turnjs";

        if (!sample.flipbook) {
          var bookClass = Modernizr.csstransforms
            ? "threejs-book-transform threejs-book"
            : "threejs-book";

          sample.flipbook = $("<div />", { class: bookClass })
            .html(
              '<div depth="5" class="hard"> <div class="side"></div> </div>' +
                '<div depth="5" class="hard front-side"> <div class="depth"></div> </div>' +
                '<div class="own-size"></div>' +
                '<div class="own-size even"></div>' +
                '<div class="hard fixed back-side p111"> <div class="depth"></div> </div>' +
                '<div class="hard p112"></div>'
            )
            .bind($.isTouch ? "touchend" : "click", zoomHandle)
            .appendTo($("#book-zoom"));

          loadFlipbook(sample.flipbook);
        } else {
          bookshelf.showSample();
        }
      }
    );
  });
})(jQuery);
