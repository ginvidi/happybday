$(document).ready(function () {
  var bubbleChart = new d3.svg.BubbleChart({
    supportResponsive: true,
    //container: => use @default
    size: 600,
    //viewBoxSize: => use @default
    innerRadius: 600 / 3.5,
    //outerRadius: => use @default
    radiusMin: 50,
    //radiusMax: use @default
    //intersectDelta: use @default
    //intersectInc: use @default
    //circleColor: use @default
    data: {
      items: [
        {text: "Wahey!_Have_a_great_birthday", count: "236", signature: "Robin"},

        {text: "Have_a_great_day!", count: "382", signature: "Dan"},
        {text: "Many_happy_returns,_Tom._Don't_spend_your_birthday_watching_the_screen,_head_out_and_have_lots_of_fun!", count: "172", signature: "Nero"},
        {text: "Have_a_great_day_Tom!", count: "123", signature: "Yago"},
        {text: "Happy_bday!", count: "12", signature: "Gine"},
        {text: "Happy_Birthday", count: "170", signature: "Ben"},
        {text: "console.log('Happy_Birthday_Tom!');", count: "382", signature: "Brian"},
        {text: "Happy_Birthday", count: "10", signature: "Joe"}
      ],
      signature: function (item) {return item.signature;},
      eval: function (item) {return item.count;},
      classed: function (item) {return item.text.split(" ").join("");

      }
    },
    plugins: [
      {
        name: "central-click",
        options: {
          text: "(See the wish)",
          style: {
            "font-size": "12px",
            "font-style": "italic",
            "font-family": "Source Sans Pro, sans-serif",
            //"font-weight": "700",
            "text-anchor": "middle",
            "fill": "white"
          },
          attr: {dy: "65px"},
          centralClick: function() {
           console.log("in");
            alert("Here is more details!!" + items[0].text);
          }
        }
      },
      {
        name: "lines",
        options: {
          format: [
            {// Line #0
              textField: "signature",
              classed: {count: true},
              style: {
                "font-size": "28px",
                "font-family": "Source Sans Pro, sans-serif",
                "text-anchor": "middle",
                fill: "white"
              },
              attr: {
                dy: "0px",
                x: function (d) {return d.cx;},
                y: function (d) {return d.cy;}
              }
            },
            {// Line #1
              textField: "text",
              classed: {text: true},
              style: {
                "font-size": "14px",
                "font-family": "Source Sans Pro, sans-serif",
                "text-anchor": "middle",
                fill: "white"
              },
              attr: {
                dy: "20px",
                x: function (d) {return d.cx;},
                y: function (d) {return d.cy;}
              }
            }
          ],
          centralFormat: [
            {// Line #0
              style: {"font-size": "50px"},
              attr: {}
            },
            {// Line #1
              style: {"font-size": "30px"},
              attr: {dy: "40px"}
            }
          ]
        }
      }]
  });




});
