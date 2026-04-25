"use client";

import {
  ArrowRight02Icon,
  ArrowUpRight01Icon,
  Clock01Icon,
  Door02Icon,
  Location01Icon,
  Money04Icon,
  MountainIcon,
  Shield01Icon,
} from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import Footer from "src/components/footer";
import Header from "src/components/header";
import { DESTINATION } from "src/const/destination";
import { TESTIMONIAL } from "src/const/testimonials";

// ------------------------------------------------------------

const HERO_IMAGES = [
  // "/assets/images/bg/hero-bg-1.jpg",
  // "/assets/images/bg/hero-bg-2.jpg",
  // "/assets/images/bg/hero-bg-3.jpg",
  // "/assets/images/bg/hero-bg-4.jpg",
  "/assets/images/travel/bromo.png",
  "/assets/images/travel/palawan.png",
  "/assets/images/travel/jeju.png",
  "/assets/images/travel/maldives.png",
];

// ------------------------------------------------------------

export function LandingView() {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % HERO_IMAGES.length);
    }, 10000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <Header />
      <section
        className="w-full bg-cover bg-center text-white bg-no-repeat transition-all duration-700"
        style={{
          backgroundImage: `linear-gradient(to right, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.2)), url("${HERO_IMAGES[currentImage]}")`,
        }}
      >
        <div className="w-full max-w-[1240px] mx-auto pt-[180px] pb-[50px] xl:pt-[250px] xl:pb-[70px] px-4 md:px-6 xl:px-0">
          <div className="flex">
            <div className="w-full md:max-w-[65%] xl:max-w-[55%]">
              <div className="bg-white/10 backdrop-blur-sm inline-flex items-center px-[15px] py-2.5 rounded-full border border-white/20">
                <h2 className="font-medium tracking-[0.3px]">
                  Jelajahi Destinasi Terbaik
                </h2>
              </div>
              <h2 className="font-el-messiri text-[46px] md:text-[64px] xl:text-[74px] font-semibold leading-none mt-6">
                Temukan Keajaiban Tersembunyi di Sudut Asia
              </h2>
              <Link
                href="#sec-1"
                className="inline-flex items-center justify-center gap-2.5 mt-5 py-[15px] px-[34px] bg-white text-[#171717] text-sm font-karla font-medium tracking-[0.3px] rounded-full"
              >
                EKSPLORASI SEKARANG
                <HugeiconsIcon icon={ArrowRight02Icon} className="size-4.5" />
              </Link>
            </div>
            <div></div>
          </div>
          <div className="grid md:grid-cols-2 gap-10 mt-[50px] xl:mt-[150px] max-w-3xl">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-white/10 backdrop-blur-sm rounded-full border border-white/20">
                <HugeiconsIcon icon={Clock01Icon} strokeWidth={2} />
              </div>
              <h2>
                Pilih waktu perjalanan sesuai kebutuhan Anda, kami bantu susun
                itinerary terbaik.
              </h2>
            </div>
            <div className="flex items-center gap-4">
              <div className="p-3 bg-white/10 backdrop-blur-sm rounded-full border border-white/20">
                <HugeiconsIcon icon={MountainIcon} strokeWidth={2} />
              </div>
              <h2>
                Kami menghadirkan pilihan destinasi populer dan hidden gems
                terbaik di Asia.
              </h2>
            </div>
          </div>
        </div>
      </section>
      <section
        id="sec-1"
        className="w-full max-w-[1240px] mx-auto py-15 xl:pt-30 xl:pb-20 px-4 md:px-6 xl:px-0"
      >
        <div className="grid md:grid-cols-10 gap-y-5 xl:gap-[45px]">
          <div className="md:col-span-10 xl:col-span-4 h-64 md:h-75 xl:h-full flex items-end p-5 xl:p-10 relative rounded-3xl overflow-hidden group">
            <Image
              src="/assets/images/travel/bromo.png"
              alt="1"
              fill
              className="object-cover group-hover:scale-110 transition-all duration-300"
            />
            <div className="absolute inset-0 bg-linear-to-t from-black/60 to-black/3" />
            <div className="w-full z-10 flex items-center justify-between">
              <div>
                <h2 className="font-el-messiri text-3xl font-semibold text-white">
                  Gunung Bromo
                </h2>
                <h3 className="text-white/60">Indonesia</h3>
              </div>
              <div className="p-3 text-white rounded-full border border-white">
                <HugeiconsIcon icon={ArrowUpRight01Icon} strokeWidth={2} />
              </div>
            </div>
          </div>
          <div className="md:col-span-10 xl:col-span-6 flex flex-col gap-y-5 xl:gap-y-[45px]">
            <div className="grid md:grid-cols-2 gap-y-5 md:gap-x-[25px] xl:gap-[45px]">
              <div className="w-full h-64 md:h-75 flex items-end p-5 xl:p-[30px] relative rounded-3xl overflow-hidden group">
                <Image
                  src="/assets/images/travel/krabi.png"
                  alt="2"
                  fill
                  className="object-cover group-hover:scale-110 transition-all duration-300"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/60 to-black/3" />
                <div className="w-full z-10 flex items-center justify-between">
                  <div>
                    <h2 className="font-el-messiri text-3xl font-semibold text-white">
                      Krabi
                    </h2>
                    <h3 className="text-white/60">Thailand</h3>
                  </div>
                  <div className="p-3 text-white rounded-full border border-white">
                    <HugeiconsIcon icon={ArrowUpRight01Icon} strokeWidth={2} />
                  </div>
                </div>
              </div>
              <div className="w-full h-64 md:h-75 flex items-end p-5 xl:p-[30px] relative rounded-3xl overflow-hidden group">
                <Image
                  src="/assets/images/travel/hanoi.png"
                  alt="3"
                  fill
                  className="object-cover group-hover:scale-110 transition-all duration-300"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/60 to-black/3" />
                <div className="w-full z-10 flex items-center justify-between">
                  <div>
                    <h2 className="font-el-messiri text-3xl font-semibold text-white">
                      Hanoi
                    </h2>
                    <h3 className="text-white/60">Vietnam</h3>
                  </div>
                  <div className="p-3 text-white rounded-full border border-white">
                    <HugeiconsIcon icon={ArrowUpRight01Icon} strokeWidth={2} />
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full h-64 md:h-75 xl:h-95 flex items-end p-5 xl:p-[30px] relative rounded-3xl overflow-hidden group">
              <Image
                src="/assets/images/bg/padar-island-with-scenic-high-view-of-three-beautiful-white-sandy-beaches-surrounded-by-a-wide-ocean-1.jpg"
                alt="4"
                fill
                className="object-cover group-hover:scale-110 transition-all duration-300"
              />
              <div className="absolute inset-0 bg-linear-to-t from-black/60 to-black/3" />
              <div className="w-full z-10 flex items-center justify-between">
                <div>
                  <h2 className="font-el-messiri text-3xl font-semibold text-white">
                    Pulau Padar
                  </h2>
                  <h3 className="text-white/60">Nusa Tenggara Timur</h3>
                </div>
                <div className="p-3 text-white rounded-full border border-white">
                  <HugeiconsIcon icon={ArrowUpRight01Icon} strokeWidth={2} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full max-w-[1240px] mx-auto pt-5 pb-15 xl:pt-10 xl:pb-30 px-4 md:px-6 xl:px-0">
        <div className="grid md:grid-cols-12">
          <div className="md:col-span-12 xl:col-span-5 xl:pr-10 mb-10 xl:mb-0">
            <h2 className="font-el-messiri text-[40px] xl:text-[52px] font-semibold leading-none">
              Pengalaman Liburan Tanpa Batas
            </h2>
            <p className="mt-5">
              Kami memahami bahwa setiap perjalanan adalah cerita yang berharga.
              Oleh karena itu, kami menghadirkan layanan travel yang dirancang
              khusus untuk kenyamanan dan ketenangan pikiran Anda dari awal
              hingga akhir perjalanan.
            </p>
            <div className="flex flex-col gap-y-7 mt-6">
              <div className="flex gap-5">
                <div className="flex items-center justify-center size-[50px] rounded-full bg-[#171717] text-white">
                  <HugeiconsIcon icon={Shield01Icon} strokeWidth={2} />
                </div>
                <div className="flex-1">
                  <h3 className="font-el-messiri text-2xl font-semibold">
                    Perjalanan Aman & Terjamin
                  </h3>
                  <p className=" text-[#7A7A7A]">
                    Nikmati liburan tanpa rasa khawatir dengan perlindungan
                    asuransi komprehensif dan panduan dari tour guide lokal
                    berpengalaman.
                  </p>
                </div>
              </div>
              <div className="flex gap-5">
                <div className="flex items-center justify-center size-[50px] rounded-full bg-[#171717] text-white">
                  <HugeiconsIcon icon={Money04Icon} strokeWidth={2} />
                </div>
                <div className="flex-1">
                  <h3 className="font-el-messiri text-2xl font-semibold">
                    Harga Terbaik & Transparan
                  </h3>
                  <p className="text-[#7A7A7A]">
                    Kualitas pelayanan premium tanpa biaya tersembunyi. Dapatkan
                    penawaran paket liburan terbaik yang sesuai dengan anggaran
                    Anda.
                  </p>
                </div>
              </div>
              <div className="flex gap-5">
                <div className="flex items-center justify-center size-[50px] rounded-full bg-[#171717] text-white">
                  <HugeiconsIcon icon={Door02Icon} strokeWidth={2} />
                </div>
                <div className="flex-1">
                  <h3 className="font-el-messiri text-2xl font-semibold">
                    Akomodasi Eksklusif
                  </h3>
                  <p className="text-[#7A7A7A]">
                    Kami memastikan kualitas istirahat Anda tetap terjaga dengan
                    memilih hotel dan resor bermutu tinggi di setiap destinasi.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="md:col-span-12 xl:col-span-7 xl:ml-[15px]">
            <div className="w-full h-150 xl:h-full relative rounded-3xl overflow-hidden">
              <Image
                src="/assets/images/bg/young-beautiful-woman-walking-on-campuhan-ridge-way-of-artists-in-bali-ubud-.jpg"
                alt="1"
                fill
                className="object-cover group-hover:scale-110 transition-all duration-300"
              />
            </div>
          </div>
        </div>
      </section>
      <section className="bg-[#0E0700] py-20 xl:py-30 px-4 md:px-6 xl:px-0">
        <div className="w-full max-w-[1240px] mx-auto ">
          <div className="grid md:grid-cols-10 mb-15">
            <div className="md:col-span-12 xl:col-span-6 mb-5 xl:mb-0">
              <h2 className="max-w-[620px] font-el-messiri text-[40px] xl:text-[52px] font-semibold text-white leading-none">
                Mahakarya Alam dan Budaya yang Memukau
              </h2>
            </div>
            <div className="md:col-span-12 xl:col-span-4">
              <p className="text-white/80 mb-8">
                Jangan hanya mendengar dari kami. Lihat apa kata mereka yang
                telah mempercayakan momen liburan berharganya bersama Touvel.
              </p>
              <button className="flex items-center justify-center gap-2.5 py-[15px] px-[34px] bg-white text-[#171717] text-sm font-karla font-medium tracking-[0.3px] rounded-full">
                PELAJARI SELENGKAPNYA
              </button>
            </div>
          </div>
          <div
            className="overflow-hidden"
            style={{
              maskImage:
                "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
              WebkitMaskImage:
                "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
            }}
          >
            <div
              className="flex gap-6 hover:[animation-play-state:paused]"
              style={{
                animation: "testimonial-scroll 30s linear infinite",
                width: "fit-content",
              }}
            >
              {[...TESTIMONIAL, ...TESTIMONIAL].map((item, index) => (
                <div
                  key={index}
                  className="flex flex-col bg-neutral-900 rounded-3xl p-[30px] min-w-[300px] max-w-[300px]"
                >
                  <p className="text-white/70 flex-1">{item.text}</p>
                  <div className="flex gap-4 mt-8">
                    <div className="size-11 relative rounded-full overflow-hidden shrink-0">
                      <Image
                        src={`/assets/images/bg/${item.image}`}
                        alt="Person"
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="flex-1 flex flex-col justify-between">
                      <h2 className="font-el-messiri text-white text-2xl font-semibold leading-none line-clamp-1">
                        {item.name}
                      </h2>
                      <h3 className="text-white/50 text-sm leading-none">
                        {item.role}
                      </h3>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      {/* <section className="w-full max-w-[1240px] mx-auto pt-30 pb-25 px-6 md:px-0">
        <div className="grid md:grid-cols-2">
          <div className="mb-5 xl:mb-0">
            <h2 className="max-w-[620px] font-el-messiri text-[40px] xl:text-[52px] font-semibold leading-none">
              Begin Your New Life Experience With Exploring New Destination
            </h2>
          </div>
          <div className="xl:ml-15">
            <p className="mb-8">
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
              commodo ligula eget dolor. Aenean massa. Cum sociis natoque
              penatibus et magnis dis parturient montes.
            </p>
            <div className="flex items-center gap-5">
              <button className="flex items-center justify-center gap-2.5 py-[15px] px-[34px] bg-black text-white text-sm font-karla font-medium tracking-[0.3px] rounded-full">
                ABOUT US
              </button>
              <button className="flex items-center justify-center gap-2.5 py-[15px] px-[34px] text-sm font-karla font-medium tracking-[0.3px] rounded-full border border-black">
                EXPLORE TRIP
              </button>
            </div>
          </div>
        </div>
      </section> */}
      <section className="w-full max-w-[1240px] mx-auto pt-30 pb-25 px-4 md:px-6 xl:px-0">
        <div className="w-full max-w-[480px] mx-auto mb-10">
          <h2 className="text-center font-el-messiri text-[40px] xl:text-[52px] font-semibold leading-none mb-5">
            Pilihan Destinasi Terfavorit di Asia
          </h2>
          <p className="text-center mb-8">
            Dari hiruk-pikuk kota metropolitan hingga ketenangan alam yang asri,
            temukan paket perjalanan yang paling sesuai dengan gaya liburan
            Anda.
          </p>
          <div className="flex w-full items-center gap-2.5 border border-[#0E0700] rounded-full p-2.5">
            <button className="flex-auto bg-neutral-200 text-sm font-medium py-2.5 rounded-full">
              DESTINASI
            </button>
            <button className="flex-auto hover:bg-[#0E0700] hover:text-white text-sm font-medium py-2.5 rounded-full transition-all duration-200">
              AKOMODASI
            </button>
            <button className="flex-auto hover:bg-[#0E0700] hover:text-white text-sm font-medium py-2.5 rounded-full transition-all duration-200">
              AKTIVITAS
            </button>
          </div>
        </div>
        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-y-5 md:gap-5 xl:gap-10">
          {DESTINATION.map((item, index) => (
            <div
              key={index}
              className="h-70 xl:h-100 flex items-end p-5 relative rounded-3xl overflow-hidden group"
            >
              <Image
                src={`/assets/images/travel/${item.image}`}
                alt="1"
                fill
                className="object-cover group-hover:scale-110 transition-all duration-300"
              />
              <div className="absolute inset-0 bg-linear-to-t from-black/60 to-black/3" />
              <div className="w-full z-10 grid grid-cols-2">
                <div className="flex flex-col justify-between">
                  <h2 className="font-el-messiri text-2xl font-semibold text-white">
                    {item.title}
                  </h2>
                  <h3 className="flex items-center gap-1 text-sm text-white/60">
                    <HugeiconsIcon icon={Location01Icon} size={16} />{" "}
                    {item.location}
                  </h3>
                </div>
                <div className="flex flex-col justify-between text-right">
                  <h3 className="text-sm font-medium text-white mb-1">Mulai</h3>
                  <h2 className="font-el-messiri text-3xl font-semibold text-white leading-none">
                    {item.price}
                  </h2>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
      {/* <section className="bg-[#0E0700] pt-30 pb-25 px-6 md:px-0">
        <div className="w-full max-w-[1240px] mx-auto ">
          <div className="grid md:grid-cols-2">
            <div className="mb-5 xl:mb-0 xl:mr-10">
              <h2 className="max-w-[620px] font-el-messiri text-[40px] xl:text-[52px] font-semibold text-white leading-none">
                Enjoy Our Best Quality Tour & Experience
              </h2>
            </div>
            <div className="xl:ml-5">
              <p className="text-white/80 mb-8">
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
                commodo ligula eget dolor. Aenean massa. Cum sociis natoque
                penatibus.
              </p>
              <button className="flex items-center justify-center gap-2.5 py-[15px] px-[34px] bg-white text-[#171717] text-sm font-karla font-medium tracking-[0.3px] rounded-full">
                LEARN MORE
              </button>
            </div>
          </div>
        </div>
      </section> */}
      <section className="w-full relative overflow-hidden py-25">
        <Image
          src="/assets/images/bg/chureito-pagoda-at-fuji-mountain-beautiful-japanese-landmarks-and-landscapes.jpg"
          alt="1"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative z-20 w-full md:max-w-[500px] mx-auto flex flex-col items-center text-center px-4 md:px-0 text-white">
          <h2 className="font-el-messiri text-[40px] xl:text-[52px] font-semibold leading-none mb-3">
            Lebih Dekat Dengan Liburan Impian Anda
          </h2>
          <p className="text-white/50 mb-5">
            Jangan biarkan rencana liburan Anda hanya menjadi wacana.
            Konsultasikan perjalanan Anda secara gratis dengan tim kami dan
            dapatkan penawaran eksklusif bulan ini.
          </p>
          <button className="flex items-center justify-center gap-2.5 py-[15px] px-[34px] bg-white text-[#171717] text-sm font-karla font-medium tracking-[0.3px] rounded-full">
            HUBUNGI KAMI SEKARANG
          </button>
        </div>
      </section>
      <Footer />
    </>
  );
}
