function Footer() {
    return (
      <footer className="bg-gray-800 text-white py-4 mt-10">
        <div className="container mx-auto text-center">
          <p>Copyright &copy; 2023 Smriti Kapoor, My E-Commerce Store. All rights reserved.</p>
          <ul className="flex justify-center mb-4">
            <li className="mr-4">
              <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v-4a5 5 0 00-5-5H2a5 5 0 00-5 5v3h3v-4a5 5 0 00-5-5H7v-3a5 5 0 00-5 5h3v4h-3v-4a5 5 0 00-5-5H2" />
                </svg>
              </a>
            </li>
            <li className="mr-4">
              <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
                </svg>
              </a>
            </li>
            <li className="mr-4">
              <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M16 11.38A12.318 12.318 0 0010 4.5a12.318 12.318 0 00-6.95 6.88 11.946 11.946 0 006.95 6.88 12.318 12.318 0 0010 17.5v.5a.5.5 0 00.5.5h.5a.5.5 0 00.5-.5v-.5a12.318 12.318 0 0010-4.5 12.318 12.318 0 006.95-6.88 11.946 11.946 0 00-6.95-6.88z" />
                </svg>
              </a>
            </li>
          </ul>
        </div>
      </footer>
    );
  }
  
  export default Footer;