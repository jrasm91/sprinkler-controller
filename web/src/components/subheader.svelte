<script lang="ts">
	export let title: string;
</script>

<section class="p-4 h-16 flex place-items-center justify-between border-b border-b-slate-600">
	<h1 class="text-xl">{title}</h1>
	<slot name="buttons" />
</section>
