<script lang="ts">
	export let text = '';
	export let fullWidth = false;
	export let rounded = false;
	export let variant: 'default' | 'success' | 'info' | 'confirm' = 'default';
	export let size: 'sm' | 'md' | 'lg' = 'md';
	export let customClass = '';
	export let type: 'submit' | 'button' = 'submit';

	$: colorClasses = (() => {
		switch (variant) {
			case 'default':
				return 'bg-blue-600 hover:bg-blue-500';

			case 'confirm':
				return 'bg-green-600 hover:bg-green-500';

			default:
				return '';
		}
	})();
</script>

<button
	on:click
	{type}
	class="p-2 {rounded ? 'rounded-full' : ''} text-{size} {fullWidth
		? 'w-full'
		: ''} {colorClasses} {customClass}"
>
	{text}
	<slot />
</button>
