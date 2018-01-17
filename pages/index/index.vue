<template>
  <div>
    <Row type="flex" justify="center" align="middle">
      <Col :xs="24" :md="8">
        <h3>TO DO</h3>
        <Row type="flex" justify="space-around" v-if="''!== todolist" v-for="todo in todolist">
          <Col span="12" v-if="todo.todo">
            <p span="12">{{ todo.task }}</p>
          </Col>
          <Col span="12" v-if="todo.todo">
            <taskSettings
              span="12"
              :task="todo"
              @toProceed="proceed(todolist.indexOf(todo))"
              @toDone="done(todolist.indexOf(todo))"
              @removeTask="remove(todolist.indexOf(todo))">
            </taskSettings>
          </Col>
        </Row>
      </Col>
      <Col :xs="24" :md="8">
        <h3>PROCEED</h3>
        <Row type="flex" justify="space-around" v-for="todo in todolist">
          <Col v-if="todo.proceed" span="12">
            <p span="12">{{ todo.task }}</p>
          </Col>
          <Col v-if="todo.proceed" span="12">
            <taskSettings
              span="12"
              :task="todo"
              @toDone="done(todolist.indexOf(todo))"
              @removeTask="remove(todolist.indexOf(todo))">
            </taskSettings>
          </Col>
        </Row>
      </Col>
      <Col :xs="24" :md="8">
        <h3>DONE</h3>
        <Row type="flex" justify="space-around" v-for="todo in todolist">
          <Col span="12" v-if="todo.done">
            <p span="12">{{ todo.task }}</p>
          </Col>
          <Col span="12" v-if="todo.done">
            <taskSettings
              span="12"
              :task="todo"
              @toProceed="proceed(todolist.indexOf(todo))"
              @removeTask="remove(todolist.indexOf(todo))">
            </taskSettings>
          </Col>
        </Row>
      </Col>
    </Row>
    <Row type="flex" justify="center" align="middle">
      <Col span="24">
        <Input v-model="taskField" placeholder="Ajouter une tache"></Input>
        <Button type="primary" size="large" icon="plus" @click="add(taskField)">add task</Button>
      </Col>
    </Row>
  </div>
</template>

<script>
  import { mapMutations, mapActions, mapGetters } from 'vuex'
  import taskSettings from '~/components/taskSettings.vue'

  export default {
    data () {
      return {
        taskField: ''
      }
    },
    computed: {
      ...mapGetters([
        'todolist'
      ])
    },
    methods: {
      ...mapMutations([
        'add',
        'remove',
        'isTodo',
        'isProceed',
        'isDone'
      ]),
      ...mapActions({
        addTodo: 'add',
        removeTodo: 'remove',
        isProceed: 'isProceed',
        isDone: 'isDone'
      }),
      add (task) {
        if (this.taskField === '') {
          return this.$Message.error('Task\'s field cannot be empty')
        } else {
          this.addTodo(task)
          this.taskField = ''
        }
      },
      remove (taskID) {
        this.removeTodo(taskID)
      },
      proceed (taskID) {
        this.isProceed(taskID)
      },
      done (taskID) {
        this.isDone(taskID)
      }
    },
    components: {
      taskSettings
    }
  }
</script>

<style>
</style>
