(function(){
    //-------------------------------------------------------------------------------------
    var p=""; //put a unique prefix to avoid conflict with others 
    var H=$vm.hosting_path+"/modules";
    var m=$vm.module_list;
    var api="wimr";
    //-------------------------------------------------------------------------------------
    m[p+"research-studies"]     ={url:H+"/business/research-studies/page.html",form_module:'jsonv',prefix:p};
    m[p+"contacts"]             ={url:H+"/business/contacts/page.html",form_module:'jsonv',prefix:p};
    m[p+"flows"]                ={url:H+"/business/flows/page.html",form_module:'jsonv',prefix:p};
    m[p+"contacts-newsletters"] ={url:H+"/business/contacts-newsletters/page.html",form_module:'jsonv',prefix:p};
    m[p+"contacts-newsletters-2019"] ={url:H+"/business/contacts-newsletters-2019/page.html",form_module:'jsonv',prefix:p};
    m[p+"contacts-newsletters-2020"] ={url:H+"/business/contacts-newsletters-2020/page.html",form_module:'jsonv',prefix:p};
    m[p+"contacts-newsletters-2021"] ={url:H+"/business/contacts-newsletters-2021/page.html",form_module:'jsonv',prefix:p};
    
    m[p+"number-of-sleep-study-by-year-and-month"]={url:H+"/business/number-of-sleep-study-by-year-and-month/page.html",Table:'flow-activity',form_module:'jsonv',prefix:p,router:1};
    m[p+"number-of-sleep-study-by-year"]={url:H+"/business/number-of-sleep-study-by-year/page.html",Table:'flow-activity',form_module:'jsonv',prefix:p,router:1};
    m[p+"solutions"]             ={url:H+"/business/solutions/page.html",form_module:'jsonv',prefix:p};
    
    m[p+"can-rest"]              ={url:H+"/business/contact-views/can-rest/page.html",form_module:'jsonv',prefix:p};
    m[p+"wolf-filter"]           ={url:H+"/business/contact-views/wolf/page.html",form_module:'jsonv',prefix:p};
    m[p+"clever-filter"]         ={url:H+"/business/contact-views/clever/page.html",form_module:'jsonv',prefix:p};
    m[p+"ICOCO-filter"]         ={url:H+"/business/contact-views/icoco/page.html",form_module:'jsonv',prefix:p};
    

    
    m[p+"can-rest-team"]                                                ={url:H+"/business/contact-team/can-rest/page.html",form_module:'jsonv',prefix:p};
    m[p+"clever-team"]                                                  ={url:H+"/business/contact-team/clever/page.html",form_module:'jsonv',prefix:p};
    m[p+"effect-team"]                                                  ={url:H+"/business/contact-team/effect/page.html",form_module:'jsonv',prefix:p};
    m[p+"wolf-team"]                                                    ={url:H+"/business/contact-team/wolf/page.html",form_module:'jsonv',prefix:p};
    m[p+"effect-of-3-month"]                                            ={url:H+"/business/contact-team/melatonin-supplementation-in-mild-cognitive-impairment/page.html",form_module:'jsonv',prefix:p};
    m[p+"sleep-and-emotional-memory-study"]                             ={url:H+"/business/contact-team/sleep-and-emotional-memory-study/page.html",form_module:'jsonv',prefix:p};
    m[p+"targeting-sleep-spindles-to-improve-cognition-in-ageing"]      ={url:H+"/business/contact-team/targeting-sleep-spindles-to-improve-cognition-in-ageing/page.html",form_module:'jsonv',prefix:p};
    m[p+"icoco-team"]                                                   ={url:H+"/business/contact-team/icoco/page.html",form_module:'jsonv',prefix:p};
    
    m[p+"can-rest-join"]                                                    ={url:H+"/business/contact-join/can-rest/page.html",form_module:'jsonv',prefix:p};
    m[p+"clever-join"]                                                      ={url:H+"/business/contact-join/clever/page.html",form_module:'jsonv',prefix:p};
    m[p+"effect-join"]                                                      ={url:H+"/business/contact-join/effect/page.html",form_module:'jsonv',prefix:p};
    m[p+"wolf-join"]                                                        ={url:H+"/business/contact-join/wolf/page.html",form_module:'jsonv',prefix:p};
    m[p+"effect-of-3-month-join"]                                           ={url:H+"/business/contact-join/melatonin-supplementation-in-mild-cognitive-impairment/page.html",form_module:'jsonv',prefix:p};
    m[p+"sleep-and-emotional-memory-study-join"]                            ={url:H+"/business/contact-join/sleep-and-emotional-memory-study/page.html",form_module:'jsonv',prefix:p};
    m[p+"targeting-sleep-spindles-to-improve-cognition-in-ageing-join"]     ={url:H+"/business/contact-join/targeting-sleep-spindles-to-improve-cognition-in-ageing/page.html",form_module:'jsonv',prefix:p};
    m[p+"icoco-join"]                                                       ={url:H+"/business/contact-join/icoco/page.html",form_module:'jsonv',prefix:p};
    
    m[p+"user-roles"]            ={url:H+"/business/records/user-roles/page.html",form_module:'jsonv',prefix:p};
    m[p+"user-license"]          ={url:H+"/business/records/user-license/page.html",form_module:'jsonv',prefix:p};
    m[p+"team-members"]          ={url:H+"/business/records/team-members/page.html",form_module:'jsonv',prefix:p};
    m[p+"teams"]                 ={url:H+"/business/records/teams/page.html",form_module:'jsonv',prefix:p};
    m[p+"researchers"]           ={url:H+"/business/records/researchers/page.html",form_module:'jsonv',prefix:p};
    m[p+"researchers-in-study"]  ={url:H+"/business/records/researchers-in-study/page.html",form_module:'jsonv',prefix:p};
    m[p+"users"]                 ={url:H+"/business/records/users/page.html",form_module:'jsonv',prefix:p};
    m[p+"contact-study-count"]          ={url:H+"/business/records/contact-study-count/page.html",form_module:'jsonv',prefix:p};
    m[p+"contact-study-count-chart"]    ={url:H+"/business/records/contact-study-count-chart/page.html",form_module:'jsonv',prefix:p};
    m[p+"contact-condition-count"]      ={url:H+"/business/records/contact-condition-count/page.html",form_module:'jsonv',prefix:p};
    m[p+"contact-condition-count-chart"]={url:H+"/business/records/contact-condition-count-chart/page.html",form_module:'jsonv',prefix:p};
    
    m[p+"contact-count-by-month-2022"]          ={url:H+"/business/records/contact-count-by-month-2022/page.html",form_module:'jsonv',prefix:p};
    m[p+"contact-count-by-month-2022-chart"]    ={url:H+"/business/records/contact-count-by-month-2022-chart/page.html",form_module:'jsonv',prefix:p};
    m[p+"contact-count-by-month-2021"]          ={url:H+"/business/records/contact-count-by-month-2021/page.html",form_module:'jsonv',prefix:p};
    m[p+"contact-count-by-month-2021-chart"]    ={url:H+"/business/records/contact-count-by-month-2021-chart/page.html",form_module:'jsonv',prefix:p};
    m[p+"contact-count-by-year"]          ={url:H+"/business/records/contact-count-by-year/page.html",form_module:'jsonv',prefix:p};
    m[p+"contact-count-by-year-chart"]    ={url:H+"/business/records/contact-count-by-year-chart/page.html",form_module:'jsonv',prefix:p};

    
    m[p+"contact-from-portal-count-by-month-2022"]          ={url:H+"/business/records/contact-from-portal-count-by-month-2022/page.html",form_module:'jsonv',prefix:p};
    m[p+"contact-from-portal-count-by-month-2022-chart"]    ={url:H+"/business/records/contact-from-portal-count-by-month-2022-chart/page.html",form_module:'jsonv',prefix:p};
    m[p+"contact-from-portal-count-by-month-2021"]          ={url:H+"/business/records/contact-from-portal-count-by-month-2021/page.html",form_module:'jsonv',prefix:p};
    m[p+"contact-from-portal-count-by-month-2021-chart"]    ={url:H+"/business/records/contact-from-portal-count-by-month-2021-chart/page.html",form_module:'jsonv',prefix:p};


})();

