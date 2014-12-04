$(function() {

  var tableHeight = $('.issue-table').height();
  var rightColumnHeight = tableHeight - $('.sml-ad').outerHeight();
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

    } else {

      liRightHeight = liRightHeight + $(elem).outerHeight();

      if (liRightHeight < rightColumnHeight) {

        rightLi.push(elem);

      } else {

        bottomLi.push(elem);

      }
    }

  }); 
  
  console.log("table height = "+tableHeight+"; left height = "+liLeftHeight+"; Right Height = "+liRightHeight);
  console.log(leftLi);
  console.log(rightLi);
  console.log(bottomLi);

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

});