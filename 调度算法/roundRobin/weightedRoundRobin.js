// weight 配置文件中指定的该后端的权重，这个值是固定不变的。

// effective weight 
// 后端的有效权重，初始值为weight。
// 在释放后端时，如果发现和后端的通信过程中发生了错误，就减小effective_weight。
// 此后有新的请求过来时，在选取后端的过程中，再逐步增加effective_weight，最终又恢复到weight。
// 之所以增加这个字段，是为了当后端发生错误时，降低其权重。

// current weight
// 后端目前的权重，一开始为0，之后会动态调整。那么是怎么个动态调整呢？
// 每次选取后端时，会遍历集群中所有后端，对于每个后端，让它的current_weight增加它的effective_weight，
// 同时累加所有后端的effective_weight，保存为total。
// 如果该后端的current_weight是最大的，就选定这个后端，然后把它的current_weight减去total。
// 如果该后端没有被选定，那么current_weight不用减小。

class Node {
    constructor(name, weight) {
        this.name = name;
        this.weight = weight;
        // currentWeight表示node的当前权重，effectWeight表示有效权重
        this.currentWeight = 0;
        this.effectiveWeight = weight;

        // fail number
        this.failNumber = 0;
    }
}


// 平滑加权round robin
class WRB {
    constructor(nodes, maxFailed) {
        this.nodes = nodes;
        this.maxFailed = maxFailed;
    }

    getNext() {
        let total = 0;
        let best;

        // 不断的去选取currentWeight最大的node。当选过后改变currentWeight为currentWeight - total
        for(let node of this.nodes) {
            node.currentWeight += node.effectiveWeight;
            total += node.effectiveWeight;

            // 如果资源有处理失败的记录，那么effectiveWeight会小于weight
            if(node.effectiveWeight < node.weight) {
                node.effectiveWeight += 1;
            }

            if(!best || node.currentWeight > best.currentWeight) {
                best = node;
            }
        }
        best.currentWeight -= total;

        return best;
    }

    // nginx 中的实现
    relase(node, state) {
        if(state === 'FAILED') {
            node.failNumber += 1;
            if(node.failNumber > this.maxFailed) {
                node.effectiveWeight -= node.weight / this.maxFailed + 1;
            }
        } else {
            node.failNumber = 0;
        }

        if(node.effectiveWeight < 0) node.effectiveWeight = 0;
    }
}

// 测试
const wrb = new WRB([new Node('a', 12), new Node('b', 3), new Node('c', 8)], 8);

for (var i = 0; i < 10; i++) {
    console.log(wrb.getNext());    
}
