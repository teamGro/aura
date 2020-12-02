let sliderData = [
  {
    id: 'shop-soft',
    img: './assets/img/shop/sh1.jpg',
    title: 'Мягкая мебель',
    classes: 'shop__item glide__slide',
  },
  {
    id: 'shop-cabinet',
    img: './assets/img/shop/sh2.jpg',
    title: 'Корпусная мебель',
    classes: 'shop__item glide__slide',
  },
  {
    id: 'shop-kitchen',
    img: './assets/img/shop/sh3.jpg',
    title: 'Кухни',
    classes: 'shop__item glide__slide',
  },
  {
    id: 'shop-interior',
    img: './assets/img/shop/sh4.jpg',
    title: 'Отделка и интерьер',
    classes: 'shop__item glide__slide',
  },
  {
    id: 'shop-chair-tables',
    img: './assets/img/shop/sh5.jpg',
    title: 'Столы и стулья',
    classes: 'shop__item glide__slide',
  },
  {
    id: 'shop-for-sleep',
    img: './assets/img/shop/sh6.jpg',
    title: 'Товары для сна',
    classes: 'shop__item glide__slide',
  },
  {
    id: 'shop-for-home',
    img: './assets/img/shop/sh7.jpg',
    title: 'Товары для дома',
    classes: 'shop__item glide__slide',
  },
];

let filtersData = [
  {
    title: 'ВСЕ',
    id: 'all',
    classes: 'filters__item filters__item_active',
  },
  {
    title: 'Обои',
    id: 'walls',
    classes: 'filters__item',
  },
  {
    title: 'Двери',
    id: 'doors',
    classes: 'filters__item',
  },
  {
    title: 'Шторы',
    id: 'curtains',
    classes: 'filters__item',
  },
  {
    title: 'Сантехника и керамическая плитка',
    id: 'plumbing',
    classes: 'filters__item',
  },
  {
    title: 'Сантехника и керамическая плитка',
    id: 'hardware',
    classes: 'filters__item',
  },
];

