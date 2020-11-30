let sliderData = [
    {
        id: 'shop-soft',
        img: './assets/img/shop/sh1.jpg',
        title: 'Мягкая мебель',
        classes: 'shop__item glide__slide'
    },
    {
        id: 'shop-cabinet',
        img: './assets/img/shop/sh2.jpg',
        title: 'Корпусная мебель',
        classes: 'shop__item glide__slide'
    },
    {
        id: 'shop-citchen',
        img: './assets/img/shop/sh3.jpg',
        title: 'Кухни',
        classes: 'shop__item glide__slide'
    },
    {
        id: 'shop-interior',
        img: './assets/img/shop/sh4.jpg',
        title: 'Отделка и интерьер',
        classes: 'shop__item glide__slide'
    },
    {
        id: 'shop-chair-tables',
        img: './assets/img/shop/sh5.jpg',
        title: 'Столы и стулья',
        classes: 'shop__item glide__slide'
    },
    {
        id: 'shop-for-sleep',
        img: './assets/img/shop/sh6.jpg',
        title: 'Товары для сна',
        classes: 'shop__item glide__slide'
    },
    {
        id: 'shop-for-home',
        img: './assets/img/shop/sh7.jpg',
        title: 'Товары для дома',
        classes: 'shop__item glide__slide'
    }
];

let filtersData = [
    {
        title: 'ВСЕ',
        id: 'all',
        classes: 'filters__item filters__item_active'
    },
    {
        title: 'Обои',
        id: 'walls',
        classes: 'filters__item'
    },
    {
        title: 'Двери',
        id: 'doors',
        classes: 'filters__item'
    },
    {
        title: 'Шторы',
        id: 'curtains',
        classes: 'filters__item'
    },
    {
        title: 'Сантехника и керамическая плитка',
        id: 'plumbing',
        classes: 'filters__item'
    },
    {
        title: 'Сантехника и керамическая плитка',
        id: 'hardware',
        classes: 'filters__item'
    }
]

let brandsData = [
    {
        category: 'shop-soft',
        img: './assets/img/shop/brands/ormatek.png',
        alt: 'Орматек',
        id: 'ormatek'
    },
    {
        category: 'shop-soft',
        img: './assets/img/shop/brands/askona.png',
        alt: 'Askona',
        id: 'askona'
    },
    {
        category: 'shop-soft',
        img: './assets/img/shop/brands/bobox.png',
        alt: 'bobox',
        id: 'bobox'
    },
    {
        category: 'shop-soft',
        img: './assets/img/shop/brands/lart.png',
        alt: 'Lart',
        id: 'lart'
    },
    {
        category: 'shop-soft',
        img: './assets/img/shop/brands/furniture-house.png',
        alt: 'furniture-house',
        id: 'furniture-house'
    },
    {
        category: 'shop-soft',
        img: './assets/img/shop/brands/mobel-zeit.png',
        alt: 'mobel-zeit',
        id: 'mobel-zeit'
    },
    {
        category: 'shop-soft',
        img: './assets/img/shop/brands/sofa-formula.png',
        alt: 'Формула дивана',
        id: 'sofa-formula'
    },
    {
        category: 'shop-soft',
        img: './assets/img/shop/brands/egida.png',
        alt: 'egida',
        id: 'egida'
    },
    {
        category: 'shop-soft',
        img: './assets/img/shop/brands/color-furniture.png',
        alt: 'Цвет мебели',
        id: 'color-furniture'
    },
    {
        category: 'shop-cabinet',
        img: './assets/img/shop/brands/furniture.png',
        alt: 'Мебельторг',
        id: 'furniture'
    },
    {
        category: 'shop-cabinet',
        img: './assets/img/shop/brands/many-furniture.png',
        alt: 'Много мебели',
        id: 'many-furniture'
    },
    {
        category: 'shop-cabinet',
        img: './assets/img/shop/brands/bobox.png',
        alt: 'bobox',
        id: 'bobox'
    },
    {
        category: 'shop-cabinet',
        img: './assets/img/shop/brands/color-furniture.png',
        alt: 'Цвет мебели',
        id: 'color-furniture'
    },
    {
        category: 'shop-cabinet',
        img: './assets/img/shop/brands/color-furniture.png',
        alt: 'Цвет мебели',
        id: 'color-furniture'
    },
    {
        category: 'shop-cabinet',
        img: './assets/img/shop/brands/egida.png',
        alt: 'egida',
        id: 'egida'
    },
    {
        category: 'shop-cabinet',
        img: './assets/img/shop/brands/sofa-formula.png',
        alt: 'Формула дивана',
        id: 'sofa-formula'
    },
]

let dataBrandDesc = [
    {
        title: 'many-furniture',
        category: 'shop-cabinet',
        mainDesc: '<b>Мебельная компания №1 в России!</b><br> Собственные фабрика, складские помещения и транспорт, партнерские склады, быстрая доставка',
        logo: './assets/img/shop/brands/many-furniture.png',
        img: './assets/img/shop/brands/sofa.jpg',
        alt: 'Много мебели',
        desc: 'Много мебели — сеть мебельных магазинов по всей России, специализарующаяся на продаже и изготовлении диванов, корпусной мебели и др.',
        phone: '8 (927) 510-45-55',
        phoneLink: '+79275104555',
        url: 'https://mnogomebeli.com/',
        link: '#'
    }
]

