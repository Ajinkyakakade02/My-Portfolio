// src/components/shared/MascotWidget.tsx

import { Mascot } from "page-mascot";

const MascotWidget = () => {
  return (
    <div
      className="
        pointer-events-auto
        absolute
        left-1/2
        top-[42%]
        z-50
        -translate-x-1/2
        -translate-y-1/2
        hidden
        lg:block
      "
    >
      {/* Square glass mascot container */}
      <div
        className="
          relative
          flex
          h-[150px]
          w-[150px]
          items-center
          justify-center
          overflow-hidden
          rounded-2xl
          border
          border-white/10
          bg-white/[0.035]
          backdrop-blur-xl
          shadow-[0_20px_60px_rgba(0,0,0,0.25)]
        "
      >
        {/* Soft inner glow */}
        <div
          className="
            pointer-events-none
            absolute
            inset-0
            rounded-2xl
            bg-[#C9A66B]/[0.035]
          "
        />

        {/* Top gold highlight */}
        <div
          className="
            pointer-events-none
            absolute
            left-1/2
            top-0
            h-px
            w-2/3
            -translate-x-1/2
            bg-gradient-to-r
            from-transparent
            via-[#C9A66B]/50
            to-transparent
          "
        />

        {/* Penguin */}
        <div className="relative z-10 flex items-center justify-center">
          <Mascot
            directions="/mascots/penguin-directions.webp"
            reactions="/mascots/penguin-reactions.webp"
            size={110}
            label="Interactive portfolio mascot"
          />
        </div>
      </div>
    </div>
  );
};

export default MascotWidget;
