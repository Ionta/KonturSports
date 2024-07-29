function useGetSections(){
    return {
        sections: [
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

function useGetSection(id: number){
    
    if(id === 1){
        return {
            section: {
                id: 1,
                title: "Планка",
                description: "Покажи что тебе не слабо! Присоеденяйся к нам и держи планку каждый день!",
                promo:"https://upload.wikimedia.org/wikipedia/commons/thumb/8/8f/Example_image.svg/600px-Example_image.svg.png",
                people: [ 
                    "https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50",
                    "https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50",
                    "https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50",
                    "https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50",
                ],
                sportActivity: [65, 59, 80, 81, 56, 55, 40]
            },
            self:{
                sportActivity: [65, 59, 80, 81, 56, 55, 40],
            },
            forma:[
                {
                    type: "input",
                    pattern: /(\d{2})(\d{2})/,
                    format: "$1:$2",
                }
            ]
        }
    }
    else if(id === 2){
        return {
            section: {
                id: 2,
                title: "ГигиЗаШаги",
                description: "Сожешь ли обойти весь мир пешком?",
                promo:"https://upload.wikimedia.org/wikipedia/commons/thumb/8/8f/Example_image.svg/600px-Example_image.svg.png",
                people: [ 
                    "https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50",
                    "https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50",
                    "https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50",
                    "https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50",
                ],
                sportActivity: [65, 59, 80, 81, 56, 55, 40]
            },
            self:{
                sportActivity: [65, 59, 80, 81, 56, 55, 40],
            },
            forma:[
                {
                    type: "input",
                    pattern: /(\d*)/,
                    format: null,
                }
            ]
        }
    }
    else if(id === 3){
        return {
            section: {
                id: 3,
                title: "Турник мэны",
                description: "Давайте соберемся вместе с нами!",
                promo:"https://upload.wikimedia.org/wikipedia/commons/thumb/8/8f/Example_image.svg/600px-Example_image.svg.png",
                people: [ 
                    "https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50",
                    "https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50",
                    "https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50",
                    "https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50",
                ],
                sportActivity: [65, 59, 80, 81, 56, 55, 40]
            },
            self:{
                sportActivity: [65, 59, 80, 81, 56, 55, 40],
            },
            forma:[
                {
                    type: "select",
                    options:
                    [
                        "Обычный хват",
                        "Широкий хват",
                        "Обратный хват",
                    ]
                },
                {
                    type: "input",
                    pattern: /(\d*)/,
                    format: null,
                }
            ]
        }
    }
}

export {useGetSections, useGetSection}