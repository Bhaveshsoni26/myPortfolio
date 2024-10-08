import { content } from "../Content";

const Hireme = () => {
  const { Hireme } = content;
  return <section className="bg-bg_light_primary" id="Hireme">
    <div className="md:container px-5 pt-14">
      <h2 className="md:text-3x1 text-2x1" data-aos='fade-down'>{Hireme.title}</h2>
      <h4 className="text-gray" data-aos='fade-down'>{Hireme.subtitle}</h4>
      <br />
      <div className="flex items-center md:flex-row flex-col-reverse">
        
        <img src={Hireme.image1} alt="..." data-aos='fade-right' className="max-w-sm md:block hidden img-shadow" />
        <img src={Hireme.image2} alt="..." data-aos='fade-up' className="max-w-sm md:hidden"/>
        <div data-aos='fade-left' className="border-2 border-dark_primary max-w-sm p-6 shadow-sm rounded-xl rounded-br-[8rem] sm:min-w-[22rem]">
          <p className="leading-7">{Hireme.para}</p>
          <br />
          {/* <a href={Hireme.CVLink} className="cursor-pointer btn bg-dark_primary text-white" download>{Hireme.btnText}</a> */}
          <a href={Hireme.CVLink} className="cursor-pointer btn bg-dark_primary text-white" target={'blank'}>{Hireme.btnText}</a>
        </div>
      </div>
    </div>

  </section>;
};

export default Hireme;
