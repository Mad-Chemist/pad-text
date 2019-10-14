/**
 * @method Returns a padding string given the input text and padding amount.
 * @param {string|number} text - The string or value you want to add pading to
 * @param {number} padAmt - What should the uniform length of the message be?  AKA How much padding should be added?
 * @param {string|number} padChar - What character should be added to the create the padding?
 * @param {boolean} prefix - Should the padding be added at the start or end of the text?
 * @returns {string}
 */
function padText(text, padAmt, padChar=" ", prefix=true) {
	text = `${text}`;
	padAmt = parseInt(padAmt, 10);

	if (!isNaN(padAmt)) {
		while (text && text.length < padAmt) {
			text = Boolean(prefix) ? (padChar + text) : (text + padChar);
		}
	}

	return text;
}

module.exports = padText;
