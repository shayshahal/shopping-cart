import React from 'react';
import { render, screen} from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

import Nav from '../../navbar/Nav';

describe('Nav tests', ()=>{
    beforeEach(()=>{
        render(
            <MemoryRouter>
                <Nav/>
            </MemoryRouter>
        )
    })
    test('Render nav successfully', ()=>{
        expect(screen.getByRole('navigation')).toBeInTheDocument();
    })
    describe('children tests', ()=>{
        describe('Home button tests', ()=>{
            test('Render Home button successfully', ()=>{    
                expect(screen.getByRole('navigation')).toContainElement(screen.getByRole('link', {name: /Home/i}))
            })
        })
        describe('Shop button tests', ()=>{
            test('Render Shop button successfully', ()=>{                  
                expect(screen.getByRole('navigation')).toContainElement(screen.getByRole('link', {name: /Shop/i}))
            })
        });
        describe('About button tests', ()=>{
            test('Render About button successfully', ()=>{
                expect(screen.getByRole('navigation')).toContainElement(screen.getByRole('link', {name: /About/i}))
            })
        });
        describe('Search component tests', ()=>{
            test.todo('Render Search component successfully', ()=>{
                
            })
        });
        describe('Cart component tests', ()=>{
            test.todo('Render Cart component successfully', ()=>{
            })
        })
    })
})