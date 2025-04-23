/**
 * Fungsi rekursif untuk include file HTML ke elemen dengan atribut data-include
 */
function includeHTML() {
    const elems = document.querySelectorAll('[data-include]');
    elems.forEach(el => {
        const file = el.getAttribute('data-include');
        fetch(file)
            .then(res => {
                if (!res.ok) throw new Error('Not found');
                return res.text();
            })
            .then(html => el.innerHTML = html)
            .catch(_ => el.innerHTML = `<p style="color:red">Komponen tidak ditemukan: ${file}</p>`);
    });
}

// Jalankan setelah DOM ready
document.addEventListener('DOMContentLoaded', includeHTML);