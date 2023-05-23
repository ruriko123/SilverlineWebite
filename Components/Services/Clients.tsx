import React from "react";
import "./topmiddle.scss";
import Image from "next/image";

import Dalle from "../../public/dalle.jpg";
import Alice from "../../public/alicerestaurant.jpg";
import tukchethakali from "../../public/tukchethakali.jpg";
import yinyang from "../../public/yingyang.png";
import thirdeye from "../../public/thirdeyerestaurant.png";
import Med5 from "../../public/med5.jpg";
import caffeconcerto from "../../public/caffeconcerto.png";
import barc from "../../public/barc.jpg";
import aqua100 from "../../public/aquahundred.jpg";
import vootoo from "../../public/vootoo.jpg";
import ninethamel from "../../public/9inethamel.jpg";
import aliceconference from "../../public/aliceconference.png";

import marcopolo from "../../public/marcopolo.png";
import elevate from "../../public/elevate.jpg";
import rain from "../../public/rain.jpg";

import wokenroll from "../../public/woknroll.png";
import yarsathakali from "../../public/yarsathakali.jpg";
import rodeos from "../../public/rodeos.jpg";

import musicology from "../../public/musicology.jpg";
import mamagoto from "../../public/mamagoto.png";
import basecampoutdoorlifestyle from "../../public/basecampoutdoorlifestyle.png";

