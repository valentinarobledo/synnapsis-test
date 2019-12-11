<template>
<div class="page-login">
	<div class="row">
		<div class="col-md-4">
			<div class="form">
				<div class="title">Iniciar Sesión</div>
				<form v-on:submit.prevent="login()">
					<div class="text">Usuario</div>
						<div class="input-group">
							<input type="text" class="input-group" v-model="form.nombre">
						</div>
						<div class="text">Contraseña</div>
						<div class="input-group">
							<input type="password" class="input-group" v-model="form.password">
						</div>

					<button class="btn btn-in" type="submit">
						Ingresar
					</button>
				</form>
			</div>
		</div>
		<div class="col-md-8">
			<div class="img">
				<img src="/img.png">
			</div>
		</div>
	</div>
</div>
 </template>

<script>
import { mapGetters } from "vuex";
import {
WS_USER_LOGIN

} from "@/store/actions.type";


export default {
  name: 'home',
  components: {
   
  },
 
  data: function() {
		return {
			form: {}
		}
	},
	methods: {
		login () {
			this.$store.dispatch(WS_USER_LOGIN, this.form)
			.then( () => this.$router.push({name: "seccion" }))
			.catch( error => this._handleError(error) );
		},
		_handleError (error) {
			this.form.password = "";
			this.$snotify.error(error.message);
		}
	}
}
</script>

<style lang="scss">
.page-login{
	background:#FFFFFF;
	padding: 30px;
	min-height: 100vh;

	.img{
		background:#1cb0f6;
	}

	.form {
		max-width: 500px;
		margin: 0 auto;
		border-radius: 10px;
		padding: 20px;
		box-shadow: 0 0 5px rgba(0,0,0,0.1);
		padding: 70px 0;
	}

	.input-group {
		margin-bottom: 15px;
		border-radius: 0 0 10px 10px;
		border: none;
		font-size: 20px;
	}

	.text{
		font-size: 16px;
		margin-left: 10px;
		text-align: left;
	}

	.title{
		margin-bottom: 50px;
		color: #1cb0f6;
		font-size: larger;
	}

	.btn-in{
		border-radius: 5px;
		background: #1cb0f6;
		font-size: large;
		font-family: sans-serif;
		color:white;
		font-weight: 100;
		border-bottom: 3px solid #0f6f9c;

		&:hover{
			margin-top: 3px;
			border-bottom:  0px;
			background: #5eb9e4;
		}
	}

	.btn-link{
		color: #FFFFFF;
		text-decoration:none;
		&:hover{
			text-decoration: none;
			color: #FFFFFF;
		}
	}


}
</style>