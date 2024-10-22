/**
 * TODO
 * Selesaikan kode pembuatan class Inventory dengan ketentuan:
 * - Memiliki properti `items` untuk menampung daftar item dalam bentuk array.
 * - Memiliki method `addItem` untuk menambahkan item ke properti `items`.
 * - Memiliki method `removeItem` untuk menghapus item berdasarkan `id`.
 * - Memiliki method `listItems` untuk mengembalikan string yang merupakan informasi detail barang (dipanggil dari fungs `item.displayDetails()`).
 */

import Item from './Item.js';

class Inventory {
    constructor() {
        this.items = [];
    }

    addItem(id, name, quantity, price) {
        const item = new Item(id, name, quantity, price);
        this.items.push(item);
    }

    removeItem(id) {
        this.items = this.items.filter(item => item.id !== id);
    }

    updateItem(id, name, quantity, price) {
        const item = this.items.find(item => item.id === id);
        if (item) {
            item.updateItem(name, quantity, price);
        } else {
            console.log(`Item with ID ${id} not found.`);
        }
    }

    listItems() {
        if (this.items.length === 0) {
            console.log("No items in inventory.");
        } else {
            this.items.forEach(item => {
                console.log(item.toString());
            });
        }
    }
}

// Jangan hapus kode di bawah ini!
export default Inventory;
