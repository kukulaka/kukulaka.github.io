import styled from 'styled-components';

interface LabelProps {
  hiddenLabel: boolean;
}

export const InputWrapper = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
`;
export const InputContainer = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
 ;
`;

export const Label = styled.label<LabelProps>`
  color: #474747;
  font-family: BlinkMacSystemFont, -apple-system, Segoe UI, Roboto, Helvetica,
    Arial, sans-serif;
  font-size: 12px;
  font-weight: 500;
  line-height: 16px;
  margin-botton: 2px;

  display: ${(p: LabelProps) => (p.hiddenLabel ? 'none' : 'inline')};
`;

export const StyledInput = styled.input`
  display: block;
  border-width: 0px;
  border: none;
  font-size: 16px;
  color: #474747;
  font-family: BlinkMacSystemFont, -apple-system, Segoe UI, Roboto, Helvetica,
    Arial, sans-serif;
  font-weight: 500;
  line-height: 24px;

  ::placeholder,
  ::-webkit-input-placeholder {
    font-size: 16px;
    font-weight: 500;
    color: #474747;
    font-family: BlinkMacSystemFont, -apple-system, Segoe UI, Roboto, Helvetica,
      Arial, sans-serif;
    font-weight: 500;
    line-height: 24px;
  }

  :-ms-input-placeholder {
    font-size: 16px;
    color: #474747;
    font-family: BlinkMacSystemFont, -apple-system, Segoe UI, Roboto, Helvetica,
      Arial, sans-serif;
    font-weight: 500;
    line-height: 24px;
  }

  &:focus {
    outline: none;

    ::placeholder,
    ::-webkit-input-placeholder {
      color: transparent;
    }
    :-ms-input-placeholder {
      color: transparent;
    }
  }
`;