let brandsData = [
  {
    category: 'shop-soft',
    img: './assets/img/shop/brands/ormatek.jpg',
    alt: 'Орматек',
    id: 'ormatek',
  },
  {
    category: 'shop-soft',
    img: './assets/img/shop/brands/askona.png',
    alt: 'Askona',
    id: 'askona',
  },
  {
    category: 'shop-soft',
    img: './assets/img/shop/brands/bobox.png',
    alt: 'bobox',
    id: 'bobox',
  },
  {
    category: 'shop-soft',
    img: './assets/img/shop/brands/lart.png',
    alt: 'Lart',
    id: 'lart',
  },
  {
    category: 'shop-soft',
    img: './assets/img/shop/brands/furniture-house.png',
    alt: 'furniture-house',
    id: 'furniture-house',
  },
  {
    category: 'shop-soft',
    img: './assets/img/shop/brands/mobel-zeit.png',
    alt: 'mobel-zeit',
    id: 'mobel-zeit',
  },
  {
    category: 'shop-soft',
    img: './assets/img/shop/brands/sofa-formula.png',
    alt: 'Формула дивана',
    id: 'sofa-formula',
  },
  {
    category: 'shop-soft',
    img: './assets/img/shop/brands/egida.png',
    alt: 'egida',
    id: 'egida',
  },
  {
    category: 'shop-soft',
    img: './assets/img/shop/brands/color-furniture.png',
    alt: 'Цвет мебели',
    id: 'color-furniture',
  },
  {
    category: 'shop-cabinet',
    img: './assets/img/shop/brands/furniture.png',
    alt: 'Мебельторг',
    id: 'furniture',
  },
  {
    category: 'shop-cabinet',
    img: './assets/img/shop/brands/many-furniture.png',
    alt: 'Много мебели',
    id: 'many-furniture',
  },
  {
    category: 'shop-cabinet',
    img: './assets/img/shop/brands/bobox.png',
    alt: 'bobox',
    id: 'bobox',
  },
  {
    category: 'shop-cabinet',
    img: './assets/img/shop/brands/color-furniture.png',
    alt: 'Цвет мебели',
    id: 'color-furniture',
  },
  {
    category: 'shop-cabinet',
    img: './assets/img/shop/brands/color-furniture.png',
    alt: 'Цвет мебели',
    id: 'color-furniture',
  },
  {
    category: 'shop-cabinet',
    img: './assets/img/shop/brands/egida.png',
    alt: 'egida',
    id: 'egida',
  },
  {
    category: 'shop-cabinet',
    img: './assets/img/shop/brands/sofa-formula.png',
    alt: 'Формула дивана',
    id: 'sofa-formula',
  },
  {
    category: 'shop-kitchen',
    img: './assets/img/shop/brands/sofa-formula.png',
    alt: 'Формула дивана',
    id: 'sofa-formula',
  },
  {
    category: 'shop-kitchen',
    img: './assets/img/shop/brands/bobox.png',
    alt: 'bobox',
    id: 'bobox',
  },
  {
    category: 'shop-kitchen',
    img: './assets/img/shop/brands/color-furniture.png',
    alt: 'Цвет мебели',
    id: 'color-furniture',
  },
  {
    category: 'shop-kitchen',
    img: './assets/img/shop/brands/color-furniture.png',
    alt: 'Цвет мебели',
    id: 'color-furniture',
  },
  {
    category: 'shop-interior',
    img: './assets/img/shop/brands/sofa-formula.png',
    alt: 'Формула дивана',
    id: 'sofa-formula',
  },
  {
    category: 'shop-interior',
    img: './assets/img/shop/brands/egida.png',
    alt: 'egida',
    id: 'egida',
  },
  {
    category: 'shop-interior',
    img: './assets/img/shop/brands/color-furniture.png',
    alt: 'Цвет мебели',
    id: 'color-furniture',
  },
  {
    category: 'shop-interior',
    img: './assets/img/shop/brands/furniture.png',
    alt: 'Мебельторг',
    id: 'furniture',
  },
  {
    category: 'shop-chair-tables',
    img: './assets/img/shop/brands/ormatek.jpg',
    alt: 'Орматек',
    id: 'ormatek',
  },
  {
    category: 'shop-chair-tables',
    img: './assets/img/shop/brands/askona.png',
    alt: 'Askona',
    id: 'askona',
  },
  {
    category: 'shop-chair-tables',
    img: './assets/img/shop/brands/bobox.png',
    alt: 'bobox',
    id: 'bobox',
  },
  {
    category: 'shop-chair-tables',
    img: './assets/img/shop/brands/lart.png',
    alt: 'Lart',
    id: 'lart',
  },
  {
    category: 'shop-chair-tables',
    img: './assets/img/shop/brands/furniture-house.png',
    alt: 'furniture-house',
    id: 'furniture-house',
  },
  {
    category: 'shop-for-sleep',
    img: './assets/img/shop/brands/many-furniture.png',
    alt: 'Много мебели',
    id: 'many-furniture',
  },
  {
    category: 'shop-for-sleep',
    img: './assets/img/shop/brands/bobox.png',
    alt: 'bobox',
    id: 'bobox',
  },
  {
    category: 'shop-for-sleep',
    img: './assets/img/shop/brands/color-furniture.png',
    alt: 'Цвет мебели',
    id: 'color-furniture',
  },
  {
    category: 'shop-for-sleep',
    img: './assets/img/shop/brands/color-furniture.png',
    alt: 'Цвет мебели',
    id: 'color-furniture',
  },
  {
    category: 'shop-for-sleep',
    img: './assets/img/shop/brands/egida.png',
    alt: 'egida',
    id: 'egida',
  },
  {
    category: 'shop-for-home',
    img: './assets/img/shop/brands/bobox.png',
    alt: 'bobox',
    id: 'bobox',
  },
  {
    category: 'shop-for-home',
    img: './assets/img/shop/brands/lart.png',
    alt: 'Lart',
    id: 'lart',
  },
  {
    category: 'shop-for-home',
    img: './assets/img/shop/brands/furniture-house.png',
    alt: 'furniture-house',
    id: 'furniture-house',
  },
  {
    category: 'shop-for-home',
    img: './assets/img/shop/brands/mobel-zeit.png',
    alt: 'mobel-zeit',
    id: 'mobel-zeit',
  },
  {
    category: 'shop-for-home',
    img: './assets/img/shop/brands/sofa-formula.png',
    alt: 'Формула дивана',
    id: 'sofa-formula',
  },
  {
    category: 'shop-for-home',
    img: './assets/img/shop/brands/egida.png',
    alt: 'egida',
    id: 'egida',
  },
  {
    category: 'shop-for-home',
    img: './assets/img/shop/brands/color-furniture.png',
    alt: 'Цвет мебели',
    id: 'color-furniture',
  },
];

