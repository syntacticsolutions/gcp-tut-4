<template>
    <div id="login-container">
    </div>
</template>

<script>

export default {
    mounted () {
        // Make sure to change this later!!!!!!!!!!!!!!!!!!!!!!!
        window.ui.start('#login-container', {
            signInOptions: [
                window.firebase.auth.EmailAuthProvider.PROVIDER_ID,
                window.firebase.auth.GoogleAuthProvider.PROVIDER_ID,
                window.firebase.auth.FacebookAuthProvider.PROVIDER_ID,
                window.firebase.auth.GithubAuthProvider.PROVIDER_ID,
                window.firebase.auth.TwitterAuthProvider.PROVIDER_ID
            ],
            signInSuccessUrl: 'https://upheld-beach-230723.firebaseapp.com'
        })
    }
}
</script>
<style lang="scss">

#login-container {
    margin-top: 30vh;
}

</style>

