<template>
  <section class="section">
    <div class="columns" style="overflow-x: auto; height: 85vh">
      <div class="column is-3" v-for="(item, index) in columns" :key="index">
        <div class="card">
          <header class="card-header">
            <p class="card-header-title has-text-grey">
              {{ item.name }}
            </p>
          </header>
          <div
            class="card-content box"
            v-for="(task, index) in item.tasks"
            :key="index"
          >
            <div class="content">
              <p>{{ task.name }}</p>
            </div>
          </div>
          <div class="field" style="margin: 10px">
            <input
              type="text"
              class="input"
              placeholder="+ Enter new task"
              @keyup.enter="createTask"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'HomePage',

  async fetch({ store, error }) {
    try {
      await store.dispatch('board/fetchColumns')
    } catch (e) {
      console.error(e.response)
    }
  },

  computed: mapState({
    columns: (state) => state.columns.columns,
  }),

  methods: {
    createTask(item) {
      this.tasks.push(item)
    },
  },
}
</script>

<style scoped>
.box {
  margin: 10px;
  border: 1px solid rgb(209, 205, 205);
}
</style>