let brandDescData = [
  {
    title: 'many-furniture',
    mainDesc: '<b>Мебельная компания №1 в России!</b><br> Собственные фабрика, складские помещения и транспорт, партнерские склады, быстрая доставка',
    logo: './assets/img/shop/brands/many-furniture.png',
    img: './assets/img/shop/brands/sofa.jpg',
    alt: 'Много мебели',
    desc: 'Много мебели — сеть мебельных магазинов по всей России, специализарующаяся на продаже и изготовлении диванов, корпусной мебели и др.',
    phone: '8 (927) 510-45-55',
    phoneLink: '+79275104555',
    url: 'https://mnogomebeli.com/',
    link: '#',
  },
  {
    title: 'ormatek',
    mainDesc: '<b>Мебельная компания №1 в России!</b><br> Собственные фабрика, складские помещения и транспорт, партнерские склады, быстрая доставка',
    logo: './assets/img/shop/brands/ormatek.jpg',
    img: './assets/img/shop/brands/sofa.jpg',
    alt: 'Ориатек',
    desc: 'Орматек — сеть мебельных магазинов по всей России, специализарующаяся на продаже и изготовлении диванов, корпусной мебели и др.',
    phone: '8 (927) 510-45-55',
    phoneLink: '+79275104555',
    url: 'https://ormatek.com/',
    link: '#',
  },
  {
    title: 'askona',
    mainDesc: '<b>Мебельная компания №1 в России!</b><br> Собственные фабрика, складские помещения и транспорт, партнерские склады, быстрая доставка',
    logo: './assets/img/shop/brands/askona.png',
    img: './assets/img/shop/brands/sofa.jpg',
    alt: 'Askona',
    desc: 'Askona — сеть мебельных магазинов по всей России, специализарующаяся на продаже и изготовлении диванов, корпусной мебели и др.',
    phone: '8 (927) 510-45-55',
    phoneLink: '+79275104555',
    url: 'https://askona.com/',
    link: '#',
  },
  {
    title: 'bobox',
    mainDesc: '<b>Мебельная компания №1 в России!</b><br> Собственные фабрика, складские помещения и транспорт, партнерские склады, быстрая доставка',
    logo: './assets/img/shop/brands/bobox.png',
    img: './assets/img/shop/brands/sofa.jpg',
    alt: 'bobox',
    desc: 'bobox — сеть мебельных магазинов по всей России, специализарующаяся на продаже и изготовлении диванов, корпусной мебели и др.',
    phone: '8 (927) 510-45-55',
    phoneLink: '+79275104555',
    url: 'https://bobox.com/',
    link: '#',
  },
  {
    title: 'color-furniture',
    mainDesc: '<b>Мебельная компания №1 в России!</b><br> Собственные фабрика, складские помещения и транспорт, партнерские склады, быстрая доставка',
    logo: './assets/img/shop/brands/color-furniture.png',
    img: './assets/img/shop/brands/sofa.jpg',
    alt: 'color-furniture',
    desc: 'Цвет Мебели — сеть мебельных магазинов по всей России, специализарующаяся на продаже и изготовлении диванов, корпусной мебели и др.',
    phone: '8 (927) 510-45-55',
    phoneLink: '+79275104555',
    url: 'https://color-furniture.com/',
    link: '#',
  },
  {
    title: 'egida',
    mainDesc: '<b>Мебельная компания №1 в России!</b><br> Собственные фабрика, складские помещения и транспорт, партнерские склады, быстрая доставка',
    logo: './assets/img/shop/brands/egida.png',
    img: './assets/img/shop/brands/sofa.jpg',
    alt: 'egida',
    desc: 'Цвет Мебели — сеть мебельных магазинов по всей России, специализарующаяся на продаже и изготовлении диванов, корпусной мебели и др.',
    phone: '8 (927) 510-45-55',
    phoneLink: '+79275104555',
    url: 'https://egida.com/',
    link: '#',
  },
  {
    title: 'furniture',
    mainDesc: '<b>Мебельная компания №1 в России!</b><br> Собственные фабрика, складские помещения и транспорт, партнерские склады, быстрая доставка',
    logo: './assets/img/shop/brands/furniture.png',
    img: './assets/img/shop/brands/sofa.jpg',
    alt: 'furniture',
    desc: 'МебельТорг — сеть мебельных магазинов по всей России, специализарующаяся на продаже и изготовлении диванов, корпусной мебели и др.',
    phone: '8 (927) 510-45-55',
    phoneLink: '+79275104555',
    url: 'https://furniture.com/',
    link: '#',
  },
  {
    title: 'furniture-house',
    mainDesc: '<b>Мебельная компания №1 в России!</b><br> Собственные фабрика, складские помещения и транспорт, партнерские склады, быстрая доставка',
    logo: './assets/img/shop/brands/furniture-house.png',
    img: './assets/img/shop/brands/sofa.jpg',
    alt: 'furniture-house',
    desc: 'Мебельный дом — сеть мебельных магазинов по всей России, специализарующаяся на продаже и изготовлении диванов, корпусной мебели и др.',
    phone: '8 (927) 510-45-55',
    phoneLink: '+79275104555',
    url: 'https://furniture-house.com/',
    link: '#',
  },
  {
    title: 'lart',
    mainDesc: '<b>Мебельная компания №1 в России!</b><br> Собственные фабрика, складские помещения и транспорт, партнерские склады, быстрая доставка',
    logo: './assets/img/shop/brands/lart.png',
    img: './assets/img/shop/brands/sofa.jpg',
    alt: 'lart',
    desc: 'lart — сеть мебельных магазинов по всей России, специализарующаяся на продаже и изготовлении диванов, корпусной мебели и др.',
    phone: '8 (927) 510-45-55',
    phoneLink: '+79275104555',
    url: 'https://lart.com/',
    link: '#',
  },
  {
    title: 'mobel-zeit',
    mainDesc: '<b>Мебельная компания №1 в России!</b><br> Собственные фабрика, складские помещения и транспорт, партнерские склады, быстрая доставка',
    logo: './assets/img/shop/brands/mobel-zeit.png',
    img: './assets/img/shop/brands/sofa.jpg',
    alt: 'lart',
    desc: 'mobel-zeit — сеть мебельных магазинов по всей России, специализарующаяся на продаже и изготовлении диванов, корпусной мебели и др.',
    phone: '8 (927) 510-45-55',
    phoneLink: '+79275104555',
    url: 'https://mobel-zeit.com/',
    link: '#',
  },
  {
    title: 'moon',
    mainDesc: '<b>Мебельная компания №1 в России!</b><br> Собственные фабрика, складские помещения и транспорт, партнерские склады, быстрая доставка',
    logo: './assets/img/shop/brands/moon.png',
    img: './assets/img/shop/brands/sofa.jpg',
    alt: 'lart',
    desc: 'moon — сеть мебельных магазинов по всей России, специализарующаяся на продаже и изготовлении диванов, корпусной мебели и др.',
    phone: '8 (927) 510-45-55',
    phoneLink: '+79275104555',
    url: 'https://moon.com/',
    link: '#',
  },
  {
    title: 'sofa-formula',
    mainDesc: '<b>Мебельная компания №1 в России!</b><br> Собственные фабрика, складские помещения и транспорт, партнерские склады, быстрая доставка',
    logo: './assets/img/shop/brands/sofa-formula.png',
    img: './assets/img/shop/brands/sofa.jpg',
    alt: 'sofa-formula',
    desc: 'Формула Дивана — сеть мебельных магазинов по всей России, специализарующаяся на продаже и изготовлении диванов, корпусной мебели и др.',
    phone: '8 (927) 510-45-55',
    phoneLink: '+79275104555',
    url: 'https://sofa-formula.com/',
    link: '#',
  },
];

