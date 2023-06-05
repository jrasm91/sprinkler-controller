<script lang="ts">
	export let text: string;
	export let variant: 'default' | 'success' | 'info' | 'confirm' = 'default';

	$: colorClasses = (() => {
		switch (variant) {
			case 'default':
				return 'bg-slate-600 hover:bg-slate-500';

			case 'confirm':
				return 'bg-blue-600 hover:bg-blue-500';

			default:
				return '';
		}
	})();
</script>

<button class="p-2 rounded-full w-full {colorClasses}">{text}</button>
