new Vue({
	el:"#app",
  data:{
  	title:"selam ben vue öğreniyorum",
    description:"Bu Bir Açıklamadır",
    div:"ben bir divim"
  },
methods: {
  changeTitle:function(event){
    this.description=event.target.value
  }
}
});
  