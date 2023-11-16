import React, {Component, useEffect, useState} from 'react';
import gsap from 'gsap';

const Register = () => {
    const [svgBackgroundColor, setSvgBackgroundColor] = useState('#d9d9d9');

    const tick = `
        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none">
          <path d="M4.8125 10.775C4.63005 9.95316 4.65806 9.09855 4.89394 8.29042C5.12982 7.48229 5.56593 6.74681 6.16183 6.15215C6.75773 5.5575 7.49413 5.12293 8.30276 4.88874C9.11138 4.65456 9.96604 4.62833 10.7875 4.8125C11.2396 4.10538 11.8625 3.52345 12.5987 3.12036C13.3349 2.71727 14.1607 2.50598 15 2.50598C15.8393 2.50598 16.6651 2.71727 17.4013 3.12036C18.1375 3.52345 18.7604 4.10538 19.2125 4.8125C20.0352 4.62753 20.8913 4.65364 21.7012 4.88839C22.5112 5.12315 23.2485 5.55893 23.8448 6.15519C24.4411 6.75146 24.8768 7.48884 25.1116 8.29875C25.3464 9.10866 25.3725 9.96479 25.1875 10.7875C25.8946 11.2396 26.4765 11.8625 26.8796 12.5987C27.2827 13.3349 27.494 14.1607 27.494 15C27.494 15.8393 27.2827 16.6651 26.8796 17.4013C26.4765 18.1375 25.8946 18.7604 25.1875 19.2125C25.3717 20.034 25.3454 20.8886 25.1113 21.6972C24.8771 22.5059 24.4425 23.2423 23.8478 23.8382C23.2532 24.4341 22.5177 24.8702 21.7096 25.1061C20.9014 25.3419 20.0468 25.3699 19.225 25.1875C18.7734 25.8973 18.1501 26.4818 17.4127 26.8866C16.6752 27.2915 15.8475 27.5038 15.0062 27.5038C14.165 27.5038 13.3373 27.2915 12.5998 26.8866C11.8624 26.4818 11.239 25.8973 10.7875 25.1875C9.96604 25.3717 9.11138 25.3454 8.30276 25.1113C7.49413 24.8771 6.75773 24.4425 6.16183 23.8478C5.56593 23.2532 5.12982 22.5177 4.89394 21.7096C4.65806 20.9014 4.63005 20.0468 4.8125 19.225C4.09994 18.7741 3.51301 18.1502 3.10631 17.4115C2.6996 16.6728 2.48633 15.8433 2.48633 15C2.48633 14.1567 2.6996 13.3272 3.10631 12.5885C3.51301 11.8498 4.09994 11.2259 4.8125 10.775Z" fill="${svgBackgroundColor}" stroke="black" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M11.25 15L13.75 17.5L18.75 12.5" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>       
    `;
    const smiley = `
        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none">
<path d="M15 27.5C21.9036 27.5 27.5 21.9036 27.5 15C27.5 8.09644 21.9036 2.5 15 2.5C8.09644 2.5 2.5 8.09644 2.5 15C2.5 21.9036 8.09644 27.5 15 27.5Z" fill="${svgBackgroundColor}" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M10 17.5C10 17.5 11.875 20 15 20C18.125 20 20 17.5 20 17.5" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M11.25 11.25H11.2625" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M18.75 11.25H18.7625" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
        
        
        `;
    const message = `
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
  <path d="M22 13V6C22 5.46957 21.7893 4.96086 21.4142 4.58579C21.0391 4.21071 20.5304 4 20 4H4C3.46957 4 2.96086 4.21071 2.58579 4.58579C2.21071 4.96086 2 5.46957 2 6V18C2 19.1 2.9 20 4 20H12" fill="${svgBackgroundColor}"/>
  <path d="M22 13V6C22 5.46957 21.7893 4.96086 21.4142 4.58579C21.0391 4.21071 20.5304 4 20 4H4C3.46957 4 2.96086 4.21071 2.58579 4.58579C2.21071 4.96086 2 5.46957 2 6V18C2 19.1 2.9 20 4 20H12" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M22 7L13.03 12.7C12.7213 12.8934 12.3643 12.996 12 12.996C11.6357 12.996 11.2787 12.8934 10.97 12.7L2 7" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M16 19L18 21L22 17" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`;

    const ghost = `
        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none">
<rect width="30" height="30" fill="#FDFDFD"/>
<path d="M15 2.5C12.3478 2.5 9.8043 3.55357 7.92893 5.42893C6.05357 7.3043 5 9.84784 5 12.5V27.5L8.75 23.75L11.875 26.875L15 23.75L18.125 26.875L21.25 23.75L25 27.5V12.5C25 9.84784 23.9464 7.3043 22.0711 5.42893C20.1957 3.55357 17.6522 2.5 15 2.5Z" fill="${svgBackgroundColor}" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M11.25 12.5H11.2625" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M18.75 12.5H18.7625" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`;

    const tag = `<svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none">
<path d="M15 2.5H2.5V15L14.1125 26.6125C15.2875 27.7875 17.2125 27.7875 18.3875 26.6125L26.6125 18.3875C27.7875 17.2125 27.7875 15.2875 26.6125 14.1125L15 2.5Z" fill="${svgBackgroundColor}" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M8.75 8.75H8.7625" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`;

    const flag = `<svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none">
<path d="M5 18.75C5 18.75 6.25 17.5 10 17.5C13.75 17.5 16.25 20 20 20C23.75 20 25 18.75 25 18.75V3.75C25 3.75 23.75 5 20 5C16.25 5 13.75 2.5 10 2.5C6.25 2.5 5 3.75 5 3.75V18.75Z" fill="${svgBackgroundColor}" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M5 27.5V18.75" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`;

    const flame = `<svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none">
<path d="M10.625 18.125C11.4538 18.125 12.2487 17.7958 12.8347 17.2097C13.4208 16.6237 13.75 15.8288 13.75 15C13.75 13.275 13.125 12.5 12.5 11.25C11.16 8.57125 12.22 6.1825 15 3.75C15.625 6.875 17.5 9.875 20 11.875C22.5 13.875 23.75 16.25 23.75 18.75C23.75 19.8991 23.5237 21.0369 23.0839 22.0985C22.6442 23.1601 21.9997 24.1247 21.1872 24.9372C20.3747 25.7497 19.4101 26.3942 18.3485 26.8339C17.2869 27.2737 16.1491 27.5 15 27.5C13.8509 27.5 12.7131 27.2737 11.6515 26.8339C10.5899 26.3942 9.62533 25.7497 8.81282 24.9372C8.0003 24.1247 7.35578 23.1601 6.91605 22.0985C6.47633 21.0369 6.25 19.8991 6.25 18.75C6.25 17.3088 6.79125 15.8825 7.5 15C7.5 15.8288 7.82924 16.6237 8.41529 17.2097C9.00134 17.7958 9.7962 18.125 10.625 18.125Z" fill="${svgBackgroundColor}" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`;

    const terminal = `<svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none">
<path d="M23.75 3.75H6.25C4.86929 3.75 3.75 4.86929 3.75 6.25V23.75C3.75 25.1307 4.86929 26.25 6.25 26.25H23.75C25.1307 26.25 26.25 25.1307 26.25 23.75V6.25C26.25 4.86929 25.1307 3.75 23.75 3.75Z" fill="${svgBackgroundColor}" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M8.75 13.75L11.25 11.25L8.75 8.75" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M13.75 16.25H18.75" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`;

    const smile = `<svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none">
<path d="M15 27.5C21.9036 27.5 27.5 21.9036 27.5 15C27.5 8.09644 21.9036 2.5 15 2.5C8.09644 2.5 2.5 8.09644 2.5 15C2.5 21.9036 8.09644 27.5 15 27.5Z" fill="${svgBackgroundColor}" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M10 17.5C10 17.5 11.875 20 15 20C18.125 20 20 17.5 20 17.5" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M11.25 11.25H11.2625" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M18.75 11.25H18.7625" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`;
    const globe = `<svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none">
  <path d="M15 27.5C21.9036 27.5 27.5 21.9036 27.5 15C27.5 8.09644 21.9036 2.5 15 2.5C8.09644 2.5 2.5 8.09644 2.5 15C2.5 21.9036 8.09644 27.5 15 27.5Z" fill="${svgBackgroundColor}" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M26.925 18.75H21.25C20.587 18.75 19.9511 19.0134 19.4822 19.4822C19.0134 19.9511 18.75 20.587 18.75 21.25V26.925" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M8.75 4.175V6.25C8.75 7.24456 9.14509 8.19839 9.84835 8.90165C10.5516 9.60491 11.5054 10 12.5 10C13.163 10 13.7989 10.2634 14.2678 10.7322C14.7366 11.2011 15 11.837 15 12.5C15 13.875 16.125 15 17.5 15C18.163 15 18.7989 14.7366 19.2678 14.2678C19.7366 13.7989 20 13.163 20 12.5C20 11.125 21.125 10 22.5 10H26.4625" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M13.75 27.4375V22.5C13.75 21.837 13.4866 21.2011 13.0178 20.7322C12.5489 20.2634 11.913 20 11.25 20C10.587 20 9.95107 19.7366 9.48223 19.2678C9.01339 18.7989 8.75 18.163 8.75 17.5V16.25C8.75 15.587 8.48661 14.9511 8.01777 14.4822C7.54893 14.0134 6.91304 13.75 6.25 13.75H2.5625" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`;

    const send = `<svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none">
<path d="M27.5 2.5L18.75 27.5L13.75 16.25L2.5 11.25L27.5 2.5Z" fill="${svgBackgroundColor}" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M27.5 2.5L13.75 16.25" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`;

    const squi = `<svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none">
  <path d="M22.5 7.5C21.1739 7.5 19.9021 8.02678 18.9645 8.96447C18.0268 9.90215 17.5 11.1739 17.5 12.5C15.1794 12.5 12.9538 13.4219 11.3128 15.0628C9.67187 16.7038 8.75 18.9294 8.75 21.25C8.75 15 13.75 15 13.75 8.125C13.75 7.38631 13.6045 6.65486 13.3218 5.97241C13.0391 5.28995 12.6248 4.66985 12.1025 4.14752C11.5801 3.62519 10.9601 3.21086 10.2776 2.92818C9.59514 2.64549 8.86369 2.5 8.125 2.5C7.38631 2.5 6.65486 2.64549 5.97241 2.92818C5.28995 3.21086 4.66985 3.62519 4.14752 4.14752C3.62519 4.66985 3.21086 5.28995 2.92818 5.97241C2.6455 6.65486 2.5 7.38631 2.5 8.125C2.5 8.9538 2.82924 9.74866 3.41529 10.3347C4.00134 10.9208 4.7962 11.25 5.625 11.25C6.4538 11.25 7.24866 10.9208 7.83471 10.3347C8.42076 9.74866 8.75 8.9538 8.75 8.125C8.75 12.5 3.75 13.75 3.75 21.25C3.75 24.75 6.5 27.5 10 27.5H22.5" fill="${svgBackgroundColor}"/>
  <path d="M22.5 7.5C21.1739 7.5 19.9021 8.02678 18.9645 8.96447C18.0268 9.90215 17.5 11.1739 17.5 12.5C15.1794 12.5 12.9538 13.4219 11.3128 15.0628C9.67187 16.7038 8.75 18.9294 8.75 21.25C8.75 15 13.75 15 13.75 8.125C13.75 7.38631 13.6045 6.65486 13.3218 5.97241C13.0391 5.28995 12.6248 4.66985 12.1025 4.14752C11.5801 3.62519 10.9601 3.21086 10.2776 2.92818C9.59514 2.64549 8.86369 2.5 8.125 2.5C7.38631 2.5 6.65486 2.64549 5.97241 2.92818C5.28995 3.21086 4.66985 3.62519 4.14752 4.14752C3.62519 4.66985 3.21086 5.28995 2.92818 5.97241C2.6455 6.65486 2.5 7.38631 2.5 8.125C2.5 8.9538 2.82924 9.74866 3.41529 10.3347C4.00134 10.9208 4.7962 11.25 5.625 11.25C6.4538 11.25 7.24866 10.9208 7.83471 10.3347C8.42076 9.74866 8.75 8.9538 8.75 8.125C8.75 12.5 3.75 13.75 3.75 21.25C3.75 24.75 6.5 27.5 10 27.5H22.5" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M20 25C20 22.875 21.625 21.25 23.75 21.25H25C25.663 21.25 26.2989 20.9866 26.7678 20.5178C27.2366 20.0489 27.5 19.413 27.5 18.75V16.25C27.5 14.9239 26.9732 13.6521 26.0355 12.7145C25.0979 11.7768 23.8261 11.25 22.5 11.25V5" fill="${svgBackgroundColor}"/>
  <path d="M20 25C20 22.875 21.625 21.25 23.75 21.25H25C25.663 21.25 26.2989 20.9866 26.7678 20.5178C27.2366 20.0489 27.5 19.413 27.5 18.75V16.25C27.5 14.9239 26.9732 13.6521 26.0355 12.7145C25.0979 11.7768 23.8261 11.25 22.5 11.25V5" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M19 27.5C19.4801 26.9633 19.7956 26.2997 19.9086 25.5885C20.0217 24.8773 19.9276 24.1486 19.6376 23.4895C19.3476 22.8303 18.8739 22.2686 18.2732 21.8715C17.6724 21.4744 16.9701 21.2586 16.25 21.25" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M22.5 16.25H22.5125" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`;

    const sun = `<svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none">
  <path d="M15 20C17.7614 20 20 17.7614 20 15C20 12.2386 17.7614 10 15 10C12.2386 10 10 12.2386 10 15C10 17.7614 12.2386 20 15 20Z" fill="${svgBackgroundColor}" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M15 3.75V5" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M15 25V26.25" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M3.75 15H5" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M25 15H26.25" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M22.955 7.045L22.0713 7.92875" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M7.92876 22.0713L7.04501 22.955" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M7.04501 7.045L7.92876 7.92875" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M22.0713 22.0713L22.955 22.955" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`;

    const leaf = `<svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none">
  <path d="M13.75 25C11.5551 25.0066 9.43782 24.1881 7.81815 22.7068C6.19848 21.2254 5.19471 19.1894 5.00592 17.0026C4.81714 14.8158 5.45712 12.6379 6.79894 10.9009C8.14077 9.1639 10.0864 7.99463 12.25 7.625C19.375 6.25 21.25 5.6 23.75 2.5C25 5 26.25 7.725 26.25 12.5C26.25 19.375 20.275 25 13.75 25Z" fill="${svgBackgroundColor}" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M2.5 26.25C2.5 22.5 4.8125 19.55 8.85 18.75C11.875 18.15 15 16.25 16.25 15" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`;

    const folder = `<svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none">
  <path d="M25 25C25.663 25 26.2989 24.7366 26.7678 24.2678C27.2366 23.7989 27.5 23.163 27.5 22.5V10C27.5 9.33696 27.2366 8.70107 26.7678 8.23223C26.2989 7.76339 25.663 7.5 25 7.5H15.125C14.7069 7.5041 14.2944 7.40326 13.9254 7.20672C13.5563 7.01019 13.2425 6.72422 13.0125 6.375L12 4.875C11.7724 4.52934 11.4625 4.2456 11.0981 4.04925C10.7338 3.85289 10.3264 3.75007 9.9125 3.75H5C4.33696 3.75 3.70107 4.01339 3.23223 4.48223C2.76339 4.95107 2.5 5.58696 2.5 6.25V22.5C2.5 23.163 2.76339 23.7989 3.23223 24.2678C3.70107 24.7366 4.33696 25 5 25H25Z" fill="${svgBackgroundColor}" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M2.5 12.5H27.5" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`;

    const clip = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
  <path d="M16 4H18C18.5304 4 19.0391 4.21071 19.4142 4.58579C19.7893 4.96086 20 5.46957 20 6V20C20 20.5304 19.7893 21.0391 19.4142 21.4142C19.0391 21.7893 18.5304 22 18 22H6C5.46957 22 4.96086 21.7893 4.58579 21.4142C4.21071 21.0391 4 20.5304 4 20V6C4 5.46957 4.21071 4.96086 4.58579 4.58579C4.96086 4.21071 5.46957 4 6 4H8" fill="${svgBackgroundColor}"/>
  <path d="M16 4H18C18.5304 4 19.0391 4.21071 19.4142 4.58579C19.7893 4.96086 20 5.46957 20 6V20C20 20.5304 19.7893 21.0391 19.4142 21.4142C19.0391 21.7893 18.5304 22 18 22H6C5.46957 22 4.96086 21.7893 4.58579 21.4142C4.21071 21.0391 4 20.5304 4 20V6C4 5.46957 4.21071 4.96086 4.58579 4.58579C4.96086 4.21071 5.46957 4 6 4H8" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M12 11H16" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M12 16H16" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M8 11H8.01" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M8 16H8.01" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M15 2H9C8.44772 2 8 2.44772 8 3V5C8 5.55228 8.44772 6 9 6H15C15.5523 6 16 5.55228 16 5V3C16 2.44772 15.5523 2 15 2Z" fill="#A09D9D" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`;

    const laugh = `<svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none">
  <path d="M15 27.5C21.9036 27.5 27.5 21.9036 27.5 15C27.5 8.09644 21.9036 2.5 15 2.5C8.09644 2.5 2.5 8.09644 2.5 15C2.5 21.9036 8.09644 27.5 15 27.5Z" fill="${svgBackgroundColor}" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M22.5 16.25C22.2018 18.0155 21.2817 19.6161 19.9062 20.7624C18.5306 21.9087 16.7904 22.525 15 22.5C13.2096 22.525 11.4694 21.9087 10.0938 20.7624C8.7183 19.6161 7.79825 18.0155 7.5 16.25H22.5Z" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M11.25 11.25H11.2625" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M18.75 11.25H18.7625" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`;
    const heart = `<svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none">
  <path d="M23.75 17.5C25.6125 15.675 27.5 13.4875 27.5 10.625C27.5 8.80164 26.7757 7.05295 25.4864 5.76364C24.197 4.47433 22.4484 3.75 20.625 3.75C18.425 3.75 16.875 4.375 15 6.25C13.125 4.375 11.575 3.75 9.375 3.75C7.55164 3.75 5.80295 4.47433 4.51364 5.76364C3.22433 7.05295 2.5 8.80164 2.5 10.625C2.5 13.5 4.375 15.6875 6.25 17.5L15 26.25L23.75 17.5Z" fill="${svgBackgroundColor}" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`;

    const svgs = [tick, ghost, tag, flag, flame, terminal, smiley, smile, globe, send, squi, sun, leaf, folder, clip, laugh, heart, message, tick, ghost, tag, flag, flame, terminal, smile, globe, send, squi, sun, leaf, folder, clip, laugh, heart, message, tick, ghost, tag, flag, flame, terminal, smile, globe, send, squi, sun, leaf, folder, clip, laugh, heart, message, tick, ghost, tag, flag, flame, terminal, smile, globe, send, squi, sun, leaf, folder, clip, laugh, heart, message, tick, ghost, tag, flag, flame, terminal, smile, globe, send, squi, sun, leaf, folder, clip, laugh, heart, message, tick, ghost, tag, flag, flame, terminal, smile, globe, send, squi, sun, leaf, folder, clip, laugh, heart, message, tick, ghost, tag, flag, flame, terminal, smile, globe, send, squi, sun, leaf, folder, clip, laugh, heart, message, tick, ghost, tag, flag, flame, terminal, smile, globe, send, squi, sun, leaf, folder, clip, laugh, heart, message,tick, ghost, tag, flag, flame, terminal, smiley, smile, globe, send, squi, sun, leaf, folder, clip, laugh, heart, message, tick, ghost, tag, flag, flame, terminal, smile, globe, send, squi, sun, leaf, folder, clip, laugh, heart, message, tick, ghost, tag, flag, flame, terminal, smile, globe, send, squi, sun, leaf, folder, clip, laugh, heart, message, tick, ghost, tag, flag, flame, terminal, smile, globe, send, squi, sun, leaf, folder, clip, laugh, heart, message, tick, ghost, tag, flag, flame, terminal, smile, globe, send, squi, sun, leaf, folder, clip, laugh, heart, message, tick, ghost, tag, flag, flame, terminal, smile, globe, send, squi, sun, leaf, folder, clip, laugh, heart, message, tick, ghost, tag, flag, flame, terminal, smile, globe, send, squi, sun, leaf, folder, clip, laugh, heart, message, tick, ghost, tag, flag, flame, terminal, smile, globe, send, squi, sun, leaf, folder, clip, laugh, heart, message,tick, ghost, tag, flag, flame, terminal, smiley, smile, globe, send, squi, sun, leaf, folder, clip, laugh, heart, message, tick,smile, globe, send, squi, sun, leaf, folder, flame, terminal, smiley, smile, globe, send, squi, sun, leaf, folder, clip, laugh, heart, message, tick, ghost, tag, flag, flame, terminal, smile, globe, send, squi, sun, leaf, folder, clip, laugh, heart, message, tick, ghost, tag, flag, flame, terminal, smile, globe, send, squi, sun, leaf, folder, clip, laugh, heart, message, tick, ghost, tag,tag, flag, flame, terminal, smile, globe, send, squi, sun];

    const throttled = (delay, fn) => {
        let lastCall = 0;
        return function (...args) {
            const now = new Date().getTime();
            if (now - lastCall < delay) {
                return;
            }
            lastCall = now;
            return fn(...args);
        };
    };

    const mouseMoveHandler2 = (e) => {
        const movableElements = document.querySelectorAll('.movable');

        movableElements.forEach((movableElement) => {
            const shiftValue = movableElement.getAttribute('data-value');
            const moveX = (e.clientX * shiftValue) / 10000;
            const moveY = (e.clientY * shiftValue) / 10000;

            gsap.to(movableElement, {x: moveX, y: moveY, duration: 1});
        });
    };

    const tHandler = throttled(10, mouseMoveHandler2);

    useEffect(() => {
        const movableElementsWrapper = document.querySelector('.movable-elements-wrapper');
        movableElementsWrapper.addEventListener('mousemove', tHandler);

        return () => {
            movableElementsWrapper.removeEventListener('mousemove', tHandler);
        };
    }, [tHandler]);


    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showForm, setShowForm] = useState(true);
    const [showComplete, setShowComplete] = useState(false);

        const handleButtonClick = (e) => {
            e.preventDefault();

            console.log('Email:', email);
            console.log('Password:', password);
            const newColor = '#ffcc00'; 

            setSvgBackgroundColor(newColor);
            setShowForm(false);
            setShowComplete(true);
        }

        return (

            <section className="flex justify-center items-center h-screen">
                <div className="absolute z-10">
                    {showForm && (
                    <div className="form p-5 bg-amber-50 w-72  shadow-2xl	">
                        <h1 className="font-black text-2xl text-center mb-4 text-amber-600">CREATE YOUR ACCOUNT</h1>
                        <p className="text-center pt-3 text-amber-600">Just enter your Email-ID and Password</p>

                        <form onSubmit={handleButtonClick}>

                        <label className="block mb-2 text-sm font-bold text-amber-700 pt-5" htmlFor="email">
                            Email:
                            <input
                                className="w-full p-2 border-b-2 bg-transparent border-amber-600 focus:outline-none focus:border-b-amber-800"
                                // className="w-full p-2 border border-gray-300 rounded"
                                type="email"
                                id="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                        </label>

                        <label className="block mb-2 text-sm font-bold text-amber-700" htmlFor="password">
                            Password:
                            <input
                                className="w-full p-2 border-b-2 bg-transparent border-amber-600 focus:outline-none focus:border-b-amber-800"
                                type="password"
                                id="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                            />
                        </label>

                        <button
                            className="bg-amber-600 text-white p-2 mt-5 rounded hover:bg-amber-800 w-full"
                            type="submit"
                        >
                            Submit
                        </button>
                        </form>
                    </div>)}
                    {showComplete && (
                    <div className="p-5 bg-amber-50 w-72 shadow-2xl complete flex flex-col items-center">
                        <h1 className="font-bold text-2xl text-center mb-4 text-amber-800">Registration Completed</h1>
                        <p className="text-amber-700 text-center"> {email && `User Email: ${email}`} </p>
                        <div className="svgi pt-12">
                            <svg xmlns="http://www.w3.org/2000/svg" width="220" height="158" viewBox="0 0 220 158" fill="none">
                                <path d="M210 10L72.5 147.5L10 85" stroke="#F59E0B" stroke-width="15" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                        </div>
                    </div>)}
                </div>















                <div className="background flex flex-wrap flex w-full h-full movable-elements-wrapper -z-1">
                    {svgs.map((svg, index) => {
                        const row = Math.floor(index/20);
                        const col = index % 20;
                        return (
                            <div
                                key={index}
                                className="movable absolute"
                                style={{
                                    left: `${col * 5}%`,
                                    top: `${row * 7}%`,
                                }}
                                data-value={index}
                                dangerouslySetInnerHTML={{__html: svg}}
                            />
                        );
                    })}
                </div>
            </section>


        );


}

export default Register;
