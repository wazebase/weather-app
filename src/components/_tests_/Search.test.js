import Search from '../Search/Search';
import {shallow} from 'enzyme';
import React from 'react';
import cities from 'cities.json';

describe('Search',()=> {

    let mountedSearch;
    let props; 

    beforeEach(()=> {
        props = {
            cardBoardData: [{},{},{},{},{}]
        }
        mountedSearch = shallow(<Search {...props}/>)
    })

    it('renders Search',()=> {
        mountedSearch;
    })

    it('has a search button',()=> {
        let search = mountedSearch.find('#search');
        expect(search.length).toBe(1);
    })
    it('triggers a function when search button is clicked',()=> {
        let fn = () => {
            return 'something'
         }
         let props = {
            cardData: [{city:'some city'}]
         }
         const mockCallBack = jest.fn();
         const mountedSearchWithCallback = shallow(<Search {...props} onClick={mockCallBack()}/>);
         mountedSearchWithCallback.find('#search').simulate('click');
         expect(mockCallBack.mock.calls.length).toBe(1);
    })
    
})