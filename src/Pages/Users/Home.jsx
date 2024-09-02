import React, { useState } from 'react'
import Layout from '../../Components/User/Layout'
import Slider from 'react-slick'
import Sayur1 from '../../Assets/sayur1.jpg'
import Sayur2 from '../../Assets/sayur2.jpg'
import Sayur3 from '../../Assets/sayur3.jpg'
import Coursel from '../../Components/User/Coursel'
import CardPromo from '../../Components/User/CardPromo'
import TitleProduct from '../../Components/User/TitleProduct'
import SayurIconNoActive from '../../Assets/vegetable-green.png'
import SayurIconActive from '../../Assets/vegetable-black.png'
import HewaniIconNoActive from '../../Assets/proteins-black.png'
import HewaniIconActive from '../../Assets/proteins-green.png'
import PapperIconNoActive from '../../Assets/pepper.png'
import PapperIconActive from '../../Assets/pepper-green.png'
import FrozenFoodIconNoActive from '../../Assets/frozen-food-black.png'
import FrozenFoodIconActive from '../../Assets/frozen-food-green.png'
import MenuKategori from '../../Components/User/MenuKategori'
import CardProduk from '../../Components/User/CardProduk'
import orderan1 from '../../Assets/online-payment-1-90.svg'
import orderan2 from '../../Assets/order-confirmed-1-24.svg'
import orderan3 from '../../Assets/order-confirmed-74.svg'
import indomaret from '../../Assets/Screenshot_2024-08-17_074405-removebg-preview.png'
import indogrosir from '../../Assets/igr_logo_large.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import LoadingOnly from '../../Components/LoadingOnly'

const ReactSlick = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 900,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    fade: true,
    autoplaySpeed: 3000,
    cssEase: 'ease-in-out',
    lazyLoad: true,
  }

  const Data = [
    { alt: 'Sayur 1', img: Sayur1 },
    { alt: 'Sayur 2', img: Sayur2 },
    { alt: 'Sayur 3', img: Sayur3 },
  ]
  return (
    <div className="w-full h-[60vh]  border-none">
      <Slider {...settings}>
        {Data.map((item, idx) => (
          <Coursel image={item.img} alt={item.alt} key={idx} />
        ))}
      </Slider>
    </div>
  )
}

const ReactSlickProduct = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 900,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    cssEase: 'ease-in-out',
    lazyLoad: true,
  }

  const Data = [
    { alt: 'Sayur 1', img: Sayur1, namaProduk: 'Holdsworth Sensational Sea Salt Caramel Truffles 200 Gr', diskon: '50%', hargaLama: 'Rp. 50.000', harga: 'Rp. 25.000' },
    { alt: 'Sayur 2', img: Sayur2, namaProduk: 'Holdsworth Sensational Sea Salt Caramel Truffles 200 Gr', diskon: '50%', hargaLama: 'Rp. 50.000', harga: 'Rp. 25.000' },
    { alt: 'Sayur 3', img: Sayur3, namaProduk: 'Holdsworth Sensational Sea Salt Caramel Truffles 200 Gr', diskon: '50%', hargaLama: 'Rp. 50.000', harga: 'Rp. 25.000' },
    { alt: 'Sayur 1', img: Sayur3, namaProduk: 'Holdsworth Sensational Sea Salt Caramel Truffles 200 Gr', diskon: '50%', hargaLama: 'Rp. 50.000', harga: 'Rp. 25.000' },
    { alt: 'Sayur 2', img: Sayur1, namaProduk: 'Holdsworth Sensational Sea Salt Caramel Truffles 200 Gr', diskon: '50%', hargaLama: 'Rp. 50.000', harga: 'Rp. 25.000' },
    { alt: 'Sayur 3', img: Sayur3, namaProduk: 'Holdsworth Sensational Sea Salt Caramel Truffles 200 Gr', diskon: '50%', hargaLama: 'Rp. 50.000', harga: 'Rp. 25.000' },
  ]
  return (
    <Slider {...settings}>
      {Data.map((item, idx) => (
        <CardPromo key={idx} image={item.img} alt={item.alt} namaProduk={item.namaProduk} diskon={item.diskon} hargaLama={item.hargaLama} harga={item.harga} />
      ))}
    </Slider>
  )
}

