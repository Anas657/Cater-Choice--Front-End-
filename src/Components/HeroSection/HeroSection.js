  import "./HeroSection.css"

 export default function HeroSection() {
    return (
        <section class="bg-[#bfe7f5]">
            <div class="max-w-[1920px] lg:py-[20px] !pb-[60px] mx-auto flex items-center flex-wrap lg:px-0 px-6">
                <div class="lg:w-4/12 w-full">
                    <img class="w-6/12 transform lg:rotate-0 -rotate-90 lg:!mx-0 mx-auto" 
                    src="https://sale.cater-choice.com/frontend/assets/img/patez.png" />
                </div>
                <div class="lg:w-6/12 w-full flex flex-col justify-center">
                    <h2 class="mb-[25px] font-extrabold lg:text-[65px] md:text-[40px] text-[30px]">
                        Best selling, High quality range of products</h2>
                    <p class="relative before:absolute before:left-0 before:top-[10px] before:w-[20px] before:bg-[#ce1212] before:h-[4px] before:rounded-[50px] before:content-[''] mb-7 pl-7 text-[#ce1212]">
                        Check Product Range
                    </p>
                    <div class="flex items-center flex-wrap gap-2">
                        <a href="https://sale.cater-choice.com/products" class="bg-[#ce1212] text-white p-[15px_30px] rounded-[50px] text-[14px] font-bold">
                            Check Product Range
                        </a>
                        <a href="https://sale.cater-choice.com/contact" class="bg-[#ce1212] text-white p-[15px_30px] rounded-[50px] text-[14px] font-bold ">
                            Have Question? Contact us
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )
}