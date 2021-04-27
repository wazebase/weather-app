import CardDisplay from '../CardDisplay';
import {shallow} from 'enzyme';
import React from 'react';
import { render, screen } from '@testing-library/react';
import CardBoard from '../../components/CardBoard/CardBoard';

describe('CardDisplay',()=> {

    let mountedCardDisplay;
    let props;
    beforeEach(()=> {
        props = {
            cardData: [{},{},{}]
        }
        mountedCardDisplay = shallow(<CardDisplay {...props}/>)
    })

    it('renders card display', ()=> {
        mountedCardDisplay;
    })

    it('renders greeting message',()=> {
        const greeting = mountedCardDisplay.find('#greeting');
        expect(greeting.length).toBe(1);
    })
    
    it('renders three weather cards when I open application',()=> {
  
        const weatherCard = mountedCardDisplay.find('WeatherCard');
        expect(weatherCard.length).toBe(3);

    
    })
})

describe('Card Display with no cards',()=> {
    let mountedCardDisplay;
    let props;
    beforeEach(()=> {
        props = {
            cardData: []
        }
        mountedCardDisplay = shallow(<CardDisplay {...props}/>)
    })

    it('renders a message saying there are no cards',()=> {
        let message = mountedCardDisplay.find('#nothing');
        expect(message.length).toBe(1);
    })
})
describe('Card Display with expanded card',()=> {
    let mountedCardDisplay;
    let props;
    beforeEach(()=> {
        props = {
            cardData: [[{},{},{},{},{}]]
        }
        mountedCardDisplay = shallow(<CardDisplay {...props}/>)
    })

    it('renders a message saying there are no cards',()=> {
        let cardBoard = mountedCardDisplay.find('CardBoard');
        expect(cardBoard.length).toBe(1);
    })
})
