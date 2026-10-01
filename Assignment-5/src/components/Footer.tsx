import icon from "../assets/logo-text.png";

const Footer = () => {
  return (
    <div className="mt-30">

      <div className="flex border-t border-gray-200 pt-16 ml-30 mr-30 gap-25">

        <div className="whitespace-nowrap">
          <img className="mb-3" src={icon} alt="" />

          <p className="mb-5 text-purple-800 font-medium">
            Curated tools, technologies, and resources for developers building
            <br />
            modern software.
          </p>

          <p className="text-cyan-700 font-semibold">
            GitHub     Twitter     LinkedIn
          </p>
        </div>

        <div>
          <ul>
            <li className="mb-3 font-semibold">PRODUCT</li>
            <li className="mb-3 text-cyan-700 text-sm">Home</li>
            <li className="mb-3 text-gray-600 text-sm">Technologies</li>
            <li className="mb-3 text-gray-700 text-sm">Projects</li>
          </ul>
        </div>

        <div>
          <ul>
            <li className="mb-3 font-semibold">COMPANY</li>
            <li className="text-gray-600 mb-3 text-sm">About</li>
            <li className="text-red-700 mb-3 text-sm">Contact</li>
            <li className="text-amber-900 mb-3 text-sm">Services</li>
          </ul>
        </div>

        <div>
          <ul>
            <li className="mb-3 font-semibold">LEGAL</li>
            <li className="text-fuchsia-900 mb-3 text-sm">Privacy Policy</li>
            <li className="text-purple-700 mb-3 text-sm">Terms of Services</li>
          </ul>
        </div>

      </div>

      <div className="h-px bg-[#b4b4a6] ml-30 mr-30 mt-10"></div>

      <p className="ml-30 mt-4 mb-8 text-gray-500 text-sm">
        © 2026 Dev Stack. All rights reserved.
      </p>

    </div>
  );
};

export default Footer;