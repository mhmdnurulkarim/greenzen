urutan line mungkin tidak akurat karena code editor yang berbeda atau terdapat extension khusus. saya menandai beberapa code yang diubah dengan tanda bintang (*)

Tidak boleh diubah.
1. "data-aos" karena ini adalah animasi (jika ingin menghapusnya boleh)

# Menambah Product
	codingan dimulai dari line ke 99
	terdapat contoh codingan jika ingin membuat product baru dengan comment "<!-- Contoh Product Card baru -->" pada line 536 (boleh dihapus)

	- rating product
	  terdapat tag <svg>, perhatikan di class nya terdapat (class="w-4 h-4 text-yellow-300").
	  "text-yellow-300" merupakan warna bintang sebagai warna kuning. ada juga warna abu-abu ("text-gray-200")
	  edit salah satu warna tersebut untuk membuat rating.

	- Deskripsi product
	  pada codingan deskripsi product ini sangat penting untuk diperhatikan, karena didalamnya mengandung javascript, jadi tidak boleh salah mengganti beberapa kodingan dibawah agar tidak terjadi error ketika membuka deskripsi dari kandungan, manfaat dan kegunaan.
	  * pada line 260 terdapat tag <div> dengan id="accordion-collapse-1" (ini penting untuk diubah)
	    jika ingin membuat product baru, ganti id nya menjadi id="accordion-collapse-2". jika ingin menambah lagi, gantin id nya menjadi id="accordion-collapse-3". tergantung dari berapa banyak product

	  * pada line 264 terdapat tag <h2> dengan id="kandungan-heading-1"
	  * pada line 266 terdapat tag <button> dengan data-accordion-target="#kandungan-body-1" dan aria-controls="kandungan-body-1">
	  * pada line 300 terdatat tag <div> dengan id="kandungan-body-1" dan aria-labelledby="kandungan-heading-1"
	    sama dengan sebelumnya, jika ingin membuat product baru tambahkan angkanya.
	    ada 2 (kandugan-heading) dan 3 (kandungan-body) yang harus diubah

	  * terdapat juga "manfaat-heading-1" dan "kandungan-body-1" dalam sebuah tag, sama seperti diatas
	    jika ingin membuat product baru tambahkan angkanya.
	    ada 2 (manfaat-heading) dan 3 (manfaat-body) yang harus diubah	  

	  * terdapat juga "kegunaan-heading-1" dan "kegunaan-body-1" dalam sebuah tag, sama seperti diatas
	    jika ingin membuat product baru tambahkan angkanya.
	    ada 2 (kegunaan-heading) dan 3 (kegunaan-body) yang harus diubah	

# Menambah berita
	Untuk menambah berita, tidak banyak kodingan yang akan diubah. hanya mengganti gambar, menambahkan beberapa paragraf dan mengganti link berita