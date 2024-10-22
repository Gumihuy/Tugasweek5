// Fungsi untuk menghasilkan ID unik
function generateUniqueId() {
  return `_${Math.random().toString(36).slice(2, 9)}`;
}

let orders = [];

// Fungsi untuk menambah pesanan baru
export function addOrder(customerName, items) {
  const totalPrice = items.reduce((total, item) => total + item.price, 0);
  const order = {
      id: generateUniqueId(),  // Menggunakan generateUniqueId untuk ID unik
      customerName,
      items,
      totalPrice,
      status: 'Menunggu' // Status default "Menunggu"
  };
  orders.push(order);
}

// Fungsi untuk memperbarui status pesanan
export function updateOrderStatus(id, newStatus) {
  const order = orders.find(order => order.id === id);
  if (order) {
      order.status = newStatus;
  } else {
      console.log(`Pesanan dengan ID ${id} tidak ditemukan.`);
  }
}

// Fungsi untuk menghitung total pendapatan dari pesanan yang statusnya "Selesai"
export function calculateTotalRevenue() {
  return orders
      .filter(order => order.status === 'Selesai')
      .reduce((total, order) => total + order.totalPrice, 0);
}

// Fungsi untuk menghapus pesanan berdasarkan ID
export function deleteOrder(id) {
  orders = orders.filter(order => order.id !== id);
}

// Export orders array untuk dilihat di main.js
export { orders };
