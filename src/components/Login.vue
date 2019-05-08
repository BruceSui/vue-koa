<template>
    <div>
        <label for="username">username</label>
        <input type="text" v-model="username">
        <br>
        <label for="password">password</label>
        <input type="text" v-model="password">
        <br>
        <button @click="login">login</button>
        <br>
        <button @click="logout">logout</button>
        <br>
        <button @click="account">account</button>
    </div>
</template>

<script>
import axios from 'axios'
import cookie from '../utils/cookie'

export default {
    name: 'Login',
    methods: {
        login: function() {
            // const url = '/user';
            const url = '/auth/login';
            axios.post(url, {
                username: this.username,
                password: this.password,
                rememberMe: true,
            }).then(response => {
                console.log(response);
                cookie.setCookie('access_token', response.data.access_token);
                cookie.setCookie('refresh_token', response.data.refresh_token);
            }).catch(error => {
                console.log(error);
                this.$router.push({ path: '/HelloWorld' });
            })
        },
        logout: function() {
            cookie.delCookie('access_token');
            cookie.delCookie('refresh_token');
        },
        account: function() {
            const url = '/uaa/api/account';
            axios.get(url).then(response => {
                console.log(response)
            }).catch(error => {
                console.log(error)
            })
        }
    },
    data () {
        return {
            username: '18332551363',
            password: '123456a',
        }
    },
}
</script>

<style>

</style>


