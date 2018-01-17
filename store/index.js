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
    remove (state, taskID) {
      state.todolist.splice(taskID, 1)
    },
    isProceed (state, taskID) {
      state.todolist[taskID].todo = false
      state.todolist[taskID].proceed = true
      state.todolist[taskID].done = false
    },
    isDone (state, taskID) {
      state.todolist[taskID].todo = false
      state.todolist[taskID].proceed = false
      state.todolist[taskID].done = true
    }
  },
  actions: {
    add ({ commit }, task) {
      commit('add', task)
    },
    remove ({ commit }, task) {
      commit('remove', task)
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
