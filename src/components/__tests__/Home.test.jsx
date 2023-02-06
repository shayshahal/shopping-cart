import React from 'react';
import { test,describe,expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import Home from '../Home';


describe('Home tests', ()=>{
    test('Home should render ', ()=>{
        render(<Home/>)

        expect(screen.getByRole('main')).toBeInTheDocument();
    })
    test('should render an h1', ()=>{
        render(<Home/>)

        expect(screen.getByRole("heading")).toBeInTheDocument();
    })
    test('should render a paragraph', ()=>{
        render(<Home/>)

        expect(screen.getByTestId("paragraph")).toBeInTheDocument();
    })
    test('should render a button', ()=>{
        render(<Home/>)

        expect(screen.getByRole("button")).toBeInTheDocument();
    })
})

