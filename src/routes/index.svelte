<script>
	// @ts-nocheck

	import { onMount } from 'svelte';
	import { Jumper } from 'svelte-loading-spinners';
	import Card from '../components/Card.svelte';
	let loader = true;
	let characters = [];
	onMount(async () => {
		const response = await fetch('/api/topcharacters.json');
		const data = await response.json();
		if (data) {
			console.log('response::', data);
			characters = data.data.map((character) => {
				return {
					id: character?.mal_id,
					image: character?.images?.jpg?.image_url,
					name: character?.name,
					badges: character?.nicknames.length > 0 ? [...character.nicknames] : ['N/A', 'N/A'],
					desc: character.about,
					all: character
				};
			});
			loader = !characters.length > 0;
		}
	});
</script>

<section>
	{#if !loader}
		<div class="loader-container grid md:grid-cols-4 sm:grid-cols-2">
			{#each characters as character}
				<Card cardDetailObj={character} />
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
