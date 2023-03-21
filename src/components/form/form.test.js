import { render, screen, fireEvent } from '@testing-library/react';
import Form from './Form';

test('Form component renders correctly', () => {
  render(<Form />);
  const formElement = screen.getByText('Form');
  const inputElement = screen.getByRole('textbox');
  const submitButton = screen.getByRole('button', { name: 'Submit' });

  expect(formElement).toBeInTheDocument();
  expect(inputElement).toBeInTheDocument();
  expect(submitButton).toBeInTheDocument();
});

test('Form submission works correctly', () => {
  render(<Form />);
  const inputElement = screen.getByRole('textbox');
  const submitButton = screen.getByRole('button', { name: 'Submit' });

  fireEvent.change(inputElement, { target: { value: 'John Doe' } });
  fireEvent.click(submitButton);

  expect(inputElement).toHaveValue('');
});
