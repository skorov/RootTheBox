function text_animation(term) {
    var index = 0;
    var user = $('#handle').val();
    var reward = $('#reward').val();
    intro_frames = [
        " Knock knock [[b;;]" + user + "],\n",
        "   Welcome to the battlefield!",
        " ",
        "  We are [[b;;]Impact_016] and we have chosen you as a potential recruit.",
        " ",
        "  As you may know, Sarif Labs have abused society for far too long. We are",
        "  here to put a stop to it! We've been track you for some time and think you",
        "  might have what it take those bastards down!",
        " ",
        "  Of course, you will first have to prove yourself... >_<",
        " ",
        "  The hacker underground works together by trading in [[b;;]keys]. We trade",
        "  access that we have for access that another group has; in the process,",
        "  bettering both agendas.",
        " ",
        "  A key may look something like this: [[b;;]key0{1WSARyiqJSk1jHjh}]",
        " ",
        "  When you find a key with Sarif Labs network, use this console to trade it",
        "  in for points. You may use these points to buy additional information or",
        "  access.",
        " ",
        "  We'll keep you updated... IF you keep finding those keys. Last we checked,",
        "  Sarif Labs owned the [[b;;]sariflabs.cc] domain. That's probably a good place to",
        "  start.",
        " ",
        " Happy hunting,\n    - @*#&^%*@&",
    ];
    term.echo("[[b;;]*************** BEGIN SECURE COMMUNIQUE ****************]\n");

    function display(term, index) {
        term.echo(intro_frames[index]);
        index += 1;
        if (index < intro_frames.length) {
            setTimeout(display, 2000, term, index);
        } else {
            term.echo("\n[[b;;]**************** END OF TRANSMISSION ****************]");
        }
    }
    setTimeout(display, 1500, term, index);
}

function loading(term) {
    term.clear();
    var count = 0;
    loading_bar = ["|", "/", "-", "\\"];
    message = " > Establishing secure communication channel, please wait... ";

    function display(term, count) {
        term.clear();
        sym = loading_bar[count % loading_bar.length];
        term.echo(message + sym);
        count += 1;
        if (count < 60) {
            setTimeout(display, 100, term, count);
        } else {
            term.clear();
            text_animation(term);
        }
    }
    display(term, count);
}

function greetings(term) {
    term.pause();
    loading(term);
}

$(document).ready(function() {
    $('#console').terminal({
        /* No commands just animation */
    }, {
        prompt: " > ",
        name: 'console',
        greetings: null,
        tabcompletion: true,
        onInit: function(term) {
            greetings(term);
        },
    });
});