<template>
  <div class="container">
    <div class="row">
      <div class="col-md-6 col-md-offset-3">
        <h1>Http</h1>
        <div class="form-group">
          <label>Username</label>
          <input type="text" class="form-control" v-model="user.username">
        </div>
        <div class="form-group">
          <label >Mail</label>
          <input type="text" class="form-control" v-model="user.email">
        </div>
        <button class="btn btn-primary" @click="submit">Submit</button>
        <button class="btn btn-primary" @click="fetch">Fetch</button>
      </div>
    </div>
    <hr>
    <ul class="list-group">
      <li class="list-group-item" v-for="employee in employees" v-bind:key="employee.id">{{ employee.username }}</li>
    </ul>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        user: {
          username: '',
          email: ''
        },
        employees: []
      }
    },
    methods: {
      submit() {
        this.$http.post('http://localhost:3000/employees', this.user)
          .then(response => {
            console.log(response);
            this.user.username='';
            this.user.email='';
            this.fetch();
          }, error => {
            console.log(error);
          });
      },
      fetch() {
        this.$http.get('http://localhost:3000/employees')
          .then(response => {
            this.employees = response.body;
          }, error => {
            console.log(error);
          });
      }
    }
  }
</script>

<style>
</style>
