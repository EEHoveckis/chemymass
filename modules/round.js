export default (number, precision) => {
	let rounded = Math.round(number * 10 ** precision) / 10 ** precision;
	const numStr = `${rounded}`;
	const precis = (numStr.substring(numStr.indexOf(".") + 1, numStr.length)).length;
	if (numStr.includes(".")) {
		const extrazeros = (precision - precis < 0) ? 0 : precision - precis;
		for (let i = 0; i < extrazeros; i++) {
			rounded = `${rounded}0`;
		}
	}
	return rounded;
};
