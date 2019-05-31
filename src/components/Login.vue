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
    console.log(this);
  },
  methods: {
      login () {
          const redirect_url = `${window.location.protocol}//${window.location.host}/api/auth/callback`;
          window.location.href = `https://discordapp.com/oauth2/authorize?response_type=code&redirect_uri=${redirect_url}&scope=identify%20guilds&client_id=579485779278037012`;
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