let activeElem;
createSlider(sliderData, $('.shop__list'));

createFilters(filtersData, $('.filters'));

createListWithBrands(brandsData, sliderData[0].id, $('.brands'));
let brandsList = $('.brands');
brandsList.attr('data-category', sliderData[0].id);
let activeCatergory = sliderData[0].id;

let filters = $('.filters');
let currentActiveFilter = $('.filters__item_active');
filters.slideUp();

const shopsList = $('.shop__list');
shopsList.on('click', (e) => {
  let target = $(e.target);

  if (target.prop('tagName') != 'LI') {
    target = target.closest('li');
  }

  activeElem.removeClass('shop__item_active');
  target.addClass('shop__item_active');
  activeElem = target;
  console.log(activeElem);

  let targetID = target.attr('id');
  console.log(target.attr('id'));
  if (brandsList.attr('data-category') == targetID) {
    console.log(target.attr('id'));
    return;
  }

  if ($('.shop_brands').hasClass('shop_brands-open')) {
    $('.shop_brands').removeClass('shop_brands-open');
    setTimeout(() => {
      $('.brand-desc').empty();
    }, 300);
  }

  if (target.attr('id') == 'shop-interior') {
    filters.slideDown();
    filters.addClass('filters_active');

    brandsList.slideUp();
    brandsList.empty();
    brandsList.attr('data-category', targetID);
    activeCatergory = targetID;

    setTimeout(() => {
      brandsList.removeClass('brands_active');
      createListWithBrands(brandsData, targetID, $('.brands'));
    }, 400);
  } else {
    if (filters.hasClass('filters_active')) {
      filters.removeClass('filters_active');
      filters.slideUp();
    }

    brandsList.slideUp();
    brandsList.empty();
    brandsList.attr('data-category', targetID);
    activeCatergory = targetID;

    setTimeout(() => {
      brandsList.removeClass('brands_active');
      createListWithBrands(brandsData, targetID, $('.brands'));
    }, 200);
  }
});

