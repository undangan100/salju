// ==========================================
// KONFIGURASI DATA PERNIKAHAN
// ==========================================

const weddingConfig = {
    // Data Mempelai
    couple: {
        nameShort: "Nama & Nama",
        nameFull: "Nama Lengkap Pria & Nama Lengkap Wanita",
        date: "DD Month YYYY"
    },
    
    // Mempelai Pria
    groom: {
        name: "Nama Lengkap Pria",
        photo: "https://i.ibb.co/xxxxxx/foto-pria.jpg", // Ganti dengan link IBB
        parents: "Bapak Nama Ayah & Ibu Nama Ibu",
        instagram: "https://instagram.com/username"
    },
    
    // Mempelai Wanita
    bride: {
        name: "Nama Lengkap Wanita",
        photo: "https://i.ibb.co/xxxxxx/foto-wanita.jpg", // Ganti dengan link IBB
        parents: "Bapak Nama Ayah & Ibu Nama Ibu",
        instagram: "https://instagram.com/username"
    },
    
    // Detail Acara
    event: {
        akad: {
            date: "Hari, DD Month YYYY",
            time: "08:00 - 10:00 WIB",
            venue: "Nama Tempat Akad",
            address: "Alamat Lengkap Tempat Akad",
            maps: "https://maps.google.com/..."
        },
        resepsi: {
            date: "Hari, DD Month YYYY",
            time: "11:00 - 14:00 WIB",
            venue: "Nama Tempat Resepsi",
            address: "Alamat Lengkap Tempat Resepsi",
            maps: "https://maps.google.com/..."
        }
    },
    
    // Galeri Foto (IBB Links)
    gallery: [
        "https://i.ibb.co/xxxxxx/foto1.jpg",
        "https://i.ibb.co/xxxxxx/foto2.jpg",
        "https://i.ibb.co/xxxxxx/foto3.jpg",
        "https://i.ibb.co/xxxxxx/foto4.jpg",
        "https://i.ibb.co/xxxxxx/foto5.jpg",
        "https://i.ibb.co/xxxxxx/foto6.jpg"
    ],
    
    // Hadiah
    gifts: {
        qris: "https://i.ibb.co/xxxxxx/qris.jpg", // QRIS Image dari IBB
        banks: [
            {
                name: "BCA",
                logo: "https://i.ibb.co/xxxxxx/bca-logo.png",
                number: "1234567890",
                holder: "Nama Pemilik Rekening"
            },
            {
                name: "Mandiri",
                logo: "https://i.ibb.co/xxxxxx/mandiri-logo.png",
                number: "0987654321",
                holder: "Nama Pemilik Rekening"
            }
        ]
    },
    
    // WhatsApp untuk RSVP
    whatsapp: {
        number: "6281234567890", // Format: 62xxxxxxxxxx
        message: "Halo, saya ingin konfirmasi kehadiran pada acara pernikahan:"
    },
    
    // Background Music (Archive.org)
    music: "https://archive.org/download/wedding-music-romantic/perfect-ed-sheeran.mp3"
};

// ==========================================
// INISIALISASI
// ==========================================

document.addEventListener('DOMContentLoaded', function() {
    initSnow();
    loadConfig();
    initCountdown();
    initMusic();
});

// ==========================================
// EFEK SALJU
// ==========================================

function initSnow() {
    const container = document.getElementById('snow-container');
    const snowflakeCount = 50;
    
    for (let i = 0; i < snowflakeCount; i++) {
        createSnowflake(container);
    }
}

