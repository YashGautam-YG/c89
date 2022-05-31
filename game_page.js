player1_name=localStorage.getItem("player1_name");
player2_name=localStorage.getItem("player2_name");
player1_score=0;
player2_score=0;
document.getElementById("player1_name").innerHTML=player1_name+" : ";
document.getElementById("player2_name").innerHTML=player2_name+" : ";
document.getElementById("player1_score").innerHTML=player1_score;
document.getElementById("player2_score").innerHTML=player2_score;
document.getElementById("player_question").innerHTML="question turn = "+player1_name;
document.getElementById("player_answer").innerHTML="answer turn  = "+player2_name;
function send(){
    get_word=document.getElementById("word").value;
    word=get_word.toLowerCase();
    console.log("word at lowercase"+word);
    charAt1=word.charAt(1);
    console.log("character 1 = "+charAt1);
    length_divide_2=Math.floor(floor.length/2);
    charAt2=word.charAt(length_divide_2);
    console.log("Character 2 = "+charAt2);
    length_minus_1=word.length-1;
    charAt3=word.charAt(length_minus_1);
    console.log.("character 3 = "+charAt3);
    remove_charAt1=word.replace(charAt1,"_");
    remove_charAt2=word.replace(charAt2,"_");
    remove_charAt3=word.replace(charAt3,"-");
    question_word="<h4 id='word_display'>Q."+
}