<script type="ts">
	import type { LayoutData } from ".svelte-kit/types/src/routes/$types";



    export let data: LayoutData;
    function add(){
        count += 1;
    }

    function subtract(){
        count -= 1;
    }

$: count = 0;
</script>

<div> Hey { data.name}: </div>
<div> Count {count} </div>

<button on:click={subtract}>Subtract</button>

<button on:click={add}>Add</button>