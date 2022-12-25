if (document.getElementById('timer')) {
    var hh = document.getElementById('timer').getAttribute('data-hours');
    var min = document.getElementById('timer').getAttribute('data-minutes');
    var sec = document.getElementById('timer').getAttribute('data-seconds');

    function countDown() {
        sec--;
        if (sec == -01) {
            sec = 59;
            min = min;
            hh = hh - 1;
            hh
        } else {
            //min = min;
            hh = hh;
        }

        // if (min == -01) {
        //     hh = hh -1;
        // }

        if (sec <= 9) {
            sec = "0" + sec;
        }

        time = (hh <= 9 ? "" + hh : hh) + ":" + (min <= 9 ? "" + min : min) + ":" + sec;

        if (document.getElementById) {
            document.getElementById('timer').innerHTML = time;
            // document.getElementById('countdownTimer2').innerHTML = time;
        }

        SD = window.setTimeout("countDown();", 1000);
        if (hh == '00' && min == '00' && sec == '00') {
            sec = "00";
            window.clearTimeout(SD);
        }
    }

    window.onload = countDown;
}