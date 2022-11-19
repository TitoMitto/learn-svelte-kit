<script  type="ts">
	import type { PageData } from "./$types";


    export let data: PageData;
</script>

{#each data.products as product}
    <h1>{ product.title }</h1>
{/each}