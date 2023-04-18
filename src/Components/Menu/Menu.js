
import "./Menu.css";

function Menu() {
    return (
        /* Main Nav */
        <div className="bg-[#ce1212] relative z-[9] lg:block">
            <div className="!container px-6 mx-auto px-4">
                <nav>
                    <ul className="flex flex-wrap items-center h-full">
                        <li className="group relative flex items-center dropdown ">
                            <span className="text-[15px] text-bold text-black inline-flex items-center p-[11px_20px] my-[8px] mr-[15px] bg-[#f3b3b3] rounded-full cursor-pointer">
                                <i className="fa fa-bars text-[18px] mr-2" aria-hidden="true"></i>
                                <span className="font-semibold">Browse Categories

                                    <div class="dropdown-content">
                                        <li className="position-relative bg-light style={{width: '250px', height: '150px;'}}">
                                            <a href="#" className="dropdown dropdown-toggle">Drinks

                                                <ul class="dropdown-menu position-absolute top-0 start-0 p-2 bg-light">
                                                    <li><a href="/">Soft Drinks</a></li>
                                                    <li><a href="/">Concentrate</a></li>
                                                    <li><a href="/">Tea, Coffee & Hot Drinks</a></li>
                                                    <li><a href="/">Water</a></li>

                                                </ul>

                                            </a>
                                        </li>

                                        <li className="position-relative bg-light style={{width: '250px', height: '150px;'}}">
                                            <a href="#" className="dropdown dropdown-toggle">Bakery
                                                <ul class="dropdown-menu position-absolute top-0  start-0 p-2 bg-light">
                                                    <li><a href="/">Bread</a></li>
                                                    <li><a href="/">Burger Buns</a></li>
                                                    <li><a href="/">Doughnuts</a></li>
                                                    <li><a href="/">Pizza Bases & Dougballs</a></li>
                                                    <li><a href="/">Panini</a></li>
                                                    <li><a href="/">Tortilla Wraps</a></li>
                                                    <li><a href="/">Baps</a></li>
                                                    <li><a href="/">Rolls</a></li>
                                                    <li><a href="/">Pies</a></li>
                                                    <li><a href="/">Churros</a></li>
                                                    <li><a href="/">Pancake</a></li>

                                                </ul>
                                            </a>
                                        </li>
                                        <li className="position-relative bg-light style={{width: '250px', height: '150px;'}}">
                                            <a href="#" class="dropdown dropdown-toggle">Breading & Batter

                                                <ul class="dropdown-menu position-absolute top-0 start-0 p-2 bg-light">
                                                    <li><a href="/">Batter mx &Baking Mix</a></li>
                                                    <li><a href="/">Chicken Breading</a></li>

                                                </ul>

                                            </a>
                                        </li>
                                        <li className="position-relative bg-light style={{width: '250px', height: '150px;'}}">
                                            <a href="#" class="dropdown dropdown-toggle">Flour

                                                <ul class="dropdown-menu position-absolute top-0 start-0 p-2 bg-light">
                                                    <li><a href="/">Coconut Flour</a></li>
                                                    <li><a href="/">Pizza Flour</a></li>
                                                    <li><a href="/">Self Raising Flour</a></li>
                                                    <li><a href="/">Pain Flour</a></li>
                                                    <li><a href="/">Chapati Flour</a></li>
                                                    <li><a href="/">Gram Flour</a></li>
                                                    <li><a href="/">Pancake and Waffles</a></li>
                                                    <li><a href="/">Corn Flour</a></li>
                                                    <li><a href="/">Rice Flour</a></li>

                                                </ul>

                                            </a>
                                        </li>
                                        <li className="position-relative bg-light style={{width: '250px', height: '150px;'}}">
                                            <a href="#" class="dropdown dropdown-toggle">Burger


                                                <ul class="dropdown-menu position-absolute top-0 start-0 p-2 bg-light">
                                                    <li><a href="/">Beef Burger</a></li>
                                                    <li><a href="/">Chicken Burger</a></li>

                                                </ul>
                                            </a>
                                        </li>
                                        <li className="position-relative bg-light style={{width: '250px', height: '150px;'}}">
                                            <a href="#" class="dropdown dropdown-toggle">Donors & Kebabs

                                                <ul class="dropdown-menu position-absolute top-0 start-0 p-2 bg-light">
                                                    <li><a href="/">Donner</a></li>
                                                    <li><a href="/">Kebab</a></li>
                                                    <li><a href="/">Shawarma</a></li>

                                                </ul>

                                            </a>
                                        </li>
                                        <li className="position-relative bg-light style={{width: '250px', height: '150px;'}}">
                                            <a href="#" class="dropdown dropdown-toggle">Cooking Ingredients


                                                <ul class="dropdown-menu position-absolute top-0 start-0 p-2 bg-light">
                                                    <li><a href="/">Breadcrumbs & Stuffing</a></li>
                                                    <li><a href="/">Yeast & Baking Powder</a></li>
                                                    <li><a href="/">Food Colour</a></li>
                                                    <li><a href="/">Steeping Tablets</a></li>
                                                    <li><a href="/">Gravy & Stock cubes</a></li>
                                                    <li><a href="/">Potato Whitner & chip Spice</a></li>
                                                    <li><a href="/">Cooking sauces & Vinigar</a></li>
                                                    <li><a href="/">Paste & Pickles</a></li>
                                                    <li><a href="/">Curry Mix</a></li>
                                                    <li><a href="/">Herbs and spices</a></li>
                                                    <li><a href="/">Salt</a></li>
                                                    <li><a href="/">Coconut Cream,Desiccated & Milk</a></li>

                                                </ul>

                                            </a>
                                        </li>
                                        <li className="position-relative bg-light style={{width: '250px', height: '150px;'}}">
                                            <a href="#" class="dropdown dropdown-toggle">Dairy & Egg

                                                <ul class="dropdown-menu position-absolute top-0 left-40 start-0 p-2 bg-light">
                                                    <li><a href="/">Cheese</a></li>
                                                    <li><a href="/">Panner</a></li>
                                                    <li><a href="/">Cream</a></li>
                                                    <li><a href="/">Egg</a></li>
                                                    <li><a href="/">Milk</a></li>
                                                    <li><a href="/">Dairy Spread</a></li>
                                                    <li><a href="/">Margarine</a></li>
                                                    <li><a href="/">Butter & Ghee</a></li>
                                                    <li><a href="/">Yoghurt</a></li>
                                                    <li><a href="/">Pizza Cheese</a></li>

                                                </ul>

                                            </a>
                                        </li>
                                        <li className="position-relative bg-light style={{width: '250px', height: '150px;'}}">
                                            <a href="#" class="dropdown dropdown-toggle">Desert & Ice cream

                                                <ul class="dropdown-menu position-absolute top-0 left-40 start-0 p-2 bg-light">
                                                    <li><a href="/">Cakes</a></li>
                                                    <li><a href="/">Pudding</a></li>
                                                    <li><a href="/">Cookie Dough</a></li>
                                                    <li><a href="/">Ice cream & Shakes</a></li>
                                                    <li><a href="/">Syrup Sauce & toppings</a></li>

                                                </ul>

                                            </a>
                                        </li>
                                        <li className="position-relative bg-light style={{width: '250px', height: '150px;'}}">
                                            <a href="#" class="dropdown dropdown-toggle">Fish & Seafood

                                                <ul class="dropdown-menu position-absolute top-0 left-40 start-0 p-2 bg-light">
                                                    <li><a href="/">Frozen Prwan</a></li>
                                                    <li><a href="/">Frozen Coated Seafood</a></li>
                                                    <li><a href="/">Frozen Raw Seafood</a></li>
                                                    <li><a href="/">Frozen at sea</a></li>
                                                    <li><a href="/">Canned Seafood</a></li>

                                                </ul>

                                            </a>
                                        </li>

                                    </div>


                                </span>
                                <i className="fa fa-angle-down ml-2 text-[22px]" aria-hidden="true"></i>
                            </span>
                        </li>
                        <li className="flex items-center"><a href="/" className="text-[15px] font-semibold text-white inline-block px-[15px]">Home</a></li>
                        <li className="flex items-center"><a href="https://sale.cater-choice.com/promotions" className="text-[15px] font-semibold text-white inline-block px-[15px]">Promotions</a></li>
                        <li className="flex items-center"><a href="https://sale.cater-choice.com/aboutus" className="text-[15px] font-semibold text-white inline-block px-[15px]">About Us</a></li>
                        <li className="flex items-center"><a href="https://sale.cater-choice.com/contact" className="text-[15px] font-semibold text-white inline-block px-[15px]">Contact Us</a></li>

                        <li className="flex items-center"><a href="https://sale.cater-choice.com/click-collect" className="text-[15px] font-semibold text-white inline-block px-[15px]">Click &amp; Collect</a></li>
                    </ul>
                </nav>
            </div>
        </div>


        /* Main Nav end */
    )
}
export default Menu