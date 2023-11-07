import React from 'react';
import { render, screen } from '@testing-library/react';
import WordInfo from './WordInfo';

test('renders correct result', () => {
    const wordDef: WordDef = {
      word_type: 'ADJ',
      nominative: 'nopea',
      case: 'PARTITIVE' as unknown as Case, // weird hack, doesn't work otherwise
      type_finnish: 'nominityyppi'
    };
    
    render(<WordInfo word={wordDef} />);  
    const nominative = screen.getByText('Nominative case : nopea')
    expect(nominative).toBeInTheDocument();
  })