function createSnowflake(container) {
    const snowflake = document.createElement('div');
    snowflake.className = 'snowflake';
    snowflake.innerHTML = '❄';
    
    // Random properties
    const startLeft = Math.random() * 100;
    const duration = Math.random() * 3 + 2; // 2-5 seconds
    const delay = Math.random() * 5;
    const size = Math.random() * 1 + 0.5; // 0.5-1.5em
    
    snowflake.style.left = startLeft + '%';
    snowflake.style.animationDuration = duration + 's';
    snowflake.style.animationDelay = delay + 's';
    snowflake.style.fontSize = size + 'em';
    snowflake.style.opacity = Math.random();
    
    container.appendChild(snowflake);
    
    // Reset when animation ends
    snowflake.addEventListener('animationiteration', () => {
        snowflake.style.left = Math.random() * 100 + '%';
    });
}

// ==========================================
// LOAD CONFIGURATION
// ==========================================

function loadConfig() {
    // Cover & Hero
    document.getElementById('cover-names').textContent = weddingConfig.couple.nameShort;
    document.getElementById('hero-names').textContent = weddingConfig.couple.nameFull;
    document.getElementById('cover-date').textContent = weddingConfig.couple.date;
    document.getElementById('wedding-date').textContent = weddingConfig.couple.date;
    document.getElementById('footer-names').textContent = weddingConfig.couple.nameShort;
    
    // Groom
    document.getElementById('nama-pria').textContent = weddingConfig.groom.name;
    document.getElementById('photo-pria').src = weddingConfig.groom.photo;
    document.getElementById('ortu-pria').innerHTML = `Putra dari<br>${weddingConfig.groom.parents}`;
    document.getElementById('ig-pria').href = weddingConfig.groom.instagram;
    
    // Bride
    document.getElementById('nama-wanita').textContent = weddingConfig.bride.name;
    document.getElementById('photo-wanita').src = weddingConfig.bride.photo;
    document.getElementById('ortu-wanita').innerHTML = `Putri dari<br>${weddingConfig.bride.parents}`;
    document.getElementById('ig-wanita').href = weddingConfig.bride.instagram;
    
    // Event Details
    document.getElementById('akad-date').textContent = weddingConfig.event.akad.date;
    document.getElementById('akad-time').textContent = weddingConfig.event.akad.time;
    document.getElementById('akad-venue').textContent = weddingConfig.event.akad.venue;
    document.getElementById('akad-address').textContent = weddingConfig.event.akad.address;
    document.getElementById('akad-maps').href = weddingConfig.event.akad.maps;
    
    document.getElementById('resepsi-date').textContent = weddingConfig.event.resepsi.date;
    document.getElementById('resepsi-time').textContent = weddingConfig.event.resepsi.time;
    document.getElementById('resepsi-venue').textContent = weddingConfig.event.resepsi.venue;
    document.getElementById('resepsi-address').textContent = weddingConfig.event.resepsi.address;
    document.getElementById('resepsi-maps').href = weddingConfig.event.resepsi.maps;
    
    // Gallery
    loadGallery();
    
    // Gifts
    document.getElementById('qris-image').src = weddingConfig.gifts.qris;
    loadBanks();
}

function loadGallery() {
    const container = document.getElementById('gallery-container');
    container.innerHTML = '';
    
    weddingConfig.gallery.forEach((src, index) => {
        const item = document.createElement('div');
        item.className = 'gallery-item fade-in';
        item.style.animationDelay = (index * 0.1) + 's';
        item.innerHTML = `<img src="${src}" alt="Foto ${index + 1}" onclick="openLightbox('${src}')">`;
        container.appendChild(item);
    });
}

function loadBanks() {
    const container = document.getElementById('bank-list');
    container.innerHTML = '';
    
    weddingConfig.gifts.banks.forEach(bank => {
        const item = document.createElement('div');
        item.className = 'bank-item';
        item.innerHTML = `
            <img src="${bank.logo}" alt="${bank.name}">
            <div class="bank-info">
                <p class="bank-name">Bank ${bank.name}</p>
                <p class="account-number" onclick="copyToClipboard('${bank.number}')">
                    ${bank.number} <i class="fas fa-copy"></i>
                </p>
                <p class="account-name">a.n. ${bank.holder}</p>
            </div>
        `;
        container.appendChild(item);
    });
}

