function MobileMenu() {
    return (
        <div className="modal fade right" id="mobile-menu" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content border-0 rounded-none h-full">
                    <div className="modal-body">
                        <div className="flex justify-end mb-3">
                            <i className="fa fa-times text-[24px] cursor-pointer" data-bs-dismiss="modal" aria-hidden="true"></i>
                        </div>
                        <form action="https://sale.cater-choice.com/product/search" method="GET">
                            <div className="text-center flex flex-col items-center gap-2 mt-4 mb-3">
                                {/* <input type="hidden" name="_token" value="XpEgGl8Vi6VVohINF2RksDO0ZLFGJgXs8Zo3Up9D"> */}
                                    <input type="search" name="search" placeholder="Search" className="w-full border p-[14px_20px] h-[48px] rounded-[45px] h-full focus-visible:outline-0" value="" required />
                                    <button className="p-[0_16px] text-[18px] bg-[#ce1212] rounded-[45px] h-[48px] w-full text-[18px] mt-2 text-white font-sembold" type="submit">
                                        <i className="fa fa-search mr-1"></i> Search
                                    </button>
                            </div>
                        </form>
                        <nav>
                            <ul className="flex flex-col flex-wrap h-full">
                                <li className="dropdown relative min-h-[50px] flex items-center">
                                    <a className="text-[15px] text-bold inline-block px-[15px]" href="#" role="button" id="mobile-products" data-bs-toggle="dropdown" data-bs-auto-close="outside"><span>ALL Products</span> <i className="fa fa-angle-down" aria-hidden="true"></i></a>
                                    <div className="dropdown-menu" aria-labelledby="mobile-products" >
                                        <div className="dropdown">
                                            <a href="#" role="button" id="dropdownMenuLink1" data-bs-toggle="dropdown" className="p-[10px_20px] text-[15px] font-semibold block ">
                                                <span>Drinks</span>
                                                <i className="fa fa-angle-down" aria-hidden="true"></i>
                                            </a>
                                            <ul className="dropdown-menu !left-[20px]" aria-labelledby="dropdownMenuLink1">
                                                <li><a href="https://sale.cater-choice.com/product-cat/34" className="p-[10px_20px] text-[15px] font-semibold block ">Soft Drinks</a></li>
                                                <li><a href="https://sale.cater-choice.com/product-cat/35" className="p-[10px_20px] text-[15px] font-semibold block ">Concentrate</a></li>
                                                <li><a href="https://sale.cater-choice.com/product-cat/36" className="p-[10px_20px] text-[15px] font-semibold block ">Tea, Coffee &amp;amp; Hot Drinks</a></li>
                                                <li><a href="https://sale.cater-choice.com/product-cat/37" className="p-[10px_20px] text-[15px] font-semibold block ">Water</a></li>
                                            </ul>
                                        </div>
                                        <div className="dropdown">
                                            <a href="#" role="button" id="dropdownMenuLink4" data-bs-toggle="dropdown" className="p-[10px_20px] text-[15px] font-semibold block ">
                                                <span>Bakery</span>
                                                <i className="fa fa-angle-down" aria-hidden="true"></i>
                                            </a>
                                            <ul className="dropdown-menu !left-[20px]" aria-labelledby="dropdownMenuLink4">
                                                <li><a href="https://sale.cater-choice.com/product-cat/38" className="p-[10px_20px] text-[15px] font-semibold block ">Bread</a></li>
                                                <li><a href="https://sale.cater-choice.com/product-cat/42" className="p-[10px_20px] text-[15px] font-semibold block ">Burger Buns</a></li>
                                                <li><a href="https://sale.cater-choice.com/product-cat/43" className="p-[10px_20px] text-[15px] font-semibold block ">Doughnuts</a></li>
                                                <li><a href="https://sale.cater-choice.com/product-cat/45" className="p-[10px_20px] text-[15px] font-semibold block ">Pizza Bases &amp;amp; Doughballs</a></li>
                                                <li><a href="https://sale.cater-choice.com/product-cat/46" className="p-[10px_20px] text-[15px] font-semibold block ">Panini</a></li>
                                                <li><a href="https://sale.cater-choice.com/product-cat/47" className="p-[10px_20px] text-[15px] font-semibold block ">Tortilla Wraps</a></li>
                                                <li><a href="https://sale.cater-choice.com/product-cat/48" className="p-[10px_20px] text-[15px] font-semibold block ">Baps</a></li>
                                                <li><a href="https://sale.cater-choice.com/product-cat/50" className="p-[10px_20px] text-[15px] font-semibold block ">Rolls</a></li>
                                                <li><a href="https://sale.cater-choice.com/product-cat/52" className="p-[10px_20px] text-[15px] font-semibold block ">Pies</a></li>
                                                <li><a href="https://sale.cater-choice.com/product-cat/213" className="p-[10px_20px] text-[15px] font-semibold block ">Churros</a></li>
                                                <li><a href="https://sale.cater-choice.com/product-cat/214" className="p-[10px_20px] text-[15px] font-semibold block ">Pancake</a></li>
                                            </ul>
                                        </div>
                                        <div className="dropdown">
                                            <a href="#" role="button" id="dropdownMenuLink5" data-bs-toggle="dropdown" className="p-[10px_20px] text-[15px] font-semibold block ">
                                                <span>Breading &amp; Batter</span>
                                                <i className="fa fa-angle-down" aria-hidden="true"></i>
                                            </a>
                                            <ul className="dropdown-menu !left-[20px]" aria-labelledby="dropdownMenuLink5">
                                                <li><a href="https://sale.cater-choice.com/product-cat/53" className="p-[10px_20px] text-[15px] font-semibold block ">Batter mix &amp;amp; Baking Mix</a></li>
                                                <li><a href="https://sale.cater-choice.com/product-cat/54" className="p-[10px_20px] text-[15px] font-semibold block ">Chicken Breading</a></li>
                                            </ul>
                                        </div>
                                        <div className="dropdown">
                                            <a href="#" role="button" id="dropdownMenuLink6" data-bs-toggle="dropdown" className="p-[10px_20px] text-[15px] font-semibold block ">
                                                <span>Flour</span>
                                                <i className="fa fa-angle-down" aria-hidden="true"></i>
                                            </a>
                                            <ul className="dropdown-menu !left-[20px]" aria-labelledby="dropdownMenuLink6">
                                                <li><a href="https://sale.cater-choice.com/product-cat/55" className="p-[10px_20px] text-[15px] font-semibold block ">Coconut Flour</a></li>
                                                <li><a href="https://sale.cater-choice.com/product-cat/56" className="p-[10px_20px] text-[15px] font-semibold block ">Pizza Flour</a></li>
                                                <li><a href="https://sale.cater-choice.com/product-cat/57" className="p-[10px_20px] text-[15px] font-semibold block ">Self Raising Flour</a></li>
                                                <li><a href="https://sale.cater-choice.com/product-cat/58" className="p-[10px_20px] text-[15px] font-semibold block ">Plain Flour</a></li>
                                                <li><a href="https://sale.cater-choice.com/product-cat/59" className="p-[10px_20px] text-[15px] font-semibold block ">Chapatti Flour</a></li>
                                                <li><a href="https://sale.cater-choice.com/product-cat/60" className="p-[10px_20px] text-[15px] font-semibold block ">Gram Flour</a></li>
                                                <li><a href="https://sale.cater-choice.com/product-cat/61" className="p-[10px_20px] text-[15px] font-semibold block ">Pancake and Waffles</a></li>
                                                <li><a href="https://sale.cater-choice.com/product-cat/62" className="p-[10px_20px] text-[15px] font-semibold block ">Corn Flour</a></li>
                                                <li><a href="https://sale.cater-choice.com/product-cat/63" className="p-[10px_20px] text-[15px] font-semibold block ">Rice Flour</a></li>
                                            </ul>
                                        </div>
                                        <div className="dropdown">
                                            <a href="#" role="button" id="dropdownMenuLink7" data-bs-toggle="dropdown" className="p-[10px_20px] text-[15px] font-semibold block ">
                                                <span>Burger</span>
                                                <i className="fa fa-angle-down" aria-hidden="true"></i>
                                            </a>
                                            <ul className="dropdown-menu !left-[20px]" aria-labelledby="dropdownMenuLink7">
                                                <li><a href="https://sale.cater-choice.com/product-cat/64" className="p-[10px_20px] text-[15px] font-semibold block ">Beef Burger</a></li>
                                                <li><a href="https://sale.cater-choice.com/product-cat/65" className="p-[10px_20px] text-[15px] font-semibold block ">Chicken Burger</a></li>
                                            </ul>
                                        </div>
                                        <div className="dropdown">
                                            <a href="#" role="button" id="dropdownMenuLink8" data-bs-toggle="dropdown" className="p-[10px_20px] text-[15px] font-semibold block ">
                                                <span>Doners &amp; Kebabs</span>
                                                <i className="fa fa-angle-down" aria-hidden="true"></i>
                                            </a>
                                            <ul className="dropdown-menu !left-[20px]" aria-labelledby="dropdownMenuLink8">
                                                <li><a href="https://sale.cater-choice.com/product-cat/66" className="p-[10px_20px] text-[15px] font-semibold block ">Doner</a></li>
                                                <li><a href="https://sale.cater-choice.com/product-cat/67" className="p-[10px_20px] text-[15px] font-semibold block ">Kebab</a></li>
                                                <li><a href="https://sale.cater-choice.com/product-cat/256" className="p-[10px_20px] text-[15px] font-semibold block ">Shawarma</a></li>
                                            </ul>
                                        </div>
                                        <div className="dropdown">
                                            <a href="#" role="button" id="dropdownMenuLink9" data-bs-toggle="dropdown" className="p-[10px_20px] text-[15px] font-semibold block ">
                                                <span>Cooking Ingredients</span>
                                                <i className="fa fa-angle-down" aria-hidden="true"></i>
                                            </a>
                                            <ul className="dropdown-menu !left-[20px]" aria-labelledby="dropdownMenuLink9">
                                                <li><a href="https://sale.cater-choice.com/product-cat/68" className="p-[10px_20px] text-[15px] font-semibold block ">Breadcrumbs &amp;amp; Stuffing</a></li>
                                                <li><a href="https://sale.cater-choice.com/product-cat/69" className="p-[10px_20px] text-[15px] font-semibold block ">Yeast &amp;amp; Baking Powder</a></li>
                                                <li><a href="https://sale.cater-choice.com/product-cat/70" className="p-[10px_20px] text-[15px] font-semibold block ">Food Colour</a></li>
                                                <li><a href="https://sale.cater-choice.com/product-cat/71" className="p-[10px_20px] text-[15px] font-semibold block ">Steeping Tablets</a></li>
                                                <li><a href="https://sale.cater-choice.com/product-cat/72" className="p-[10px_20px] text-[15px] font-semibold block ">Gravy &amp;amp; Stock cubes</a></li>
                                                <li><a href="https://sale.cater-choice.com/product-cat/73" className="p-[10px_20px] text-[15px] font-semibold block ">Potato whitener &amp;amp; Chip Spice</a></li>
                                                <li><a href="https://sale.cater-choice.com/product-cat/75" className="p-[10px_20px] text-[15px] font-semibold block ">Cooking sauces &amp;amp; Vinegar</a></li>
                                                <li><a href="https://sale.cater-choice.com/product-cat/76" className="p-[10px_20px] text-[15px] font-semibold block ">Paste &amp;amp; Pickles</a></li>
                                                <li><a href="https://sale.cater-choice.com/product-cat/77" className="p-[10px_20px] text-[15px] font-semibold block ">Curry Mix</a></li>
                                                <li><a href="https://sale.cater-choice.com/product-cat/78" className="p-[10px_20px] text-[15px] font-semibold block ">Herbs and Spices</a></li>
                                                <li><a href="https://sale.cater-choice.com/product-cat/79" className="p-[10px_20px] text-[15px] font-semibold block ">Salt</a></li>
                                                <li><a href="https://sale.cater-choice.com/product-cat/80" className="p-[10px_20px] text-[15px] font-semibold block ">Coconut Cream, Desiccated &amp;amp; Milk</a></li>
                                            </ul>
                                        </div>
                                        <div className="dropdown">
                                            <a href="#" role="button" id="dropdownMenuLink10" data-bs-toggle="dropdown" className="p-[10px_20px] text-[15px] font-semibold block ">
                                                <span>Dairy &amp; Egg</span>
                                                <i className="fa fa-angle-down" aria-hidden="true"></i>
                                            </a>
                                            <ul className="dropdown-menu !left-[20px]" aria-labelledby="dropdownMenuLink10">
                                                <li><a href="https://sale.cater-choice.com/product-cat/82" className="p-[10px_20px] text-[15px] font-semibold block ">Cheese</a></li>
                                                <li><a href="https://sale.cater-choice.com/product-cat/83" className="p-[10px_20px] text-[15px] font-semibold block ">Paneer</a></li>
                                                <li><a href="https://sale.cater-choice.com/product-cat/84" className="p-[10px_20px] text-[15px] font-semibold block ">Cream</a></li>
                                                <li><a href="https://sale.cater-choice.com/product-cat/85" className="p-[10px_20px] text-[15px] font-semibold block ">Egg</a></li>
                                                <li><a href="https://sale.cater-choice.com/product-cat/86" className="p-[10px_20px] text-[15px] font-semibold block ">Milk</a></li>
                                                <li><a href="https://sale.cater-choice.com/product-cat/87" className="p-[10px_20px] text-[15px] font-semibold block ">Dairy Spread</a></li>
                                                <li><a href="https://sale.cater-choice.com/product-cat/88" className="p-[10px_20px] text-[15px] font-semibold block ">Margarine</a></li>
                                                <li><a href="https://sale.cater-choice.com/product-cat/89" className="p-[10px_20px] text-[15px] font-semibold block ">Butter &amp;amp; Ghee</a></li>
                                                <li><a href="https://sale.cater-choice.com/product-cat/91" className="p-[10px_20px] text-[15px] font-semibold block ">Yoghurt</a></li>
                                                <li><a href="https://sale.cater-choice.com/product-cat/92" className="p-[10px_20px] text-[15px] font-semibold block ">Pizza Cheese</a></li>
                                            </ul>
                                        </div>
                                        <div className="dropdown">
                                            <a href="#" role="button" id="dropdownMenuLink11" data-bs-toggle="dropdown" className="p-[10px_20px] text-[15px] font-semibold block ">
                                                <span>Dessert and Ice cream</span>
                                                <i className="fa fa-angle-down" aria-hidden="true"></i>
                                            </a>
                                            <ul className="dropdown-menu !left-[20px]" aria-labelledby="dropdownMenuLink11">
                                                <li><a href="https://sale.cater-choice.com/product-cat/93" className="p-[10px_20px] text-[15px] font-semibold block ">Cakes</a></li>
                                                <li><a href="https://sale.cater-choice.com/product-cat/95" className="p-[10px_20px] text-[15px] font-semibold block ">Pudding</a></li>
                                                <li><a href="https://sale.cater-choice.com/product-cat/96" className="p-[10px_20px] text-[15px] font-semibold block ">Cookie Dough</a></li>
                                                <li><a href="https://sale.cater-choice.com/product-cat/97" className="p-[10px_20px] text-[15px] font-semibold block ">Ice cream &amp;amp; shakes</a></li>
                                                <li><a href="https://sale.cater-choice.com/product-cat/98" className="p-[10px_20px] text-[15px] font-semibold block ">Syrup sauce &amp;amp; toppings</a></li>
                                            </ul>
                                        </div>
                                        <div className="dropdown">
                                            <a href="#" role="button" id="dropdownMenuLink12" data-bs-toggle="dropdown" className="p-[10px_20px] text-[15px] font-semibold block ">
                                                <span>Fish and Seafood</span>
                                                <i className="fa fa-angle-down" aria-hidden="true"></i>
                                            </a>
                                            <ul className="dropdown-menu !left-[20px]" aria-labelledby="dropdownMenuLink12">
                                                <li><a href="https://sale.cater-choice.com/product-cat/100" className="p-[10px_20px] text-[15px] font-semibold block ">Frozen Prawn</a></li>
                                                <li><a href="https://sale.cater-choice.com/product-cat/101" className="p-[10px_20px] text-[15px] font-semibold block ">Frozen Coated Seafood</a></li>
                                                <li><a href="https://sale.cater-choice.com/product-cat/102" className="p-[10px_20px] text-[15px] font-semibold block ">Frozen Raw Seafood</a></li>
                                                <li><a href="https://sale.cater-choice.com/product-cat/103" className="p-[10px_20px] text-[15px] font-semibold block ">Frozen at Sea</a></li>
                                                <li><a href="https://sale.cater-choice.com/product-cat/104" className="p-[10px_20px] text-[15px] font-semibold block ">Canned Seafood</a></li>
                                            </ul>
                                        </div>
                                        <div className="dropdown">
                                            <a href="#" role="button" id="dropdownMenuLink13" data-bs-toggle="dropdown" className="p-[10px_20px] text-[15px] font-semibold block ">
                                                <span>Fruits and Nuts</span>
                                                <i className="fa fa-angle-down" aria-hidden="true"></i>
                                            </a>
                                            <ul className="dropdown-menu !left-[20px]" aria-labelledby="dropdownMenuLink13">
                                                <li><a href="https://sale.cater-choice.com/product-cat/105" className="p-[10px_20px] text-[15px] font-semibold block ">Dried Fruits &amp;amp; Nuts</a></li>
                                                <li><a href="https://sale.cater-choice.com/product-cat/106" className="p-[10px_20px] text-[15px] font-semibold block ">Canned Fruits &amp;amp; nuts</a></li>
                                                <li><a href="https://sale.cater-choice.com/product-cat/107" className="p-[10px_20px] text-[15px] font-semibold block ">Fresh Fruits</a></li>
                                                <li><a href="https://sale.cater-choice.com/product-cat/108" className="p-[10px_20px] text-[15px] font-semibold block ">Fruit Granules</a></li>
                                                <li><a href="https://sale.cater-choice.com/product-cat/109" className="p-[10px_20px] text-[15px] font-semibold block ">Pulps</a></li>
                                            </ul>
                                        </div>
                                        <div className="dropdown">
                                            <a href="#" role="button" id="dropdownMenuLink14" data-bs-toggle="dropdown" className="p-[10px_20px] text-[15px] font-semibold block ">
                                                <span>Vegetables</span>
                                                <i className="fa fa-angle-down" aria-hidden="true"></i>
                                            </a>
                                            <ul className="dropdown-menu !left-[20px]" aria-labelledby="dropdownMenuLink14">
                                                <li><a href="https://sale.cater-choice.com/product-cat/110" className="p-[10px_20px] text-[15px] font-semibold block ">Frozen Vegetables</a></li>
                                                <li><a href="https://sale.cater-choice.com/product-cat/111" className="p-[10px_20px] text-[15px] font-semibold block ">Fresh Vegetables</a></li>
                                                <li><a href="https://sale.cater-choice.com/product-cat/112" className="p-[10px_20px] text-[15px] font-semibold block ">Pickled Vegetables</a></li>
                                                <li><a href="https://sale.cater-choice.com/product-cat/113" className="p-[10px_20px] text-[15px] font-semibold block ">Puree</a></li>
                                                <li><a href="https://sale.cater-choice.com/product-cat/114" className="p-[10px_20px] text-[15px] font-semibold block ">Canned Vegetables</a></li>
                                            </ul>
                                        </div>
                                        <div className="dropdown">
                                            <a href="#" role="button" id="dropdownMenuLink15" data-bs-toggle="dropdown" className="p-[10px_20px] text-[15px] font-semibold block ">
                                                <span>Honey and Spread</span>
                                                <i className="fa fa-angle-down" aria-hidden="true"></i>
                                            </a>
                                            <ul className="dropdown-menu !left-[20px]" aria-labelledby="dropdownMenuLink15">
                                                <li><a href="https://sale.cater-choice.com/product-cat/116" className="p-[10px_20px] text-[15px] font-semibold block ">Spreads</a></li>
                                            </ul>
                                        </div>
                                        <div className="dropdown">
                                            <a href="#" role="button" id="dropdownMenuLink16" data-bs-toggle="dropdown" className="p-[10px_20px] text-[15px] font-semibold block ">
                                                <span>Hygiene</span>
                                                <i className="fa fa-angle-down" aria-hidden="true"></i>
                                            </a>
                                            <ul className="dropdown-menu !left-[20px]" aria-labelledby="dropdownMenuLink16">
                                                <li><a href="https://sale.cater-choice.com/product-cat/117" className="p-[10px_20px] text-[15px] font-semibold block ">Waste Management</a></li>
                                                <li><a href="https://sale.cater-choice.com/product-cat/118" className="p-[10px_20px] text-[15px] font-semibold block ">Hand Soaps &amp;amp; Santizers</a></li>
                                                <li><a href="https://sale.cater-choice.com/product-cat/119" className="p-[10px_20px] text-[15px] font-semibold block ">Kitchen &amp;amp; Glass Cleaning</a></li>
                                                <li><a href="https://sale.cater-choice.com/product-cat/120" className="p-[10px_20px] text-[15px] font-semibold block ">General Cleaners</a></li>
                                                <li><a href="https://sale.cater-choice.com/product-cat/121" className="p-[10px_20px] text-[15px] font-semibold block ">Dishwashing</a></li>
                                                <li><a href="https://sale.cater-choice.com/product-cat/122" className="p-[10px_20px] text-[15px] font-semibold block ">Floor Cleaners</a></li>
                                                <li><a href="https://sale.cater-choice.com/product-cat/123" className="p-[10px_20px] text-[15px] font-semibold block ">Toilet &amp;amp; Washroom cleaners</a></li>
                                                <li><a href="https://sale.cater-choice.com/product-cat/124" className="p-[10px_20px] text-[15px] font-semibold block ">Laundry Products</a></li>
                                                <li><a href="https://sale.cater-choice.com/product-cat/125" className="p-[10px_20px] text-[15px] font-semibold block ">Pest Control</a></li>
                                                <li><a href="https://sale.cater-choice.com/product-cat/126" className="p-[10px_20px] text-[15px] font-semibold block ">Cloths &amp;amp; Clothing</a></li>
                                                <li><a href="https://sale.cater-choice.com/product-cat/127" className="p-[10px_20px] text-[15px] font-semibold block ">Gloves, Masks &amp;amp; Nets</a></li>
                                                <li><a href="https://sale.cater-choice.com/product-cat/128" className="p-[10px_20px] text-[15px] font-semibold block ">Paper Hygiene</a></li>
                                                <li><a href="https://sale.cater-choice.com/product-cat/129" className="p-[10px_20px] text-[15px] font-semibold block ">Personal Care</a></li>
                                            </ul>
                                        </div>
                                        <div className="dropdown">
                                            <a href="#" role="button" id="dropdownMenuLink17" data-bs-toggle="dropdown" className="p-[10px_20px] text-[15px] font-semibold block ">
                                                <span>Meat</span>
                                                <i className="fa fa-angle-down" aria-hidden="true"></i>
                                            </a>
                                            <ul className="dropdown-menu !left-[20px]" aria-labelledby="dropdownMenuLink17">
                                                <li><a href="https://sale.cater-choice.com/product-cat/130" className="p-[10px_20px] text-[15px] font-semibold block ">Beef</a></li>
                                                <li><a href="https://sale.cater-choice.com/product-cat/131" className="p-[10px_20px] text-[15px] font-semibold block ">Pizza Toppings</a></li>
                                                <li><a href="https://sale.cater-choice.com/product-cat/132" className="p-[10px_20px] text-[15px] font-semibold block ">Meat Specialty</a></li>
                                                <li><a href="https://sale.cater-choice.com/product-cat/133" className="p-[10px_20px] text-[15px] font-semibold block ">Lamb &amp;amp; Mutton</a></li>
                                                <li><a href="https://sale.cater-choice.com/product-cat/257" className="p-[10px_20px] text-[15px] font-semibold block ">Sausages</a></li>
                                            </ul>
                                        </div>
                                        <div className="dropdown">
                                            <a href="#" role="button" id="dropdownMenuLink18" data-bs-toggle="dropdown" className="p-[10px_20px] text-[15px] font-semibold block ">
                                                <span>Oil</span>
                                                <i className="fa fa-angle-down" aria-hidden="true"></i>
                                            </a>
                                            <ul className="dropdown-menu !left-[20px]" aria-labelledby="dropdownMenuLink18">
                                                <li><a href="https://sale.cater-choice.com/product-cat/134" className="p-[10px_20px] text-[15px] font-semibold block ">Vegetable Oil</a></li>
                                                <li><a href="https://sale.cater-choice.com/product-cat/135" className="p-[10px_20px] text-[15px] font-semibold block ">Rapeseed Oil</a></li>
                                                <li><a href="https://sale.cater-choice.com/product-cat/136" className="p-[10px_20px] text-[15px] font-semibold block ">Blended Oil</a></li>
                                                <li><a href="https://sale.cater-choice.com/product-cat/137" className="p-[10px_20px] text-[15px] font-semibold block ">Solid Oil</a></li>
                                                <li><a href="https://sale.cater-choice.com/product-cat/140" className="p-[10px_20px] text-[15px] font-semibold block ">Corn Oil</a></li>
                                                <li><a href="https://sale.cater-choice.com/product-cat/141" className="p-[10px_20px] text-[15px] font-semibold block ">Sunflower Oil</a></li>
                                            </ul>
                                        </div>
                                        <div className="dropdown">
                                            <a href="#" role="button" id="dropdownMenuLink19" data-bs-toggle="dropdown" className="p-[10px_20px] text-[15px] font-semibold block ">
                                                <span>Packaging</span>
                                                <i className="fa fa-angle-down" aria-hidden="true"></i>
                                            </a>
                                            <ul className="dropdown-menu !left-[20px]" aria-labelledby="dropdownMenuLink19">
                                                <li><a href="https://sale.cater-choice.com/product-cat/142" className="p-[10px_20px] text-[15px] font-semibold block ">Cutlery</a></li>
                                                <li><a href="https://sale.cater-choice.com/product-cat/143" className="p-[10px_20px] text-[15px] font-semibold block ">Paper Boxes</a></li>
                                                <li><a href="https://sale.cater-choice.com/product-cat/144" className="p-[10px_20px] text-[15px] font-semibold block ">Bags</a></li>
                                                <li><a href="https://sale.cater-choice.com/product-cat/145" className="p-[10px_20px] text-[15px] font-semibold block ">Thermal Bags</a></li>
                                                <li><a href="https://sale.cater-choice.com/product-cat/146" className="p-[10px_20px] text-[15px] font-semibold block ">Wrapping Materials</a></li>
                                                <li><a href="https://sale.cater-choice.com/product-cat/147" className="p-[10px_20px] text-[15px] font-semibold block ">Pizza Packaging</a></li>
                                                <li><a href="https://sale.cater-choice.com/product-cat/148" className="p-[10px_20px] text-[15px] font-semibold block ">Corrugated Packaging</a></li>
                                                <li><a href="https://sale.cater-choice.com/product-cat/149" className="p-[10px_20px] text-[15px] font-semibold block ">Polystyrene Packaging</a></li>
                                                <li><a href="https://sale.cater-choice.com/product-cat/150" className="p-[10px_20px] text-[15px] font-semibold block ">Bio Packaging</a></li>
                                                <li><a href="https://sale.cater-choice.com/product-cat/151" className="p-[10px_20px] text-[15px] font-semibold block ">Disposable cups, lids and accessories</a></li>
                                                <li><a href="https://sale.cater-choice.com/product-cat/152" className="p-[10px_20px] text-[15px] font-semibold block ">Plastic container</a></li>
                                                <li><a href="https://sale.cater-choice.com/product-cat/153" className="p-[10px_20px] text-[15px] font-semibold block ">Food Containers</a></li>
                                                <li><a href="https://sale.cater-choice.com/product-cat/155" className="p-[10px_20px] text-[15px] font-semibold block ">Salad Containers</a></li>
                                            </ul>
                                        </div>
                                        <div className="dropdown">
                                            <a href="#" role="button" id="dropdownMenuLink20" data-bs-toggle="dropdown" className="p-[10px_20px] text-[15px] font-semibold block ">
                                                <span>Pastry</span>
                                                <i className="fa fa-angle-down" aria-hidden="true"></i>
                                            </a>
                                            <ul className="dropdown-menu !left-[20px]" aria-labelledby="dropdownMenuLink20">
                                                <li><a href="https://sale.cater-choice.com/product-cat/156" className="p-[10px_20px] text-[15px] font-semibold block ">Pastry Specialties</a></li>
                                                <li><a href="https://sale.cater-choice.com/product-cat/157" className="p-[10px_20px] text-[15px] font-semibold block ">Samosas</a></li>
                                            </ul>
                                        </div>
                                        <div className="dropdown">
                                            <a href="#" role="button" id="dropdownMenuLink22" data-bs-toggle="dropdown" className="p-[10px_20px] text-[15px] font-semibold block ">
                                                <span>Potato</span>
                                                <i className="fa fa-angle-down" aria-hidden="true"></i>
                                            </a>
                                            <ul className="dropdown-menu !left-[20px]" aria-labelledby="dropdownMenuLink22">
                                                <li><a href="https://sale.cater-choice.com/product-cat/161" className="p-[10px_20px] text-[15px] font-semibold block ">Chips</a></li>
                                                <li><a href="https://sale.cater-choice.com/product-cat/162" className="p-[10px_20px] text-[15px] font-semibold block ">Jacket potato</a></li>
                                                <li><a href="https://sale.cater-choice.com/product-cat/163" className="p-[10px_20px] text-[15px] font-semibold block ">Potato Specialties</a></li>
                                                <li><a href="https://sale.cater-choice.com/product-cat/164" className="p-[10px_20px] text-[15px] font-semibold block ">Potato Starch</a></li>
                                            </ul>
                                        </div>
                                        <div className="dropdown">
                                            <a href="#" role="button" id="dropdownMenuLink23" data-bs-toggle="dropdown" className="p-[10px_20px] text-[15px] font-semibold block ">
                                                <span>Chicken and Poultry</span>
                                                <i className="fa fa-angle-down" aria-hidden="true"></i>
                                            </a>
                                            <ul className="dropdown-menu !left-[20px]" aria-labelledby="dropdownMenuLink23">
                                                <li><a href="https://sale.cater-choice.com/product-cat/166" className="p-[10px_20px] text-[15px] font-semibold block ">Cooked Chicken</a></li>
                                                <li><a href="https://sale.cater-choice.com/product-cat/167" className="p-[10px_20px] text-[15px] font-semibold block ">Frozen Chicken</a></li>
                                                <li><a href="https://sale.cater-choice.com/product-cat/168" className="p-[10px_20px] text-[15px] font-semibold block ">Fresh Chicken</a></li>
                                                <li><a href="https://sale.cater-choice.com/product-cat/169" className="p-[10px_20px] text-[15px] font-semibold block ">Duck</a></li>
                                                <li><a href="https://sale.cater-choice.com/product-cat/170" className="p-[10px_20px] text-[15px] font-semibold block ">Turkey</a></li>
                                            </ul>
                                        </div>
                                        <div className="dropdown">
                                            <a href="#" role="button" id="dropdownMenuLink24" data-bs-toggle="dropdown" className="p-[10px_20px] text-[15px] font-semibold block ">
                                                <span>Rice, Pasta &amp; Dried Foods</span>
                                                <i className="fa fa-angle-down" aria-hidden="true"></i>
                                            </a>
                                            <ul className="dropdown-menu !left-[20px]" aria-labelledby="dropdownMenuLink24">
                                                <li><a href="https://sale.cater-choice.com/product-cat/171" className="p-[10px_20px] text-[15px] font-semibold block ">Dried Food</a></li>
                                                <li><a href="https://sale.cater-choice.com/product-cat/172" className="p-[10px_20px] text-[15px] font-semibold block ">Lentils</a></li>
                                                <li><a href="https://sale.cater-choice.com/product-cat/173" className="p-[10px_20px] text-[15px] font-semibold block ">Noodles</a></li>
                                                <li><a href="https://sale.cater-choice.com/product-cat/175" className="p-[10px_20px] text-[15px] font-semibold block ">Rice</a></li>
                                            </ul>
                                        </div>
                                        <div className="dropdown">
                                            <a href="#" role="button" id="dropdownMenuLink25" data-bs-toggle="dropdown" className="p-[10px_20px] text-[15px] font-semibold block ">
                                                <span>Sandwich filings</span>
                                                <i className="fa fa-angle-down" aria-hidden="true"></i>
                                            </a>
                                            <ul className="dropdown-menu !left-[20px]" aria-labelledby="dropdownMenuLink25">
                                                <li><a href="https://sale.cater-choice.com/product-cat/176" className="p-[10px_20px] text-[15px] font-semibold block ">Other Fillings</a></li>
                                            </ul>
                                        </div>
                                        <div className="dropdown">
                                            <a href="#" role="button" id="dropdownMenuLink26" data-bs-toggle="dropdown" className="p-[10px_20px] text-[15px] font-semibold block ">
                                                <span>Sauces Dressings and Relishes</span>
                                                <i className="fa fa-angle-down" aria-hidden="true"></i>
                                            </a>
                                            <ul className="dropdown-menu !left-[20px]" aria-labelledby="dropdownMenuLink26">
                                                <li><a href="https://sale.cater-choice.com/product-cat/177" className="p-[10px_20px] text-[15px] font-semibold block ">Sauces &amp;amp; Dips</a></li>
                                                <li><a href="https://sale.cater-choice.com/product-cat/178" className="p-[10px_20px] text-[15px] font-semibold block ">Dressings</a></li>
                                                <li><a href="https://sale.cater-choice.com/product-cat/179" className="p-[10px_20px] text-[15px] font-semibold block ">Relishes</a></li>
                                                <li><a href="https://sale.cater-choice.com/product-cat/180" className="p-[10px_20px] text-[15px] font-semibold block ">Vinegar &amp;amp; Condiments</a></li>
                                            </ul>
                                        </div>
                                        <div className="dropdown">
                                            <a href="#" role="button" id="dropdownMenuLink27" data-bs-toggle="dropdown" className="p-[10px_20px] text-[15px] font-semibold block ">
                                                <span>Chocolates and snacks</span>
                                                <i className="fa fa-angle-down" aria-hidden="true"></i>
                                            </a>
                                            <ul className="dropdown-menu !left-[20px]" aria-labelledby="dropdownMenuLink27">
                                                <li><a href="https://sale.cater-choice.com/product-cat/181" className="p-[10px_20px] text-[15px] font-semibold block ">Nachos</a></li>
                                                <li><a href="https://sale.cater-choice.com/product-cat/182" className="p-[10px_20px] text-[15px] font-semibold block ">Lollypops</a></li>
                                                <li><a href="https://sale.cater-choice.com/product-cat/183" className="p-[10px_20px] text-[15px] font-semibold block ">Chocolates</a></li>
                                                <li><a href="https://sale.cater-choice.com/product-cat/184" className="p-[10px_20px] text-[15px] font-semibold block ">Sweet</a></li>
                                                <li><a href="https://sale.cater-choice.com/product-cat/185" className="p-[10px_20px] text-[15px] font-semibold block ">Biscuits and Cookies</a></li>
                                                <li><a href="https://sale.cater-choice.com/product-cat/187" className="p-[10px_20px] text-[15px] font-semibold block ">Marsh Mellows</a></li>
                                            </ul>
                                        </div>
                                        <div className="dropdown">
                                            <a href="#" role="button" id="dropdownMenuLink28" data-bs-toggle="dropdown" className="p-[10px_20px] text-[15px] font-semibold block ">
                                                <span>Stationery</span>
                                                <i className="fa fa-angle-down" aria-hidden="true"></i>
                                            </a>
                                            <ul className="dropdown-menu !left-[20px]" aria-labelledby="dropdownMenuLink28">
                                                <li><a href="https://sale.cater-choice.com/product-cat/188" className="p-[10px_20px] text-[15px] font-semibold block ">Till Rolls</a></li>
                                                <li><a href="https://sale.cater-choice.com/product-cat/190" className="p-[10px_20px] text-[15px] font-semibold block ">Books</a></li>
                                            </ul>
                                        </div>
                                        <div className="dropdown">
                                            <a href="#" role="button" id="dropdownMenuLink29" data-bs-toggle="dropdown" className="p-[10px_20px] text-[15px] font-semibold block ">
                                                <span>Sugar and Sweeteners</span>
                                                <i className="fa fa-angle-down" aria-hidden="true"></i>
                                            </a>
                                            <ul className="dropdown-menu !left-[20px]" aria-labelledby="dropdownMenuLink29">
                                                <li><a href="https://sale.cater-choice.com/product-cat/191" className="p-[10px_20px] text-[15px] font-semibold block ">Granulated Sugar</a></li>
                                                <li><a href="https://sale.cater-choice.com/product-cat/193" className="p-[10px_20px] text-[15px] font-semibold block ">Sugar Sticks &amp;amp; Sachets</a></li>
                                                <li><a href="https://sale.cater-choice.com/product-cat/194" className="p-[10px_20px] text-[15px] font-semibold block ">Caster &amp;amp; Icing Sugar</a></li>
                                                <li><a href="https://sale.cater-choice.com/product-cat/195" className="p-[10px_20px] text-[15px] font-semibold block ">Sugar Strands</a></li>
                                            </ul>
                                        </div>
                                        <div className="dropdown">
                                            <a href="#" role="button" id="dropdownMenuLink30" data-bs-toggle="dropdown" className="p-[10px_20px] text-[15px] font-semibold block ">
                                                <span>Vegetarian and Vegan</span>
                                                <i className="fa fa-angle-down" aria-hidden="true"></i>
                                            </a>
                                            <ul className="dropdown-menu !left-[20px]" aria-labelledby="dropdownMenuLink30">
                                                <li><a href="https://sale.cater-choice.com/product-cat/196" className="p-[10px_20px] text-[15px] font-semibold block ">Soya</a></li>
                                                <li><a href="https://sale.cater-choice.com/product-cat/199" className="p-[10px_20px] text-[15px] font-semibold block ">Burgers</a></li>
                                                <li><a href="https://sale.cater-choice.com/product-cat/200" className="p-[10px_20px] text-[15px] font-semibold block ">Appetizers</a></li>
                                                <li><a href="https://sale.cater-choice.com/product-cat/201" className="p-[10px_20px] text-[15px] font-semibold block ">Falafels</a></li>
                                            </ul>
                                        </div>
                                        <div className="dropdown">
                                            <a href="#" role="button" id="dropdownMenuLink31" data-bs-toggle="dropdown" className="p-[10px_20px] text-[15px] font-semibold block ">
                                                <span>Kitchen Equipments</span>
                                                <i className="fa fa-angle-down" aria-hidden="true"></i>
                                            </a>
                                            <ul className="dropdown-menu !left-[20px]" aria-labelledby="dropdownMenuLink31">
                                                <li><a href="https://sale.cater-choice.com/product-cat/202" className="p-[10px_20px] text-[15px] font-semibold block ">Other Equipments</a></li>
                                                <li><a href="https://sale.cater-choice.com/product-cat/203" className="p-[10px_20px] text-[15px] font-semibold block ">Cleaning Equipments</a></li>
                                                <li><a href="https://sale.cater-choice.com/product-cat/204" className="p-[10px_20px] text-[15px] font-semibold block ">Utensils</a></li>
                                                <li><a href="https://sale.cater-choice.com/product-cat/205" className="p-[10px_20px] text-[15px] font-semibold block ">Dispensers</a></li>
                                                <li><a href="https://sale.cater-choice.com/product-cat/206" className="p-[10px_20px] text-[15px] font-semibold block ">Trays</a></li>
                                            </ul>
                                        </div>
                                        <div className="dropdown">
                                            <a href="#" role="button" id="dropdownMenuLink32" data-bs-toggle="dropdown" className="p-[10px_20px] text-[15px] font-semibold block ">
                                                <span>Appetizers and sides</span>
                                                <i className="fa fa-angle-down" aria-hidden="true"></i>
                                            </a>
                                            <ul className="dropdown-menu !left-[20px]" aria-labelledby="dropdownMenuLink32">
                                                <li><a href="https://sale.cater-choice.com/product-cat/207" className="p-[10px_20px] text-[15px] font-semibold block ">Prawn Crackers</a></li>
                                                <li><a href="https://sale.cater-choice.com/product-cat/208" className="p-[10px_20px] text-[15px] font-semibold block ">Popadoms</a></li>
                                                <li><a href="https://sale.cater-choice.com/product-cat/209" className="p-[10px_20px] text-[15px] font-semibold block ">Fortune Cookies</a></li>
                                                <li><a href="https://sale.cater-choice.com/product-cat/210" className="p-[10px_20px] text-[15px] font-semibold block ">Cheese Appetizers</a></li>
                                                <li><a href="https://sale.cater-choice.com/product-cat/211" className="p-[10px_20px] text-[15px] font-semibold block ">Onion Rings</a></li>
                                                <li><a href="https://sale.cater-choice.com/product-cat/212" className="p-[10px_20px] text-[15px] font-semibold block ">Mushroom</a></li>
                                            </ul>
                                        </div>
                                        <div className="dropdown">
                                            <a href="#" role="button" id="dropdownMenuLink158" data-bs-toggle="dropdown" className="p-[10px_20px] text-[15px] font-semibold block ">
                                                <span>Posters</span>
                                                <i className="fa fa-angle-down" aria-hidden="true"></i>
                                            </a>
                                            <ul className="dropdown-menu !left-[20px]" aria-labelledby="dropdownMenuLink158">
                                            </ul>
                                        </div>
                                        <div className="dropdown">
                                            <a href="#" role="button" id="dropdownMenuLink159" data-bs-toggle="dropdown" className="p-[10px_20px] text-[15px] font-semibold block ">
                                                <span>Signs</span>
                                                <i className="fa fa-angle-down" aria-hidden="true"></i>
                                            </a>
                                            <ul className="dropdown-menu !left-[20px]" aria-labelledby="dropdownMenuLink159">
                                            </ul>
                                        </div>
                                        <div className="dropdown">
                                            <a href="#" role="button" id="dropdownMenuLink160" data-bs-toggle="dropdown" className="p-[10px_20px] text-[15px] font-semibold block ">
                                                <span>Brochure</span>
                                                <i className="fa fa-angle-down" aria-hidden="true"></i>
                                            </a>
                                            <ul className="dropdown-menu !left-[20px]" aria-labelledby="dropdownMenuLink160">
                                            </ul>
                                        </div>

                                    </div>
                                </li>
                                <li className="min-h-[50px] flex items-center"><a href="/" className="text-[15px] text-bold inline-block px-[15px]">Home</a></li>
                                <li className="min-h-[50px] flex items-center"><a href="https://sale.cater-choice.com/promotions" className="text-[15px] text-bold inline-block px-[15px]">Promotions</a></li>
                                <li className="min-h-[50px] flex items-center"><a href="https://sale.cater-choice.com/aboutus" className="text-[15px] text-bold inline-block px-[15px]">About Us</a></li>
                                <li className="min-h-[50px] flex items-center"><a href="https://sale.cater-choice.com/contact" className="text-[15px] text-bold inline-block px-[15px]">Contact Us</a></li>
                                <li className="min-h-[50px] flex items-center"><a href="https://sale.cater-choice.com/careers" className="text-[15px] text-bold inline-block px-[15px]">Careers</a></li>
                                <li className="min-h-[50px] flex items-center"><a href="https://sale.cater-choice.com/click-collect" className="text-[15px] text-bold inline-block px-[15px]">Click & Collect</a></li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
        </div>

    )
}
export default MobileMenu 