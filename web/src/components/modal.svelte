<script lang="ts">
	import { fade } from 'svelte/transition';
	import { quintOut } from 'svelte/easing';
	import CloseIcon from 'svelte-material-icons/Close.svelte';
	import { createEventDispatcher, onMount, onDestroy } from 'svelte';
	import { browser } from '$app/environment';
	import type Icon from 'svelte-material-icons/Close.svelte';

	const dispatch = createEventDispatcher<{ close: void }>();

	export let title: string;
	export let titleIcon: typeof Icon | undefined = undefined;

	onMount(() => {
		if (browser) {
			const scrollTop = document.documentElement.scrollTop;
			const scrollLeft = document.documentElement.scrollLeft;
			window.onscroll = function () {
				window.scrollTo(scrollLeft, scrollTop);
			};
		}
	});

	onDestroy(() => {
		if (browser) {
			window.onscroll = null;
		}
	});
</script>

<div
	transition:fade={{ duration: 100, easing: quintOut }}
	class="fixed top-0 left-0 w-full h-full z-[9999] bg-black/50 flex place-items-center place-content-center overflow-hidden"
>
	<div class="w-4/5 min-h-[200px] max-h-[75vh] max-w-[400px] bg-gray-800 rounded-xl shadow-md">
		<div class="flex justify-between place-items-center p-2 pl-4 border-b border-b-slate-500">
			<span class="flex gap-1 place-items-center">
				{#if titleIcon}
					<svelte:component this={titleIcon} size="18" />
				{/if}
				<p>{title}</p>
			</span>
			<button class="rounded-full hover:bg-slate-700 p-2" on:click={() => dispatch('close')}>
				<CloseIcon size="24" />
			</button>
		</div>

		<slot />
	</div>
</div>
