const test_mode = document.querySelector('test-mode');
const prompt_text = document.querySelector('prompt-text');
const response_text = document.querySelector('response-text');

function calculateWPM(text_length, time_elapsed){
    return 60*text_length/(5*time_elapsed/1000);
}

function prompt(){
    document.getElementById("prompt-text").innerText = "Hello, everyone, this is Spock speaking.";
}
var s = 0;
var first_time = true;
var start_time = 0;
function countFunction(){
    if(first_time){
        start_time = performance.now();
        first_time = false;
        console.log(start_time)
    }
    firstTime = false;
    var x = document.getElementById("response-text").value;
    l = x.length;
    var prompt = "Hello, everyone, this is Spock speaking."
    var text_length = prompt.length;

    if(l==prompt.length){
        var finish_time = performance.now();
        
        const time_elapsed = finish_time - start_time;
        console.log(start_time)
        var wpm = calculateWPM(text_length, time_elapsed);
        document.getElementById("test").innerHTML = wpm;
        firstTime = true;
    }
    if (l<prompt.length){
        s=0;
        for(var i=0; i<l; i++){
            if(x[i]==prompt[i]){
                s += 1
            }
            else{
                s += 0
            }
        }            
        document.getElementById("test").innerHTML = s;
    }
}