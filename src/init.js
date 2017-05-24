$(document).ready(function() {
  window.dancers1 = [];
  window.dancers2 = [];
  window.dancers3 = [];

  $('.addDancerButton').on('click', function(event) {
    /* This function sets up the click handlers for the create-dancer
     * buttons on dancefloor.html. You should only need to make one small change to it.
     * As long as the "data-dancer-maker-function-name" attribute of a
     * class="addDancerButton" DOM node matches one of the names of the
     * maker functions available in the global scope, clicking that node
     * will call the function to make the dancer.
     */

    /* dancerMakerFunctionName is a string which must match
     * one of the dancer maker functions available in global scope.
     * A new object of the given type will be created and added
     * to the stage.
     */
    var dancerMakerFunctionName = $(this).data('dancer-maker-function-name');

    // get the maker function for the kind of dancer we're supposed to make
    var dancerMakerFunction = window[dancerMakerFunctionName];

    // make a dancer with a random position

    var dancer = new dancerMakerFunction(
      $('body').height() * Math.random(),
      $('body').width() * Math.random(),
      Math.random() * 1000
    );
    if (window.dancers1.length < 6 && window.dancers2.length === 0 && window.dancers3.length === 0) {
      window.dancers1.push(dancer);
    } else if (window.dancers1.length >= 6 && window.dancers2.length < 6 && window.dancers3.length === 0) {
      window.dancers2.push(dancer);
    } else if (window.dancers1.length >= 6 && window.dancers2.length >= 6 && window.dancers3.length < 6) {
      window.dancers3.push(dancer);
    } else if (window.dancers3.length >= 6) {
      alert('THE DANCE FLOOR IS PACKED!!!');
    }
    $('body').append(dancer.$node);
  });

  $('.lineUpDancersButton').on('click', function(event) {
    if (window.dancers1.length < 6 && window.dancers2.length === 0 && window.dancers3.length === 0) {
      for (let index = 0; index < window.dancers1.length; index++) {
        window.dancers1[index].$node[0].style.top = '500px';
        window.dancers1[index].$node[0].style.left = 150 + (index * 200) + 'px';
        window.dancers1[index].$node[0].style.bottom = '50px';
        window.dancers1[index].$node[0].style.right = 150 + (index * 200) + 'px';
      }
    } else if (window.dancers1.length >= 6 && window.dancers2.length < 6 && window.dancers3.length === 0) {
      for (let index = 0; index < window.dancers2.length; index++) {
        window.dancers2[index].$node[0].style.top = '550px';
        window.dancers2[index].$node[0].style.left = 150 + (index * 200) + 'px';
        window.dancers2[index].$node[0].style.bottom = '25px';
        window.dancers2[index].$node[0].style.right = 150 + (index * 200) + 'px';
      }
    } else if (window.dancers1.length >= 6 && window.dancers2.length >= 6 && window.dancers3.length < 6) {
      for (let index = 0; index < window.dancers3.length; index++) {
        window.dancers3[index].$node[0].style.top = '600px';
        window.dancers3[index].$node[0].style.left = 150 + (index * 200) + 'px';
        window.dancers3[index].$node[0].style.bottom = '5px';
        window.dancers3[index].$node[0].style.right = 150 + (index * 200) + 'px';
      }
    }
  });
});
