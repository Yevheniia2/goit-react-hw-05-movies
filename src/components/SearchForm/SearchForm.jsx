import { ButtonIcon, SearchBox, Input, FormBox } from './SearchForm.styled';
import { CiSearch } from 'react-icons/ci';
import PropTypes from 'prop-types';

export const SearchForm = ({ onSubmit, query }) => (
  <SearchBox>
    <FormBox onSubmit={onSubmit}>
      <Input 
        type="text"
        name="movieName"
        pattern="[^'\x22]+"
        title="May contain only letters, apostrophe, dash and spaces. For example moon"
        required
        autoComplete="off"
        autoFocus
        placeholder="Search movie..."
        defaultValue={query} />
      <ButtonIcon type="submit" aria-label="search button">
        <CiSearch />
      </ButtonIcon>
    </FormBox>
  </SearchBox>
);

SearchForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};