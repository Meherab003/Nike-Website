import { arrowRight } from "../assets/icons";
import Button from "../Components/Button";
import { shoes, statistics } from "../Constants";
import { bigShoe1 } from "../assets/images";
import ShoeCard from "../Components/ShoeCard";
import { useState } from "react";

const Hero = () => {
    const [bigShoeImg, setBigShoeImg] = useState(bigShoe1)
    return (
        <section
        id='home'
        className="w-full flex flex-col xl:flex-row justify-center min-h-screen gap-10 max-container"
        >
            <div className="relative w-full xl:w-2/5 flex flex-col justify-center items-start max-xl:padding-x pt-28">
                <p className="text-xl font-montserrat text-coral-red">Our Summer Collections</p>
                <h1 className="mt-10 font-palanquin text-8xl min-sm:text-[72px] min-sm:leading-[82] font-bold">
                    <span className="xl:bg-white xl:whitespace-nowrap relative z-10 pr-10">The New Arrival</span>
                    <br />
                    <span className="text-coral-red inline-block mt-3">Nike</span> Shoes
                </h1>
                <p className="font-montserrat text-slate-gray text-lg leading-8 mt-6 mb-14 sm:max-w-sm">Discover stylish Nike arrival, quality comfort, and innovation for your active life.</p>
                <Button label={"Shop now"} iconURL={arrowRight}/>
                <div className="flex justify-center items-start flex-wrap w-full mt-20 gap-16">
                    {statistics.map((stat, idx) => (
                        <div key={idx}>
                            <p className="text-4xl font-palanquin font-bold">{stat.value}</p>
                            <p className="text-slate-gray font-montserrat leading-7">{stat.label}</p>
                        </div>
                    ))}
                </div>
            </div>
            <div className="relative flex-1 flex justify-center items-center xl:min-h-screen max-xl:py-40 bg-primary bg-hero bg-cover bg-center">
                <img src={bigShoeImg} alt="Shoe Collection" width={610} height={500} className="object-contain relative z-10"/>
                <div className="flex gap-4 sm:gap-6 absolute -bottom-[5%] sm:left-[10%] mx-sm:px-6">
                    {shoes.map((shoe) => (
                        <div key={shoe}>
                            <ShoeCard 
                            imgURL={shoe}
                            changeBigShoeImage={(shoe) => setBigShoeImg(shoe)}
                            bigShoeImg={bigShoeImg}/>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Hero;