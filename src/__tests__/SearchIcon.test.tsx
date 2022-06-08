import SearchIcon from '../components/atoms/SearchIcon';
import {render} from '@testing-library/react'
import '@testing-library/jest-dom'

test('renders Icon and maks sure it is SVG', () => {
  const { container } = render(<SearchIcon/>);
  const svgEl = container.querySelector("[role='img']") as HTMLImageElement;
  expect(svgEl).toBeInTheDocument();
});
