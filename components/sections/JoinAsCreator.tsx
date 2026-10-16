import React from "react";
import Button from "../ui/Button";
import Image from "next/image";

const JoinAsCreator = () => {
  return (
    <section className="relative bg-primary bg-grid py-24 pb-0 space-y-40">
      <Image
        src="/images/cta-bg.png"
        alt=""
        width={1440}
        height={803}
        className="absolute inset-0 z-0 object-cover w-full h-full "
      />

      <div className="relative z-10 py-10 pb-20 space-y-10">
        <h1 className="text-[46px] leading-14 font-heading font-semibold text-white text-center">
          Unlock Your Potential as a <br /> Creator with ByteSpace
        </h1>
        <p className="text-white text-lg text-center max-w-4xl mx-auto">
          Experience the collaboration of numerous creators and an expanding
          selection of courses. Register now and become a part of a community
          comprising over 10,000 local and international creators. Utilize our
          Course Editor, and showcase your expertise by publishing your finest
          course on the ByteSpace Course Library.
        </p>
        <div className="flex justify-center text-lg">
          <Button text="Join as a Creator" />
        </div>
      </div>
    </section>
  );
};

export default JoinAsCreator;
