import requests
import json


#This file saves pokemons from pokeapi to a file (Don't need to run it)

def save_to_file(pokemons):
	with open("pokemons.txt", "w") as file:
		json.dump(pokemons, file)


def merge_pokemons(pokemons, fetched_pokemons):
	return pokemons + fetched_pokemons


def fetch_data(url):
	return requests.get(url).json()


def get_pokemon_id(pokemons):
	return map(lambda pokemon: dict(pokemon, id=fetch_data(pokemon["url"])["id"]), pokemons["results"])


def collect_pokemons(pokemons, next_url=None):
	if next_url == None:
		return list(get_pokemon_id(pokemons))
	while next_url:
		fetched_data = fetch_data(next_url)
		pokemons += list(get_pokemon_id(fetched_data))
		next_url = fetched_data["next"]
	return pokemons


def main():
	main_url = "https://pokeapi.co/api/v2/pokemon"
	print("Downloading pokemons...")
	first_fetch = fetch_data(main_url)
	pokemons, next_url = collect_pokemons(first_fetch), first_fetch["next"]
	all_pokemon = collect_pokemons(pokemons, next_url)
	print("Writing to file...")
	save_to_file(all_pokemon)
	print("DONE")


if __name__ == '__main__':
	main()