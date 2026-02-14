import Link from 'next/link';

export default function Footer() {
  return (
    // Bg-black aur Border-top se separation clear hogi
    <footer className="bg-black border-t border-gray-800 py-12 mt-20">
      <div className="max-w-6xl mx-auto px-6 text-center">
        
        <h4 className="text-2xl font-extrabold tracking-tighter text-white mb-4">AI Directory</h4>
        
        <div className="flex justify-center space-x-8 text-sm font-medium text-gray-400 mb-8">
          <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
          <Link href="/contact" className="hover:text-white transition-colors">Contact Support</Link>
          <Link href="/about" className="hover:text-white transition-colors">About Us</Link>
        </div>

        <div className="text-xs text-gray-600 border-t border-gray-900 pt-8">
          © 2026 AI Directory. All rights reserved.
        </div>
      </div>
    </footer>
  );
}