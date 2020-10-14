<template>

<div class="level section">

<div class="level-item">

    <form>
        <div class="field">
        <p class="control has-icons-left has-icons-right">
            <input class="input" type="email" placeholder="Email">
            <span class="icon is-small is-left">
            <i class="fas fa-envelope"></i>
            </span>
            <span class="icon is-small is-right">
            <i class="fas fa-check"></i>
            </span>
        </p>
        </div>
        <div class="field">
        <p class="control has-icons-left">
            <input class="input" type="password" placeholder="Password">
            <span class="icon is-small is-left">
            <i class="fas fa-lock"></i>
            </span>
        </p>
        </div>
        <div class="field">
        <p class="control">
            <button class="button is-success" @click.prevent="login">
                Login
            </button>
        </p>
        </div>
    </form>
</div>
</div>
</template>

<script>
import session from "@/models/session";

export default {
    methods: {
        login(){
            session.user = {
                name: 'John Smith',
                handle: 'johnsmith',
                profile: 'https://www.history.com/.image/ar_16:9%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cg_faces:center%2Cq_auto:good%2Cw_768/MTU3ODc5MDgzNDc5NjcyNTQz/portrait-of-john-smith.jpg',
            }
            session.addNotification('Yay! You logged in', 'success')
            this.$router.push('/')
        }
    }
}
</script>

<style>

</style>