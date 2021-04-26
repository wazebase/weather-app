import CardDisplay from '../CardDisplay';
import {shallow} from 'enzyme';
import React from 'react';
import { render, screen } from '@testing-library/react';

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