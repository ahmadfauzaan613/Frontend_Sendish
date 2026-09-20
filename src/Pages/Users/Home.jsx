import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight, faBasketShopping, faCheck, faClock, faLeaf, faLocationDot } from '@fortawesome/free-solid-svg-icons'
import Layout from '../../Components/User/Layout'
import Sayur1 from '../../Assets/sayur1.jpg'
import Sayur2 from '../../Assets/sayur2.jpg'
import Sayur3 from '../../Assets/sayur3.jpg'
import Pakcoy from '../../Assets/Pakcoykg.png'
import Indomaret from '../../Assets/Screenshot_2024-08-17_074405-removebg-preview.png'
import Indogrosir from '../../Assets/igr_logo_large.png'

const whatsappUrl = 'https://wa.me/6281266990063?text=Halo%20Sendish%2C%20saya%20ingin%20belanja.'

const products = [
  { name: 'Pakcoy pilihan', unit: 'per 500 gram', price: 'Rp12.000', image: Pakcoy, category: 'Sayur' },
  { name: 'Paket sayur harian', unit: 'isi sayur campur', price: 'Rp28.000', image: Sayur1, category: 'Paket hemat' },
  { name: 'Sayur hijau keluarga', unit: 'per paket', price: 'Rp24.000', image: Sayur2, category: 'Sayur' },
  { name: 'Bumbu dapur pilihan', unit: 'per paket', price: 'Rp18.000', image: Sayur3, category: 'Bumbu' },
]

const steps = [
  { number: '01', title: 'Pilih kebutuhan dapur', text: 'Temukan sayur, protein, bumbu, dan stok beku dalam satu tempat.' },
  { number: '02', title: 'Konfirmasi lewat WhatsApp', text: 'Kirim daftar belanja, alamat, dan waktu pengantaran yang Anda inginkan.' },
  { number: '03', title: 'Pesanan kami siapkan', text: 'Tim Sendish mengonfirmasi ketersediaan dan detail pembayaran sebelum dikirim.' },
]

function ProductCard({ product }) {
  return (
    <article className="product-card">
      <div className="product-card__image-wrap">
        <img src={product.image} alt={product.name} className="product-card__image" />
        <span className="product-card__category">{product.category}</span>
      </div>
      <div className="product-card__body">
        <div><h3>{product.name}</h3><p>{product.unit}</p></div>
        <div className="product-card__footer">
          <strong>{product.price}</strong>
          <a href={whatsappUrl} target="_blank" rel="noreferrer" aria-label={`Pesan ${product.name} melalui WhatsApp`}><FontAwesomeIcon icon={faBasketShopping} /></a>
        </div>
      </div>
    </article>
  )
}

