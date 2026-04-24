import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#0E0700] pt-20 pb-5 px-6 md:px-0">
      <div className="w-full max-w-[1240px] mx-auto text-white">
        <div className="grid md:grid-cols-10 gap-y-[30px]">
          <div className="md:col-span-3">
            <h2 className="font-el-messiri text-5xl font-medium tracking-[0.3px] transition-colors duration-300 text-white mb-3">
              Touvel
            </h2>
            <p className="text-white/50">
              Badung, Bali —<br />
              Jl. Desa Sawangan, No. 11
              <br />
              Nusa Dua, 81566
            </p>
          </div>
          <div className="md:col-span-2">
            <h2 className="font-el-messiri text-[28px] font-semibold mb-5">
              Page
            </h2>
            <ul className="space-y-3 text-white/50">
              <li>
                <Link
                  href="#"
                  className="hover:text-white transition-colors duration-200"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="hover:text-white transition-colors duration-200"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="hover:text-white transition-colors duration-200"
                >
                  FAQ
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="hover:text-white transition-colors duration-200"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
          <div className="md:col-span-2">
            <h2 className="font-el-messiri text-[28px] font-semibold mb-5">
              Important Link
            </h2>
            <ul className="space-y-3 text-white/50">
              <li>
                <Link
                  href="#"
                  className="hover:text-white transition-colors duration-200"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="hover:text-white transition-colors duration-200"
                >
                  Career
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="hover:text-white transition-colors duration-200"
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="hover:text-white transition-colors duration-200"
                >
                  Term & Condition
                </Link>
              </li>
            </ul>
          </div>
          <div className="md:col-span-3">
            <h2 className="font-el-messiri text-[28px] font-semibold mb-5">
              Our Newsletter
            </h2>
            <p className="text-white/50">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
              tellus, luctus nec.
            </p>
          </div>
        </div>
        <div className="mt-[50px] pt-5 border-t border-white/10">
          <div className="flex items-center justify-between text-white/50">
            <p className="text-sm">© 2025 Touvel. All rights reserved.</p>
            <p className="text-sm">Redjaa</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
