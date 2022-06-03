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
    m[p+"can-rest-team"]         ={url:H+"/business/contact-team/can-rest/page.html",form_module:'jsonv',prefix:p};
    m[p+"effect-team"]           ={url:H+"/business/contact-team/effect/page.html",form_module:'jsonv',prefix:p};
    m[p+"clever-team"]           ={url:H+"/business/contact-team/clever/page.html",form_module:'jsonv',prefix:p};
    m[p+"can-rest-join"]         ={url:H+"/business/contact-join/can-rest/page.html",form_module:'jsonv',prefix:p};
    m[p+"user-roles"]            ={url:H+"/business/records/user-roles/page.html",form_module:'jsonv',prefix:p};
    m[p+"user-license"]          ={url:H+"/business/records/user-license/page.html",form_module:'jsonv',prefix:p};
    m[p+"team-members"]          ={url:H+"/business/records/team-members/page.html",form_module:'jsonv',prefix:p};
    m[p+"teams"]                 ={url:H+"/business/records/teams/page.html",form_module:'jsonv',prefix:p};
    m[p+"researchers"]           ={url:H+"/business/records/researchers/page.html",form_module:'jsonv',prefix:p};
})();
