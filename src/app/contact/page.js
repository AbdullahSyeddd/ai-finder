"use client";

export default function Contact() {
  return (
    <div className="min-h-screen bg-[#0B1120] text-white flex items-center justify-center p-6 pt-24">
      <div className="max-w-2xl w-full">
        
        {/* Minimal Header */}
        <h1 className="text-6xl font-extrabold tracking-tighter mb-4 text-white">
          Get in touch.
        </h1>
        <p className="text-gray-400 text-lg mb-12 font-light">
          Building something new? We'd love to help feature your tool.
        </p>
        
        {/* Minimal Form - Borders Only */}
        <form className="space-y-10" onSubmit={(e) => e.preventDefault()}>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div className="group relative">
              <input type="text" required className="block w-full bg-transparent border-b border-gray-700 py-2 text-white placeholder-transparent focus:outline-none focus:border-white transition-colors peer" placeholder="Name" id="name" />
              <label htmlFor="name" className="absolute left-0 -top-3.5 text-xs text-gray-500 transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-xs peer-focus:text-white">
                Your Name
              </label>
            </div>
            
            <div className="group relative">
              <input type="email" required className="block w-full bg-transparent border-b border-gray-700 py-2 text-white placeholder-transparent focus:outline-none focus:border-white transition-colors peer" placeholder="Email" id="email" />
              <label htmlFor="email" className="absolute left-0 -top-3.5 text-xs text-gray-500 transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-xs peer-focus:text-white">
                Email Address
              </label>
            </div>
          </div>

          <div className="group relative">
            <textarea rows="4" required className="block w-full bg-transparent border-b border-gray-700 py-2 text-white placeholder-transparent focus:outline-none focus:border-white transition-colors peer resize-none" placeholder="Message" id="message"></textarea>
            <label htmlFor="message" className="absolute left-0 -top-3.5 text-xs text-gray-500 transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-xs peer-focus:text-white">
              Tell us about your project
            </label>
          </div>

          <div className="flex items-center justify-between pt-4">
            <button className="bg-white text-black px-8 py-3 rounded-full font-semibold text-sm hover:bg-gray-200 transition-colors">
              Send Message
            </button>
            
            <p className="text-xs text-gray-600">
              support@aidirectory.com
            </p>
          </div>

        </form>
      </div>
    </div>
  );
}