<script type="ts">
	import { goto } from "$app/navigation";


    function add(){
        count += 1;
    }

    function subtract(){
        count -= 1;
    }

$: count = 0;
</script>

<div> Count {count} </div>

<button on:click={subtract}>Subtract</button>

<button on:click={()=>goto("/counter/"+count)}>Go</button>

<button on:click={add}>Add</button>