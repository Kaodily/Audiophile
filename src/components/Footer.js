import logoIcon from "./../assets/shared/desktop/logo.svg";
import facebookIcon from "./../assets/shared/desktop/icon-facebook.svg";
import twitterIcon from "./../assets/shared/desktop/icon-twitter.svg";
import instagramIcon from "./../assets/shared/desktop/icon-instagram.svg";

const Footer = () => {
    const products = ['HOME', ' HEADPHONES', 'SPEAKERS', 'EARPHONES']
    const socials = [facebookIcon,twitterIcon,instagramIcon]
    return (
        <div className=" bg-black text-white text-center ">
            <div className="border-t-4 w-[100px] py-5 mx-auto border-[#D87D4A]">
            </div>
            <img src={logoIcon} alt="logoIcon" className="mx-auto mb-12 w-[130px]"/>
            
            {
                products.map((product, index) => <li key={index} className=' text-[11px] pt-4 list-none'>{product}</li>)
            }
            <p className="px-9 leading-6 font-medium text-[14px] my-8 opacity-50">
                Audiophile is an all in one stop to fulfill your audio needs.
                We're a small team of music lovers and sound specialists who are devoted
                to helping you get the most out of personal audio.
                Come and visit our demo facility - we’re open 7 days a week.
            </p>
            <p className="px-9 leading-6 font-medium text-[14px] opacity-50">Copyright 2021. All Rights Reserved</p>
            <div className="flex justify-center py-9">
                {socials.map((social,index)=> <img src={social} key={index} alt={social} className='mr-3' />)}
            </div>
        </div>
    )
}
export default Footer