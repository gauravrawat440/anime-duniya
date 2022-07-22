<script>
	// @ts-nocheck

	import { onMount } from 'svelte';
	import { Jumper } from 'svelte-loading-spinners';
	import Card from '../components/Card.svelte';
	let loader = true;
	let animes = [];
	onMount(async () => {
		const response = await fetch('/api/topanime.json');
		const data = await response.json();
		if (data) {
			console.log('animes::', data);
			animes = data.data.map((anime) => {
				return {
					id: anime?.mal_id,
					image: anime?.images?.jpg?.image_url,
					name: anime?.title_english,
					badges:
						anime?.genres.length > 0 ? anime.genres.map((genre) => genre?.name) : ['N/A', 'N/A'],
					desc: anime.synopsis,
					all: anime
				};
			});
			loader = !animes.length > 0;
		}
	});
</script>

<section>
	{#if !loader}
		<div class="loader-container grid md:grid-cols-4 sm:grid-cols-2">
			{#each animes as anime}
				<Card character={anime} />
			{/each}
		</div>
	{:else}
		<div class="loader-container flex justify-center pt-20">
			<Jumper size="60" color="#007490" unit="px" duration="1s" />
		</div>
	{/if}
</section>

<style>
</style>
