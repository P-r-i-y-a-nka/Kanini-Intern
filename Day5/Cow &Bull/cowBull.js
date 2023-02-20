function check() {
    var OriginalWord = document.getElementById("txtword").value;
    var GuessWord = document.getElementById("txtguess").value;
    var cow = 0;
    var bull = 0;
    if (OriginalWord.length == GuessWord.length) {
        for (var i = 0; i < OriginalWord.length; i++) {
            for (var j = 0; j < GuessWord.length; j++) {
                if (OriginalWord.charAt(i) == GuessWord.charAt(j)) {
                    if (i == j)
                        cow += 1;
                    else
                        bull += 1;
                }
            }
        }
    }
    console.log("cow = " + cow + "  " + "bull = " + bull);
    if (cow == OriginalWord.length)
        console.log("Yay!!! you won!!!");
    document.getElementById("txtword").value = "";
}