!function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0],p=/^http:/.test(d.location)?'http':'https';if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src=p+'://platform.twitter.com/widgets.js';fjs.parentNode.insertBefore(js,fjs);}}(document, 'script', 'twitter-wjs');

/*window.___gcfg = {lang: 'en'};
(function() {
var po = document.createElement('script'); po.type = 'text/javascript'; po.async = true;
po.src = 'https://apis.google.com/js/plusone.js';
var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(po, s);
})();*/





var step = 0;
var questions = [];
var result = 0;
var numberqs = 0
var answers = [];
var talk = [];
var teams = [];

questions['ita'] = [
	'',
];

questions['eng'] = [
	'',
	'Have you or a friend been in a situation where sexual assault may have occured',
	'Would you like to make a restricted report',
	'Would you like to make an unrestricted report',
  'Do you want to just talk to someone about it without formally doing anything',

];

answers = [
    '',
    'We are sorry you or your friend have found yourself in this situation. Here at the SAPR department, we will do all we can to help you.',
    'To make a restricted report, do this...',
    'To make an unrestricted report, do this...',
    'Please come by the SAPR office, located in the upstairs of Dalgrhen, anytime during our working hours. Or, you can talk to one of your local SAPR guides. If you are unsure who your SAPR guides are, check out our Resources page for more information.',
];

function getLang() {
	var userLang = navigator.language || navigator.userLanguage;
	var lang = userLang.split('-');

	if (lang[0] == 'it')
		return 'ita';
	else
		return 'eng';
}

function answer(res) {
	if (res == 'yes') {
        talk.push(answers[step]);
        next();
		//$('#buttons-box').hide();
		//$('#drop-msg').show();
		//$('#share-button').show();
       // talk.push(answers[step])

		//ga('send', 'event', 'test', 'completed', 'no');
	}
	else
		next();
}

function next() {
    numberqs = questions.eng.length - 1
	if (step == numberqs) {
		result = 1;

        teams = talk.join('</br>');

        document.getElementById("talk-teams").innerHTML = teams;
        $('#step').hide();
        $('#question').hide();
		$('#buttons-box').hide();
		$('#talk-msg').show();
		//$('#share-button').show();

		//ga('send', 'event', 'test', 'completed', 'yes');
	}
	else {
		step++;

		$('#step').html(step  * numberqs / numberqs);
		$('#question').html(questions[getLang()][step] + '?');
	}
}

/*function nextq() {
    numberqs = questions.eng.length - 1
	if (step == numberqs) {
		result = 1;

		$('#buttons-box').hide();
		$('#ask-msg').show();
		$('#share-button').show();

		//ga('send', 'event', 'test', 'completed', 'yes');
	}
    else  {
    step++;

		$('#step').html(step  * numberqs / numberqs);
		$('#question').html(questions[getLang()][step] + '?' + answers[step]);
        talk.push(answers[step -1]);
    }
}*/

function start() {
	$('#question-box').show();
	$('#start-box').hide();
	next();
}
