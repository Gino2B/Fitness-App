  
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
            <button class="button is-primary" @click.prevent="fbLogin">
            FB Login
            </button>
            <button class="button is-warning" @click.prevent="googleLogin">
            Google Login
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
            this.$router.push('feed')
        },
        fbLogin(){
            FB.login( authInfo =>{
                console.log(authInfo);
                FB.api("me?fields=id,name,email,picture", x=>{
                    session.user = {
                        name: x.name,
                        handle: x.email,
                        profile: x.picture.data.url
                    }
                    session.addNotification('Yay! You logged in', 'success')
                    this.$router.push('feed')
                    console.log(x)
                }  )
            }, { scope: 'public_profile,email,user_photos'})
        },
        async googleLogin(){
            const googleUser = await auth2.signIn();
            console.log(googleUser);
            const profile = googleUser.getBasicProfile();
            console.log(profile);
                    session.user = {
                        name: profile.getName(),
                        handle: profile.getEmail(),
                        profile: profile.getImageUrl()
                    }
                    session.addNotification('Yay! You logged in', 'success')
                    this.$router.push('feed')
        }
    }
}

///////////////////////////////////
//  Load facebook scripts
  window.fbAsyncInit = function() {
    FB.init({
      appId      : '212287283803661',
      cookie     : true,
      xfbml      : true,
      version    : 'v9.0'
    });
      
    FB.AppEvents.logPageView();   
      
  };

  (function(d, s, id){
     var js, fjs = d.getElementsByTagName(s)[0];
     if (d.getElementById(id)) {return;}
     js = d.createElement(s); js.id = id;
     js.src = "https://connect.facebook.net/en_US/sdk.js";
     fjs.parentNode.insertBefore(js, fjs);
   }(document, 'script', 'facebook-jssdk'));

//////////////////////////////////
//  Load Google Scripts
        const googleScriptTag = document.createElement('script')
        googleScriptTag.setAttribute('src', 'https://apis.google.com/js/api:client.js')
        document.head.appendChild(googleScriptTag)
        googleScriptTag.onload = () => {
            // the global gapi variable is created by loading that script
            gapi.load('auth2', () => {
                auth2 = gapi.auth2.init({
                    client_id: "1006295774607-2r6l7avdhbmh67rrh9bntklqqdcagcr8.apps.googleusercontent.com",
                    cookiepolicy: 'single_host_origin',
                    scope: 'profile email'
                })
            })
        }

</script>

<style>
    .button {
        margin: 3px;
    }
    figure.image {
        display: inline-block;
        box-sizing: border-box;
        padding: 5px;
        border: solid blue 1px;
        margin: 3px;
        border-radius: 5px;
        cursor: pointer;
    }
    figure.image:hover {
        padding: 0;
    }
</style>