export interface sideData {
    option?: string,
    children?: sideData[]
}


export const sideItems: sideData[] = [
    {
        option: 'option1'
    },
    {
        option: 'option2'
    },
    {
        option: 'option3',
        children: [{
            option: 'item1'
        },
        {
            option: 'item2'
        }, {
            option: 'item3'
        }]
    },
    {
        option:'option4'
    },
    {
        option:'option5'
    }

]