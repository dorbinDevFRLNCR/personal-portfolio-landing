function CallMe() {
  return (
    <div className="call-me-card relative rounded-xl overflow-hidden">
      <div
        className="absolute bottom-[40%] left-[30%] w-[250px] h-[250px] md:w-[400px] md:h-[400px] rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(240, 48, 106, 0.15) 0%, transparent 70%)',
          animation: 'float 10s ease-in-out infinite reverse',
        }}
      />
      <div className="py-12 px-4">
        <div className="flex flex-col items-center">
          <span className="subtitle uppercase text-sm font-semibold tracking-tighter pb-4">
            Связь
          </span>
          <h4 className="text-white text-3xl text-center font-bold font-body px-4">
            Есть проект? Давай поговорим
          </h4>
          <div className="text-3xl pb-2">👋</div>
          <p className="text-center">Готов взяться за фриланс-заказы. Пишите — отвечу быстро.</p>
        </div>
      </div>
    </div>
  )
}

export default CallMe
