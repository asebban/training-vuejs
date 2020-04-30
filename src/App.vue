<template>
  <div class="container">
    <div class="row">
      <div class="col-md-4">
      <input type="text" class="form-control" v-model.number="user.name">
        <textarea name="description" id="description" cols="30" rows="10" v-model="user.description"></textarea>
      </div>
      <div class="col-md-offset-8"></div>
    </div>
    <div class="form-group">
      <label for="sendmail">
        <input type="checkbox" id="sendmail" class="form-control" value="SendMail" v-model="user.sendMail">Send Mail
      </label>
      <label for="sendInfoMail">
        <input type="checkbox" value="SendInfoMail" class="form-control" id="sendInfoMail" v-model="user.sendMail">Send info mail
      </label>
    </div>
    <p>{{ user.name }}</p>
    <p style="white-space: pre">{{ user.description }}</p>
    <p>Send Mail: {{ user.sendMail }}</p>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        user: {
          name: 'Ahmed',
          age: 30,
          description: 'Some description',
          sendMail: []
        }
      }
    }
  }
</script>

<style scoped>
  p {
    border: solid 1px;
  }
</style>
