const categories = [
    {
        "name": "Women's Ethnic Wear",
        "discount_percentage": "50-80% OFF",
        "thumbnail": "https://rukminim2.flixcart.com/image/612/612/xif0q/sari/q/l/r/free-3505s105j-siril-unstitched-original-imagxzj4guuckjge.jpeg",
    },
    {
        "name": "WFH Casual Wear",
        "discount_percentage": "40-80% OFF",
        "thumbnail": "https://rukminim2.flixcart.com/image/612/612/xif0q/shirt/i/l/o/m-2125-fs-blaze-k071fsslndr-rd-killer-original-imagyj6ygrdbzfyy.jpeg",
    },
    {
        "name": "Men's Active Wear",
        "discount_percentage": "30-70% OFF",
        "thumbnail": "https://rukminim2.flixcart.com/image/612/612/k05ljm80/t-shirt/a/g/y/m-csju19-jrspnhs2c-m-pln-rbwh-campus-sutra-original-imafkyjmraq8bbxh.jpeg",
    },
    {
        "name": "Women's Active Wear",
        "discount_percentage": "30-70% OFF",
        "thumbnail": "https://rukminim2.flixcart.com/image/612/612/jehf4i80/bra/w/2/2/34-sb70-skn-college-girl-original-imaf35pf8r2rtdcp.jpeg",
    },
    {
        "name": "Western Wear",
        "discount_percentage": "40-80% OFF",
        "thumbnail": "https://rukminim2.flixcart.com/image/612/612/xif0q/dress/l/r/g/l-6232t-tandul-original-imagzukfpartqdzm.jpeg",
    },
    {
        "name": "Sports Wear",
        "discount_percentage": "30-80% OFF",
        "thumbnail": "https://rukminim2.flixcart.com/image/612/612/xif0q/tight/c/d/x/m-gymsp-zestblack-designer-girl-original-imagcfy7hqpyhngu-bb.jpeg",
    },
    {
        "name": "Lounge Wear",
        "discount_percentage": "30-70% OFF",
        "thumbnail": "https://rukminim2.flixcart.com/image/612/612/kge0n0w0/night-suit/z/w/m/xxl-dz-ns-x2008-ny-dzzo-original-imafwmbyrfzh9ygz.jpeg",
    },
    {
        "name": "Inner Wear",
        "discount_percentage": "UP TO 70% OFF",
        "thumbnail": "https://rukminim2.flixcart.com/image/612/612/xif0q/bra/o/3/o/non-padded-34b-1-regular-no-regular-br1449p24-clovia-original-imagrzzdkgnzzfrb.jpeg",
    },
    {
        "name": "Lingerie",
        "discount_percentage": "UP TO 70% OFF",
        "thumbnail": "https://rukminim2.flixcart.com/image/612/612/kxjav0w0/lingerie-set/u/a/v/30-neel007-r-beauty-vision-original-imag9yyncdzy4paf.jpeg",
    },
    {
        "name": "Watches",
        "discount_percentage": "UP TO 80% OFF",
        "thumbnail": "https://rukminim2.flixcart.com/image/612/612/xif0q/watch/i/q/e/-original-imagnre8pbpnfhgz.jpeg",
    },
    {
        "name": "Grooming",
        "discount_percentage": "UP TO 60% OFF",
        "thumbnail": "https://rukminim2.flixcart.com/image/612/612/ki214sw0-0/hair-dryer/o/7/4/hair-dry-professional-hair-dryer-for-women-and-men-choba-2000-original-imafxxgaj4gnxau5.jpeg",
    },
    {
        "name": "Beauty & Makeup",
        "discount_percentage": "UP TO 60% OFF",
        "thumbnail": "https://rukminim2.flixcart.com/image/612/612/xif0q/brush-applicator/g/d/z/-original-imahygdbhwzghkqt.jpeg",
    },
    {
        "name": "Kids Wear",
        "discount_percentage": "50-70% OFF",
        "thumbnail": "https://rukminim2.flixcart.com/image/612/612/xif0q/kids-dress/m/o/a/11-12-years-gown10-5-6-years-aarya-designer-original-imaghcbdqrkdvhhj.jpeg",
    },
    {
        "name": "Men's Footwear",
        "discount_percentage": "50-70% OFF",
        "thumbnail": "https://rukminim2.flixcart.com/image/612/612/xif0q/sandal/i/c/1/-original-imagtzpbzxwkfzfx.jpeg",
    },
    {
        "name": "Women's Footwear",
        "discount_percentage": "40-80% OFF",
        "thumbnail": "https://rukminim2.flixcart.com/image/612/612/xif0q/sandal/f/w/z/8-cl-ey-wn-06-carlton-london-beige-original-imagvtzmerr5u7qw.jpeg",
    },
    {
        "name": "Begs, Belts & Wallets",
        "discount_percentage": "40-70% OFF",
        "thumbnail": "https://rukminim2.flixcart.com/image/612/612/xif0q/belt/n/o/y/-original-imagzuufmrpas9ey.jpeg",
    },
    {
        "name": "Office Wear",
        "discount_percentage": "40-70% OFF",
        "thumbnail": "https://rukminim2.flixcart.com/image/612/612/xif0q/top/8/i/t/3xl-mj0012-tp-mojilaa-original-imagx26cexeefthe.jpeg",
    },
    {
        "name": "Mens's Ethnic Wear",
        "discount_percentage": "UP TO 60% OFF",
        "thumbnail": "https://rukminim2.flixcart.com/image/612/612/xif0q/kurta/z/q/l/m-kast110md-majestic-man-original-imafw49uamqn455g-bb.jpeg",
    },
    {
        "name": "Home Decor",
        "discount_percentage": "40-70% OFF",
        "thumbnail": "https://rukminim2.flixcart.com/image/612/612/xif0q/sticker/y/c/l/extra-large-x-45-cm-x-1-5mm-x-1-tiles-area-cover-2-2-sq-feet-original-imagw99z2t77nect.jpeg",
    },
    {
        "name": "Handbags",
        "discount_percentage": "40-80% OFF",
        "thumbnail": "https://rukminim2.flixcart.com/image/612/612/xif0q/hand-messenger-bag/w/r/r/-original-imahfcayu8rsygpk.jpeg",
    },
    {
        "name": "Headphone & Speakers",
        "discount_percentage": "UP TO 70% OFF",
        "thumbnail": "https://rukminim2.flixcart.com/image/612/612/ks4yz680/headphone/z/m/t/headphones-bluetooth-for-boys-and-girls-bluetooth-headset-original-imag5rzchsfs8vt4.jpeg",
    },
    {
        "name": "Jewellery",
        "discount_percentage": "UP TO 80% OFF",
        "thumbnail": "https://rukminim2.flixcart.com/image/612/612/xif0q/jewellery-set/m/v/m/na-na-1-ns105634-sukkhi-original-imagr9b9n5smyzfm.jpeg",
    },
    {
        "name": "Inclusive Styles",
        "discount_percentage": "UP TO 60% OFF",
        "thumbnail": "https://rukminim2.flixcart.com/image/832/832/xif0q/top/z/a/e/l-rb-black-sleeve-jmdcollection-original-imagxx5eu63vc4de.jpeg",
    },
    {
        "name": "Watches & Wearables",
        "discount_percentage": "UP TO 80% OFF",
        "thumbnail": "https://rukminim2.flixcart.com/image/612/612/xif0q/smartwatch/f/u/p/39-t55-pinka-106-android-ios-wtg-yes-original-imagxqzqkrzdwxmd.jpeg",
    },
    {
        "name": "Sleepwear",
        "discount_percentage": "30-70% OFF",
        "thumbnail": "https://rukminim2.flixcart.com/image/832/832/ktrk13k0/night-suit/r/5/u/l-ttsi000004-tokyo-talkies-original-imag7f6ya5ynhxgn.jpeg",
    },
    {
        "name": "Workwear",
        "discount_percentage": "40-70% OFF",
        "thumbnail": "https://rukminim2.flixcart.com/image/612/612/xif0q/ethnic-set/j/u/n/s-rx51-whitework-royal-export-original-imahf28f5khe8dwg.jpeg",
    },
    {
        "name": "Eyewear",
        "discount_percentage": "UP TO 80% OFF",
        "thumbnail": "https://rukminim2.flixcart.com/image/832/832/xif0q/frame/2/d/a/45-na-ae-e-computer-glasses-blue-cut-glass-unisex-for-man-original-imagvh2yhz859xav.jpeg",
    },
    {
        "name": "Casual Styles",
        "discount_percentage": "40-80% OFF",
        "thumbnail": "https://rukminim2.flixcart.com/image/416/416/xif0q/top/s/u/y/xl-1-long-sleeve-blouse-whaitu-size-s-tooba-enterprises-original-imahykshghzewweg.jpeg",
    },
]