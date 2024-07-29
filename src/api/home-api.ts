function useGetHomeInfo(){
    return {
        sections: [
            {
                id: 1,
                title: "Планка",
                description: "Покажи что тебе не слабо! Присоеденяйся к нам и держи планку каждый день!",
            },
            {
                id: 2,
                title: "ГигиЗаШаги",
                description: "Сожешь ли обойти весь мир пешком?",
            },
            {
                id: 3,
                title: "Турник мэны",
                description: "Давайте соберемся вместе с нами!",
            }
        ],
        BestSpotsmens:[
            "https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50",
            "https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50",
            "https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50"
        ],
        SportActivity: [65, 59, 80, 81, 56, 55, 40]
    }
}

export default useGetHomeInfo