import React from "react";

const imgUrl = [
  "https://ik.imagekit.io/zlt25mb52fx/ahmcdn/tr:w-800,pr-true/uploads/community-staging/img/club//honda-community-jawa-tengah-60856e81f77e9914b2065fd1-4-23052021-022924.png",
  "https://ik.imagekit.io/zlt25mb52fx/ahmcdn/assets/images/logo/honda.svg",
  "https://ik.imagekit.io/zlt25mb52fx/ahmcdn/tr:w-800,pr-true/uploads/community-staging/img/club//tiger-semarang-club-60856e82f77e9914b2065fd2-4-23052021-022938.png",
  "https://ik.imagekit.io/zlt25mb52fx/ahmcdn/tr:w-800,pr-true/uploads/community-staging/img/club//asosiasi-honda-jakarta-60856e8af77e9914b2065fdb-2-23052021-023114.png",
  "https://ik.imagekit.io/zlt25mb52fx/ahmcdn/tr:w-800,pr-true/uploads/community-staging/img/club//surabaya-honda-community-60856eebf77e9914b2066032-23052021-024621.png",
];

const SupportBy = () => (
  <section>
    <div className="w-full px-4  pb-12  sm:px-6 lg:px-8 bg-gray-100">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-base font-semibold py-12 tracking-wide uppercase">
          Supported by
        </h2>
        <div className="grid grid-cols-2 gap-8 md:grid-cols-6 lg:grid-cols-5">
          {imgUrl.map((url, idx) => (
            <div className="flex items-center justify-center col-span-1 md:col-span-2 lg:col-span-1">
              <img key={idx} src={url} alt="logo" width={100} />
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default SupportBy;
