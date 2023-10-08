<template>
    <div class="container">
        <img class="logo" src="../assets/logo.png" alt="">
        <h1>Kayıt Ol</h1>
        <div class="input">
        <input type="text" placeholder="Name" v-model="name">
        <input type="email" name="" id="" placeholder="EMail" v-model="email">
        <div class="visdiv"><span><input type="password" placeholder="Password" class="passVis" v-model="password"><box-icon name='low-vision' type='solid' color='#000' size='1.6rem' class="vision" onclick="icov()"></box-icon></span></div>
        <button v-on:click="signUp">Sign Up</button>
    </div>
    </div>
    
</template>

<script>
    
    export default {
        name:'KayitOl',
        data(){
            return{
                name:'',
                email:'',
                password:''
            }
        },
        methods:{
            signUp(){
                console.warn("SignUp", this.name, this.email, this.password,)
            }
        }
    }

</script>

<style>
.vision{
    position:absolute;
    margin-left: .2rem;
    color: aliceblue;
    cursor: pointer;
}
.container{
    display: flex;
    flex-direction: column;
    align-items: center;
}

.logo{
  width: 10rem;
  height: auto;
}

.input{
    display:flex;
    flex-direction: column;
    width: calc(30%);
    height: 10rem;
    justify-content: center;
    align-items: center;
    border: solid 2px #000;
    border-radius: 25px;
}
.input input{
    margin: .2rem;
    width: calc(50%);
}

.input .visdiv{
    width:calc(100%);
    
}



</style>