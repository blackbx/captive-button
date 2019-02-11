import React from 'react';
import { render, fireEvent } from 'react-testing-library';
import Button from './Button';
import { Props } from './Button.props';
import 'jest-dom/extend-expect';
// import { toHaveClass } from 'jest-dom';

const someFunction = jest.fn();

const props: Props = {
	children: 'save',
	onClick: someFunction,
	className: 'any-class',
	dataTestId: 'button'
};

describe('Button', () => {
	it('Button should be defined', () => {
		const { getByTestId } = render(<Button {...props} />);
		const button = getByTestId('button');
		expect(button).toBeDefined();
		expect(button).not.toBeNull();
	});

	it('Children should be the text of the button', () => {
		const { getByTestId } = render(<Button {...props} />);
		const button = getByTestId('button');
		expect(button.textContent).toBe(props.children);
	});

	it('The own Class should be defined', () => {
		const { container } = render(<Button {...props} />);
		const button = container.querySelector('Button');
		expect(button).toBeDefined();
		expect(button).not.toBeNull();
	});

	it('The added Class by props should be exist', () => {
		const { container } = render(<Button {...props} />);
		const button = container.querySelector('Button');
		if (button !== null) {
			expect(button.className).toContain('any-class');
		}
	});

	it('Calls "onClick" prop on button click', () => {
		const { getByTestId } = render(<Button {...props} />);
		const button = getByTestId('button');
		fireEvent.click(button);
		expect(someFunction).toHaveBeenCalledTimes(1);
	});

	it('Should be disabled if disabled is true', () => {
		const { getByTestId } = render(<Button {...props} />);
		const button = getByTestId('button') as HTMLButtonElement;
		expect(button.disabled).toBe(false);
		fireEvent.change(button, { target: { disabled: true } });
		expect(button.disabled).toBe(true);
	});
});
