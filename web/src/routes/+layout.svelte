<script lang="ts">
	import '../app.css';
	import HistoryIcon from 'svelte-material-icons/History.svelte';
	import WaterIcon from 'svelte-material-icons/Water.svelte';
	import ClockIcon from 'svelte-material-icons/Clock.svelte';
	import SunClockIcon from 'svelte-material-icons/SunClock.svelte';
	import { page } from '$app/stores';

	interface Route {
		link: string;
		text: string;
		icon: typeof HistoryIcon;
		bgClass: string;
	}

	const routes: Route[] = [
		{
			text: 'Zones',
			link: '/zones',
			icon: WaterIcon,
			bgClass: 'bg-green-800',
		},
		{
			text: 'Schedule',
			link: '/schedule',
			icon: ClockIcon,
			bgClass: 'bg-sky-800',
		},
		{
			text: 'Sunrise/Sunset',
			link: '/sunrise',
			icon: SunClockIcon,
			bgClass: 'bg-yellow-800',
		},
		{
			text: 'History',
			link: '/history',
			icon: HistoryIcon,
			bgClass: 'bg-indigo-800',
		},
	];
	let now = new Date();

	setInterval(() => (now = new Date()), 1000);
</script>

<div class="h-screen w-screen overflow-hidden bg-black text-white">
	<section
		class="fixed w-full h-16 p-4 dark:bg-black border-b border-b-slate-600 text-white flex items-center justify-between"
	>
		<a href="/">
			<h1 class="text-2xl font-bold">Sprinkler Controller</h1>
		</a>
		<span>{now.toLocaleString()}</span>
	</section>

	<section class="w-full absolute overflow-y-auto top-16 h-[calc(100%-theme(spacing.16))]">
		<main
			class="grid grid-cols-[theme(spacing.24)_auto] md:grid-cols-[theme(spacing.64)_auto] h-full"
		>
			<section class="pt-8 pr-8 w-full">
				<ul class="flex flex-col gap-1">
					{#each routes as route}
						<a
							href={route.link}
							class="rounded-r-full hover:bg-slate-700 {$page.route.id?.startsWith(route.link)
								? 'bg-slate-800 text-blue-200'
								: ''}"
						>
							<li class="p-3 text-md flex content-center items-center">
								<svelte:component this={route.icon} class="text-2xl" />
								<span class="hidden md:block pl-3">{route.text}</span>
							</li>
						</a>
					{/each}
					<li />
				</ul>
			</section>
			<slot />
		</main>
	</section>
</div>
<!-- <Footer /> -->
