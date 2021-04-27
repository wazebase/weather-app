import {shallow} from 'enzyme';
import React from 'react';
import WeatherApp from '../WeatherApp';

describe('Weather app',()=> {
    let mountedWeatherApp;

    beforeEach(()=> {
        mountedWeatherApp = shallow(<WeatherApp />);
    })

    it('renders weather app',()=> {
        mountedWeatherApp;
    })
    it('renders search',()=> {
        let search = mountedWeatherApp.find('Search');
        expect(search.length).toBe(1);
    })
    it('renders card display',()=> {
        let display = mountedWeatherApp.find('CardDisplay');
        expect(display.length).toBe(1);
    })
})