<script>
	const name = 'Card';
	export let character = {
		image: 'https://cdn.myanimelist.net/images/characters/3/100534.jpg',
		name: 'Zoro Roronoa',
		desc: 'Zoro was the first crew member to be recruited by Luffy. Zoro is a skilled swordsman who fights with his own unique sword style known as santoryu',
		badges: ['Pirate Hunter', 'Zorojuro']
	};
</script>

<div class="card w-80 bg-gray-200 shadow-xl m-2 p-2">
	<figure><img class="w-42" src={character.image} alt="Shoes" /></figure>
	<div class="card-body">
		<h2 class="card-title">
			{character.name}
			<div class="badge badge-secondary">NEW</div>
		</h2>
		<p>{character.desc.substring(0, 100)}...</p>
		<div class="card-actions justify-end">
			<div class="badge badge-outline">{character.badges[0]}</div>
			<div class="badge badge-outline">{character.badges[1]}</div>
		</div>
	</div>
</div>
