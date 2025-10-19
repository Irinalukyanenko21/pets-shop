const items = [{
        title: "Игрушка мячик",
        description: "Ваш питомец будет счастлив!",
        tags: ["cat", "dog"],
        price: 500,
        img: "./img/1.jpeg",
    },
    {
        title: "Игрушка лабиринт",
        description: "Поможет в развитии интеллекта!",
        tags: ["cat", "dog"],
        price: 900,
        img: "./img/2.jpeg",
    },
    {
        title: "Игрушка для котят",
        description: "Отвлечет вашего питомца!",
        tags: ["cat"],
        price: 300,
        img: "./img/3.jpeg",
    },
    {
        title: "Миска «Котик»",
        description: "Подойдет и для собак!",
        tags: ["cat", "dog"],
        price: 660,
        img: "./img/4.jpeg",
    },
    {
        title: "Лоток розовый",
        description: "Теперь вы можете забыть о проблемах с туалетом",
        tags: ["cat"],
        price: 400,
        img: "./img/5.jpeg",
    },
    {
        title: "Сухой корм для кошек",
        description: "Специальная формула для милых усатиков!",
        tags: ["cat"],
        price: 200,
        img: "./img/6.jpeg",
    },
    {
        title: "Сухой корм для собак",
        description: "Содержит полный комплекс витаминов",
        tags: ["dog"],
        price: 300,
        img: "./img/7.jpeg",
    },
    {
        title: "Игрушка для собак",
        description: "Теперь вы можете не переживать за личные вещи",
        tags: ["dog"],
        price: 500,
        img: "./img/8.jpeg",
    },
    {
        title: "Лежанка",
        description: "Идеальное место для отдыха!",
        tags: ["cat", "dog"],
        price: 1500,
        img: "./img/9.jpeg",
    },
    {
        title: "Поилка для собак",
        description: "Возьмите с собой в путешествие",
        tags: ["dog"],
        price: 800,
        img: "./img/10.jpeg",
    },
    {
        title: "Переноска",
        description: "Путешествуйте с комфортом!",
        tags: ["cat", "dog"],
        price: 3500,
        img: "./img/11.jpeg",
    },
    {
        title: "Поводок для собак",
        description: "Для чудесных прогулок вместе",
        tags: ["dog"],
        price: 800,
        img: "./img/12.jpeg",
    },
];


const container = document.getElementById("shop-items");
const template = document.getElementById("item-template");

items.forEach(item => {
    const clone = template.content.cloneNode(true);

    const img = clone.querySelector("img");
    img.src = item.img;
    img.alt = item.title;

    const title = clone.querySelector("h1");
    title.textContent = item.title;

    const description = clone.querySelector("p");
    description.textContent = item.description;

    const price = clone.querySelector(".price");
    price.textContent = item.price + "Р";

    const tagsContainer = clone.querySelector(".tags");
    item.tags.forEach(tag => {
        const tagEl = document.createElement("span");
        tagEl.textContent = tag;
        tagEl.classList.add("tag");
        tagsContainer.appendChild(tagEl);
    });

    container.appendChild(clone);
});


// Поиск
const btn = document.getElementById("search-btn");
const input = document.getElementById("search-input");
const nothingFound = document.getElementById("nothing-found");

btn.addEventListener("click", function() {
    // очищаем контейнер и надпись "ничего не найдено"
    console.log("Кнопка нажата");
    container.innerHTML = "";
    nothingFound.textContent = "";

    const searchValue = input.value.trim().toLowerCase();

    const results = [];

    for (let i = 0; i < items.length; i++) {
        const item = items[i];

        if (
            item.title.toLowerCase().includes(searchValue) ||
            item.description.toLowerCase().includes(searchValue) ||
            item.tags.some(tag => tag.toLowerCase().includes(searchValue))
        ) {
            results.push(item);
        }
    }

    if (results.length > 0) {
        for (let i = 0; i < results.length; i++) {
            const item = results[i];
            const template = document.getElementById("item-template").content.cloneNode(true);

            template.querySelector("img").src = item.img;
            template.querySelector("h1").textContent = item.title;
            template.querySelector("p").textContent = item.description;
            template.querySelector(".price").textContent = item.price + "₽";

            const tagsContainer = template.querySelector(".tags");

            for (let j = 0; j < item.tags.length; j++) {
                const tag = document.createElement("span");
                tag.classList.add("tag");
                tag.textContent = item.tags[j];
                tagsContainer.appendChild(tag);
            }

            container.appendChild(template);
        }
    } else {
        nothingFound.textContent = "Ничего не найдено";
    }
});