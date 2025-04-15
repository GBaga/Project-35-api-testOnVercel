import React from "react";

function Footer() {
  return (
    <div>
      {/* Footer */}
      <footer className="bg-white border-t mt-10">
        <div className="container mx-auto px-4 py-6 text-center text-gray-600 text-sm">
          © {new Date().getFullYear()} FastBite. All rights reserved.
        </div>
      </footer>
    </div>
  );
}

export default Footer;
