<template>
	<div>
	  <b-navbar toggleable="lg" type="dark" variant="info">
	   <b-dropdown id="dropdown-grouped" text="Menú">
	    <b-dropdown-group id="Maestros" header="Maestros">
	      <b-dropdown-item-button v-b-modal.Crud>Sección</b-dropdown-item-button>
	      <b-dropdown-item-button>Mundo</b-dropdown-item-button>
	      <b-dropdown-item-button>Proveedor</b-dropdown-item-button>
	    </b-dropdown-group>
	    <b-dropdown-divider></b-dropdown-divider>

	    <b-dropdown-group id="Compras" header="Compras">
	      <b-dropdown-item-button>Orden de compra</b-dropdown-item-button>
	    </b-dropdown-group>
	    <b-dropdown-divider></b-dropdown-divider>
	    <b-dropdown-item-button>
	      Settings
	    </b-dropdown-item-button>
	  </b-dropdown>

	    <b-collapse id="nav-collapse" is-nav>
	      <b-navbar-nav class="ml-auto">
	      <b-nav-item >Usuario</b-nav-item>
	      <b-nav-item >Salir</b-nav-item>
	      </b-navbar-nav>
	    </b-collapse>
	  </b-navbar>
	  <b-modal id="Crud" ref="Crud" hide-footer size="md" centered title="Secciones">
	 		<div>
	 			<input type="text" class="input-group" placeholder="Código" v-model="form.codigo">
	 			<input type="text" class="input-group" placeholder="Descripción" v-model="form.descripcion"></br>
	 			<button class="btn btn-primary" v-on:click="add()">Agregar</button>
	 			</br>
	 			<table>
	 				<thead>
	 					<tr>
	 						<th></th>
	 						<th>Código</th>
	 						<th>Descripción</th>
	 						<th></th>
	 						<th></th>
	 					</tr>
	 				</thead>
	 				<tbody>
	 					<tr v-for="(item, index) in seccion" :key="index">
	 						<td>{{index+1}}</td>
	 						<td>{{item.codigo}}</td>
	 						<td>{{item.descripcion}}</td>
	 						<td><button class="btn btn-primary" v-on:click="edit()">Editar</button></td>
	 					</tr>
	 				</tbody>
	 			</table>
	 			 	</div>
	 	</b-modal>
</div>
</template>

<script>
import { mapGetters } from "vuex";
import {
WS_USER_LOGIN

} from "@/store/actions.type";


export default {
  name: 'seccion',
  components: {
   
  },
 
  data: function() {
		return {
			form: {}
		}
	},
	methods: {
		
	}
}	

</script>

<style lang="scss">
.btn-secondary{
	background: #40a2b8;
	border-color:#40a2b8;
	&:hover{
		background:#40a2b8;
;
	}
}



</style>