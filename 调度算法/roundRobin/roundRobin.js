const roundRobin = nodes => {
	const res = [];

	let n = 0

	// 一直轮询。这里设置为40只是一个模拟
	for(let i = 0; i<40; i++) {
		const index = n % nodes.length;

		// 如果node的任务还没有完成。那就执行
		if(nodes[index].time) {
			res.push(nodes[index].name);
			nodes[index].time -= 1;
		}
		n ++;
	}

	return res;
}


// 测试
const nodes = [{ name: 'a', time: 2}, { name: 'b', time: 3 }, { name: 'c', time: 4 }];

console.log(roundRobin(nodes));