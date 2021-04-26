import WeatherCard from '../WeatherCard/WeatherCard';
import {shallow} from 'enzyme';
import React from 'react';

describe('Weather Card',()=> {

    let mountedWeatherCard;
    let props;

    beforeEach(()=> {
        mountedWeatherCard = shallow(<WeatherCard />);
    })

    it('renders weather card',()=> {
        mountedWeatherCard;
    })

    it('renders a button that removes card', ()=> {
        let remove = mountedWeatherCard.find('#remove');
        expect(remove.length).toEqual(1);
    })
    it('triggers a function when I click buttons',()=> {
        let fn = () => {
            return 'something'
         }
         let props = {
            setCardData:fn,
            cardData: [],
            data: [],
            setData:fn,
            setNoCards: fn,
            setCardDataUpdate: fn,
            setExpandCard: fn
         }

         const mockCallBack = jest.fn();
         const mountedWeatherCardWithCallback = shallow(<WeatherCard {...props} onClick={mockCallBack()}/>);
         mountedWeatherCardWithCallback.find('#remove').simulate('click');
         expect(mockCallBack.mock.calls.length).toBe(1);
         
    })

    it('renders a button that expands the card',()=> {
        let expand = mountedWeatherCard.find('#show-more');
        expect(expand.length).toEqual(1);
    })

    it('triggers a function when I click buttons',()=> {
        let fn = () => {
            return 'something'
         }
         let props = {
            setCardDataUpdate: fn,
            setExpandCard: fn
         }

         const mockCallBack = jest.fn();
         const mountedWeatherCardWithCallback = shallow(<WeatherCard {...props} onClick={mockCallBack()}/>);
         mountedWeatherCardWithCallback.find('#show-more').simulate('click');
         expect(mockCallBack.mock.calls.length).toBe(1);
         
    })
})