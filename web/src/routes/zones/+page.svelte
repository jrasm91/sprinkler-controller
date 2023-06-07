<script lang="ts">
	import PlusIcon from 'svelte-material-icons/PlusBoxOutline.svelte';
	import Button from '../../components/button.svelte';
	import Modal from '../../components/modal.svelte';
	import Subheader from '../../components/subheader.svelte';
	import EditIcon from 'svelte-material-icons/Pencil.svelte';
	import { onMount } from 'svelte';
	import type { Zone } from '../../models';

	const makeZone = () => {
		return {
			name: 'Zone',
			relay: 1,
			enabled: true,
			color: '',
			pin: 1,
		};
	};

	let adding = false;
	let zones: Zone[] = [];
	let newZone: Partial<Zone> = makeZone();

	const refresh = async () => {
		zones = await fetch('/api/zones').then((res) => res.json());
	};

	onMount(async () => {
		await refresh();
	});

	const handleAddZone = async () => {
		const res = await fetch('/api/zones', {
			method: 'post',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(newZone),
		}).then((res) => res.json());

		adding = false;
		await refresh();
	};
</script>

<section>
	<Subheader title="Zones">
		<button
			class="flex gap-1 hover:bg-slate-600 rounded-lg p-2 place-items-center"
			slot="buttons"
			on:click={() => (adding = true)}
		>
			<PlusIcon size="18" />
			<span>New Zone</span>
		</button>
	</Subheader>

	<section class="p-4 flex flex-col md:grid md:grid-cols-2 lg:grid-cols-3 gap-2">
		{#each zones as zone (zone.id)}
			<div class="h-16 p-4 w-full rounded-xl bg-slate-800 flex place-items-center justify-between">
				<h6 class="text-lg">{zone.name}</h6>
				<div>
					<Button fullWidth customClass="rounded-full">
						<EditIcon size="16" />
					</Button>
				</div>
			</div>
		{/each}
	</section>
</section>

{#if adding}
	<Modal titleIcon={PlusIcon} title="New Zone" on:close={() => (adding = false)}>
		<section>
			<form on:submit={handleAddZone}>
				<div class="p-4">
					<div class="flex flex-col gap-2">
						<label for="input-name" class="text-md">Name</label>
						<input
							id="input-name"
							aria-labelledby="label-name"
							type="text"
							required
							class="bg-gray-600 text-lg rounded-xl pl-4 py-1 border-white"
							bind:value={newZone.name}
						/>
					</div>
					<div class="flex flex-col gap-2">
						<label for="input-relay" class="text-md">Relay</label>
						<input
							id="input-relay"
							aria-labelledby="label-relay"
							bind:value={newZone.relay}
							type="number"
							required
							class="bg-gray-600 text-lg rounded-xl pl-4 py-1 border-white"
						/>
					</div>
				</div>
				<div class="border-t border-t-slate-500 p-4 flex justify-end">
					<Button type="submit" text="Add Zone" rounded fullWidth on:click={handleAddZone} />
				</div>
			</form>
		</section>
	</Modal>
{/if}
