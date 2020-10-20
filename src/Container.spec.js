import React from 'react';
import { render, screen, fireEvent, act } from '@testing-library/react';
import Container from './Container';
import { Context } from './state/Store';

describe('Container', () => {
    const renderComponent = async () =>  render(
        <Context.Provider value={[{ currentStep: 4 }, () => { }]}>
            <Container />
        </Context.Provider>
    );

    it('should decrease current state', async () => {
        await renderComponent();
        await act(async () => {
            fireEvent.click(screen.getByTestId('button'));
        });
        expect(screen.getByTestId('header-text').innerHTML).toEqual("3");
    });
});