<script type="ts">
	import type { LayoutData } from "./$types";


    export let data: LayoutData;
</script>

<div>Welcome { data.name }</div>
<a href="/about">About</a>
<a href="/counter">Counter</a>
<a href="/counter/80">Counter 80</a>
<slot></slot>