import { FlexboxGrid, Col } from "rsuite";
function Clients() {
  let iconStyles = { color: "white", fontSize: "2.5em" };
  return (
    <div className="show-grid d-flex justify-center flex-col">
      <h1 className="d-flex justify-center text-center text-white m-auto capitalize mb-4">
        Our clients
      </h1>

      <div className="d-flex justify-center flex-row gap-3 m-auto mb-5">
        <div className="image m-auto d-flex justify-center w-7/12 md:w-5/12">
          <Image
            placeholder="empty"
            width="0"
            height="0"
            sizes="auto"
            className="w-7/12 md:w-5/12"
            src={Dalle}
            priority={true}
            alt="experience"
          />
        </div>
        <div className="image m-auto d-flex justify-center w-7/12 md:w-5/12">
          <Image
            placeholder="empty"
            width="0"
            height="0"
            sizes="auto"
            className="w-7/12 md:w-5/12"
            src={Alice}
            priority={true}
            alt="experience"
          />
        </div>
        <div className="image m-auto d-flex justify-center w-7/12 md:w-5/12">
          <Image
            placeholder="empty"
            width="0"
            height="0"
            sizes="auto"
            className="w-7/12 md:w-5/12"
            src={tukchethakali}
            priority={true}
            alt="experience"
          />
        </div>
      </div>

      <div className="d-flex justify-center flex-row gap-3 m-auto mb-5">
        <div className="image m-auto d-flex justify-center w-7/12 md:w-5/12">
          <Image
            placeholder="empty"
            width="0"
            height="0"
            sizes="auto"
            className="w-7/12 md:w-5/12"
            src={yinyang}
            priority={true}
            alt="experience"
          />
        </div>
        <div className="image m-auto d-flex justify-center w-7/12 md:w-5/12">
          <Image
            placeholder="empty"
            width="0"
            height="0"
            sizes="auto"
            className="w-7/12 md:w-5/12"
            src={Med5}
            priority={true}
            alt="experience"
          />
        </div>
        <div className="image m-auto d-flex justify-center w-7/12 md:w-5/12">
          <Image
            placeholder="empty"
            width="0"
            height="0"
            sizes="auto"
            className="w-7/12 md:w-5/12"
            src={thirdeye}
            priority={true}
            alt="experience"
          />
        </div>
      </div>

      <div className="d-flex justify-center flex-row gap-3 m-auto mb-5">
        <div className="image m-auto d-flex justify-center w-7/12 md:w-5/12">
          <Image
            placeholder="empty"
            width="0"
            height="0"
            sizes="auto"
            className="w-7/12 md:w-5/12"
            src={musicology}
            priority={true}
            alt="experience"
          />
        </div>
        <div className="image m-auto d-flex justify-center w-7/12 md:w-5/12">
          <Image
            placeholder="empty"
            width="0"
            height="0"
            sizes="auto"
            className="w-7/12 md:w-5/12"
            src={mamagoto}
            priority={true}
            alt="experience"
          />
        </div>
        <div className="image m-auto d-flex justify-center w-7/12 md:w-5/12">
          <Image
            placeholder="empty"
            width="0"
            height="0"
            sizes="auto"
            className="w-7/12 md:w-5/12"
            src={basecampoutdoorlifestyle}
            priority={true}
            alt="experience"
          />
        </div>
      </div>

      <div className="d-flex justify-center flex-row gap-3 m-auto mb-5">
        <div className="image m-auto d-flex justify-center w-7/12 md:w-5/12">
          <Image
            placeholder="empty"
            width="0"
            height="0"
            sizes="auto"
            className="w-7/12 md:w-5/12"
            src={caffeconcerto}
            priority={true}
            alt="experience"
          />
        </div>

        <div className="image m-auto d-flex justify-center w-7/12 md:w-5/12">
          <Image
            placeholder="empty"
            width="0"
            height="0"
            sizes="auto"
            className="w-7/12 md:w-5/12"
            src={barc}
            priority={true}
            alt="experience"
          />
        </div>
        <div className="image m-auto d-flex justify-center w-7/12 md:w-5/12">
          <Image
            placeholder="empty"
            width="0"
            height="0"
            sizes="auto"
            className="w-7/12 md:w-5/12"
            src={aqua100}
            priority={true}
            alt="experience"
          />
        </div>
      </div>

      <div className="d-flex justify-center flex-row gap-3 m-auto mb-5">
        <div className="image m-auto d-flex justify-center w-7/12 md:w-5/12">
          <Image
            placeholder="empty"
            width="0"
            height="0"
            sizes="auto"
            className="w-7/12 md:w-5/12"
            src={wokenroll}
            priority={true}
            alt="experience"
          />
        </div>
        <div className="image m-auto d-flex justify-center w-7/12 md:w-5/12">
          <Image
            placeholder="empty"
            width="0"
            height="0"
            sizes="auto"
            className="w-7/12 md:w-5/12"
            src={yarsathakali}
            priority={true}
            alt="experience"
          />
        </div>
        <div className="image m-auto d-flex justify-center w-7/12 md:w-5/12">
          <Image
            placeholder="empty"
            width="0"
            height="0"
            sizes="auto"
            className="w-7/12 md:w-5/12"
            src={rodeos}
            priority={true}
            alt="experience"
          />
        </div>
      </div>

      <div className="d-flex justify-center flex-row gap-3 m-auto mb-5">
        <div className="image m-auto d-flex justify-center w-7/12 md:w-5/12">
          <Image
            placeholder="empty"
            width="0"
            height="0"
            sizes="auto"
            className="w-7/12 md:w-5/12"
            src={marcopolo}
            priority={true}
            alt="experience"
          />
        </div>
        <div className="image m-auto d-flex justify-center w-7/12 md:w-5/12">
          <Image
            placeholder="empty"
            width="0"
            height="0"
            sizes="auto"
            className="w-7/12 md:w-5/12"
            src={elevate}
            priority={true}
            alt="experience"
          />
        </div>
        <div className="image m-auto d-flex justify-center w-7/12 md:w-5/12">
          <Image
            placeholder="empty"
            width="0"
            height="0"
            sizes="auto"
            className="w-7/12 md:w-5/12"
            src={rain}
            priority={true}
            alt="experience"
          />
        </div>
      </div>

      <div className="d-flex justify-center flex-row gap-3 m-auto mb-5">
        <div className="image m-auto d-flex justify-center w-7/12 md:w-5/12">
          <Image
            placeholder="empty"
            width="0"
            height="0"
            sizes="auto"
            className="w-7/12 md:w-5/12"
            src={vootoo}
            priority={true}
            alt="experience"
          />
        </div>

        <div className="image m-auto d-flex justify-center w-7/12 md:w-5/12">
          <Image
            placeholder="empty"
            width="0"
            height="0"
            sizes="auto"
            className="w-7/12 md:w-5/12"
            src={ninethamel}
            priority={true}
            alt="experience"
          />
        </div>
        <div className="image m-auto d-flex justify-center w-7/12 md:w-5/12">
          <Image
            placeholder="empty"
            width="0"
            height="0"
            sizes="auto"
            className="w-7/12 md:w-5/12"
            src={aliceconference}
            priority={true}
            alt="experience"
          />
        </div>
      </div>
    </div>
  );
}

export default Clients;
