<template>
    <div>
        <label for="username">username</label>
        <input type="text" v-model="username">
        <br>
        <label for="password">password</label>
        <input type="text" v-model="password">
        <br>
        <button @click="login">login</button>
    </div>
</template>

<script>
import axios from 'axios'

export default {
    name: 'Login',
    methods: {
        login: function() {
            const url = '/user';
            axios.get(url).then(response => {
                console.log(response);
            }).catch(error => {
                console.log(error);
                this.$router.push({ path: '/HelloWorld' });
            })
        }
    },
    data () {
        return {
            username: '',
            password: '',
        }
    },
}
</script>

<style>

</style>

