<template>
  <div class="container has-text-centered">
    <div class="content">
        <button class="button is-medium is-primary is-rounded" v-on:click="login()">
            <span class="icon">
                <i class="fab fa-discord"></i>
            </span>
            <span>Login with Discord</span>
        </button>
    </div>
  </div>
</template>

<script>

export default {
  name: 'Home',
  mounted () {
    // eslint-disable-next-line
    console.log('created', this);
  },
  methods: {
      login () {
          return window.location.href = '/api/auth';
      }
  }
}
</script>

<style scoped>
    .container {
        height: 100vh;
        display: grid;
    }

    .content {
        margin: auto;
    }
</style>
