import Item from './Item.js';
import Inventory from './Inventory.js';

const inventory = new Inventory();


inventory.addItem(1, 'Laptop', 10, 1000);
inventory.addItem(2, 'Mouse', 50, 20);

console.log('Initial Inventory:');
console.log(inventory.listItems());
/**
 * Output yang diharapkan:
 * Initial Inventory:
 * ID: 1, Name: Laptop, Quantity: 10, Price: 1000
 * ID: 2, Name: Mouse, Quantity: 50, Price: 20
 */

inventory.updateItem(1, 'Laptop', 8, 950);
console.log('\nInventory after update:');
console.log(inventory.listItems());

/**
 * Output yang diharapkan:
 * Inventory after update:
 * ID: 1, Name: Laptop, Quantity: 8, Price: 950
 * ID: 2, Name: Mouse, Quantity: 50, Price: 20
 */

inventory.removeItem(2);
console.log('\nInventory after removal:');
console.log(inventory.listItems());

/**
 * Output yang diharapkan:
 * Inventory after removal:
 * ID: 1, Name: Laptop, Quantity: 8, Price: 950
 */
