import React, { useState, InputHTMLAttributes, useEffect } from 'react';
import { getLocationSearch } from '../../../api/getLocationSearch';
import {
  LocationResults,
  Error,
} from '../../../api/getLocationSearch/getLocationSearch.types';
import { Label, StyledInput, InputWrapper,InputContainer } from './TextBox.styled';
import BranchList from '../BranchList';
import {Doc} from '../../../api/getLocationSearch/getLocationSearch.types';

// this whole component needs a good refactor, alas I did not have time

interface IProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
};

interface BranchProp {
  id?: string | undefined;
        title?: string | undefined;
        subTitle?: string | undefined;
        locationType?: string | undefined;
        selected?: boolean | undefined;
};

interface Branches {
  branches: Array<BranchProp>
    | [];
}

const TextBox: React.FC<IProps> = ({ label }) => {
  const [hide, setHide] = useState<boolean>(true);
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [locations, setLocations] = useState<
    LocationResults | Error | undefined
  >(undefined);
  const [branches, setBranches] = useState<Branches>({ branches: [] });

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
    setLocations(undefined);
    if (searchTerm.length >= 2) {
      // also put at time on here so api doesn't get spammed every time something changes
      // I went for 3 secs but could be another value

      const timer = setTimeout(() => updateLocations(), 3000);
      return () => clearTimeout(timer);
    }
  }, [searchTerm]);

  useEffect(() => {


    const updateBranch: Array<BranchProp> = [];

    if (locations) {
      locations?.results?.docs.map((branch: Doc, index: any) => {
        if (branch.name !== 'No results found') {
          updateBranch.push({
            id: index,
            title: `${branch.name} ${branch.iata ? `(${branch.iata})` : ''}`,
            subTitle: branch.city ? `${branch.city}, ${branch.region}, ${branch.country}` :` ${branch.region}, ${branch.country}` ,
            locationType:
              branch.placeType === 'A'
                ? 'Airport'
                : branch.placeType === 'C'
                ? 'City'
                : branch.placeType === 'T'
                ? 'Station'
                : 'other',
            selected: false,
          });
        } else {
          updateBranch.push({
            id: index,
            title: `${branch.name}`,
            subTitle: '',
            locationType: '',
            selected: false,
          });
        }
      });
    }

    setBranches({ branches: updateBranch });
  }, [locations]);

  const handleChange = (e: any) => {
    setSearchTerm(e.target.value);
  };

  const handleKeyDown = (event: any) => {
    if (event.key === 'Enter') {
      const timer = setTimeout(() => updateLocations(), 3000);
      return () => clearTimeout(timer);
    }
  }

  return (
    <InputContainer>
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
        onKeyDown={handleKeyDown} 
      />
    
    </InputWrapper>
    {branches && branches.branches.length > 0 && (
      <BranchList branches={branches.branches}/>
    )}
    </InputContainer>
  );
};

export default TextBox;
