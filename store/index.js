import Vuex from 'vuex'

const store = () => new Vuex.Store({

  state: {
    todolist: []
  },
  getters: {
    todolist: state => state.todolist
  },
  mutations: {
    add (state, task) {
      state.todolist.push({
        task,
        todo: true,
        proceed: false,
        done: false
      })
    },
    remove (state, { task }) {
      state.todolist.splice(state.todolist.indexOf(task), 1)
    },
    isTodo (state, { task }) {
      state.todolist.indexOf(task).todo = true
      state.todolist.indexOf(task).proceed = false
      state.todolist.indexOf(task).done = false
    },
    isProceed (state, { task }) {
      state.todolist.indexOf(task).todo = false
      state.todolist.indexOf(task).proceed = true
      state.todolist.indexOf(task).done = false
    },
    isDone (state, { task }) {
      state.todolist.indexOf(task).todo = false
      state.todolist.indexOf(task).proceed = false
      state.todolist.indexOf(task).done = true
    }
  },
  actions: {
    add ({ commit }, task) {
      commit('add', task)
    },
    remove ({ commit }, task) {
      commit('remove', task)
    },
    isTodo ({ commit }, task) {
      commit('isTodo', task)
    },
    isProceed ({ commit }, task) {
      commit('isProceed', task)
    },
    isDone ({ commit }, task) {
      commit('isDone', task)
    }
  }
})

export default store
