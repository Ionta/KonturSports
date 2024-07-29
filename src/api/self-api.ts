function useGetSelf(){
    return {
        self:{
            FulName: "Виталий",
            description: "Покажи что тебе не слабо! Присоеденяйся к нам и держи планку каждый день!",
            promo: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8f/Example_image.svg/600px-Example_image.svg.png",
        },
        sportHealth: 70,
        section:[
            {
                id: 1,
                title: "Планка",
                description: "Покажи что тебе не слабо! Присоеденяйся к нам и держи планку каждый день!",
                promo:"https://upload.wikimedia.org/wikipedia/commons/thumb/8/8f/Example_image.svg/600px-Example_image.svg.png"
            },
            {
                id: 2,
                title: "ГигиЗаШаги",
                description: "Сожешь ли обойти весь мир пешком?",
                promo:"https://upload.wikimedia.org/wikipedia/commons/thumb/8/8f/Example_image.svg/600px-Example_image.svg.png"
            },
            {
                id: 3,
                title: "Турник мэны",
                description: "Давайте соберемся вместе с нами!",
                promo:"https://upload.wikimedia.org/wikipedia/commons/thumb/8/8f/Example_image.svg/600px-Example_image.svg.png"
            }
        ]
    }
}

export {useGetSelf}