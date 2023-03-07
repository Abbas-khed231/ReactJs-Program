var student_scores = [
    {
        id:1,
        score:17
    },
    {
        id:2,
        score:15
    },
    {
        id:3,
        score:30
    },
    {
        id:4,
        score:12
    }
]

var total_score = 30;
var pass_score = total_score / 2;


for(var i=0; i<=student_scores.length-1; i++){
    var currentScore = student_scores[i].score;
    var currentStudentId = student_scores[i].id;
    if( currentScore < pass_score){
        console.log(currentStudentId);
    }
}


