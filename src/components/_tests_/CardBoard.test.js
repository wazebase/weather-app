import CardBoard from '../CardBoard/CardBoard';
import {shallow} from 'enzyme';
import React from 'react';

describe('CardBoard',()=> {

    let mountedCardBoard;
    let props; 
    beforeEach(()=> {
        props = {
            cardBoardData: [{},{},{},{},{}]
        }
        mountedCardBoard = shallow(<CardBoard {...props}/>)
    })

    it('renders CardBoard',()=> {
        mountedCardBoard;
    })
    it('renders 5 small card for expanded data', ()=> {
        let smallcard = mountedCardBoard.find('SmallCard');
        expect(smallcard.length).toBe(5);
    })
    it('has a clickable button that closes up expanded card',()=> {
        let fn = () => {
            return 'something'
         }
         let props = {
            setCardDataUpdate: fn,
            setExpandCard: fn,
            cardBoardData: [{},{},{},{},{}]
         }

         const mockCallBack = jest.fn();
         const mountedCardBoardWithCallback = shallow(<CardBoard {...props} onClick={mockCallBack()}/>);
         mountedCardBoardWithCallback.find('#show-less').simulate('click');
         expect(mockCallBack.mock.calls.length).toBe(1);
    })
})