<template>
  <div>
    <Row type="flex" justify="center" align="middle">
      <Col :xs="24" :md="8">
        <h3>TO DO</h3>
        <Row type="flex" justify="space-around">
          <Col span="24" v-if="''!== todolist" v-for="todo in todolist">
            <p>{{ todo.task }}</p>
          </Col>
        </Row>
      </Col>
      <Col :xs="24" :md="8">
        <h3>IN PROGRESS</h3>
        <Row type="flex" justify="space-around">
          <Col span="24" v-if="''!== todolist" v-for="todo in todolist">
            <p>{{ todo.task }}</p>
          </Col>
        </Row>
      </Col>
      <Col :xs="24" :md="8">
        <h3>DONE</h3>
        <Row type="flex" justify="space-around">
          <Col span="24" v-if="''!== todolist" v-for="todo in todolist">
            <p>{{ todo.task }}</p>
          </Col>
        </Row>
      </Col>
    </Row>
    <Row type="flex" justify="center" align="middle">
      <Col span="24">
        <Input v-model="task" placeholder="Ajouter une tache"></Input>
        <Button type="primary" size="large" icon="plus" @click="add(task)">add task</Button>
      </Col>
    </Row>
  </div>
</template>

<script>
  import { mapMutations, mapActions, mapGetters } from 'vuex'

  export default {
    data () {
      return {
        task: ''
      }
    },
    computed: {
      ...mapGetters([
        'todolist'
      ])
    },
    methods: {
      ...mapMutations([
        'add'
      ]),
      ...mapActions({
        addTodo: 'add'
      }),
      add (task) {
        this.addTodo(this.task)
        this.task = ''
      }
    }
  }
</script>

<style>
</style>
