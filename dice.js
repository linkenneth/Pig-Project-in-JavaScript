// JavaScript Document

function make_fair_die(sides) {
	sides = sides || 6;
	if (sides < 1 || !isint(sides)) {
		throw 'Illegal value for sides';
	}
	function die() {
		return Math.ceil(Math.random()*sides)
	}
	return die
}

function isint(object) {
	if (object == parseInt(object, 10)) return true;
	else return false
}

function make_test_die() {
	var outcomes = new Array()
	for (var i = 0; i < arguments.length; i++) {
		outcomes[i] = arguments[i];
	}
	if (!outcomes.length > 0) throw 'You must supply outcomes to make_test_die';
	for (var o in outcomes) {
		if (!(isint(outcomes[o]) && outcomes[o] >= 1)) throw 'Outcome is not a positive integer';
	}
	var index = outcomes.length - 1
	function die() {
		index = (index + 1) % outcomes.length
		return outcomes[index]
	}
	return die
}