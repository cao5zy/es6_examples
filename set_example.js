
function init_set() {
	const set = new Set([1,2,3,4]);
	console.log(set);
}

function add_to_set() {
	const set = new Set();
	set.add(1).add(2).add(3);
	console.log(set);
}

function set_unique() {
	const set = new Set([1,2,3,4,4]);
	console.log([...set]);
}

init_set();//Set {1, 2, 3, 4}
add_to_set();//Set {1, 2, 3}
set_unique();//[1,2,3,4]