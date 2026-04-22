export const metadata = {
  title: "Why Buying An LED Mask On Amazon Could Damage Your Skin | The Global Edit",
  description: "Cheap Amazon LED masks are flooding the market with unverified wavelengths and dangerous electrical standards. Here's what to avoid.",
};

export default function AmazonRisks() {
  return (
    <div className="w-full bg-[#FAFAFA] relative">
      <div className="max-w-3xl mx-auto px-4 md:px-0 pt-16 pb-24">
        <div className="text-center mb-10 text-sm border-b border-stone-200 pb-10">
          <span className="uppercase tracking-widest text-stone-500 font-bold mb-4 block">Consumer Warning</span>
          <h1 className="text-5xl font-serif text-stone-900 leading-tight mb-6">
            Why Buying An LED Mask On Amazon Could Damage Your Skin
          </h1>
          <p className="text-stone-500 italic font-serif text-lg mb-8">
            Unregulated sellers, falsified specifications, and zero accountability.
          </p>
        </div>

        <div className="w-full aspect-[16/9] bg-stone-200 mb-12">
          <img
            src="https://img.thesitebase.net/10677/10677322/themes/1768726655a4cf8cd691.png"
            alt="Cheap LED mask warning"
            className="w-full h-full object-cover saturate-50"
          />
        </div>

        <div className="prose prose-stone prose-lg max-w-none text-stone-700">
          <p className="first-letter:text-6xl first-letter:font-serif first-letter:font-bold first-letter:float-left first-letter:mr-3 first-letter:text-stone-900 leading-relaxed mb-6">
            Search "LED face mask" on Amazon and you will be bombarded with dozens of options priced between £20 and £60. They all show the same stock-photo model bathed in red light, they all claim "7 colours," and they all promise clinical results. The overwhelming majority are dangerous junk.
          </p>

          <h2 className="text-3xl font-serif text-stone-900 mt-12 mb-6">The Wavelength Fraud</h2>
          <p className="mb-6">
            Legitimate LED therapy requires diodes calibrated to emit light at very precise nanometer values — 633nm for red, 415nm for blue, 830nm for near-infrared. This precision costs money to manufacture. Budget Amazon sellers use generic RGB LEDs designed for Christmas fairy lights. These LEDs produce a broad, scattered spectrum that looks red to the naked eye but contains almost zero energy at the therapeutic wavelength.
          </p>
          <p className="mb-6">
            You are essentially shining a coloured lamp on your face and calling it medicine.
          </p>

          <h2 className="text-3xl font-serif text-stone-900 mt-12 mb-6">The Electrical Hazard</h2>
          <p className="mb-6">
            In 2024, the UK's Office for Product Safety recalled multiple LED face masks sold on Amazon marketplaces for failing basic electrical safety standards. Several masks lacked proper insulation between the battery driver and the diode array, creating a risk of electrical shock when combined with sweat during use.
          </p>

          <h2 className="text-3xl font-serif text-stone-900 mt-12 mb-6">What To Look For Instead</h2>
          <p className="mb-6">
            When investing in light therapy, you should demand three things: (1) verified third-party spectrometer reports proving nanometer accuracy, (2) CE or FDA registration, and (3) a direct-to-consumer relationship with the manufacturer so returns and warranty claims are honoured without the Amazon marketplace middleman.
          </p>

          <div className="my-12 p-8 bg-stone-100 border-l-4 border-stone-900">
            <h4 className="font-serif text-xl mb-3 text-stone-900">Skip Amazon. Buy Direct.</h4>
            <p className="text-stone-700 text-sm mb-4">The safest path to real results is buying from verified manufacturers who publish their clinical data openly and sell direct-to-consumer with full warranty coverage.</p>
            <p className="text-sm font-bold">
              <a href="/best-led-face-mask-uk-2026" className="hover:text-stone-500 underline underline-offset-4">See our vetted, clinically-verified top 5 LED masks →</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
