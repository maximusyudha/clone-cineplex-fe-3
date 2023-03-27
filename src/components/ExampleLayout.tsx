/* eslint-disable @next/next/no-img-element */
import { sizes } from "@mantine/core/lib/ActionIcon/ActionIcon.styles";
import Image from "next/image";
import Link from "next/link";

const ExampleLayout = ({ children }: any) => {
  return (
    <>
      <nav className="bg-teal-900 bg-fixed">
        <div className="max-w-100xl mx-auto px-2 sm:px-6 lg:px-8">
          <div className="relative items-center justify-between h-20">
            <div className="absolute inset-y-0 left-0 flex items-center">
              <a href="#" className="flex-shrink-0 text-white">
                <img
                  src="https://21cineplex.com//theme/v5/assets/img/logo.png"
                  width={200}
                  height={200}
                  alt="Logo"
                />
              </a>
              <div
                className="absolute{100} "
                style={{
                  position: "absolute",
                  top: 20,
                  bottom: 0,
                  right: 0,
                  left: 1300,
                  width: "100%",
                  height: "100%",
                  display: "flex",
                }}
              >
                <div className="w-2/3 absolute{80}">
                  <input
                    type="text"
                    placeholder="Search teathers,movies..."
                    className="bg-white rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent px-4 py-2 w-64"
                  />
                  <button
                    type="submit"
                    className="absolute right-0 top-0 mt-3 mr-4"
                  ></button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
      <div className="relative flex items-center justify-between h-30">
        <div className="pt-[10px] w-full h-[55px] pb-3 px-2 md:px-5 absolute{100} flex space-between bg-tiga bg-gray-100">
          <a
            href="/src/pages/film"
            className="px-3 py-2 rounded-md text-sm font-medium text-green focus:outline-none focus:text-green hover:text-white hover:bg-gray-700  focus:text-white focus:bg-gray-700"
          >
            Now Playing
          </a>
          <a
            href="#"
            className="ml-4 px-3 py-2 rounded-md text-sm font-medium text-green-900 hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700"
          >
            Teather
          </a>
          <a
            href="#"
            className="ml-4 px-3 py-2 rounded-md text-sm font-medium text-green-900 hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700"
          >
            Promotion
          </a>
          <a
            href="#"
            className="ml-4 px-3 py-2 rounded-md text-sm font-medium text-green-900 hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700"
          >
            Info 21
          </a>
          <div
            className="Menu-right"
            style={{
              position: "absolute",
              top: 22,
              right: 0,
              left: 1300,
              display: "flex",
            }}
          >
            <a href="https://21cineplex.com/imax">
              <img
                src="https://21cineplex.com//theme/v5/assets/img/imax-menu.png"
                alt="imax"
              ></img>
            </a>
          </div>
          <div
            className="menu-right"
            style={{
              position: "absolute",
              top: 22,
              right: 0,
              left: 1400,
              display: "flex",
            }}
          >
            <a href="https://21cineplex.com/dolby-atmos">
              <img
                src="https://21cineplex.com//theme/v5/assets/img/dolby-menu.png"
                alt="dolby"
              ></img>
            </a>
          </div>
          <div
            className="menu-right"
            style={{
              position: "absolute",
              top: 20,
              right: 0,
              left: 1540,
              display: "flex",
            }}
          >
            <a href="https://m.21cineplex.com/?mod=mtix">
              <img
                src="https://21cineplex.com//theme/v5/assets/img/mtix-menu.png"
                alt="mtix"
              ></img>
            </a>
          </div>
        </div>
      </div>
      <span>
        <img
          style={{
            position: "relative",
            top: 10,
            right: 0,
            left: 450,
            display: "flex",
          }}
          src="iklan.png"
          alt="iklan"
          width={865}
          height={100}
        />
      </span>

      <div
        style={{ margin: "550px 0rem -2.1rem 8.7rem" }}
        className="mt-20 ml-13 w-40 bg-teal-800 text-gray-200 text-center pb-1.5 pt-0.5 font-bold tracking-widest"
      >
        <p>Now Playing</p>
      </div>
      <div
        style={{ margin: "-21px 6rem 0rem 18.8rem" }}
        className="mt-45 ml-71 w-40 bg-gray-200 text-teal-600 text-center pb-1.5 pt-0.5 font-bold tracking-widest w-34 p-1"
      >
        <div className="select-twenty">
          <select className="custom-select bg-gray-200" id="city-change">
            <option value="1">AMBON</option>
            <option value="2">BALIKPAPAN</option>
            <option value="3">BANDUNG</option>
            <option value="4">BANJARMASIN</option>
            <option value="5">BATAM</option>
            <option value="6">BEKASI</option>
            <option value="7">BENGKULU</option>
            <option value="8">BOGOR</option>
            <option value="9">CIKARANG</option>
            <option value="10">CILEGON</option>
            <option value="11">CIREBON</option>
            <option value="12">CIREBON</option>
            <option value="13">DENPASAR</option>
            <option value="14">DEPOK</option>
            <option value="15">JAKARTA</option>
            <option value="16">PONTIANAK</option>
          </select>
        </div>
      </div>
      <div className="pt-[60] pb-4 px-2 md:px-36">{children}</div>
      <div className="z-50 w-full bg-green-600 h-[145px] p-5 font-semibold">
        <ul>
          <a
            href="#"
            style={{
              margin: "4rem 0rem 2rem 4rem",
            }}
            className="p-3 text-gray-200 font-normal"
          >
            Profile
          </a>
          <a href="#" className="p-3 text-gray-200 font-normal">
            |
          </a>
          <a href="#" className="p-3 text-gray-200 font-normal">
            Terms Of use
          </a>
          <a href="#" className="p-3 text-gray-200 font-normal">
            |
          </a>
          <a href="#" className="p-3 text-gray-200 font-normal">
            Advertising
          </a>
          <p
            style={{
              fontSize: 12,
              margin: "2rem 0rem 2rem 5rem",
              color: "white",
            }}
          >
            © 1999-2012 21Cineplex.com. All materials and contents (texts,
            graphics, and every attributes) of 21Cineplex or 21Cineplex.com
            website are copyrights and trademarks of PT Nusantara Sejahtera
            Raya. Any commercial usage of the materials and contents is
            forbidden without prior permission from PT Nusantara Sejahtera Raya.
            There is no other institutions/agencies outside. PT Nusantara
            Sejahtera Raya allowed to use www.21Cineplex.com (21Cineplex
            website) without prior permission from PT Nusantara Sejahtera Raya.
          </p>
        </ul>
      </div>
    </>
  );
};

export default ExampleLayout;
