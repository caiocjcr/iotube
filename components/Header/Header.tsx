import { FormEventHandler, useState } from 'react'
import { Search } from '@material-ui/icons'
import IconButton from '../IconButton/IconButton'
import Input from '../Input'
import { HeaderWrapper, SearchForm } from './header.styles'
import { useRouter } from 'next/router'

const Header: React.FC = () => {
  const { push } = useRouter()
  const [search, setSearch] = useState<string>('')

  const handleSearch: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault()
    push(`/search?q=${search}`)
  }

  return (
    <HeaderWrapper id="header">
      <SearchForm onSubmit={handleSearch}>
        <Input
          name="search-bar"
          placeholder="Search..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          style={{ borderRadius: '4px 0px 0px 4px' }}
          wrapperClassName="search-container"
        />
        <IconButton icon={Search} style={{ borderRadius: '0px 4px 4px 0px' }} />
      </SearchForm>
    </HeaderWrapper>
  )
}

export default Header
