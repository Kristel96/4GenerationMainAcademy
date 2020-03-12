define(['jquery', 'mymethods'],function ($, meth) {
    meth.logConsole("Finally!");
        meth.showAllert("lll");
        hi = meth.hello;
        // $("body").html(hi);
        meth.useCoolFeature("Used cool fearue");
        let m = meth.getElem("hi");
        meth.logConsole(m);
        let strings = ["Hi","Bye","Why"];
        meth.passStringArray(strings);

});
