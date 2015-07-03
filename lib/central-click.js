/**
 * central-click.js
 */
d3.svg.BubbleChart.define("central-click", function (options) {
  var self = this;

  self.setup = (function (node) {
    var original = self.setup;
    return function (node) {
      var fn = original.apply(this, arguments);
      self.event.on("click", function(node) {
        if (node.selectAll("text.central-click")[0].length === 1) {
        var className = document.querySelector("svg g.active").getAttribute("class");
        var classes = className.split(" ");
        text = classes[1].replace(/\_/g, " ");
          $(".modal-body .wish").html(text);
          //MODAL
          $("#myModal").on("show", function() {    // wire up the OK button to dismiss the modal when shown

                $("#myModal a.btn").on("click", function(e) {
                    console.log("button pressed");   // just as an example...
                    $("#myModal").modal('hide');     // dismiss the dialog
                });

            });

            $("#myModal").on("hide", function() {    // remove the event listeners when the dialog is dismissed

                $("#myModal a.btn").off("click");
            });

            $("#myModal").on("hidden", function() {  // remove the actual elements from the DOM when fully hidden
                console.log("button pressed");   // just as an example...

            });

            $("#myModal").modal({                    // wire up the actual modal functionality and show the dialog
              "backdrop"  : "static",
              "keyboard"  : true,
              "show"      : true                     // ensure the modal is shown immediately
            });
        }
      });
      return fn;
    };
  })();

  self.reset = (function (node) {
    var original = self.reset;
    return function (node) {
      var fn = original.apply(this, arguments);
      node.select("text.central-click").remove();
      return fn;
    };
  })();

  self.moveToCentral = (function (node) {
    var original = self.moveToCentral;
    return function (node) {
      var fn = original.apply(this, arguments);
      var transition = self.getTransition().centralNode;
      transition.each("end", function() {
        node.append("text").classed({"central-click": true})
          .attr(options.attr)
          .style(options.style)
          .attr("x", function (d) {return d.cx;})
          .attr("y", function (d) {return d.cy;})
          .text(options.text)
          .style("opacity", 0).transition().duration(self.getOptions().transitDuration / 2).style("opacity", "0.8");
      });
      return fn;
    };
  })();
});