const PageMenu = (props) => {
  const { dataBarang } = props
  return (
    <React.Fragment>
      <div className="grid grid-cols-3 ease-in-out">
        {dataBarang.slice(0, 9).map((item, idx) => (
          <CardProduk key={idx} image={item.img} alt={item.alt} namaProduk={item.namaProduk} harga={item.harga} />
        ))}
      </div>
      <p className={`text-[18px] cursor-pointer text-[#3d6b2f]  text-center my-[1rem] hover:font-bold`}>
        Produk Lainnya <FontAwesomeIcon icon={faArrowRight} className="pl-3" />
      </p>
    </React.Fragment>
  )
}

const Pemesanan = (props) => {
  const { key, image, text } = props
  return (
    <div className="w-[12vw]" key={key}>
      <img src={image} alt="" className="w-[10.5vw] h-full" />
      <p className="mt-3 text-[16px]">{text}</p>
    </div>
  )
}

function Index() {
  const [active, setActive] = useState('Sayur')
  const [loading, setLoading] = useState(false)
  const toggle = (name) => {
    setLoading(true)
    setTimeout(() => {
      setActive(name)
      setLoading(false)
    }, 500)
  }
  const conditionTab = (data) => {
    return active === data
  }

  const DataProduk = [
    { alt: 'Sayur 1', img: Sayur1, namaProduk: 'Holdsworth Sensational Sea Salt Caramel Truffles 200 Gr', harga: 'Rp. 25.000' },
    { alt: 'Sayur 2', img: Sayur2, namaProduk: 'Holdsworth Sensational Sea Salt Caramel Truffles 200 Gr', harga: 'Rp. 25.000' },
    { alt: 'Sayur 3', img: Sayur3, namaProduk: 'Holdsworth Sensational Sea Salt Caramel Truffles 200 Gr', harga: 'Rp. 25.000' },
    { alt: 'Sayur 1', img: Sayur3, namaProduk: 'Holdsworth Sensational Sea Salt Caramel Truffles 200 Gr', harga: 'Rp. 25.000' },
    { alt: 'Sayur 2', img: Sayur1, namaProduk: 'Holdsworth Sensational Sea Salt Caramel Truffles 200 Gr', harga: 'Rp. 25.000' },
    { alt: 'Sayur 3', img: Sayur3, namaProduk: 'Holdsworth Sensational Sea Salt Caramel Truffles 200 Gr', harga: 'Rp. 25.000' },
    { alt: 'Sayur 1', img: Sayur3, namaProduk: 'Holdsworth Sensational Sea Salt Caramel Truffles 200 Gr', harga: 'Rp. 25.000' },
    { alt: 'Sayur 2', img: Sayur1, namaProduk: 'Holdsworth Sensational Sea Salt Caramel Truffles 200 Gr', harga: 'Rp. 25.000' },
    { alt: 'Sayur 3', img: Sayur3, namaProduk: 'Holdsworth Sensational Sea Salt Caramel Truffles 200 Gr', harga: 'Rp. 25.000' },
    { alt: 'Sayur 1', img: Sayur3, namaProduk: 'Holdsworth Sensational Sea Salt Caramel Truffles 200 Gr', harga: 'Rp. 25.000' },
    { alt: 'Sayur 2', img: Sayur1, namaProduk: 'Holdsworth Sensational Sea Salt Caramel Truffles 200 Gr', harga: 'Rp. 25.000' },
    { alt: 'Sayur 3', img: Sayur3, namaProduk: 'Holdsworth Sensational Sea Salt Caramel Truffles 200 Gr', harga: 'Rp. 25.000' },
    { alt: 'Sayur 3', img: Sayur3, namaProduk: 'Holdsworth Sensational Sea Salt Caramel Truffles 200 Gr', harga: 'Rp. 25.000' },
    { alt: 'Sayur 1', img: Sayur3, namaProduk: 'Holdsworth Sensational Sea Salt Caramel Truffles 200 Gr', harga: 'Rp. 25.000' },
    { alt: 'Sayur 2', img: Sayur1, namaProduk: 'Holdsworth Sensational Sea Salt Caramel Truffles 200 Gr', harga: 'Rp. 25.000' },
    { alt: 'Sayur 3', img: Sayur3, namaProduk: 'Holdsworth Sensational Sea Salt Caramel Truffles 200 Gr', harga: 'Rp. 25.000' },
  ]

  const renderContent = () => {
    switch (active) {
      case 'Sayur':
        return <PageMenu dataBarang={DataProduk} />
      case 'Hewani':
        return <PageMenu dataBarang={DataProduk} />
      case 'Makanan Beku':
        return <PageMenu dataBarang={DataProduk} />
      case 'Bumbu':
        return <PageMenu dataBarang={DataProduk} />
      default:
        return null
    }
  }
  const DataMenu = [
    { title: 'Sayur', alt: 'Sayur', iconActive: SayurIconNoActive, iconNoActive: SayurIconActive },
    { title: 'Hewani', alt: 'Hewani', iconActive: HewaniIconActive, iconNoActive: HewaniIconNoActive },
    { title: 'Makanan Beku', alt: 'Makanan Beku', iconActive: FrozenFoodIconActive, iconNoActive: FrozenFoodIconNoActive },
    { title: 'Bumbu', alt: 'Bumbu', iconActive: PapperIconActive, iconNoActive: PapperIconNoActive },
  ]

  const DataMesan = [
    { image: orderan3, text: 'Pilih produk terbaik Sendish untuk Anda!' },
    { image: orderan1, text: 'Lakukan pembayaran dengan metode pembayaran yang anda inginkan' },
    { image: orderan2, text: 'Setelah pembayaran selesai, barang akan kami kirim' },
  ]
  return (
    <React.Fragment>
      <Layout navbar={true} whatsapp={true} footer={true}>
        <div className="container mx-auto mt-10 ">
          <ReactSlick />
        </div>
        <div className="bg-[#b8d26f] py-5">
          <div className="container mx-auto py-2">
            <TitleProduct colorText={'white'} title={'Spesial Bulan Ini'} subTitle={'Promo menarik dari Sandish untuk kamu'} namelink={'Promo Lainnya'} />
            <ReactSlickProduct />
          </div>
        </div>
        <div className="py-5 mt-10">
          <div className="container mx-auto">
            <p className={`text-black text-center text-[32px] font-bold`}>Kategori Produk</p>
            <div className="flex items-start gap-10 mt-[3rem]">
              <div className="flex-col">
                {DataMenu.map((item, idx) => (
                  <MenuKategori key={idx} onClick={() => toggle(item.title)} condition={conditionTab(item.title)} title={item.title} iconActive={item.iconActive} alt={item.alt} iconNoActive={item.iconNoActive} />
                ))}
              </div>
              <div>
                {loading ? (
                  <div className="loading-container">
                    <LoadingOnly />
                  </div>
                ) : (
                  renderContent()
                )}
              </div>
            </div>
          </div>
        </div>
        <div className="py-5 my-[5rem]">
          <div className="container mx-auto">
            <p className={`text-black text-center text-[32px] font-bold`}>Bagaimana cara memesan?</p>
            <div className="flex items-center justify-around mt-[3rem]">
              {DataMesan.map((item, idx) => (
                <Pemesanan key={idx} image={item.image} text={item.text} />
              ))}
            </div>
          </div>
        </div>
        <div className="py-5 my-[5rem]">
          <div className="container mx-auto">
            <p className={`text-black text-center text-[32px] font-bold`}>Mitra Sendish</p>
            <div className="mt-[3rem] flex items-center justify-center gap-[10rem]">
              <img src={indomaret} alt="Indomaret" className="w-[12vw] h-full" />
              <img src={indogrosir} alt="Indogrosir" className="w-[12vw] h-full" />
            </div>
          </div>
        </div>
      </Layout>
    </React.Fragment>
  )
}

export default Index
