function onSubmit() {
  var score = 0;
  var numOfQuestions = 10;
  var answerArr = ['a', 'c', 'b', 'a', 'b', 'a', 'b', 'a', 'c', 'b'];

  var q1 = document.forms['quiz']['q1'].value;
  var q2 = document.forms['quiz']['q2'].value;
  var q3 = document.forms['quiz']['q3'].value;
  var q4 = document.forms['quiz']['q4'].value;
  var q5 = document.forms['quiz']['q5'].value;
  var q6 = document.forms['quiz']['q6'].value;
  var q7 = document.forms['quiz']['q7'].value;
  var q8 = document.forms['quiz']['q8'].value;
  var q9 = document.forms['quiz']['q9'].value;
  var q10 = document.forms['quiz']['q10'].value;
  var submitbutton = document.querySelector("#submit")

  for (var i = 1; i <= numOfQuestions; i++) {
    if (eval('q' + i) === '') {
      alert("You missed question number " + i);
    }
  }

    for (var i = 1; i <= numOfQuestions; i++) {
      if (eval('q' + i) === answerArr[i - 1]) {
        score++;
      }
    }

    var results = document.getElementById('results');
    results.innerHTML = "<h2> You Scored " + score + " points out of " + numOfQuestions + "</h2>"
    alert("You scored " + score + " out of " + numOfQuestions);
    return false;
  }
