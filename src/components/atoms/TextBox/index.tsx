import React, { useState, InputHTMLAttributes, useEffect } from 'react';
import { getLocationSearch } from '../../../api/getLocationSearch';
import  {LocationResults, Error} from '../../../api/getLocationSearch/getLocationSearch.types'
import { Label, StyledInput, InputWrapper } from './TextBox.styled';

interface IProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

const TextBox: React.FC<IProps> = ({ label }) => {
  const [hide, setHide] = useState<boolean>(true);
  const [searchTerm, setSearchTerm] = useState<string>('');
 // const [loading, setLoading] = useState<boolean>(false);
  const [locations, setLocations] = useState<LocationResults | Error | undefined>(undefined);

  const getLocations = async () => {
    const locations = await getLocationSearch(6, searchTerm);
    setLocations(locations);
  };

  const updateLocations = () => {
   // setLoading(true);
  
    getLocations();
   // setLoading(false);
  };

  //as this is only a simple project + save time API call is at this level.
  // if this atom was going to be resuable you would
  // pass on onchange prop to the parent component and do it at that level.

  useEffect(() => {
    if (searchTerm.length >= 2) {

    // also put at time on here so api doesn't get spammed every time something changes
    // I went for 3 secs but could be another value

      const timer = setTimeout(() => updateLocations(), 3000);
      return () => clearTimeout(timer);
    }
  }, [searchTerm]);

  useEffect(() => {
    console.log(locations);
  }, [locations]);

  const handleChange = (e: any) => {
    setSearchTerm(e.target.value);
  };

  return (
    <InputWrapper>
      <Label htmlFor={label} aria-hidden={true} hiddenLabel={hide}>
        {label}
        </Label>
      <StyledInput
        id="searchbox-toolbox-fts-pickup"
        data-testid="searchbox-toolbox-fts-pickup"
        aria-label={label}
        aria-invalid="false"
        aria-required="true"
        value={searchTerm}
        aria-placeholder={label}
        placeholder={label}
        onFocus={() => {
          setHide(false);
        }}
        onChange={event => handleChange(event)}
        onBlur={() => {
          searchTerm ? setHide(false) : setHide(true);
        }}
      />
    </InputWrapper>
  );
};

export default TextBox;
