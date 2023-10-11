import { useState } from "react";
import "./App.css";

import bg1 from "./images/bgs/1.svg";
import bg2 from "./images/bgs/2.svg";
import bg3 from "./images/bgs/3.svg";

import ch1 from "./images/chocolate/1.png";
import ch2 from "./images/chocolate/2.png";
import ch3 from "./images/chocolate/3.png";

import i11 from "./images/slide1/Ellipse 33.svg";
import i12 from "./images/slide1/Ellipse 6 (Stroke).svg";
import i13 from "./images/slide1/Ellipse 7.svg";
import i14 from "./images/slide1/Group 10.svg";
import i15 from "./images/slide1/Group 11-1.svg";
import i16 from "./images/slide1/Group 11.svg";
import i17 from "./images/slide1/Group 9.svg";
import i18 from "./images/slide1/Polygon 6.svg";
import i19 from "./images/slide1/Rectangle 16.svg";
import i110 from "./images/slide1/Vector 7.svg";
import i111 from "./images/slide1/Vector 8.svg";
import i112 from "./images/slide1/_____.svg";

import i21 from "./images/slide2/Ellipse 29.svg";
import i22 from "./images/slide2/Ellipse 30.svg";
import i23 from "./images/slide2/Ellipse 31.svg";
import i24 from "./images/slide2/Ellipse 32.svg";
import i25 from "./images/slide2/Vector 9.svg";
import i26 from "./images/slide2/Vector 10.svg";
import i27 from "./images/slide2/Vector 11.svg";
import i28 from "./images/slide2/Vector 12.svg";
import i29 from "./images/slide2/Vector 13.svg";
import i210 from "./images/slide2/Vector 14.svg";
import i211 from "./images/slide2/Vector 15.svg";
import i212 from "./images/slide2/Vector 16.svg";

import i31 from "./images/slide3/Vector-1.svg";
import i32 from "./images/slide3/Vector-2.svg";
import i33 from "./images/slide3/Vector.svg";

