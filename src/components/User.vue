<template>
    <div class="component">
        <h1>The User Component</h1>
        <p>I'm an awesome User! {{ name }}</p>
      <button @click="changeName">Change user name</button>
        <hr>
        <div class="row">
            <div class="col-xs-12 col-sm-6">
                <app-user-detail :name="name" @nameWasReset="resetName"></app-user-detail>
            </div>
            <div class="col-xs-12 col-sm-6">
                <app-user-edit :name="name"></app-user-edit>
            </div>
        </div>
    </div>
</template>

<script>
    import UserDetail from './UserDetail.vue';
    import UserEdit from './UserEdit.vue';

    import { eventBus } from "../main";

    export default {
        data: function() {
          return {
            name: 'Ahmed'
          }
        },
        methods: {
            changeName: function () {
              this.name = 'Nada';
            },
            resetName($event) {
                this.name = $event;
            }
        },
        components: {
            appUserDetail: UserDetail,
            appUserEdit: UserEdit
        },
        created() {
          eventBus.$on('nameWasEdited', (name) => {
            this.name = name;
          });
        }
    }
</script>

<style scoped>
    div {
        background-color: lightblue;
    }
</style>
