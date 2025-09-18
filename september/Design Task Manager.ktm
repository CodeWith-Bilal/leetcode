import java.util.*

class TaskManager(tasks: List<List<Int>>) {

    private val taskMap = mutableMapOf<Int, Pair<Int, Int>>()

    private val pq = PriorityQueue(compareByDescending<Pair<Int, Int>> { it.second }
        .thenByDescending { it.first })

    init {
        for (t in tasks) {
            val userId = t[0]
            val taskId = t[1]
            val priority = t[2]
            taskMap[taskId] = Pair(userId, priority)
            pq.offer(Pair(taskId, priority))
        }
    }

    fun add(userId: Int, taskId: Int, priority: Int) {
        taskMap[taskId] = Pair(userId, priority)
        pq.offer(Pair(taskId, priority))
    }

    fun edit(taskId: Int, newPriority: Int) {
        val (userId, _) = taskMap[taskId]!!
        taskMap[taskId] = Pair(userId, newPriority)
        pq.offer(Pair(taskId, newPriority))
    }

    fun rmv(taskId: Int) {
        taskMap.remove(taskId) 
    }

    fun execTop(): Int {
        while (pq.isNotEmpty()) {
            val (taskId, priority) = pq.poll()
            val entry = taskMap[taskId]
            if (entry != null && entry.second == priority) {
                taskMap.remove(taskId)
                return entry.first
            }
        }
        return -1
    }
}
