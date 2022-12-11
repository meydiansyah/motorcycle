import AppLayout from "@/components/layouts/App";
import SupportBy from "@/components/layouts/home/support_by";
import News from "@/components/layouts/News";
import { NextPage } from "next";
// import Image from "next/image";
import React from "react";

const About: NextPage = () => (
  <AppLayout>
    <div className="w-full px-3 h-screen antialiased lg:px-6 flex items-center justify-center ">
      <div className="mx-auto max-w-5xl center">
        <div className="container py-auto mx-auto text-center sm:px-4 ">
          <div className="max-w-md border-md mx-auto p-4">
            <img
              alt="about_image"
              src="https://tiger-club.or.id/assets/img/about-us.jpg"
              className="my-10 text-center rounded-md"
            />
          </div>

          <h2 className="text-base font-semibold text-indigo-600 tracking-wide uppercase">
            tentang
          </h2>

          <h1 className="text-4xl font-semibold leading-10 tracking-tight sm:text-5xl sm:leading-none md:text-6xl xl:text-7xl">
            Honda Tiger Club Indonesia
          </h1>
          <div className="max-w-lg mx-auto mt-6 text-sm text-center text-black md:mt-12 sm:text-base md:max-w-xl md:text-lg xl:text-xl">
            Honda Tiger Club Indonesia merupakan Induk organisasi dari Club-club
            Honda Tiger se Indonesia.
          </div>
          <div className="mt-8 text-sm text-black">
            By signing up, you agree to our terms and services.
          </div>
        </div>
      </div>
    </div>
    <section>
      <div className="max-w-5xl mx-auto my-12 flex flex-col items-center sm:px-5 md:flex-row tails-selected-element">
        <div className="flex flex-col items-start justify-center w-full h-full py-6 pr-16 mb-6 md:mb-0 md:w-3/2">
          <div className="flex flex-col px-4 items-start justify-center h-full space-y-3 transform md:pl-10 lg:pl-16 md:space-y-5">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Sekilas info
            </h2>
            <div className=" mt-6 text-sm text-justify text-black sm:text-base ">
              Organisasi Honda Tiger Club Indonesia (HTCI) dideklarasikan di
              Bandung pada tanggal 10 Oktober 2004 dengan dihadiri oleh sejumlah
              club dari seluruh tanah air, hingga saat ini Honda Tiger Club
              Indonesia (HTCI) terdiri atas Pengurus Pusat (PP), 20 Pengurus
              Daerah (Pengda) dan 252 klub yang tersebar di seluruh kawasan
              Indonesia.
            </div>
            <div className=" mt-4 text-sm text-justify text-black sm:text-base ">
              Honda Tiger Club Indonesia (HTCI) merupakan organisasi resmi yang
              berbadan hukum, memiliki AD dan ART organisasi yang jelas,
              dikukuhkan secara legal melalui Akta Notaris no. 57 oleh Notariat
              A. Natasukarya
            </div>
            <div className=" mt-4 text-sm text-justify text-black sm:text-base ">
              Peran organisasional Honda Tiger Club Indonesia (HTCI) adalah
              sebagai pelaksana koordinasi dari aktivitas dan pertukaran
              informasi seluruh klub anggotanya dimana peran dasar dari Honda
              Tiger Club Indonesia (HTCI) adalah penguatan jaringan dan rasa
              persaudaraan, terutama diantara klub anggota. Kegiatan resmi
              tahunan yang menjadi agenda Pengurus Pusat (PP-HTCI) adalah
              Musyawarah Nasional (MUNAS HTCI), Musyawarah Kerja Nasional
              (MUKERNAS), Wing Day, dan Jambore Tiger Nasional (JAMNAS), serta
              kegiatan lain yang ditetapkan oleh Pengurus Pusat (PP-HTCI) yang
              bersifat kegiatan bakti sosial ataupun event yang berskala
              regional maupun nasional.
            </div>
          </div>
        </div>
        <div className="w-full md:w-1/2 items-end">
          <img
            alt="img"
            src="https://tiger-club.or.id/assets/img/logo.png"
            className="object-fill mt-3 mx-auto h-16 lg:h-24"
          />
        </div>
      </div>
    </section>
    <SupportBy />
    <News showList={false} />
    <div className="w-full px-3 my-12 antialiased lg:px-6 flex items-center justify-center ">
      <div className="mx-auto max-w-5xl center">
        <div className="container py-auto mx-auto text-center sm:px-4 ">
          <h2 className="text-base font-semibold text-indigo-600 tracking-wide uppercase">
            visi misi
          </h2>

          <h1 className="text-4xl font-semibold leading-10 tracking-tight sm:text-5xl sm:leading-none md:text-6xl xl:text-7xl">
            Honda Tiger Club Indonesia
          </h1>

          <div className="max-w-5xl mx-auto my-12 flex flex-col items-start sm:px-5 md:flex-row tails-selected-element">
            <div className="flex flex-col items-start justify-center w-full h-full py-6 pr-16 mb-6 md:mb-0 md:w-3/2">
              <div className="flex flex-col px-4 items-start justify-center h-full space-y-3 transform md:pl-10 lg:pl-16 md:space-y-5">
                <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                  Visi
                </h2>
                <div className=" mt-6 text-sm text-justify text-black sm:text-base ">
                  1. MEMPERAT SILAHTURAHMI
                </div>
                <div className=" mt-6 text-sm text-justify text-black sm:text-base ">
                  2. MEMPERAT KEKOMPAKAN
                </div>
                <div className=" mt-6 text-sm text-justify text-black sm:text-base ">
                  3. MENJALIN KEBERSAMAAN
                </div>
                <div className=" mt-6 text-sm text-justify text-black sm:text-base ">
                  4. MENJALIN ORGANISASI YANG KUAT
                </div>
              </div>
            </div>
            <div className="flex flex-col items-start justify-center w-full h-full py-6 pr-16 mb-6 md:mb-0 md:w-3/2">
              <div className="flex flex-col px-4 items-start justify-center h-full space-y-3 transform md:pl-10 lg:pl-16 md:space-y-5">
                <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                  Misi
                </h2>
                <div className=" mt-6 text-sm text-justify text-black sm:text-base ">
                  Dengan Adanya Komunitas Honda Tiger Club Indonesia Ini
                  Diharapkan Bisa Untuk Ajang Silahturahmi Untuk Para Anggota.
                  Dan Selain Itu Semoga Komunitas Ini Bisa Membuat Kebersamaan
                  Yang Kuat Untuk Semua Anggota. Honda Tiger Club Indonesia Ini
                  Ingin Menyatukan Semua Pikiran-Pikiran Yang Berbeda Untuk
                  Menuju Satu Tujuan Yang Sama
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </AppLayout>
);

export default About;