function App() {
  const [st1, set1] = useState(false);
  const [st2, set2] = useState(false);
  const [st3, set3] = useState(false);

  return (
    <div
      className={`w-screen h-screen bg-[black] flex flex-row items-center justify-center max-[800px]:flex-col`}
    >
      <div
        onMouseEnter={() => {
          set1(true);
        }}
        onMouseLeave={() => {
          set1(false);
        }}
        className={`${
          st1 ? "w-[46%]" : `${!st1 && !st2 && !st3 ? "w-1/3" : "w-[27%]"}`
        } h-full transition-div relative overflow-hidden`}
      >
        <div
          className={`absolute transition-o z-30 bg-[black] w-full h-full ${
            st2 || st3 ? "opacity-80" : "opacity-0"
          }`}
        />
        <div className="absolute z-20 h-full w-full flex justify-center items-center">
          <img
            className={`w-2/3 transition-c h-auto object-contain ${
              st1 ? "-rotate-12 scale-75" : "scale-50"
            }`}
            src={ch1}
          />
        </div>
        <img className="w-full h-full object-cover" src={bg1} />
        {/* trash */}
        <img
          className={`absolute transition-c ${
            st1
              ? "left-[2%] bottom-[3%] scale-75"
              : "left-[5%] bottom-[0%] scale-50"
          }`}
          src={i11}
        />
        <img
          className={`absolute transition-c ${
            st1
              ? "right-[-4%] top-[4%] scale-75 -rotate-90"
              : "right-[-5%] top-[2%] scale-50"
          }`}
          src={i12}
        />
        <img
          className={`absolute transition-c ${
            st1
              ? "left-[37%] bottom-[0%] scale-75"
              : "left-[30%] bottom-[13%] scale-50"
          }`}
          src={i13}
        />
        <img
          className={`absolute transition-c ${
            st1
              ? "right-[4%] top-[0%] rotate-[160deg]"
              : "right-[0%] top-[5%] rotate-180 scale-75"
          }`}
          src={i14}
        />
        <img
          className={`absolute transition-c ${
            st1
              ? "left-[50%] bottom-[-2%] scale-75 rotate-3"
              : "left-[30%] bottom-[0%] scale-50 -rotate-6"
          }`}
          src={i15}
        />
        <img
          className={`absolute transition-c ${
            st1
              ? "left-[-2%] top-[2%] scale-90 rotate-[80deg]"
              : "left-[-3%] top-[3%] scale-50 rotate-90"
          }`}
          src={i18}
        />
        <img
          className={`absolute transition-c ${
            st1
              ? "left-[1%] top-[-4%] scale-75 rotate-[80deg]"
              : "left-[0%] top-[2%] scale-50 rotate-90"
          }`}
          src={i16}
        />
        <img
          className={`absolute transition-c ${
            st1
              ? "right-[-12%] bottom-[2%] scale-75"
              : "right-[-10%] bottom-[0%] scale-50"
          }`}
          src={i17}
        />

        <img
          className={`absolute transition-c ${
            st1
              ? "right-[-10%] bottom-[40%] scale-[40%] rotate-[60deg]"
              : "right-[-10%] bottom-[-5%] scale-[30%]"
          }`}
          src={i19}
        />
        <img
          className={`absolute transition-c ${
            st1
              ? "left-[-10%] bottom-[45%] rotate-[45deg] scale-150"
              : "left-[-10%] bottom-[15%] rotate-[25deg]"
          }`}
          src={i110}
        />
        <img
          className={`absolute transition-c ${
            st1
              ? "left-[50%] top-[0%] rotate-[190deg] scale-75"
              : "left-[20%] top-[0%] rotate-180 scale-50"
          }`}
          src={i111}
        />
        <img
          className={`absolute transition-c ${
            st1
              ? "left-[70%] top-[35%] rotate-[-50deg]"
              : "left-[30%] top-[15%] rotate-[-10deg]"
          }`}
          src={i112}
        />
      </div>
      <div
        onMouseEnter={() => {
          set2(true);
        }}
        onMouseLeave={() => {
          set2(false);
        }}
        className={`${
          st2 ? "w-[46%]" : `${!st1 && !st2 && !st3 ? "w-1/3" : "w-[27%]"}`
        } h-full transition-div relative overflow-hidden`}
      >
        <div
          className={`absolute transition-o z-30 bg-[black] w-full h-full ${
            st1 || st3 ? "opacity-80" : "opacity-0"
          }`}
        />
        <div className="absolute z-20 h-full w-full flex justify-center items-center">
          <img
            className={`w-2/3 transition-c h-auto object-contain ${
              st2 ? "-rotate-12 scale-75" : "scale-50"
            }`}
            src={ch2}
          />
        </div>
        <img className="w-full h-full object-cover" src={bg2} />
        {/* trash */}
        <img
          className={`absolute transition-c ${
            st2
              ? "left-[3%] bottom-[5%] scale-75 -rotate-12"
              : "left-[5%] bottom-[0%] scale-50"
          }`}
          src={i21}
        />
        <img
          className={`absolute transition-c ${
            st2
              ? "right-[-3%] top-[6%] scale-75 rotate-12"
              : "right-[-5%] top-[2%] scale-50"
          }`}
          src={i22}
        />
        <img
          className={`absolute transition-c ${
            st2
              ? "left-[20%] bottom-[10%] scale-75 rotate-6"
              : "left-[30%] bottom-[13%] scale-50"
          }`}
          src={i23}
        />
        <img
          className={`absolute transition-c ${
            st2
              ? "right-[3%] top-[7%] rotate-[190] scale-95"
              : "right-[0%] top-[5%] rotate-180 scale-75"
          }`}
          src={i24}
        />
        <img
          className={`absolute transition-c ${
            st2
              ? "w-full h-full left-0 top-0 object-cover scale-150 rotate-[30deg]"
              : "w-full h-full left-0 top-0 object-cover scale-125"
          }`}
          src={i25}
        />
        <img
          className={`absolute transition-c ${
            st2
              ? "left-[0%] top-[6%] scale-75 rotate-[100deg]"
              : "left-[-3%] top-[3%] scale-50 rotate-90"
          }`}
          src={i28}
        />
        <img
          className={`absolute transition-c ${
            st2
              ? "right-[0%] top-[0%] scale-75 rotate-[70deg]"
              : "right-[5%] top-[2%] scale-50 rotate-90"
          }`}
          src={i26}
        />
        <img
          className={`absolute transition-c ${
            st2
              ? "right-[-4%] bottom-[4%] scale-75"
              : "right-[-10%] bottom-[0%] scale-50"
          }`}
          src={i27}
        />

        <img
          className={`absolute transition-c ${
            st2
              ? "right-[0%] bottom-[0%] scale-[40%]"
              : "right-[-10%] bottom-[-5%] scale-[30%]"
          }`}
          src={i29}
        />
        <img
          className={`absolute transition-c ${
            st2
              ? "left-[-4%] bottom-[19%] rotate-[45deg]"
              : "left-[-10%] bottom-[15%] rotate-[25deg]"
          }`}
          src={i210}
        />
        <img
          className={`absolute transition-c ${
            st2
              ? "left-[10%] top-[6%] rotate-[50deg] scale-75"
              : "left-[20%] top-[0%] rotate-180 scale-50"
          }`}
          src={i211}
        />
        <img
          className={`absolute transition-c ${
            st2
              ? "right-[20%] bottom-[6%] rotate-[-20deg]"
              : "right-[30%] bottom-[5%] rotate-[-10deg]"
          }`}
          src={i212}
        />
      </div>
      <div
        onMouseEnter={() => {
          set3(true);
        }}
        onMouseLeave={() => {
          set3(false);
        }}
        className={`${
          st3 ? "w-[46%]" : `${!st1 && !st2 && !st3 ? "w-1/3" : "w-[27%]"}`
        } h-full transition-div relative overflow-hidden`}
      >
        <div
          className={`absolute transition-o z-30 bg-[black] w-full h-full ${
            st1 || st2 ? "opacity-80" : "opacity-0"
          }`}
        />
        <div className="absolute z-20 h-full w-full flex justify-center items-center">
          <img
            className={`w-2/3 transition-c h-auto object-contain ${
              st3 ? "-rotate-12 scale-75" : "scale-50"
            }`}
            src={ch3}
          />
        </div>
        <img className="w-full h-full object-cover" src={bg3} />
        {/* trash */}
        <img
          className={`absolute transition-c ${
            st3
              ? "w-full h-[90%] left-0 top-0 object-cover rotate-[30deg] scale-150"
              : "w-full h-[90%] left-0 top-0 object-cover"
          }`}
          src={i32}
        />
        <img
          className={`absolute transition-c ${
            st3
              ? "w-full h-[90%] left-0 top-[5%] object-cover scale-125 rotate-45"
              : "w-full h-[90%] left-0 top-[5%] object-cover"
          }`}
          src={i33}
        />
        <img
          className={`absolute transition-c ${
            st3
              ? "w-full h-[90%] left-0 top-[8%] object-cover scale-150 rotate-[-30deg]"
              : "w-full h-[90%] left-0 top-[8%] object-cover"
          }`}
          src={i31}
        />
      </div>
    </div>
  );
}

export default App;
