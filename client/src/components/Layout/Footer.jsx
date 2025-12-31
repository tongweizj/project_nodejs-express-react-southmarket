import styles from './styles.module.css';
import { socialLinks } from '/src/config/socialLinks';
const Footer = () => {
    return (
        <>
            <div className="w-full bg-black mt-10">
                <div class="mx-auto max-w-7xl py-10">
                    <div class="grid grid-cols-4 gap-4">
                        {/* logo */}
                        <div class="flex flex-col items-center overflow-hidden bg-black mr-10">
                            <div class="w-full py-2 px-1  ">
                                <svg
                                    width="133.57894736842104"
                                    height="30"
                                    viewBox="0 0 423 95"
                                    aria-label="Drop"
                                    color="white"
                                    className={`${styles.LogoColor}`}
                                    style={{ lineHeight: 1, width: 'auto', fontSize: '30px' }}
                                >
                                    <title>Drop</title>
                                    <path
                                        d="M160.095 46.264c11.032 0 14.448-4.09 14.448-10.42 0-6.465-3.246-10.483-14.448-10.483h-16.323v20.903zm26.574 19.462l21.045 27.924h-34.976L155.59 70.382h-11.819V93.65h-29.597V1.621h53.003c21.655 0 36.78 16.549 36.78 35.043 0 13.74-8.281 24.781-17.29 29.062zm102.98-18.09c0-13.166-9.308-21.674-23.711-21.674-14.402 0-23.71 8.508-23.71 21.674 0 13.165 9.308 21.672 23.71 21.672 14.18 0 23.71-8.71 23.71-21.672zM266.266.272c31.077 0 53.635 19.918 53.635 47.364 0 27.445-22.558 47.364-53.635 47.364-31.08 0-53.636-19.92-53.636-47.364 0-27.446 22.557-47.364 53.636-47.364zm112.775 46.39c11.157 0 14.61-4.125 14.61-10.51 0-6.521-3.281-10.571-14.61-10.571h-16.508v21.08zM386.133 2C407.837 2 423 18.542 423 37.03c0 13.736-8.3 24.774-17.33 29.054-8.29 4.648-31.402 4.653-31.402 4.653h-11.735V94H333V2zM101.999 48.026C102 89.683 55.505 94 55.505 94L29.726 68.373l17.29-.06C72.83 68.314 71.923 48 71.923 48s.908-20.314-24.905-20.314l-17.29-.06v40.747L0 38.822V2h47.036S102 1.993 102 47.996v.03z"
                                        fillRule="evenodd"
                                    ></path>
                                </svg>  </div>
                        </div>
                        {/* company */}
                        <div class="flex flex-col items-left overflow-hidden">
                            <div class="w-full py-2 px-1"><h3 class="text-lg text-white sm:text-sm font-medium text-gray-800 truncate block">Company</h3></div>
                            <div class="w-full px-1"><a href="/about"><span class=" text-white sm:text-sm font-medium text-gray-800 truncate block">About Us</span></a></div>
                            <div class="w-full px-1"><a href="/services"><span class=" text-white sm:text-sm font-medium text-gray-800 truncate block">Services</span></a></div>
                            <div class="w-full px-1"><a href="/privacy"><span class=" text-white sm:text-sm font-medium text-gray-800 truncate block">Privacy Policy</span></a></div>
                            
                        </div>
                        <div class="flex flex-col items-center">
                            <div class="w-full py-2 px-1"><h3 class="text-lg text-white sm:text-sm font-medium text-gray-800 truncate block">Support</h3></div>
                            <div class="w-full px-1"><a href="/contact"><span class=" text-white sm:text-sm font-medium text-gray-800 truncate block">Contact</span></a></div>
                            <div class="w-full px-1"><a href="/help"><span class=" text-white sm:text-sm font-medium text-gray-800 truncate block">Help Center</span></a></div>
                            <div class="w-full px-1"><span class=" text-white sm:text-sm font-medium text-gray-800 truncate block">Sitemap</span></div>
                            <div class="w-full px-1"><a href="/faq"><span class=" text-white sm:text-sm font-medium text-gray-800 truncate block">FAQ</span></a></div>
                        </div>
                        <div class="flex flex-col items-center bg-black">
                            <div class="w-full py-2 px-1"><h3 class="text-lg text-white sm:text-sm font-medium text-gray-800 truncate block">Follow Drop</h3></div>
                            <div className='flex flex-row'>
                                {socialLinks.map((social) => (
                                    <div class="w-full px-1">
                                        <a
                                            key={social.name}
                                            href={social.url}
                                            className=""
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            aria-label={social.name}
                                        >
                                            <span class=" text-white sm:text-sm font-medium text-gray-800 truncate block">
                                                <img src={social.icon} alt={social.name} className={`w-full aspect-square object-cover ${styles.SocialIcon}`} />
                                            </span>
                                        </a>
                                    </div>
                                ))}
                            </div> </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Footer