function Home() {
  return (
    <Layout navbar footer whatsapp>
      <main>
        <section className="hero" aria-labelledby="hero-title">
          <div className="site-container hero__grid">
            <div className="hero__copy">
              <p className="kicker">Belanja dapur, lebih sederhana</p>
              <h1 id="hero-title">Bahan segar untuk masakan yang terasa seperti rumah.</h1>
              <p className="hero__lead">Sendish membantu Anda menyiapkan kebutuhan dapur sehari-hari tanpa harus berpindah-pindah toko. Pilih produknya, konfirmasi pesanan, lalu tunggu sampai di rumah.</p>
              <div className="hero__actions">
                <a className="button button--primary" href="#produk">Lihat pilihan hari ini</a>
                <a className="text-link" href={whatsappUrl} target="_blank" rel="noreferrer">Tanya stok via WhatsApp <FontAwesomeIcon icon={faArrowRight} /></a>
              </div>
              <ul className="hero__notes" aria-label="Keunggulan layanan">
                <li><FontAwesomeIcon icon={faCheck} /> Konfirmasi stok sebelum pembayaran</li>
                <li><FontAwesomeIcon icon={faCheck} /> Pesanan disesuaikan kebutuhan Anda</li>
              </ul>
            </div>
            <div className="hero__visual">
              <img src={Sayur3} alt="Aneka sayuran segar untuk kebutuhan memasak" />
              <div className="hero__caption"><span>Belanja lebih terencana</span><strong>Mulai dari isi kulkas, bukan dari rasa bingung.</strong></div>
            </div>
          </div>
        </section>

        <section className="service-strip" aria-label="Informasi layanan">
          <div className="site-container service-strip__grid">
            <div><FontAwesomeIcon icon={faLocationDot} /><span><strong>Area layanan</strong>Hubungi kami untuk cek jangkauan</span></div>
            <div><FontAwesomeIcon icon={faClock} /><span><strong>Waktu pengantaran</strong>Dikonfirmasi bersama pesanan</span></div>
            <div><FontAwesomeIcon icon={faLeaf} /><span><strong>Pilihan sehari-hari</strong>Sayur, protein, bumbu, dan frozen food</span></div>
          </div>
        </section>

        <section className="product-section" id="produk" aria-labelledby="product-title">
          <div className="site-container">
            <div className="section-heading section-heading--split">
              <div><p className="kicker">Pilihan dapur</p><h2 id="product-title">Mulai dari yang paling sering dibutuhkan.</h2></div>
              <p>Katalog ringkas untuk belanja harian. Tanyakan stok terbaru kepada tim Sendish sebelum memesan.</p>
            </div>
            <div className="product-grid">{products.map((product) => <ProductCard key={product.name} product={product} />)}</div>
            <div className="section-action"><a className="button button--outline" href={whatsappUrl} target="_blank" rel="noreferrer">Minta katalog lengkap</a></div>
          </div>
        </section>

        <section className="story-section" id="tentang" aria-labelledby="story-title">
          <div className="site-container story-section__grid">
            <div className="story-section__image"><img src={Sayur1} alt="Pilihan sayuran untuk menu keluarga" /></div>
            <div className="story-section__copy">
              <p className="kicker">Kenapa Sendish</p>
              <h2 id="story-title">Belanja bahan makanan seharusnya membantu Anda memasak, bukan menambah pekerjaan.</h2>
              <p>Kami merapikan prosesnya menjadi satu percakapan sederhana. Anda bisa menanyakan produk, menyesuaikan jumlah, dan memastikan detail pesanan sebelum membayar.</p>
              <div className="story-points">
                <div><span>01</span><p><strong>Jelas sejak awal</strong>Stok, jumlah, harga, dan pengantaran dikonfirmasi bersama.</p></div>
                <div><span>02</span><p><strong>Fleksibel untuk rumah</strong>Belanja bisa mengikuti kebutuhan menu, bukan paket yang memaksa.</p></div>
              </div>
            </div>
          </div>
        </section>

        <section className="order-section" id="cara-pesan" aria-labelledby="order-title">
          <div className="site-container">
            <div className="section-heading"><p className="kicker">Cara memesan</p><h2 id="order-title">Dari daftar belanja ke depan pintu.</h2></div>
            <div className="order-steps">
              {steps.map((step) => <article key={step.number}><span>{step.number}</span><h3>{step.title}</h3><p>{step.text}</p></article>)}
            </div>
          </div>
        </section>

        <section className="partner-section" aria-labelledby="partner-title">
          <div className="site-container partner-section__inner">
            <div><p className="kicker">Mitra Sendish</p><h2 id="partner-title">Bertumbuh bersama jaringan yang dekat dengan keseharian.</h2></div>
            <div className="partner-logos"><img src={Indomaret} alt="Indomaret" /><img src={Indogrosir} alt="Indogrosir" /></div>
          </div>
        </section>

        <section className="closing-cta" aria-labelledby="closing-title">
          <div className="site-container closing-cta__inner">
            <div><p className="kicker">Ada daftar belanja?</p><h2 id="closing-title">Kirim saja. Kami bantu cek satu per satu.</h2></div>
            <a className="button button--light" href={whatsappUrl} target="_blank" rel="noreferrer">Mulai pesan di WhatsApp</a>
          </div>
        </section>
      </main>
    </Layout>
  )
}

export default Home
