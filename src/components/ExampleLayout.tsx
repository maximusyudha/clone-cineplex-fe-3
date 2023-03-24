/* eslint-disable @next/next/no-img-element */
import Image from "next/image";

const ExampleLayout = ({ children }: any) => {
  return (
    <>
      <nav className="bg-teal-900">
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
                className="absolute{100}"
                style={{
                  position: "absolute",
                  top: 20,
                  bottom: 0,
                  right: 0,
                  left: 1400,
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
      <div className="max-w-100xl mx-auto px-2 sm:px-6 lg:px-8 bg-gray-100">
        <div className="relative flex items-center justify-between h-20">
          <div className="absolute inset-y-0 left-0 flex items-center"></div>
          <div className="ml-100  flex items-baseline">
            <a
              href="#"
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
          </div>
        </div>
        <span>
          <div className="w-full relative ml-40 pl-40">
            <img
              style={{ margin: "35px 100px" }}
              src="iklan.png"
              alt="iklan"
              width={865}
              height={100}
            />
          </div>
        </span>
      </div>
      <div
        className="md:px-5 font-bold  bg-green-900 text-white"
        style={{
          margin: "50px 70px",
          display: "inline-block",
          padding: "6px",
          border: "2px",
        }}
      >
        <p>Now Playing</p>
      </div>
      <div
        className="pl-40 md:px-6 bg-gray-300 text-green-500"
        style={{
          display: "inline-block",
          padding: "6px",
          border: "2px",
        }}
      >
        <div className="select-twenty ">
          <select className="custom-select bg-gray-300" id="city-change">
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
      <div className="pt-[88px] pb-4 px-2 md:px-5">{children}</div>
      <div className="w-full bg-gray-50 h-[100px] pb-[48px] md:pb-0 px-2 md:px-5">
        Footer
      </div>
    </>
  );
};

export default ExampleLayout;
