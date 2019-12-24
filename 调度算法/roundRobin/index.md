# round robind

轮询调度策略算法


## 无权轮询调度算法

用cpu调度为例子。有a,b,c三个任务。每一个任务有不同的执行时长。轮询调度就是在单位时间内执行一个任务，然后把资源让给下一个任务。来达到
平均等待时间较小的感觉


## 平滑有权轮询调度算法

* weight 表示当前资源的权重，不变
* current_weight 表示资源的当前权重从0开始
* effect_weight 表示资源的有效权重，从weight开始。如果资源在处理请求的过程中失败次数增加会改变这个effect_weight

在轮询中遍历资源，并将effect_weight赋值给current_weight。同时讲所有资源的effect_weight加和为total。
然后挑选current_weight最大的资源。并且将被挑选中的资源的current_weight减去effect_weight



## 参考资料

* https://mozillazg.com/2019/02/load-balancing-strategy-algorithm-weighted-round-robin.html
* https://blog.csdn.net/zhangskd/article/details/50194069