createSlider(sliderData, $('.shop__list'));

createFilters(filtersData, $('.filters'));

createListWithBrands(brandsData, 'shop-soft', $('.brands'));
let brandsList = $('.brands');
brandsList.attr('data-category', 'shop-soft');

function createDescForBrand(data, currentID, parent, nodeForRemoving) {
    function createLayout(elem) {
        return `
        <button class="brand-desc__btn" type="button">
            <span class="brand-desc__btn-arrow"></span>
            <span class="brand-desc__btn-text">Назад</span>
        </button>
        <div class="brand-desc__wrap brand-desc__wrap_left">
            <img class="brands-desc__img" src="${elem.img}" alt="${elem.alt}">
        </div>

        <div class="brand-desc__wrap brand-desc__wrap_right">
             <div class="brand-desc__box">
                <div class="brand-desc__logo-wrap">
                    <img src="${elem.logo}" class="brand-desc__logo">
                </div>

                <p class="brand-desc__main">${elem.mainDesc}</p>
                <p class="brand-desc__sub">${elem.desc}</p>
             </div>

             <ul class="brand-desc__list">
                <li class="brand-desc__item">
                    <a href="${elem.phoneLink}" class="brand-desc__link">${elem.phone}</a>
                </li>
                <li class="brand-desc__item">
                    <a href="${elem.url}" class="brand-desc__link">${elem.url}</a>
                </li>
                <li class="brand-desc__item">
                    <a href="${elem.link}" class="brand-desc__link brand-desc__link_download">Скачать каталог</a>
                </li>
            </ul>       
        </div>
        `
    }


    for (let i = 0; i < data.length; i++) {
        let item = data[i];
        if (item.title == currentID) {
            nodeForRemoving.empty();
            parent.append(createLayout(item));
            parent.attr('data-category', item.category);
        }
    }
}

function createListWithBrands(data, currentID, parent) {
    function createLayout(elem) {
        return `
        <li class="brands__item" id="${elem.id}" data-type="${elem.category}">
            <div class="brands__item-wrap">
                <img src="${elem.img}"  alt="${elem.alt}" class="brands__img">
            </div>
        </li>
        `
    }

    for (let i = 0; i < data.length; i++) {
        let item = data[i];
        if (item.category == currentID) {
            parent.append(createLayout(item));
        }
    }
}

function createSlider(data, parent) {
    function createMarkup(elem) {
        return `
        <li class="${elem.classes}" id="${elem.id}">
            <div class="shop__item-wrap">
                <img src="${elem.img}"  alt="" class="shop__img">
                <h3 class="shop__title">${elem.title}</h3>
            </div>
        </li>`
    }

    data.forEach(item => {
        parent.append(createMarkup(item));
    });

    new Glide('.glide', {
        type: 'carousel',
        perView: 6
    }).mount();

    let imgHeight = $('.shop__img').height();
    let btnNext = $('.shop__btn-wrap').css('top', `${imgHeight / 2}px`);

    //$('.shop').append(parent);
}

function createFilters(data, parent) {
    function createFilterMarkup(elem) {
        return `
        <li class="${elem.classes}" id="${elem.id}">
            <button class="shop-btn filters__btn">
                <span class="filters__desc">${elem.title}</span>
            </button>
        </li>
        `;
    }

    data.forEach(item => {
        parent.append(createFilterMarkup(item));
    });
}

let filters = $('.filters');
let currentActiveFilter = $('.filters__item_active');
const shopList = $('.shop__list')
shopList.on('click', (e) => {
    let target = $(e.target);

    if (target.prop('tagName') != 'LI') {
        target = target.closest('li');
    }

    if (target.attr('id') == 'shop-interior') {
        filters.fadeIn('slow', function () {
            $(this).addClass('filters_active');
            $(this).css('display', 'flex');
        });
    } else {
        filters.fadeOut('slow', function () {
            $(this).removeClass('filters_active');
        });
        let targetID = target.attr('id');

        if (brandsList.attr('data-category') == targetID) return;
        brandsList.empty();
        createListWithBrands(brandsData, targetID, $('.brands'));
        brandsList.attr('data-category', targetID);
    }
})

filters.on('click', (e) => {
    let target = $(e.target);
    target = target.closest('li');
    console.log(target);
    currentActiveFilter.removeClass('filters__item_active');
    currentActiveFilter = target;
    currentActiveFilter.addClass('filters__item_active');
})

brandsList.on('click', function (e) {
    let target = $(e.target);
    target = target.closest('li');
    let targetID = target.attr('id');
    createDescForBrand(dataBrandDesc, targetID, $('.brand-desc'), $(this));

    $('.brand-desc__btn').on('click', () => {
        createListWithBrands(brandsData, $('.brand-desc').attr('data-category'), $('.brands'));
        $('.brand-desc').empty();
    })
});

