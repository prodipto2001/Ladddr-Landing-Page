interface MintButtonProps {
  text?: string;
  onClick?: () => void;
  className?: string;
}

const MintButton = ({
  text = "Mint your Project",
  onClick,
  className = "pt-0",
}: MintButtonProps) => {
  return (
    <button className={className} onClick={onClick}>
      <div className="w-[179px] h-11 bg-[#5b43dd] rounded-full shadow-[0px_0px_18px_0px_rgba(117,90,255,1.00)] outline-1 outline-[#5b43dd] inline-flex flex-col justify-start items-start gap-2.5 transition-colors">
        <div className="self-stretch h-10 flex-1 p-4 bg-[#8a76f3] hover:bg-[#7960FF] rounded-[100px] shadow-[inset_0px_1px_0.5px_0px_rgba(216,197,255,0.29)] inline-flex justify-center items-center gap-2.5">
          <div className="justify-start text-[#faf9fe] text-base font-bold font-['Space_Grotesk']">
            {text}
          </div>
        </div>
      </div>
    </button>
  );
};

export default MintButton;
