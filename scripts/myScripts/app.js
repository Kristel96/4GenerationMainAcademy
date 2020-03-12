define(['jquery', 'mymethods'],function ($, meth) {
    meth.logConsole("Finally!");
        meth.showAllert("lll");
        hi = meth.hello;
        $("body").html(hi);
        meth.useCoolFeature("Used cool fearue");
});