filters.on('click', (e) => {
  let target = $(e.target);
  target = target.closest('li');
  console.log(target);
  currentActiveFilter.removeClass('filters__item_active');
  currentActiveFilter = target;
  currentActiveFilter.addClass('filters__item_active');
});

brandsList.on('click', function (e) {
  let target = $(e.target);
  target = target.closest('li');
  let targetID = target.attr('id');
  createDescForBrand(brandDescData, targetID, $('.brand-desc'), $(this));

  $('.brand-desc__btn').on('click', () => {
    console.log(activeCatergory);
    $('.shop_brands').removeClass('shop_brands-open');
    setTimeout(() => {
      $('.brand-desc').empty();
    }, 300);
  });
});

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
                      <a href="tel:${elem.phoneLink}" class="brand-desc__link">${elem.phone}</a>
                  </li>
                  <li class="brand-desc__item">
                      <a href="${elem.url}" class="brand-desc__link">${elem.url}</a>
                  </li>
                  <li class="brand-desc__item brand-desc__item_download">
                      <a href="${elem.link}" class="brand-desc__link brand-desc__link_download" download>Скачать каталог</a>
                  </li>
              </ul>       
          </div>
          `;
  }

  for (let i = 0; i < data.length; i++) {
    let item = data[i];
    if (item.title == currentID) {
      nodeForRemoving.parent().addClass('shop_brands-open');
      parent.append(createLayout(item));
      parent.attr('data-category', currentID);
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
          `;
  }

  for (let i = 0; i < data.length; i++) {
    let item = data[i];
    if (item.category == currentID) {
      let elem = createLayout(item);
      parent.append(elem);
    }
  }
  parent.slideDown();
  setTimeout(() => {
    parent.addClass('brands_active');
    console.log(parent);
  }, 100);
}

function createSlider(data, parent) {
  function createMarkup(elem) {
    return `
          <li class="${elem.classes}" id="${elem.id}">
              <div class="shop__item-wrap">
                <div class="shop__img-wrap">
                  <img src="${elem.img}"  alt="" class="shop__img">
                </div>
                <h3 class="shop__title">${elem.title}</h3>
              </div>
          </li>`;
  }

  data.forEach((item) => {
    parent.append(createMarkup(item));
  });

  activeElem = $('.shop__item').first();
  activeElem.addClass('shop__item_active');

  new Glide('.glide', {
    type: 'carousel',
    startAt: 0,
    breakpoints: {
      3000: {
        perView: 6,
      },
      1024: {
        perView: 5,
      },
      800: {
        perView: 4,
      },
      600: {
        perView: 3,
        peek: {
          before: 0,
          after: 0
        }
      },
      450: {
        perView: 2,
        peek: {
          before: 0,
          after: 50
        }
      },
    },
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

  data.forEach((item) => {
    parent.append(createFilterMarkup(item));
  });
}
