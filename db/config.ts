import { defineDb, defineTable, column } from 'astro:db';

const Combos = defineTable({
	columns: {
		title: column.text(),
		price: column.json(),
		content: column.json()
	}
});

// https://astro.build/db/config
export default defineDb({
  	tables: { Combos }
});
