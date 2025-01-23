<template>
  <main
    class="flex flex-col items-start justify-start w-full h-full text-gray-50"
  >
    <header class="mb-6">
      <h1 class="text-white text-2xl font-medium">School</h1>
    </header>
    <section class="mb-6 p-4 bg-gray-800 rounded-lg">
      <h2 class="text-lg font-semibold mb-2">How to use:</h2>
      <ul class="list-disc list-inside">
        <li>
          To add a new task, type the task description in the input field and
          press Enter.
        </li>
        <li>You can drag and drop tasks to reorder them.</li>
        <li>To mark a task as completed, click on the task.</li>
        <li>To delete a task, click on the delete button next to the task.</li>
      </ul>
    </section>
    <section class="w-full mb-6">
      <h2 class="sr-only">Add New Task</h2>
      <div class="flex items-center relative rounded-md w-full py-6">
        <button
          class="absolute p-1 ml-2 rounded-xl bg-gradient-to-r from-pink-600 to-pink-300 hover:from-pink-500 hover:to-pink-200"
          aria-label="Add a new task"
          @click="InputActive"
        >
          <PlusIcon :width="20" :height="20" />
        </button>
        <input
          type="text"
          ref="add"
          id="task-input"
          class="w-full pl-12 p-2 border-bg-hover border-2 bg-transparent rounded-2xl"
          placeholder="Add a task"
          aria-labelledby="task-input"
          v-model="newTask"
          @keyup.enter="addTask"
        />
      </div>
    </section>
    <div class="w-full h-full flex flex-col overflow-hidden">
      <section class="w-full h-1/2 overflow-y-auto">
        <h2 class="text-xl font-medium p-2">
          Pending Tasks - <span>{{ pendingTasks.length }}</span>
        </h2>
        <transition-group
          name="task"
          tag="ul"
          role="list"
          class="space-y-2 list-none m-0 p-0"
        >
          <li
            class="flex items-center justify-between rounded-2xl bg-bg-hover p-4 cursor-grab"
            role="listitem"
            v-for="task in pendingTasks"
            :key="task.id"
            draggable="true"
            :class="{ 'opacity-50': draggedId && draggedId !== task.id }"
            @dragstart="onDragStart(task.id)"
            @dragover.prevent
            @drop="onDrop(task.id)"
          >
            <div
              class="w-full cursor-pointer"
              @click="updateTaskStatus(task.id)"
            >
              {{ task.text }}
            </div>
            <button
              class="flex items-center justify-center rounded-full size-6 bg-gradient-to-r from-pink-600 to-pink-300 hover:from-pink-500 hover:to-pink-200 text-white text-center cursor-pointer"
              @click="deleteTask(task.id)"
            >
              <CrossIcon />
            </button>
          </li>
        </transition-group>
      </section>
      <section class="w-full h-1/2 overflow-y-auto">
        <h2 class="text-xl font-medium p-2">
          Tasks Completed- <span>{{ completedTasks.length }}</span>
        </h2>
        <transition-group name="task" tag="ul" role="list" class="space-y-2">
          <li
            class="flex items-center justify-between rounded-2xl bg-bg-hover p-4 text-gray-400 line-through"
            role="listitem"
            v-for="task in completedTasks"
            :key="task.id"
          >
            <div
              class="w-full cursor-pointer"
              @click="updateTaskStatus(task.id)"
            >
              {{ task.text }}
            </div>
            <div
              class="flex items-center justify-center rounded-full size-6 bg-gradient-to-r from-pink-600 to-pink-300 hover:from-pink-500 hover:to-pink-200 text-white text-center cursor-pointer"
              @click="deleteTask(task.id)"
            >
              <CrossIcon />
            </div>
          </li>
        </transition-group>
      </section>
    </div>
  </main>
</template>

<script>
import PlusIcon from "@/desingSistem/components/PlusIcon.vue";
import CrossIcon from "@/desingSistem/components/CrossIcon.vue";

export default {
  name: "SchoolView",
  components: {
    PlusIcon,
    CrossIcon,
  },
  data() {
    return {
      tasks: JSON.parse(localStorage.getItem("tasks")) || [],
      newTask: "",
      draggedId: null,
    };
  },
  computed: {
    // Filtrar tareas pendientes (completed: false)
    pendingTasks() {
      return this.tasks.filter((task) => !task.completed);
    },
    // Filtrar tareas completadas (completed: true)
    completedTasks() {
      return this.tasks.filter((task) => task.completed);
    },
  },
  mounted() {
    const storedTasks = JSON.parse(localStorage.getItem("tasks"));
    if (storedTasks) {
      this.tasks = storedTasks;
    }
  },
  methods: {
    InputActive() {
      this.$refs.add.focus();
    },
    addTask() {
      if (this.newTask.trim()) {
        const task = {
          text: this.newTask,
          id: Date.now(),
          completed: false,
        };
        this.tasks.push(task);
        this.newTask = "";
        this.saveTasks();
      }
    },
    updateTaskStatus(taskId) {
      const task = this.tasks.find((t) => t.id === taskId);
      if (task) {
        task.completed = !task.completed;
        this.saveTasks();
      }
    },
    deleteTask(taskId) {
      this.tasks = this.tasks.filter((task) => task.id !== taskId);
      this.saveTasks();
    },
    saveTasks() {
      localStorage.setItem("tasks", JSON.stringify(this.tasks));
    },
    onDragStart(id) {
      this.draggedId = id;
    },
    onDrop(targetId) {
      const draggedIndex = this.tasks.findIndex(
        (task) => task.id === this.draggedId
      );
      const targetIndex = this.tasks.findIndex((task) => task.id === targetId);
      const draggedTask = this.tasks[draggedIndex];
      this.tasks.splice(draggedIndex, 1);
      this.tasks.splice(targetIndex, 0, draggedTask);
      this.saveTasks();
      this.draggedId = null;
    },
  },
};
</script>
<style scoped>
.task-enter-active,
.task-leave-active {
  transition: transform 0.3s ease, opacity 0.3s ease;
}

.task-enter,
.task-leave-to {
  transform: translateY(20px);
  opacity: 0;
}
</style>
