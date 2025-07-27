import React from 'react'
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';

function Search_section() {
  return (
  <>
 <div id="hp-search-form" topmost="true" class="pageComponent inPageSearchBox__inPageSearchBox"
        data-label="IN_PAGE_SEARCH">
        <div id="inPageSearchForm" class="InPageTabs">
            <div class="tab__tabs">
                <div id="inPageSearchForm_0" class="tabChild list_header_semiBold active pageComponent Ng500   "
                    data-label="BUY"
                    data-custominfo="{&quot;payload&quot;:{&quot;basic_info&quot;:{&quot;rescom&quot;:&quot;R&quot;,&quot;preference&quot;:&quot;S&quot;},&quot;location&quot;:{&quot;id&quot;:&quot;&quot;,&quot;type&quot;:&quot;CITY&quot;}}}"
                    testid="BUY">Buy</div>
                <div id="inPageSearchForm_1" class="tabChild list_header_semiBold  pageComponent Ng500   "
                    data-label="RENT"
                    data-custominfo="{&quot;payload&quot;:{&quot;basic_info&quot;:{&quot;rescom&quot;:&quot;R&quot;,&quot;preference&quot;:&quot;S&quot;},&quot;location&quot;:{&quot;id&quot;:&quot;&quot;,&quot;type&quot;:&quot;CITY&quot;}}}"
                    testid="RENT">Rent</div>
                <div id="inPageSearchForm_2"
                    class="tabChild list_header_semiBold  pageComponent Ng500  tab__relativePos " data-label="NL"
                    data-custominfo="{&quot;payload&quot;:{&quot;basic_info&quot;:{&quot;rescom&quot;:&quot;R&quot;,&quot;preference&quot;:&quot;S&quot;},&quot;location&quot;:{&quot;id&quot;:&quot;&quot;,&quot;type&quot;:&quot;CITY&quot;}}}"
                    testid="NL">New Launch<div class="tab__redDot"></div>
                </div>
                <div id="inPageSearchForm_3" class="tabChild list_header_semiBold  pageComponent Ng500   "
                    data-label="PG"
                    data-custominfo="{&quot;payload&quot;:{&quot;basic_info&quot;:{&quot;rescom&quot;:&quot;R&quot;,&quot;preference&quot;:&quot;S&quot;},&quot;location&quot;:{&quot;id&quot;:&quot;&quot;,&quot;type&quot;:&quot;CITY&quot;}}}"
                    testid="PG">PG / Co-living</div>
                <div id="inPageSearchForm_4" class="tabChild list_header_semiBold  pageComponent Ng500   "
                    data-label="COMM"
                    data-custominfo="{&quot;payload&quot;:{&quot;basic_info&quot;:{&quot;rescom&quot;:&quot;R&quot;,&quot;preference&quot;:&quot;S&quot;},&quot;location&quot;:{&quot;id&quot;:&quot;&quot;,&quot;type&quot;:&quot;CITY&quot;}}}"
                    testid="COMM">Commercial</div>
                <div id="inPageSearchForm_5" class="tabChild list_header_semiBold  pageComponent Ng500   "
                    data-label="PLOTS"
                    data-custominfo="{&quot;payload&quot;:{&quot;basic_info&quot;:{&quot;rescom&quot;:&quot;R&quot;,&quot;preference&quot;:&quot;S&quot;},&quot;location&quot;:{&quot;id&quot;:&quot;&quot;,&quot;type&quot;:&quot;CITY&quot;}}}"
                    testid="PLOTS">Plots/Land</div>
                <div id="inPageSearchForm_6" class="tabChild list_header_semiBold  pageComponent Ng500   "
                    data-label="PROJ"
                    data-custominfo="{&quot;payload&quot;:{&quot;basic_info&quot;:{&quot;rescom&quot;:&quot;R&quot;,&quot;preference&quot;:&quot;S&quot;},&quot;location&quot;:{&quot;id&quot;:&quot;&quot;,&quot;type&quot;:&quot;CITY&quot;}}}"
                    testid="PROJ">Projects</div>
                <div class="tab__bar" style={{width: "54px", left: "20px" }}></div>
            </div>
            <div class="tab__tabsContent">
                <div class="">
                    <div class="inPageSearchBox__searchTabWrap">
                        <div class="inPageSearchBox__inputFilterOptions">
                            <div class="inPageSearchBox__basicFilter">
                                <div class="list_header_semiBold Ng500 inPageSearchBox__searchDropdown">
                                    <div class="">All Residential</div>
                                </div>
                                <div class="inPageSearchBox__searchField">
                                    <div id="d_landmark_inPageSearchBox"
                                        class="pageComponent inPageSearchBox__searchFieldInput"
                                        data-label="SEARCH_INPUT" data-custominfo="{}"><i
                                            class="iconS_Common_20 icon_search"></i>
                                        <div class="component__DeskSfInput"><input type="text" name="keyword"
                                                class="component__searchInput" id="keyword2" autocomplete="off"
                                                value="" />
                                            <div class="component__suggest"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="pageComponent inPageSearchBox__nearMe" data-label="NEAR_ME_SEARCH"
                                data-custominfo="{&quot;custom_object&quot;:{&quot;preference&quot;:&quot;S&quot;,&quot;res_com&quot;:&quot;R&quot;,&quot;search_type&quot;:&quot;LS&quot;}}"
                                style={{cursor: "pointer", height: "30px", whitespace: "nowrap", borderradius: "36px", display: "flex", alignitems: "center", marginright: "12px" }}>
                                <img src="https://www.99acres.com/universalapp/img/nearMeV2.png" width="40"
                                    height="40" /><img src="https://www.99acres.com/universalapp/img/nearMeTag.png"
                                    class="inPageSearchBox__nearMeTag" /></div>
                            <div class="pageComponent undefined" data-label="VOICE_SEARCH_HP_DESKTOP" topmost="true">
                                <section>
                                    <div class="pageComponent undefined" data-label="VOICE_SEARCH"
                                        style={{height: "40px" }}>
                                        <div class="SpeechToText__voiceIcon" style={{height: "40px" }}><img
                                                src="https://www.99acres.com/universalapp/img/mic.png"
                                                style={{height: "40px" }} /><img
                                                src="https://www.99acres.com/universalapp/img/VoiceSearchTag.png"
                                                class=" SpeechToText__voiceTag " /></div>
                                    </div>
                                </section>
                            </div>
                            <div class="inPageSearchBox__searchBtn"><button id="searchform_search_btn" type="submit"
                                    variant="primaryRegular" data-label="SEARCH_SUBMIT"
                                    data-custominfo="{&quot;custom_object&quot;:{&quot;availableFor&quot;:[],&quot;sharing&quot;:[],&quot;city&quot;:&quot;&quot;,&quot;bedroom_num&quot;:[],&quot;class&quot;:[],&quot;locality&quot;:[],&quot;brandIds&quot;:[],&quot;keyword&quot;:&quot;&quot;,&quot;preference&quot;:&quot;S&quot;,&quot;area_unit&quot;:&quot;1&quot;,&quot;availability&quot;:[],&quot;res_com&quot;:&quot;R&quot;,&quot;property_type&quot;:&quot;&quot;},&quot;payload&quot;:{&quot;basic_info&quot;:{&quot;rescom&quot;:&quot;R&quot;,&quot;preference&quot;:&quot;S&quot;}}}"
                                    class="pageComponent buttons__primaryRegular     undefined "
                                    data-sstheme="searchform_search_btn_BUTTON_TOP_LEVEL"><span class=" "
                                        data-sstheme="searchform_search_btn_BUTTON_SPAN">Search</span></button></div>
                        </div>
                        <div class="inPageSearchBox__searchFilters false "></div>
                    </div>
                </div>
            </div>
        </div>
        <div class="inPageSearchBox__overlay"></div>
    </div>
  </>
  )
}

export default Search_section




