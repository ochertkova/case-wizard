import React from 'react';
import { render, screen } from '@testing-library/react';
import WordInfo from './WordInfo';

test('renders correct result', () => {
    const wordDef: WordDef = {
      word_type: 'ADJ',
      nominative: 'nopea',
      case: Case.PARTITIVE,
      type_finnish: 'nominityyppi'
    };
    
    render(<WordInfo word={wordDef} />);  
    const nominative = screen.getByText('Nominative case : nopea')
    expect(nominative).toBeInTheDocument();
  })