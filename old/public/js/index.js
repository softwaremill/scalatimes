$(function() {

  var tableHeight = $('.issue-table').outerHeight();
  var rightColumnHeight = tableHeight - (3 * $('.sml-ad').outerHeight()+10);
  var lis = $('.left-column.archive ol>li');

  console.log(lis);

  var liLeftHeight = 0;
  var liRightHeight = 0;

  var leftLi = [];
  var rightLi = [];
  var bottomLi = [];

  lis.each(function(index, elem) {

    liLeftHeight = liLeftHeight + $(elem).outerHeight();

    if(liLeftHeight < tableHeight) {

      leftLi.push(elem);

    } else if (liLeftHeight-tableHeight <= 40) {

      leftLi.push(elem);
      tableHeight = liLeftHeight;
      $('.issue-table').css("height", tableHeight);
      rightColumnHeight = tableHeight - $('.sml-ad').outerHeight();

    } else {

      liRightHeight = liRightHeight + $(elem).outerHeight();

      if (liRightHeight < rightColumnHeight) {

        rightLi.push(elem);

      } else if (liRightHeight-rightColumnHeight <= 40) {

        rightLi.push(elem);
        tableHeight = liRightHeight + ($('.sml-ad').outerHeight()+10);
        $('.issue-table').css('height', tableHeight);

      } else {

        bottomLi.push(elem);

      }
    }

  }); 

  var leftColumnHtml="";

  for (var i = 0; i < leftLi.length; i++) {
    leftColumnHtml = leftColumnHtml + leftLi[i].outerHTML;
  };

  $('.left-column.archive ol').html(leftColumnHtml);


  var rightColumnHtml="";

  for (var i = 0; i < rightLi.length; i++) {
    rightColumnHtml = rightColumnHtml + rightLi[i].outerHTML;
  };

  $('.right-column.archive ol').append(rightColumnHtml);

  // split bottomLi between bottom columns
  var numberOfColumns = $('.other-archives .column').length;
  console.log(bottomLi);

  function split(a, n, callback) {
    var len = a.length, out = [], i = 0;
    while (i < len) {
      var size = Math.ceil((len - i) / n--);
      out.push(a.slice(i, i += size));
    }

    callback(out);
  }

  var columnsArray = $('.other-archives .archive.column');

  split(bottomLi, numberOfColumns, function(array) {

    console.log(array);

    for (var i = 0; i < array.length; i++) {
      var columnHtml="";

      for (var l = 0; l < array[i].length; l++) {

        columnHtml = columnHtml + array[i][l].outerHTML;

      }

      $(columnsArray[i]).find('ol').append(columnHtml);
    }

  });
 

});