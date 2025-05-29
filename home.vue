<script setup>
import { ref } from 'vue'

// Daftar menu makanan
const menu = ref([
  { id: 1, nama: 'Nasi Goreng', harga: 15000 },
  { id: 2, nama: 'Mie Ayam', harga: 12000 },
  { id: 3, nama: 'Sate Ayam', harga: 20000 }
])

// Keranjang belanja
const cart = ref([])

// Fungsi untuk menambahkan makanan ke keranjang
const tambahKeKeranjang = (item) => {
  cart.value.push(item)
}
</script>

<template>
  <div>
    <h1>🍽️ Daftar Menu Makanan</h1>
    <ul>
      <li v-for="item in menu" :key="item.id">
        <strong>{{ item.nama }}</strong> - Rp {{ item.harga.toLocaleString() }}
        <button @click="tambahKeKeranjang(item)">Pesan</button>
      </li>
    </ul>

    <hr />

    <h2>🛒 Keranjang Belanja</h2>
    <ul>
      <li v-for="(item, index) in cart" :key="index">
        {{ item.nama }} - Rp {{ item.harga.toLocaleString() }}
      </li>
    </ul>

    <p v-if="cart.length === 0">Keranjang kosong.</p>
  </div>
</template>

<style scoped>
ul {
  list-style: none;
  padding: 0;
}
li {
  padding: 8px 0;
}
button {
  margin-left: 10px;
  padding: 4px 10px;
  background-color: #42b983;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}
button:hover {
  background-color: #368f6e;
}
</style>
