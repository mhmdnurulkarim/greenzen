## Panduan Penggunaan

File yang dapat diubah terletak dalam folder `public`. Selain file dalam folder tersebut, semua file lainnya bersifat penting dan tidak boleh diubah.
Urutan baris mungkin tidak akurat karena perbedaan kode editor atau adanya ekstensi khusus. Saya telah menandai beberapa kode yang dapat diubah dengan tanda bintang (\*).

### Larangan Pengubahan pada File \*.html

1. `data-aos`: Ini adalah elemen animasi (boleh dihapus jika tidak diperlukan).

## Menambah Produk

- **Rating Produk**:
  - Terdapat tag `<svg>`, perhatikan class-nya yang berisi (`class="w-4 h-4 text-yellow-300"`).
  - `text-yellow-300` menunjukkan warna bintang sebagai warna kuning. Ada juga warna abu-abu (`text-gray-200`).
  - Ubah salah satu warna tersebut untuk mengatur rating.
- **Deskripsi Produk**:
  - Deskripsi produk sangat penting untuk diperhatikan karena mengandung JavaScript. Jangan mengubah beberapa kode di bawah ini agar tidak terjadi kesalahan saat membuka deskripsi kandungan, manfaat, dan kegunaan produk.
    - Pada baris 260 terdapat tag `<div>` dengan `id="accordion-collapse-1"` (ini penting untuk diubah).
      - Jika ingin menambahkan produk baru, ganti id-nya menjadi `id="accordion-collapse-2"`. Jika ingin menambah lagi, ganti id-nya menjadi `id="accordion-collapse-3"`, dan seterusnya sesuai jumlah produk.
    - Pada baris 264 terdapat tag `<h2>` dengan `id="kandungan-heading-1"`.
    - Pada baris 266 terdapat tag `<button>` dengan `data-accordion-target="#kandungan-body-1"` dan `aria-controls="kandungan-body-1"`.
    - Pada baris 300 terdapat tag `<div>` dengan `id="kandungan-body-1"` dan `aria-labelledby="kandungan-heading-1"`.
      - Sama seperti sebelumnya, jika ingin menambahkan produk baru, tambahkan angkanya.
      - Ada dua elemen yang harus diubah: `kandungan-heading` dan `kandungan-body`.
    - Terdapat juga elemen `manfaat-heading-1` dan `manfaat-body-1` dalam tag yang sama. Jika ingin menambahkan produk baru, tambahkan angkanya.
      - Ada dua elemen yang harus diubah: `manfaat-heading` dan `manfaat-body`.
    - Terdapat juga elemen `kegunaan-heading-1` dan `kegunaan-body-1` dalam tag yang sama. Jika ingin menambahkan produk baru, tambahkan angkanya.
      - Ada dua elemen yang harus diubah: `kegunaan-heading` dan `kegunaan-body`.

## Menambah Berita

Untuk menambah berita, tidak banyak kode yang perlu diubah. Cukup mengganti gambar, menambahkan beberapa paragraf, dan mengganti link berita.
