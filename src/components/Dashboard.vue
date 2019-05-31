<template>
  <div class="container">
    Hello {{ user.username }}!
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'Home',
  data () {
      return {
          user: {}
      }
  },
  mounted () {
      // eslint-disable-next-line
      console.log(this)

      axios.get("/api/auth/me")
            .then(function (res) {
                this.user = res.data;
                this.$swal('Success!', 'Successfully authenticated!', 'success');
            })
            .catch(function () {
                this.$router.push('/login');
                this.$swal('Failure!', 'Something with wrong with authentication', 'failure');
            });
  }
}
</script>

<style scoped>

</style>
