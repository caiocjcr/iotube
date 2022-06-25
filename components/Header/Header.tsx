import { FormEventHandler, useState } from 'react'
import { Search } from '@material-ui/icons'
import IconButton from '../IconButton/IconButton'
import Input from '../Input'
import { StyledHeader, SearchForm, Logo } from './header.styles'
import { useRouter } from 'next/router'
import Link from 'next/link'

const Header: React.FC = () => {
  const { push } = useRouter()
  const [search, setSearch] = useState<string>('')

  const handleSearch: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault()
    push(`/search?q=${search}`)
  }

  return (
    <StyledHeader id="header">
      <Link href="/" passHref>
        <Logo>
          io<span>Tube</span>
        </Logo>
      </Link>
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
    </StyledHeader>
  )
}

export default Header
