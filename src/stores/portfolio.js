import { defineStore } from 'pinia';

export const usePortflioStore = defineStore('portfolio', () => {
  
    const portfolios = [
        {
            id : 1,
            image : 'ctrlweb.png',
            category : 'website',
            description : '',
            site : 'https://ctrlweb.ca/'

        },
        {
            id : 2,
            image : 'baobab-tree.png',
            category : 'website',
            description : ``,
            site : 'https://baobab-tree-hotel.mg/'
        },
        {
            id : 3,
            image : 'dashboardenac.png',
            category : 'app',
            description : '',
            site : 'https://dashboardenac.com'
        },
        {
            id : 4,
            image : 'royalbeach.png',
            category : 'website',
            description : '',
            site : 'https://royalbeach.mg/'
        },
        {
            id : 5,
            image : 'royal-andilana.png',
            category : 'website',
            description : '',
            site : 'https://www.royalandilana.com/'
        },
        {
            id : 6,
            image : 'dashboardsounds.png',
            category : 'app',
            description : '',
            site : 'https://dashboardsounds.com/login'
        },
        {
            id : 7,
            image : 'tw.png',
            category : 'website',
            description : '',
            site : 'https://www.tropicalwood.mg/'
        },

    ]
    function filterPortfolioById(id){
        return portfolios.filter((el) => el.id == id)[0]
    }
    return { portfolios, filterPortfolioById }
})
