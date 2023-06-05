<script lang="ts">
	import PlusIcon from 'svelte-material-icons/PlusBoxOutline.svelte';
	import Button from '../../components/button.svelte';
	import Modal from '../../components/modal.svelte';
	import Subheader from '../../components/subheader.svelte';

	let adding = true;
</script>

<Subheader title="Zones">
	<button
		class="flex gap-1 hover:bg-slate-600 rounded-lg p-2"
		slot="buttons"
		on:click={() => (adding = true)}
	>
		<PlusIcon size="24" />
		<span>New Zone</span>
	</button>
</Subheader>

{#if adding}
	<Modal title="New Zone" on:close={() => (adding = false)}>
		<section>
			<form>
				<div class="p-4">
					<div class="flex flex-col gap-2">
						<label for="input-name" class="text-sm">Name</label>
						<input
							id="input-name"
							aria-labelledby="label-name"
							type="text"
							class="bg-gray-600 text-lg rounded-xl pl-4 py-1 border-white"
						/>
					</div>
				</div>
				<div class="border-t border-t-slate-500 p-4 flex justify-end">
					<Button text="Add Zone" variant="confirm" />
				</div>
			</form>
		</section>
	</Modal>
{/if}
