const Button = ({ children, onClick }: any) => {
  return (
    <>
      <div className="flex flex-col gap-6 max-w-sm mx-auto relative z-10">
        <button
          onClick={onClick}
          className="group relative p-4 rounded-2xl backdrop-blur-xl border-2 border-amber-500/30 bg-gradient-to-br from-amber-900/40 via-orange-900/60 to-orange/80 shadow-2xl hover:shadow-amber-500/30 hover:shadow-2xl hover:scale-[1.02] hover:-translate-y-1 active:scale-95 transition-all duration-500 ease-out cursor-pointer hover:border-amber-400/60 overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-amber-400/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out"></div>

          <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-amber-500/10 via-amber-400/20 to-amber-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

          <div className="relative z-10 flex items-center justify-center">
            <div className="flex justify-center">
              <p className="text-amber-400 font-bold text-lg group-hover:text-amber-300 transition-colors duration-300 drop-shadow-sm">
                {children}
              </p>
            </div>
            <div className="opacity-40 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300"></div>
          </div>
        </button>
      </div>
    </>
  );
};

export default Button;
