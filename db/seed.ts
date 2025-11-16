import { db, Combos } from 'astro:db';

// https://astro.build/db/seed
export default async function seed() {
	await db.insert(Combos).values([
		{
			title: "Combo Estandar",
			price: { US: 120, BR: 800 },
			content: [
				{ item: "Pierna de cerdo al corte", weight: "10lb" },
    			{ item: "Lomo rebanado", weight: "5lb" },
    			{ item: "Chuleta de pierna", weight: "5lb" },
    			{ item: "Picadillo de cerdo", weight: "3lb" },
    			{ item: "Manteca", weight: "1/2lb" },
    			{ item: "Gordo de cerdo", weight: "5lb" },
    			{ item: "Costilla de cerdo", weight: "3lb" },
    			{ item: "Pescado de mar", weight: "3lb" },
    			{ item: "Hígado de cerdo", weight: "400gr" },
    			{ item: "Pata de cerdo", weight: "1paq" },
    			{ item: "Lascón de cerdo", weight: "1paq" },
    			{ item: "File de huevos", weight: "30u" }
			]
		},
		{
			title: "Combo Extra",
			price: { US: 120, BR: 800 },
			content: [
				{ item: "Pierna de cerdo al corte", weight: "10lb" },
    			{ item: "Lomo rebanado", weight: "5lb" },
    			{ item: "Chuleta de pierna", weight: "5lb" },
    			{ item: "Picadillo de cerdo", weight: "3lb" },
    			{ item: "Manteca", weight: "1/2lb" },
    			{ item: "Gordo de cerdo", weight: "5lb" },
    			{ item: "Costilla de cerdo", weight: "3lb" },
    			{ item: "Pescado de mar", weight: "3lb" },
    			{ item: "Hígado de cerdo", weight: "400gr" },
    			{ item: "Pata de cerdo", weight: "1paq" },
    			{ item: "Lascón de cerdo", weight: "1paq" },
    			{ item: "File de huevos", weight: "30u" }
			]
		}
	]);
}
