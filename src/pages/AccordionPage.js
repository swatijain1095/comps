import Accordion from '../components/Accordion';

function AccordionPage() {
    const items = [
        {
            id: '123',
            label: 'Can i use React on a Project?',
            content: 'Yes, you can use React'
        },
        {
            id: '234',
            label: 'Can i use Javascript on a Project?',
            content: 'Yes, you can use Javascript'
        },
        {
            id: '345',
            label: 'Can i use CSS on a Project?',
            content: 'Yes, you can use CSS'
        }
    ]

    return <Accordion items={items}/>
    
}

export default AccordionPage;