import { orders, addOrder, updateOrderStatus, calculateTotalRevenue, deleteOrder } from './orders.js';

// Menambahkan pesanan baru untuk Alice dan Bob
addOrder('Alice', [
  { name: 'Nasi Goreng', price: 20000 },
  { name: 'Teh Manis', price: 5000 }
]);

addOrder('Bob', [
  { name: 'Mie Goreng', price: 15000 },
  { name: 'Kopi', price: 10000 }
]);

// Melihat daftar pesanan dengan menampilkan seluruh objek termasuk items
console.log('Pesanan Saat Ini:');
console.log(JSON.stringify(orders, null, 2));

/**
 * Output yang diharapkan:
 * [
 *   {
 *     id: '_someUniqueId1',
 *     customerName: 'Alice',
 *     items: [
 *       { name: 'Nasi Goreng', price: 20000 },
 *       { name: 'Teh Manis', price: 5000 }
 *     ],
 *     totalPrice: 25000,
 *     status: 'Menunggu'
 *   },
 *   {
 *     id: '_someUniqueId2',
 *     customerName: 'Bob',
 *     items: [
 *       { name: 'Mie Goreng', price: 15000 },
 *       { name: 'Kopi', price: 10000 }
 *     ],
 *     totalPrice: 25000,
 *     status: 'Menunggu'
 *   }
 * ]
 */

// Memperbarui status pesanan Alice menjadi "Diproses"
updateOrderStatus(orders[0].id, 'Diproses');

// Memperbarui status pesanan Bob menjadi "Selesai"
updateOrderStatus(orders[1].id, 'Selesai');

// Melihat pesanan setelah status diperbarui
console.log('\nPesanan Setelah Update Status:');
console.log(JSON.stringify(orders, null, 2));

/**
 * Output yang diharapkan:
 * [
 *   {
 *     id: '_someUniqueId1',
 *     customerName: 'Alice',
 *     items: [
 *       { name: 'Nasi Goreng', price: 20000 },
 *       { name: 'Teh Manis', price: 5000 }
 *     ],
 *     totalPrice: 25000,
 *     status: 'Diproses'
 *   },
 *   {
 *     id: '_someUniqueId2',
 *     customerName: 'Bob',
 *     items: [
 *       { name: 'Mie Goreng', price: 15000 },
 *       { name: 'Kopi', price: 10000 }
 *     ],
 *     totalPrice: 25000,
 *     status: 'Selesai'
 *   }
 * ]
 */

// Menghitung total pendapatan dari pesanan yang statusnya "Selesai"
console.log('\nTotal Pendapatan dari Pesanan Selesai:');
console.log(calculateTotalRevenue());  // Output yang diharapkan: 25000

// Menghapus pesanan Alice
deleteOrder(orders[0].id);

// Melihat daftar pesanan setelah penghapusan
console.log('\nPesanan Setelah Dihapus:');
console.log(JSON.stringify(orders, null, 2));

/**
 * Output yang diharapkan:
 * [
 *   {
 *     id: '_someUniqueId2',
 *     customerName: 'Bob',
 *     items: [
 *       { name: 'Mie Goreng', price: 15000 },
 *       { name: 'Kopi', price: 10000 }
 *     ],
 *     totalPrice: 25000,
 *     status: 'Selesai'
 *   }
 * ]
 */
