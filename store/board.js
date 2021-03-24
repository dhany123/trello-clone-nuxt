import EventService from '@/services/EventService.js'

export const state = () => ({
    columns: [],
})

export const mutations = {
    // ADD_TASK(state, task) {
    //     state.columns.tasks.push(task)
    // },

    SET_TASKS(state, columns) {
        state.columns = columns
    },

    // SET_EVENT(state, event) {
    //     state.event = event
    // },

    // SET_ITEM(state, event) {
    //     state.events.push(event)
    // }

}

export const actions = {

    // createTask({ commit }, task) {
    //     return EventService.postTask(task).then(() => {
    //         commit('ADD_TASK', response.data)
    //     })
    // },

    fetchColumns({ commit }) {
        return EventService.getColumns().then(response => {
            commit('SET_TASKS', response.data)
        })
    },

    // fetchEvent({ commit }, id) {
    //     return EventService.getEvent(id).then(response => {
    //         commit('SET_EVENT', response.data)
    //     })
    // },

    // async createItem() {

    // }
}
