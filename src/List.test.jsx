import { render, fireEvent } from '@testing-library/react';
import List from './List';

test('List', () => {
  const [container, getByText] = render(<List />);
  expect(container).toHaveTextContent('할 일이 없어요');
  expect(getByText).fireEvent.click(getByText(''))
});