// ==========================================
// INTERACTIONS
// ==========================================

function openInvitation() {
    document.getElementById('cover').classList.add('hidden');
    document.getElementById('main-content').classList.remove('hidden');
    
    setTimeout(() => {
        document.getElementById('main-content').classList.add('visible');
    }, 100);
    
    // Auto play music
    const music = document.getElementById('bg-music');
    music.src = weddingConfig.music;
    music.play().catch(e => console.log('Autoplay prevented'));
    document.getElementById('music-toggle').classList.add('playing');
}

function initMusic() {
    const music = document.getElementById('bg-music');
    const toggle = document.getElementById('music-toggle');
    
    toggle.addEventListener('click', () => {
        if (music.paused) {
            music.play();
            toggle.classList.add('playing');
            toggle.innerHTML = '<i class="fas fa-music"></i>';
        } else {
            music.pause();
            toggle.classList.remove('playing');
            toggle.innerHTML = '<i class="fas fa-pause"></i>';
        }
    });
}

// ==========================================
// COUNTDOWN
// ==========================================

function initCountdown() {
    // Set target date (ganti sesuai tanggal pernikahan)
    const targetDate = new Date('2024-12-31T08:00:00').getTime();
    
    function updateCountdown() {
        const now = new Date().getTime();
        const distance = targetDate - now;
        
        if (distance < 0) {
            document.getElementById('countdown').innerHTML = '<div class="time-box" style="grid-column: span 4;"><span>Selamat Menikah!</span></div>';
            return;
        }
        
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);
        
        document.getElementById('days').textContent = String(days).padStart(2, '0');
        document.getElementById('hours').textContent = String(hours).padStart(2, '0');
        document.getElementById('minutes').textContent = String(minutes).padStart(2, '0');
        document.getElementById('seconds').textContent = String(seconds).padStart(2, '0');
    }
    
    setInterval(updateCountdown, 1000);
    updateCountdown();
}

// ==========================================
// LIGHTBOX
// ==========================================

function openLightbox(src) {
    document.getElementById('lightbox-img').src = src;
    document.getElementById('lightbox').classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeLightbox() {
    document.getElementById('lightbox').classList.remove('active');
    document.body.style.overflow = 'auto';
}

// ==========================================
// UTILITIES
// ==========================================

function copyToClipboard(text) {
    navigator.clipboard.writeText(text).then(() => {
        alert('Nomor rekening telah disalin: ' + text);
    }).catch(err => {
        // Fallback
        const textArea = document.createElement('textarea');
        textArea.value = text;
        document.body.appendChild(textArea);
        textArea.select();
        document.execCommand('copy');
        document.body.removeChild(textArea);
        alert('Nomor rekening telah disalin: ' + text);
    });
}

// RSVP Form Handler
document.getElementById('rsvp-form').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const name = document.getElementById('guest-name').value;
    const attendance = document.getElementById('attendance').value;
    const count = document.getElementById('guest-count').value || '1';
    const message = document.getElementById('guest-message').value;
    
    const waMessage = `${weddingConfig.whatsapp.message}
    
Nama: ${name}
Kehadiran: ${attendance}
Jumlah Tamu: ${count}
Pesan: ${message || '-'}`;

    const waUrl = `https://wa.me/${weddingConfig.whatsapp.number}?text=${encodeURIComponent(waMessage)}`;
    window.open(waUrl, '_blank');
});

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    });
});

// ==========================================
// WATERMARK ANIMATION
// ==========================================

document.addEventListener('DOMContentLoaded', function() {
    // Animasi subtle untuk watermark
    const watermark = document.querySelector('.fixed-watermark');
    
    setInterval(() => {
        watermark.style.opacity = '0.7';
        setTimeout(() => {
            watermark.style.opacity = '1';
        }, 1000);
    }, 5000);
});
