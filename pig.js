// JavaScript Document

var goal = 100

function roll(turn_total, outcome) {
	/* Performs the roll action, which adds outcome to turn_total, or loses the
    turn on outcome == 1.

    Arguments:
    turn -- number of points accumulated by the player so far during the turn
    outcome -- the outcome of the roll (the number generated by the die)

    Returns three values in order:
    - the number of points the player scores after the roll
      Note: If the turn is not over after this roll, this return value is 0.
            No points are scored until the end of the turn.
    - the player turn point total after the roll
    - a boolean; whether or not the player's turn is over
    
    >>> roll(7, 3)
    (0, 10, False)
    >>> roll(99, 1)
    (1, 0, True)
	*/
	if (outcome == 1) {
		return new Array(1, 0, true)
	}
	else {
		return new Array(0, turn_total+outcome, false)
	}
}

function hold(turn_total, outcome) {
	/* Performs the hold action, which adds turn_total to the player's score.

    Arguments:
    turn -- number of points accumulated by the player so far during the turn
    outcome -- the outcome of the roll, ie. the number generated by the die

    Returns three values in order:
    - the number of points the player scores after holding
    - the player turn total after the roll (always 0)
    - a boolean; whether or not the player's turn is over
    
    >>> hold(99, 1)
    (99, 0, True)
    */
	return (turn_total, 0, true)
}