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
        <div class="form-group">
          <label>Type</label>
          <select name="type" id="type" v-model="type">
            <option value="employees">Employees</option>
            <option value="users">Users</option>
          </select>
        </div>
        <button class="btn btn-primary" @click="submit">Submit</button>
        <button class="btn btn-primary" @click="submitAlt">Submit Alternative</button>
        <button class="btn btn-primary" @click="fetch">Fetch</button>
      </div>
    </div>
    <hr>
    <ul class="list-group">
      <li class="list-group-item" v-for="employee in employees"  v-bind:key="employee.id">{{ employee.username }}</li>
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
        resource: [],
        employees: [],
        type: 'users'
      }
    },
    methods: {
      submit() {
        this.resource.save({type: this.type}, this.user)
          .then(response => {
            console.log(response);
          }, error => {
            console.log(error);
          });
      },
      submitAlt() {
        this.resource.saveAlt({type: this.type},  this.user)
          .then(response => {
            console.log(response);
          }, error => {
            console.log(error);
          });
      },
      fetch() {
        this.resource.get({type: this.type})
          .then(response => {
            this.employees = response.body;
          }, error => {
            console.log(error);
          });
      }
    },
    created() {
      const customActions = {
        saveAlt: {method: 'POST'}
      }
      this.resource = this.$resource('{type}', {}, customActions);
    }
  }
</script>

<style>
</style>
