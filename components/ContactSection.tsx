export default function ContactSection() {
  return (
    <section id="contact" className="py-24 bg-white border-b border-gray-100">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-extrabold text-black mb-4 tracking-tight">Partner with Quantalabs</h2>
          <p className="text-lg text-gray-600 max-w-xl mx-auto">
            Whether you are an institution looking to migrate to PQC, an enterprise planning a custom chain, or an investor — we want to hear from you.
          </p>
        </div>

        <div className="bg-white border border-gray-100 rounded-3xl p-8 md:p-12 shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label htmlFor="name" className="text-sm font-bold text-black">Full Name</label>
                <input 
                  type="text" 
                  id="name" 
                  className="w-full bg-gray-50 border border-transparent hover:border-gray-200 rounded-xl px-4 py-3 text-black focus:outline-none focus:ring-1 focus:ring-black focus:bg-white transition-all"
                  placeholder="Jane Doe"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="company" className="text-sm font-bold text-black">Company / Organization</label>
                <input 
                  type="text" 
                  id="company" 
                  className="w-full bg-gray-50 border border-transparent hover:border-gray-200 rounded-xl px-4 py-3 text-black focus:outline-none focus:ring-1 focus:ring-black focus:bg-white transition-all"
                  placeholder="Acme Corp"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label htmlFor="email" className="text-sm font-bold text-black">Institutional Email</label>
              <input 
                type="email" 
                id="email" 
                className="w-full bg-gray-50 border border-transparent hover:border-gray-200 rounded-xl px-4 py-3 text-black focus:outline-none focus:ring-1 focus:ring-black focus:bg-white transition-all"
                placeholder="jane@example.com"
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="topic" className="text-sm font-bold text-black">Inquiry Type</label>
              <select 
                id="topic" 
                className="w-full bg-gray-50 border border-transparent hover:border-gray-200 rounded-xl px-4 py-3 text-black focus:outline-none focus:ring-1 focus:ring-black focus:bg-white transition-all appearance-none cursor-pointer"
              >
                <option>Enterprise Blockchain Solutions</option>
                <option>PQC Migration Services</option>
                <option>Custom Blockchain / Developer Tools</option>
                <option>Blockchain with AI Integrations</option>
                <option>Investor Relations</option>
                <option>Other</option>
              </select>
            </div>

            <div className="space-y-2">
              <label htmlFor="message" className="text-sm font-bold text-black">Message Details</label>
              <textarea 
                id="message" 
                rows={4}
                className="w-full bg-gray-50 border border-transparent hover:border-gray-200 rounded-xl px-4 py-3 text-black focus:outline-none focus:ring-1 focus:ring-black focus:bg-white transition-all resize-y"
                placeholder="Briefly describe your requirements..."
              ></textarea>
            </div>

            <button type="button" className="w-full bg-black text-white py-4 mt-6 rounded-xl font-bold hover:bg-gray-800 transition-colors shadow-lg shadow-gray-200">
              Submit Inquiry
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
